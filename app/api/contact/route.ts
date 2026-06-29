import { NextRequest, NextResponse } from "next/server";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Servicio de correo no configurado." }, { status: 500 });
  }

  const body = await req.json();
  const { name, email, businessType, message } = body;

  if (!name || !email) {
    return NextResponse.json({ error: "Nombre y email son obligatorios." }, { status: 400 });
  }

  if (
    typeof name !== "string" || name.length > 100 ||
    typeof email !== "string" || email.length > 200 ||
    (businessType && (typeof businessType !== "string" || businessType.length > 100)) ||
    (message && (typeof message !== "string" || message.length > 5000))
  ) {
    return NextResponse.json({ error: "Datos no válidos." }, { status: 400 });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeBusinessType = escapeHtml(businessType || "—");
  const safeMessage = escapeHtml(message || "—");

  const html = `
    <h2>Nuevo mensaje de contacto — Noveksia</h2>
    <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      <tr><td><strong>Nombre</strong></td><td>${safeName}</td></tr>
      <tr><td><strong>Email / WhatsApp</strong></td><td>${safeEmail}</td></tr>
      <tr><td><strong>Tipo de negocio</strong></td><td>${safeBusinessType}</td></tr>
      <tr><td><strong>Mensaje</strong></td><td style="white-space:pre-wrap">${safeMessage}</td></tr>
    </table>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Noveksia Web <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? "noveksia@gmail.com"],
      reply_to: email,
      subject: `Nuevo contacto de ${name}`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    console.error("Resend error:", err);
    return NextResponse.json({ error: "No se pudo enviar el mensaje. Inténtalo de nuevo." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
