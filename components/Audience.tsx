"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/content/site";
import { EASE } from "@/lib/motion";

export function Audience() {
  const { audience } = site;
  const [active, setActive] = useState(audience.tabs[0].id);
  const tab = audience.tabs.find((t) => t.id === active)!;

  return (
    <section id="para-quien" className="bg-[var(--teal)] py-16 md:py-32 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-7">
          <div>
            <p className="text-eyebrow mb-[18px]">{audience.eyebrow}</p>
            <h2 className="text-heading text-3xl sm:text-4xl text-[var(--paper)]">{audience.headline}</h2>
          </div>
          <div role="tablist" aria-label="Tipo de negocio" className="flex gap-1 bg-white/8 border border-white/10 rounded-full p-1">
            {audience.tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={active === t.id}
                onClick={() => setActive(t.id)}
                className={`text-sm font-medium px-5 py-2.5 rounded-full transition-colors active:scale-95 ${
                  active === t.id ? "bg-[var(--paper)] text-[var(--ink)] shadow-[0_2px_10px_rgba(0,0,0,.2)]" : "text-white/70 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-[52px] min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="grid md:grid-cols-2 gap-9 md:gap-[72px]"
            >
              <div>
                <p className="text-[17px] leading-loose text-white/80">{tab.description}</p>
                <div className="border-t border-white/15 pt-6 mt-[30px]">
                  <p className="text-[10.5px] font-medium tracking-wide uppercase text-[var(--honey)] mb-2">Nuestra parte</p>
                  <p className="text-heading text-[19px] text-[var(--paper)] leading-snug">{tab.solution}</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <p className="text-[10.5px] font-medium tracking-wide uppercase text-white/55 mb-[18px]">Tu día a día, hoy</p>
                <div className="flex flex-col gap-3.5">
                  {tab.painPoints.map((p, i) => (
                    <motion.div
                      key={p}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: EASE, delay: 0.14 + i * 0.055 }}
                      className="flex items-start gap-3"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth={2} strokeLinecap="round" className="flex-none mt-1">
                        <path d="M6 6l12 12M18 6 6 18" />
                      </svg>
                      <span className="text-[14.5px] leading-snug text-white/78">{p}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
