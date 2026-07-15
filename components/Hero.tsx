"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import { Typewriter } from "@/components/ui/typewriter";
import { EASE } from "@/lib/motion";

const CHAT_SCRIPT = [
  { role: "client", text: "¿Dónde está mi pedido nº 4521?", time: "09:14" },
  { role: "assistant", text: "Ya lo tengo localizado: salió ayer y llega mañana antes de las 14:00. Te paso el seguimiento por email.", time: "09:14", typingMs: 1500 },
  { role: "client", text: "Genial. Por cierto, ¿tenéis cita el jueves?", time: "09:15" },
  { role: "assistant", text: "Sí — quedan dos huecos: jueves 11:00 o 17:30. ¿Cuál te viene mejor?", time: "09:15", typingMs: 1700 },
  { role: "client", text: "¿Hacéis envíos a Canarias?", time: "09:16" },
  { role: "assistant", text: "Sí, a Canarias en 3–4 días laborables, sin coste a partir de 40€.", time: "09:16", typingMs: 1300 },
] as const;

type ChatMessage = { id: number; role: "client" | "assistant"; text: string; time: string };

const INPUT_WORDS = ["¿Hacéis descuentos?", "¿Abrís el domingo?", "¿Te queda talla M?", "¿Cuánto tarda el envío?"];

