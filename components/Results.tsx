"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { site } from "@/content/site";
import { EASE } from "@/lib/motion";

function useSettle(target: string, active: boolean) {
  const [display, setDisplay] = useState(target);
  useEffect(() => {
    if (!active) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const match = target.match(/^([^\d]*)(\d+)(.*)$/);
    if (!match || reduced) {
      setDisplay(target);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const to = parseInt(numStr, 10);
    const from = Math.max(0, Math.round(to * 0.4));
    const start = performance.now();
    const duration = 650;
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(`${prefix}${Math.round(from + (to - from) * eased)}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);
  return display;
}

function Metric({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const display = useSettle(value, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className="border-l border-white/15 px-6 py-1.5"
    >
      <p className="font-semibold text-[clamp(38px,4.5vw,54px)] leading-none tracking-tight text-[var(--paper)]">{display}</p>
      <p className="mt-3 text-sm text-white/60">{label}</p>
    </motion.div>
  );
}

export function Results() {
  const { results } = site;
  return (
    <section className="bg-[var(--ink)] py-16 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-eyebrow mb-[18px]">{results.eyebrow}</p>
        <h2 className="text-heading text-2xl sm:text-3xl text-[var(--paper)] max-w-xl">{results.headline}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-9 mt-16">
          {results.metrics.map((m, i) => (
            <Metric key={m.label} value={m.value} label={m.label} delay={i * 0.09} />
          ))}
        </div>
      </div>
    </section>
  );
}
