"use client";

import { useState } from "react";
import { site } from "@/content/site";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div className="border-b border-[var(--line)] last:border-0">
      <button
        id={`faq-btn-${id}`}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${id}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
      >
        <span className="text-base font-medium text-[var(--ink)] group-hover:text-[var(--teal)] transition-colors">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-[var(--line)] flex items-center justify-center transition-all ${
            isOpen ? "bg-[var(--honey)] border-[var(--honey)]" : "group-hover:border-[var(--muted)]"
          }`}
          aria-hidden="true"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            className={`transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
          >
            <path
              d="M5 1v8M1 5h8"
              stroke={isOpen ? "var(--ink)" : "var(--muted)"}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-btn-${id}`}
        className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}
      >
        <p className="text-[var(--muted)] text-base leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { faq } = site;

  return (
    <section
      id="faq"
      className="py-14 md:py-24 px-6 bg-[var(--paper)]"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
        <div>
          <span className="text-eyebrow block mb-4">{faq.eyebrow}</span>
          <h2
            id="faq-heading"
            className="text-heading text-3xl sm:text-4xl text-[var(--ink)] mb-6"
          >
            {faq.headline}
          </h2>
          <p className="text-[var(--muted)] text-base leading-relaxed mb-8">
            Si tienes más dudas, escríbenos directamente.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--teal)] hover:text-[var(--honey)] transition-colors"
          >
            Pregúntanos lo que sea
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div>
          {faq.items.map((item, i) => (
            <FAQItem
              key={i}
              id={String(i)}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
