import { site } from "@/content/site";

export function Process() {
  const { process } = site;

  return (
    <section
      id="como-trabajamos"
      className="py-24 px-6 bg-[var(--paper)]"
      aria-labelledby="process-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-eyebrow block mb-4">{process.eyebrow}</span>
          <h2
            id="process-heading"
            className="text-heading text-3xl sm:text-4xl text-[var(--ink)]"
          >
            {process.headline}
          </h2>
        </div>

        <ol className="relative grid md:grid-cols-4 gap-0 list-none m-0 p-0">
          {/* Connector line (desktop) */}
          <li className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-[var(--line)] pointer-events-none" aria-hidden="true" />

          {process.steps.map((step, i) => (
            <li key={step.number} className="flex flex-col items-start md:items-center gap-6 relative px-4 pb-8 md:pb-0">
              {/* Mobile connector */}
              {i < process.steps.length - 1 && (
                <span
                  className="md:hidden absolute left-7 top-16 bottom-0 w-px bg-[var(--line)]"
                  aria-hidden="true"
                />
              )}

              <div className="flex md:flex-col items-center gap-4 w-full">
                {/* Number circle */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-[var(--line)] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="font-mono text-sm font-semibold text-[var(--honey)]">
                    {step.number}
                  </span>
                </div>

                <div className="md:text-center">
                  <div className="flex items-center gap-2 md:justify-center mb-1">
                    <h3 className="text-heading text-lg text-[var(--ink)]">{step.title}</h3>
                  </div>
                  <span className="font-mono text-xs text-[var(--honey)] bg-[var(--honey)]/10 px-2 py-0.5 rounded-full">
                    {step.duration}
                  </span>
                </div>
              </div>

              <p className="text-[var(--muted)] text-sm leading-relaxed md:text-center">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-16 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-[var(--honey)] text-[var(--ink)] font-semibold px-8 py-4 rounded-full text-base hover:opacity-90 active:scale-95 transition-all shadow-sm"
          >
            Empezar con el diagnóstico
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