export function Hero() {
  const { hero } = site;
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setMessages(CHAT_SCRIPT.map((m, i) => ({ id: i, role: m.role, text: m.text, time: m.time })));
      return;
    }

    const at = (ms: number, fn: () => void) => timers.current.push(setTimeout(fn, ms));

    function run(startAt: number) {
      let t = startAt;
      const GAP = 900;
      CHAT_SCRIPT.forEach((m, i) => {
        if (m.role === "client") {
          at(t, () => setMessages((prev) => [...prev, { id: i, role: "client", text: m.text, time: m.time }]));
          t += 700;
        } else {
          at(t, () => setTyping(true));
          t += "typingMs" in m ? m.typingMs : 1200;
          at(t, () => {
            setTyping(false);
            setMessages((prev) => [...prev, { id: i, role: "assistant", text: m.text, time: m.time }]);
          });
          t += GAP;
        }
      });
      t += 2600;
      at(t, () => {
        if (bodyRef.current) bodyRef.current.style.opacity = "0";
      });
      at(t + 380, () => {
        setMessages([]);
        setTyping(false);
        if (bodyRef.current) bodyRef.current.style.opacity = "1";
      });
      at(t + 700, () => run(500));
    }

    run(1700);

    return () => timers.current.forEach(clearTimeout);
  }, []);

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } } };
  const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } };

  return (
    <section id="top" className="relative bg-[var(--paper)] overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(700px 520px at 78% 32%, rgba(154,166,178,.13), transparent 70%)" }}
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-6xl mx-auto px-6 pt-32 pb-14 md:pt-40 md:pb-20 grid md:grid-cols-2 gap-12 md:gap-20 items-center"
      >
        <div>
          <motion.p variants={item} className="text-eyebrow mb-5">{hero.eyebrow}</motion.p>
          <motion.h1 variants={item} className="text-display text-[clamp(42px,6vw,74px)] text-[var(--ink)] mb-6 whitespace-pre-line">
            {hero.headline}
          </motion.h1>
          <motion.p variants={item} className="text-[clamp(17px,2vw,20px)] leading-relaxed text-[var(--muted)] mb-9 max-w-lg">
            {hero.subheadline}
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap items-center gap-[14px]">
            <a href={hero.cta.href} className="font-semibold text-[15px] text-[var(--ink)] bg-[var(--honey)] px-7 py-[14px] rounded-full hover:opacity-90 active:scale-95 transition-all">
              {hero.cta.label}
            </a>
            <a href={hero.ctaSecondary.href} className="font-medium text-[15px] text-[var(--ink)] border border-[var(--line)] px-[26px] py-[14px] rounded-full hover:border-[var(--honey)] active:scale-95 transition-all">
              {hero.ctaSecondary.label}
            </a>
          </motion.div>
          <motion.p variants={item} className="mt-6 text-sm font-medium text-[var(--muted)]">
            Sin permanencia · Cancelas cuando quieras
          </motion.p>
        </div>

        <motion.div variants={item}>
          <div className="w-full max-w-[420px] mx-auto bg-white border border-[var(--line)] rounded-[20px] shadow-[0_32px_64px_-28px_rgba(28,43,58,.28),0_4px_14px_-4px_rgba(28,43,58,.08)] overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-[18px] border-b border-[var(--line)]/60">
              <span className="flex-none w-10 h-10 rounded-full bg-[var(--ink)] flex items-center justify-center">
                <span className="text-display text-sm text-[var(--paper)]">N</span>
              </span>
              <div className="min-w-0">
                <p className="text-heading text-[14.5px] text-[var(--ink)] truncate">Tu asistente IA</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs font-medium text-[var(--muted)]">
                  <span className="relative w-1.5 h-1.5 flex">
                    <span className="absolute inset-0 rounded-full bg-[var(--honey)] opacity-55 animate-ping" />
                    <span className="relative w-1.5 h-1.5 rounded-full bg-[var(--honey)]" />
                  </span>
                  En línea · responde al instante
                </p>
              </div>
              <span className="ml-auto flex-none text-[9.5px] font-medium tracking-wider uppercase text-[var(--honey)] bg-[var(--paper)] border border-[var(--line)]/60 rounded-full px-2.5 py-1 whitespace-nowrap">
                Demo
              </span>
            </div>

            <div
              ref={bodyRef}
              className="relative flex flex-col justify-end gap-2.5 h-[clamp(300px,38vw,380px)] px-[18px] pt-[18px] pb-1.5 overflow-hidden transition-opacity duration-300"
            >
              {messages.map((m) =>
                m.role === "client" ? (
                  <div key={m.id} className="self-end max-w-[78%] animate-[nv-msg-in_.5s_cubic-bezier(.22,.61,.36,1)_both]">
                    <div className="bg-[var(--ink)] text-[var(--paper)] rounded-2xl rounded-br-md px-4 py-2.5 text-[14.5px] leading-snug">
                      {m.text}
                    </div>
                    <div className="flex items-center justify-end gap-1.5 mt-1.5 mr-1">
                      <span className="text-[10.5px] font-medium text-[var(--honey)]">{m.time}</span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--honey)" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                        <path d="m2 12 4 4 4-4M9 12l4 4 8-9" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div key={m.id} className="self-start max-w-[82%] animate-[nv-msg-in_.5s_cubic-bezier(.22,.61,.36,1)_both]">
                    <div className="bg-[var(--paper)] border border-[var(--line)]/60 text-[var(--ink)] rounded-2xl rounded-bl-md px-4 py-2.5 text-[14.5px] leading-snug">
                      {m.text}
                    </div>
                    <div className="mt-1.5 ml-1 text-[10.5px] font-medium text-[var(--honey)]">{m.time}</div>
                  </div>
                )
              )}
              {typing && (
                <div className="self-start animate-[nv-msg-in_.35s_cubic-bezier(.22,.61,.36,1)_both]">
                  <div className="flex items-center gap-1.5 bg-[var(--paper)] border border-[var(--line)]/60 rounded-2xl rounded-bl-md px-4 py-3.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--honey)] animate-[typing-dot_1.2s_ease_infinite]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--honey)] animate-[typing-dot_1.2s_ease_infinite] [animation-delay:.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--honey)] animate-[typing-dot_1.2s_ease_infinite] [animation-delay:.4s]" />
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2.5 px-[18px] pb-[18px] pt-3.5">
              <div className="flex-1 min-w-0 bg-[var(--paper)] border border-[var(--line)]/60 rounded-full px-4 py-2.5 text-sm text-[var(--muted)] overflow-hidden whitespace-nowrap">
                <Typewriter words={INPUT_WORDS} />
              </div>
              <span className="flex-none w-[38px] h-[38px] rounded-full bg-[var(--honey)] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                </svg>
              </span>
            </div>
          </div>
          <p className="mt-5 text-center text-[15px] font-medium text-[var(--muted)]">
            Atención al instante, incluso cuando no estás.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
