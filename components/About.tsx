"use client";

import { motion } from "framer-motion";
import { site } from "@/content/site";
import { EASE } from "@/lib/motion";

export function About() {
  const { about } = site;
  const lastPara = about.paragraphs[about.paragraphs.length - 1];
  const splitIdx = lastPara.indexOf("Cuando a ti");
  const leadIn = splitIdx > -1 ? lastPara.slice(0, splitIdx).trim() : lastPara;
  const quote = splitIdx > -1 ? lastPara.slice(splitIdx).trim() : null;
  const bodyParagraphs = [...about.paragraphs.slice(0, -1), leadIn];

  return (
    <section className="bg-[var(--paper)] py-16 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="text-eyebrow mb-[18px]">{about.eyebrow}</p>
            <h2 className="text-heading text-3xl sm:text-4xl text-[var(--ink)]">{about.headline}</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
            className="flex flex-col gap-5"
          >
            {bodyParagraphs.map((p, i) => (
              <p key={i} className="text-[17px] leading-relaxed text-[var(--muted)]">{p}</p>
            ))}
          </motion.div>
        </div>

        {quote && (
          <motion.p
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.95, ease: EASE }}
            className="text-heading text-2xl sm:text-3xl text-[var(--ink)] max-w-3xl mx-auto text-center mt-[72px] pt-14 border-t border-[var(--line)]"
          >
            «{quote}»
          </motion.p>
        )}
      </div>
    </section>
  );
}
