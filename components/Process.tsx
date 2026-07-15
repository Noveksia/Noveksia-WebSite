"use client";

import { motion } from "framer-motion";
import { site } from "@/content/site";
import { EASE } from "@/lib/motion";

export function Process() {
  const { process } = site;
  return (
    <section id="como-trabajamos" className="bg-[var(--paper)] py-16 md:py-32 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <p className="text-eyebrow mb-[18px]">{process.eyebrow}</p>
        <h2 className="text-heading text-3xl sm:text-4xl text-[var(--ink)] max-w-xl">{process.headline}</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-9 mt-16">
          {process.steps.map((st, i) => (
            <div key={st.number} className="relative pt-7">
              <motion.span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-[var(--line)] origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.3 }}
              />
              <motion.span
                aria-hidden="true"
                className="absolute -top-1 left-0 w-[9px] h-[9px] rounded-full bg-[var(--ink)]"
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, ease: EASE, delay: i * 0.3 + 0.24 }}
              />
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.3 + 0.28 }}
              >
                <p className="font-medium text-[13px] tracking-wide text-[var(--honey)] mb-3.5">{st.number}</p>
                <h3 className="text-heading text-lg text-[var(--ink)] mb-2.5">{st.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-[var(--muted)]">{st.description}</p>
                <span className="block mt-4 text-[11px] font-medium tracking-wide uppercase text-[var(--honey)]">{st.duration}</span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
