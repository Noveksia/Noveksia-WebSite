"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// Positions relative to the hero section (inset-0 overlay).
// opacity: how faded each slot is — lower = more background.
// Positions frame the headline block without overlapping it.
// Title occupies roughly top 28–70%, left 5–44% — kept clear.
const POSITIONS = [
  // — Above the copy —
  { top: "9%",   left: "4%",  opacity: 0.42 },
  { top: "13%",  left: "22%", opacity: 0.36 },
  { top: "18%",  left: "36%", opacity: 0.32 },
  // — Below the copy (after CTAs + trust strip) —
  { top: "76%",  left: "3%",  opacity: 0.40 },
  { top: "81%",  left: "20%", opacity: 0.34 },
  { top: "86%",  left: "10%", opacity: 0.38 },
  // — Right edge of left column (gap between columns) —
  { top: "30%",  left: "45%", opacity: 0.30 },
  { top: "48%",  left: "46%", opacity: 0.28 },
  { top: "63%",  left: "44%", opacity: 0.32 },
  // — Far left strip —
  { top: "40%",  left: "0%",  opacity: 0.30 },
] as const;

const MAX_BUBBLES = 6;

type Bubble = { id: number; text: string; posIndex: number; targetOpacity: number };

function BubbleItem({
  id,
  text,
  position,
  onRemove,
}: {
  id: number;
  text: string;
  position: (typeof POSITIONS)[number];
  onRemove: (id: number) => void;
}) {
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowCheck(true), 2200);
    const t2 = setTimeout(() => onRemove(id), 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: position.opacity, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-hidden="true"
      style={{ position: "absolute", pointerEvents: "none", top: position.top, left: position.left }}
      className="bg-white border border-[var(--line)] rounded-2xl rounded-tl-sm px-3 py-2 text-sm text-[var(--ink)] leading-snug shadow-sm max-w-[13rem]"
    >
      {text}
      <AnimatePresence>
        {showCheck && (
          <motion.span
            key="check"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-[var(--honey)] font-semibold ml-0.5 shrink-0"
          >
            ✓
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FloatingMessages({ messages }: { messages: readonly string[] }) {
  const prefersReducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const nextId = useRef(0);
  const msgIdx = useRef(0);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let alive = true;

    function step() {
      if (!alive) return;
      const id = nextId.current++;
      const text = messages[msgIdx.current++ % messages.length];

      setBubbles((prev) => {
        if (prev.length >= MAX_BUBBLES || prev.some((b) => b.id === id)) return prev;
        const usedPos = new Set(prev.map((b) => b.posIndex));
        const avail = POSITIONS.map((_, i) => i).filter((i) => !usedPos.has(i));
        if (!avail.length) return prev;
        const posIndex = avail[Math.floor(Math.random() * avail.length)];
        return [...prev, { id, text, posIndex, targetOpacity: POSITIONS[posIndex].opacity }];
      });

      setTimeout(step, 900 + Math.random() * 800);
    }

    const init = setTimeout(step, 600);
    return () => { alive = false; clearTimeout(init); };
  }, [isDesktop, messages]);

  const removeBubble = (id: number) =>
    setBubbles((prev) => prev.filter((b) => b.id !== id));

  if (!isDesktop) return null;

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {POSITIONS.slice(0, 3).map((pos, i) => (
          <div
            key={i}
            style={{ position: "absolute", top: pos.top, left: pos.left, opacity: pos.opacity, pointerEvents: "none" }}
            className="bg-white border border-[var(--line)] rounded-2xl rounded-tl-sm px-3 py-2 text-sm text-[var(--ink)] leading-snug shadow-sm max-w-[13rem]"
          >
            {messages[i % messages.length]}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <AnimatePresence>
        {bubbles.map((b) => (
          <BubbleItem
            key={b.id}
            id={b.id}
            text={b.text}
            position={POSITIONS[b.posIndex]}
            onRemove={removeBubble}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
