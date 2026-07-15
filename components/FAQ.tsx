"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import { EASE } from "@/lib/motion";

export function FAQ() {
  const { faq } = site;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-16 md:py-32 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="text-eyebrow mb-[18px]">{faq.eyebrow}</p>
          <h2 className="text-heading text-3xl sm:text-4xl text-[var(--ink)]">{faq.headline}</h2>
          <p className="mt-6 text-[15px] text-[var(--muted)]">
            ¿Otra duda? Escríbenos a{" "}
            <a href={`mailto:${site.brand.email}`} className="text-[var(--ink)] font-medium">{site.brand.email}</a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
          className="border-t border-[var(--line)]"
        >
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question} className="border-b border-[var(--line)]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-[22px] px-2.5 rounded-[10px] text-left min-h-11 transition-colors hover:bg-[var(--paper)]"
                >
                  <span className="font-semibold text-[16.5px] text-[var(--ink)]">{item.question}</span>
                  <svg
                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth={1.8} strokeLinecap="round"
                    className="flex-none transition-transform duration-[400ms] ease-[cubic-bezier(.22,.61,.36,1)]"
                    style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-[450ms] ease-[cubic-bezier(.22,.61,.36,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden min-h-0">
                    <p className="pb-6 pr-10 pl-2.5 text-[15px] leading-relaxed text-[var(--muted)]">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
