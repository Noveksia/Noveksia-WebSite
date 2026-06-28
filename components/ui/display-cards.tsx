"use client";

import { cn } from "@/lib/utils";

interface DisplayCardData {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  benefit?: string;
  examples?: string[];
}

interface DisplayCardsProps {
  cards: DisplayCardData[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  return (
    <div className="grid sm:grid-cols-3 gap-6 w-full">
      {cards.map((card, index) => (
        <div
          key={index}
          className={cn(
            "group relative flex flex-col gap-4 rounded-2xl border border-[var(--line)] bg-white px-6 py-6 shadow-sm",
            "transition-all duration-300 ease-out cursor-default",
            "hover:-translate-y-2 hover:shadow-lg hover:border-[var(--honey)]/40",
          )}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex rounded-xl bg-[var(--teal)]/10 p-2.5 text-[var(--teal)] group-hover:bg-[var(--honey)]/10 group-hover:text-[var(--honey)] transition-colors">
              {card.icon}
            </span>
            <p className="text-base font-semibold text-[var(--ink)]">{card.title}</p>
          </div>

          <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">
            {card.description}
          </p>

          <div className="bg-[var(--honey)]/8 px-3 py-2 rounded-lg">
            <p className="text-xs font-semibold text-[var(--honey)]">↗ {card.benefit}</p>
          </div>

          {card.examples && card.examples.length > 0 && (
            <div className="flex flex-wrap gap-1.5 border-t border-[var(--line)] pt-3">
              {card.examples.map((ex) => (
                <span
                  key={ex}
                  className="font-mono text-[11px] px-2.5 py-1 bg-[var(--line)] text-[var(--muted)] rounded-full"
                >
                  {ex}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
