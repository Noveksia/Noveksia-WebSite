import { site } from "@/content/site";

export function Results() {
  const { results } = site;

  return (
    <section
      className="py-14 md:py-24 px-6 bg-[var(--teal)]"
      aria-labelledby="results-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block font-mono text-xs font-medium uppercase text-[var(--honey)] mb-4" style={{ letterSpacing: "0.5em" }}>
            {results.eyebrow}
          </span>
          <h2
            id="results-heading"
            className="text-heading text-3xl sm:text-4xl text-white"
          >
            {results.headline}
          </h2>
        </div>

        {/* Metrics */}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 list-none m-0 p-0">
          {results.metrics.map((metric) => (
            <li
              key={metric.label}
              className="flex flex-col items-center gap-2 p-5 sm:p-8 rounded-2xl bg-white/5 border border-white/10 text-center"
            >
              <span className="font-display text-4xl font-bold text-[var(--honey)]">
                {metric.value}
              </span>
              <span className="text-sm text-white/60 leading-snug">{metric.label}</span>
            </li>
          ))}
        </ul>

        {/* Bottom statement */}
        <div className="mt-10 pt-10 md:mt-16 md:pt-16 border-t border-white/10 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="flex flex-col gap-4">
            <p className="text-white/40 text-xs font-semibold uppercase" style={{ letterSpacing: "0.5em" }}>Lo que esto significa</p>
            <p className="text-white text-2xl sm:text-3xl font-display font-semibold leading-snug">
              Menos horas perdidas.<br />Más clientes atendidos.<br />El negocio funciona aunque no estés.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-white/60 text-base leading-relaxed">
              Cada automatización que instalamos trabaja en silencio — respondiendo, recordando, publicando — mientras tú te dedicas a lo que realmente importa en tu negocio.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-[var(--honey)] text-[var(--ink)] font-semibold px-7 py-4 rounded-full text-base hover:opacity-90 active:scale-95 transition-all w-fit"
            >
              Quiero estos resultados
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
