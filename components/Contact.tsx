"use client";

import { useState } from "react";
import { site } from "@/content/site";

type FormState = {
  name: string;
  email: string;
  businessType: string;
  message: string;
};

export function Contact() {
  const { contact } = site;
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    businessType: "",
    message: "",
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error desconocido.");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo enviar. Inténtalo de nuevo.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contacto"
      className="py-14 md:py-24 px-6 bg-[var(--paper)]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-eyebrow block mb-4">{contact.eyebrow}</span>
            <h2
              id="contact-heading"
              className="text-heading text-3xl sm:text-4xl text-[var(--ink)] mb-4"
            >
              {contact.headline}
            </h2>
            <p className="text-[var(--muted)] text-lg leading-relaxed">
              {contact.subheadline}
            </p>
          </div>

          {/* What to expect */}
          <div className="flex flex-col gap-4">
            {[
              { step: "01", text: "Nos lees el formulario y respondemos en menos de 24h." },
              { step: "02", text: "Concertamos una llamada de 30 minutos sin compromiso." },
              { step: "03", text: "Te damos un diagnóstico claro y una propuesta concreta." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <span className="font-mono text-xs font-semibold text-[var(--honey)] bg-[var(--honey)]/10 px-2.5 py-1 rounded-full flex-shrink-0 mt-0.5">
                  {item.step}
                </span>
                <p className="text-[var(--muted)] text-base">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[var(--teal)]/5 border border-[var(--teal)]/20 rounded-xl">
            <p className="text-sm text-[var(--ink)] font-medium mb-1">¿Prefieres hablar directo?</p>
            <a
              href={`mailto:${site.brand.email}`}
              className="text-sm text-[var(--teal)] font-medium hover:text-[var(--honey)] transition-colors"
            >
              {site.brand.email}
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white rounded-2xl border border-[var(--line)] p-8 shadow-sm">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center" role="status">
              <div className="w-16 h-16 rounded-full bg-[var(--honey)]/10 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <path d="M6 16l7 7 13-13" stroke="var(--honey)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-heading text-xl text-[var(--ink)]">¡Mensaje enviado!</h3>
              <p className="text-[var(--muted)] text-base">
                Te respondemos en menos de 24 horas.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", businessType: "", message: "" }); setPrivacyAccepted(false); }}
                className="mt-4 text-sm text-[var(--muted)] underline hover:text-[var(--ink)] transition-colors"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-[var(--ink)]">
                  Tu nombre <span aria-hidden="true" className="text-[var(--honey)]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="María García"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] text-sm placeholder:text-[var(--muted)]/60 focus:border-[var(--honey)] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-[var(--ink)]">
                  Email o WhatsApp <span aria-hidden="true" className="text-[var(--honey)]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="maria@minegocio.es"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] text-sm placeholder:text-[var(--muted)]/60 focus:border-[var(--honey)] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="businessType" className="text-sm font-medium text-[var(--ink)]">
                  Tipo de negocio
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={form.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] text-sm focus:border-[var(--honey)] focus:outline-none transition-colors appearance-none"
                >
                  <option value="">Selecciona una opción</option>
                  {contact.businessTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-[var(--ink)]">
                  ¿Qué te gustaría automatizar?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos brevemente tu situación: qué tareas te quitan más tiempo, qué herramientas usas..."
                  className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] text-sm placeholder:text-[var(--muted)]/60 focus:border-[var(--honey)] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Checkbox aceptación + enlace privacidad */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[var(--honey)] cursor-pointer"
                  required
                />
                <span className="text-xs text-[var(--muted)] leading-relaxed group-hover:text-[var(--ink)] transition-colors">
                  He leído y acepto la{" "}
                  <a href="/privacidad" className="text-[var(--teal)] hover:text-[var(--honey)] transition-colors underline">
                    Política de Privacidad
                  </a>.
                </span>
              </label>

              {error && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3 rounded-xl">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={sending || !privacyAccepted}
                className="w-full bg-[var(--honey)] text-[var(--ink)] font-semibold py-4 px-6 rounded-xl text-base hover:opacity-90 active:scale-[0.98] transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "Enviando…" : contact.cta}
              </button>

              <p className="text-xs text-center text-[var(--muted)]">
                Sin spam. Sin compromisos. Respondemos en menos de 24h.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
