"use client";

import { useState } from "react";
import { site } from "@/content/site";

export function Audience() {
  const [activeTab, setActiveTab] = useState(0);
  const { audience } = site;
  const tab = audience.tabs[activeTab];

  return (
    <section
      id="para-quien"
      className="py-14 md:py-24 px-6 bg-[var(--teal)]"
      aria-labelledby="audience-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block font-mono text-xs font-medium tracking-[0.32em] uppercase text-[var(--honey)] mb-4">
            {audience.eyebrow}
          </span>
          <h2
            id="audience-heading"
            className="text-heading text-3xl sm:text-4xl text-white"
          >
            {audience.headline}
          </h2>
        </div>

        {/* Tab switcher */}
        <div
          className="flex justify-center mb-8 md:mb-12"
          role="tablist"
          aria-label="Tipo de negocio"
        >
          <div className="inline-flex bg-white/5 border border-white/10 rounded-full p-1">
            {audience.tabs.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={activeTab === i}
                aria-controls={`panel-${t.id}`}
                id={`tab-${t.id}`}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === i
                    ? "bg-[var(--honey)] text-[var(--ink)]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab panel */}
        <div
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          className="grid md:grid-cols-2 gap-10 items-start"
        >
          {/* Left: description + pain points */}
          <div className="flex flex-col gap-8">
            <p className="text-white/80 text-lg leading-relaxed">{tab.description}</p>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {tab.painPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-4 h-4 rounded-full border border-[var(--honey)]/40 flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--honey)]" />
                  </span>
                  <span className="text-white/70 text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: solution callout */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
            <div className="w-10 h-10 rounded-xl bg-[var(--honey)]/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 2l2 6h6l-5 3.5 1.5 5.5L10 14l-4.5 3 1.5-5.5L2 8h6l2-6z" fill="var(--honey)" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-mono font-medium uppercase tracking-[0.32em] text-[var(--honey)] mb-3">
                Nuestra solución
              </p>
              <p className="text-white text-lg leading-relaxed">{tab.solution}</p>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-[var(--honey)] text-[var(--ink)] font-semibold px-6 py-3 rounded-full text-sm hover:opacity-90 active:scale-95 transition-all w-fit mt-auto"
            >
              Cuéntanos tu caso
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
