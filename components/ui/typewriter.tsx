"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export function Typewriter({
  words,
  className,
  typingSpeed = 70,
  deletingSpeed = 35,
  pauseTime = 2600,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setText(words[0] ?? "");
      return;
    }
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = words[indexRef.current % words.length];
      if (!deletingRef.current) {
        charRef.current++;
        setText(word.slice(0, charRef.current));
        if (charRef.current === word.length) {
          deletingRef.current = true;
          timer = setTimeout(tick, pauseTime);
          return;
        }
        timer = setTimeout(tick, typingSpeed);
      } else {
        charRef.current--;
        setText(word.slice(0, charRef.current));
        if (charRef.current === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % words.length;
          timer = setTimeout(tick, 500);
          return;
        }
        timer = setTimeout(tick, deletingSpeed);
      }
    };

    timer = setTimeout(tick, 2400);
    return () => clearTimeout(timer);
  }, [words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className} aria-hidden="true">
      {text}
      <span className="inline-block w-px h-[1em] ml-0.5 -mb-0.5 bg-[var(--honey)] animate-[nv-blink_1.1s_step-end_infinite]" />
    </span>
  );
}
