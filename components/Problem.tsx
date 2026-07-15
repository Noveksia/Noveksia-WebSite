"use client";

import { motion } from "framer-motion";
import { site } from "@/content/site";
import { EASE } from "@/lib/motion";

const ICONS = [
  "M12 6v6l4 2M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20",
  "M22 12h-6l-2 3h-4l-2-3H2M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
  "M16 17h6v-6M22 17 13.5 8.5l-5 5L2 7",
];
const LABELS = ["01 · Soporte", "02 · Repetición", "03 · Marketing"];

export function Problem() {
  const { problem } = site;
  return (
    <section className="bg-white py-16 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-eyebrow"
        >
          {problem.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.06 }}
          className="text-heading text-3xl sm:text-4xl text-[var(--ink)] mt-[18px]"
        >
          Todo recae sobre ti.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
          className="mt-5 text-lg leading-relaxed text-[var(--muted)] max-w-xl"
        >
          Cuando llevas tu negocio solo, cada mensaje, cada duda y cada pedido pasan por ti. No es falta de capacidad — es que un día tiene las mismas 24 horas para todos.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {problem.items.map((it, i) => (
            <motion.div
              key={it.text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className="bg-[var(--paper)] border border-[var(--line)]/60 rounded-2xl p-[26px]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-none w-10 h-10 rounded-xl bg-[var(--line)]/40 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d={ICONS[i]} />
                  </svg>
                </span>
                <span className="text-xs font-medium tracking-wide uppercase text-[var(--honey)]">{LABELS[i]}</span>
              </div>
              <p className="text-base font-medium text-[var(--ink)] leading-relaxed">{it.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.95, ease: EASE }}
          className="text-heading text-2xl sm:text-3xl text-[var(--ink)] max-w-3xl mx-auto text-center mt-16 pt-14 border-t border-[var(--line)]"
        >
          {problem.conclusion}
        </motion.p>
      </div>
    </section>
  );
}
