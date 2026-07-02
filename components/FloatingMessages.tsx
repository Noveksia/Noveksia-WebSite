"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const POSITIONS = [
  { top: "10%",    left: "0" },
  { top: "48%",    left: "0" },
  { bottom: "14%", left: "4%" },
] as const;

type Bubble = { id: number; text: string; posIndex: number };

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
    const t2 = setTimeout(() => onRemove(id), 3800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 0.88, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      aria-hidden="true"
      style={{ position: "absolute", pointerEvents: "none", ...position }}
      className="flex items-center gap-1 bg-[var(--paper)] border border-[var(--line)] rounded-full px-3 py-1.5 text-xs text-[var(--ink)] shadow-sm whitespace-nowrap"
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
        if (prev.length >= 2 || prev.some((b) => b.id === id)) return prev;
        const usedPos = new Set(prev.map((b) => b.posIndex));
        const avail = [0, 1, 2].filter((i) => !usedPos.has(i));
        if (!avail.length) return prev;
        const posIndex = avail[Math.floor(Math.random() * avail.length)];
        return [...prev, { id, text, posIndex }];
      });

      setTimeout(step, 2000 + Math.random() * 1500);
    }

    const init = setTimeout(step, 800);
    return () => { alive = false; clearTimeout(init); };
  }, [isDesktop, messages]);

  const removeBubble = (id: number) =>
    setBubbles((prev) => prev.filter((b) => b.id !== id));

  if (!isDesktop) return null;

  if (prefersReducedMotion) {
    return (
      <>
        {[0, 1].map((i) => (
          <div
            key={i}
            aria-hidden="true"
            style={{ position: "absolute", ...POSITIONS[i], opacity: 0.7, pointerEvents: "none" }}
            className="bg-[var(--paper)] border border-[var(--line)] rounded-full px-3 py-1.5 text-xs text-[var(--ink)] whitespace-nowrap"
          >
            {messages[i % messages.length]}
          </div>
        ))}
      </>
    );
  }

  return (
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
  );
}
