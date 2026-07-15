export const EASE = [0.22, 0.61, 0.36, 1] as const;
export const DURATION = { fast: 0.45, base: 0.7, slow: 0.95 } as const;

export const fadeUp = (delay = 0, duration: number = DURATION.base) => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration, delay, ease: EASE } },
});

export const viewportOnce = { once: true, amount: 0.3 } as const;
