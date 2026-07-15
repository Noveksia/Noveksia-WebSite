"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/content/site";
import { EASE } from "@/lib/motion";

export function Contact() {
  const { contact } = site;
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [businessType, setBusinessType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  function pickType(t: string) {
    setBusinessType(t);
    setStep(1);
    setError("");
  }

  function toStep2() {
    if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Necesitamos tu nombre y un email válido para poder responderte.");
      return;
    }
    setError("");
    setStep(2);
  }

  async function submit() {
    if (!message.trim()) {
      setError("Cuéntanos brevemente qué te roba más tiempo — así preparamos la llamada.");
      return;
    }
    if (!consent) {
      setError("Necesitamos que aceptes la Política de Privacidad para poder contactarte.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, businessType, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error desconocido.");
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo enviar. Inténtalo de nuevo.");
    } finally {
      setSending(false);
    }
  }

  const stepLabel = done ? "LISTO" : `PASO ${step + 1} DE 3`;

  return (
    <section id="contacto" className="bg-[var(--teal)] py-16 md:py-32 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="text-eyebrow mb-[18px]">{contact.eyebrow}</p>
          <h2 className="text-heading text-3xl sm:text-4xl text-[var(--paper)]">{contact.headline}</h2>
          <p className="mt-[22px] text-[17px] leading-relaxed text-white/75 max-w-md">{contact.subheadline}</p>
          <div className="flex flex-col gap-3.5 mt-[38px]">
            {[
              "Respuesta en menos de 24 horas",
              "Sin contratos anuales ni permanencia",
              "Una llamada de 30 minutos, sin compromiso",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--honey)" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="flex-none">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="text-[15px] text-white/80">{t}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
        >
          <div className="bg-[var(--paper)] rounded-2xl p-6 sm:p-9 shadow-[0_24px_60px_-24px_rgba(0,0,0,.4)]">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[10.5px] font-medium tracking-wide uppercase text-[var(--muted)]">Diagnóstico gratuito</span>
              <span className="text-[11px] font-medium text-[var(--honey)]">{stepLabel}</span>
            </div>

            <AnimatePresence mode="wait">
              {done ? (
                <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55, ease: EASE }} className="pt-4 pb-1.5">
                  <span className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-[var(--line)]/50 mb-[18px]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <p className="text-heading text-[22px] text-[var(--ink)] mb-2">Recibido, {name}.</p>
                  <p className="text-[15px] leading-relaxed text-[var(--muted)]">
                    Te escribimos a {email} en menos de 24 horas para agendar tu diagnóstico gratuito.
                  </p>
                </motion.div>
              ) : step === 0 ? (
                <motion.div key="s0" initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: 0.45, ease: EASE }} className="pt-1">
                  <p className="text-heading text-lg text-[var(--ink)] mt-[18px] mb-3.5">¿Qué tipo de negocio tienes?</p>
                  <div className="flex flex-col gap-2.5">
                    {contact.businessTypes.map((t) => (
                      <button
                        key={t}
                        onClick={() => pickType(t)}
                        className="flex items-center justify-between gap-3 px-[18px] py-3.5 bg-white border border-[var(--line)] rounded-xl text-[14.5px] font-medium text-[var(--ink)] text-left transition-colors hover:border-[var(--honey)] active:scale-[0.98] min-h-11"
                      >
                        <span>{t}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--honey)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="flex-none">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : step === 1 ? (
                <motion.div key="s1" initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: 0.45, ease: EASE }} className="pt-1">
                  <div className="mt-[18px] flex items-center gap-2.5 flex-wrap">
                    <span className="text-[11px] font-medium text-[var(--muted)] bg-[var(--line)]/40 rounded-full px-3 py-1.5">{businessType}</span>
                    <button onClick={() => setStep(0)} className="text-[13px] font-medium text-[var(--muted)] underline">cambiar</button>
                  </div>
                  <p className="text-heading text-lg text-[var(--ink)] mt-[18px] mb-3.5">¿A quién respondemos?</p>
                  <label className="block mb-1.5 text-[13px] font-medium text-[var(--muted)]" htmlFor="c-name">Tu nombre</label>
                  <input
                    id="c-name" type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name"
                    className="w-full px-4 py-3.5 rounded-xl border border-[var(--line)] bg-white text-[15px] text-[var(--ink)] mb-4 focus:border-[var(--honey)] focus:outline-none transition-colors"
                  />
                  <label className="block mb-1.5 text-[13px] font-medium text-[var(--muted)]" htmlFor="c-email">Tu email</label>
                  <input
                    id="c-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email"
                    className="w-full px-4 py-3.5 rounded-xl border border-[var(--line)] bg-white text-[15px] text-[var(--ink)] focus:border-[var(--honey)] focus:outline-none transition-colors"
                  />
                  {error && (
                    <p className="mt-3.5 text-[13.5px] leading-relaxed text-[var(--ink)] bg-[var(--line)]/30 border border-[var(--line)] rounded-[10px] px-3.5 py-2.5">{error}</p>
                  )}
                  <button onClick={toStep2} className="mt-5 w-full py-4 rounded-full bg-[var(--ink)] text-[var(--paper)] font-semibold text-[15px] hover:opacity-90 active:scale-[0.97] transition-all">
                    Continuar
                  </button>
                </motion.div>
              ) : (
                <motion.div key="s2" initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: 0.45, ease: EASE }} className="pt-1">
                  <div className="mt-[18px] flex items-center gap-2.5 flex-wrap">
                    <span className="text-[11px] font-medium text-[var(--muted)] bg-[var(--line)]/40 rounded-full px-3 py-1.5">{name} · {businessType}</span>
                    <button onClick={() => setStep(1)} className="text-[13px] font-medium text-[var(--muted)] underline">cambiar</button>
                  </div>
                  <p className="text-heading text-lg text-[var(--ink)] mt-[18px] mb-1.5">¿Qué te roba más tiempo cada semana?</p>
                  <p className="mb-3.5 text-[13.5px] text-[var(--muted)]">Dos líneas bastan — así preparamos la llamada.</p>
                  <textarea
                    rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ej.: contesto WhatsApp a todas horas y no llego a publicar en redes…"
                    className="w-full px-4 py-3.5 rounded-xl border border-[var(--line)] bg-white text-[15px] leading-relaxed text-[var(--ink)] resize-y focus:border-[var(--honey)] focus:outline-none transition-colors"
                  />
                  <label className="flex items-start gap-2.5 mt-[18px] cursor-pointer">
                    <input
                      type="checkbox" checked={consent}
                      onChange={(e) => { setConsent(e.target.checked); setError(""); }}
                      className="flex-none w-[18px] h-[18px] mt-0.5 accent-[var(--ink)]"
                    />
                    <span className="text-[13px] leading-relaxed text-[var(--muted)]">
                      He leído y acepto la <a href="/privacidad" className="text-[var(--ink)] font-medium">Política de Privacidad</a>.
                    </span>
                  </label>
                  {error && (
                    <p className="mt-3.5 text-[13.5px] leading-relaxed text-[var(--ink)] bg-[var(--line)]/30 border border-[var(--line)] rounded-[10px] px-3.5 py-2.5">{error}</p>
                  )}
                  <button
                    onClick={submit} disabled={sending}
                    className="mt-4 w-full py-4 rounded-full bg-[var(--honey)] text-[var(--ink)] font-semibold text-[15px] hover:opacity-90 active:scale-[0.97] transition-all disabled:opacity-60"
                  >
                    {sending ? "Enviando…" : "Enviar mensaje"}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
