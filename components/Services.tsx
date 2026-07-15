"use client";

import { motion } from "framer-motion";
import { site } from "@/content/site";
import { EASE } from "@/lib/motion";

const ICONS: Record<string, string> = {
  chat: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
  magnet:
    "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15M5 8l4 4M12 15l4 4",
  sparkles:
    "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0zM20 3v4M22 5h-4M4 17v2M5 18H3",
};

export function Services() {
  const { services } = site;
  return (
    <section id="servicios" className="bg-[var(--paper)] py-16 md:py-32 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, ease: EASE }}
          className="text-eyebrow mb-[18px]"
        >
          {services.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, ease: EASE, delay: 0.06 }}
          className="text-heading text-3xl sm:text-4xl text-[var(--ink)] max-w-xl"
        >
          {services.headline}
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-6 mt-14">
          {services.items.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className="flex flex-col bg-white border border-[var(--line)] rounded-2xl p-[30px] transition-[transform,box-shadow,border-color] duration-[450ms] ease-[cubic-bezier(.22,.61,.36,1)] hover:-translate-y-2 hover:shadow-[0_18px_40px_-18px_rgba(28,43,58,.25)] hover:border-[var(--honey)]/40"
            >
              <span className="flex-none w-[46px] h-[46px] rounded-xl bg-[var(--ink)] flex items-center justify-center mb-[22px]">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="var(--paper)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d={ICONS[s.icon]} />
                </svg>
              </span>
              <h3 className="text-heading text-lg text-[var(--ink)] mb-2.5">{s.title}</h3>
              <p className="text-[15px] leading-relaxed text-[var(--muted)]">{s.description}</p>
              <div className="border-t border-[var(--line)]/60 pt-[18px] mt-[22px]">
                <p className="text-[10px] font-medium tracking-wide uppercase text-[var(--honey)] mb-1.5">Impacto</p>
                <p className="text-[15px] font-semibold text-[var(--ink)]">{s.benefit}</p>
              </div>
              <div className="flex flex-col gap-2.5 mt-5">
                {s.examples.map((ex, j) => (
                  <motion.div
                    key={ex}
                    initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.55, ease: EASE, delay: 0.22 + j * 0.05 }}
                    className="flex items-start gap-2.5"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--honey)" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" className="flex-none mt-0.5">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-[13.5px] leading-relaxed text-[var(--muted)]">{ex}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
