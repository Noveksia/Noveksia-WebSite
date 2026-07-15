"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

interface WaveTextProps {
  text: string;
  className?: string;
}

export function WaveText({ text, className }: WaveTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [hoverable, setHoverable] = useState(false);
  const [wave, setWave] = useState(0);

  useEffect(() => {
    setHoverable(window.matchMedia("(hover: hover)").matches);
  }, []);

  const letters = text.split("");

  return (
    <span
      ref={ref}
      className={cn("inline-flex cursor-default", className)}
      aria-label={text}
      onMouseEnter={() => hoverable && setWave((w) => w + 1)}
    >
      {letters.map((ch, i) => (
        <motion.span
          key={hoverable ? `${wave}-${i}` : i}
          aria-hidden="true"
          className="inline-block"
          initial={hoverable ? { y: 0 } : { opacity: 0, y: 6 }}
          animate={
            hoverable
              ? wave > 0
                ? { y: [0, -3, 0] }
                : { y: 0 }
              : inView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 6 }
          }
          transition={{ duration: 0.5, delay: i * (hoverable ? 0.03 : 0.04), ease: EASE }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}
