import { site } from "@/content/site";

export function About() {
  const { about } = site;

  return (
    <section className="py-24 px-6 bg-[var(--paper)]" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-10">
          <div>
            <span className="text-eyebrow block mb-4">{about.eyebrow}</span>
            <h2
              id="about-heading"
              className="text-heading text-3xl sm:text-4xl text-[var(--ink)]"
            >
              {about.headline}
            </h2>
          </div>

          <div className="flex flex-col gap-6 border-l-2 border-[var(--honey)] pl-8">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-[var(--muted)] text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="font-display text-4xl font-bold text-[var(--ink)]">100%</span>
              <span className="text-sm text-[var(--muted)]">Especialización en IA</span>
            </div>
            <div className="w-px h-12 bg-[var(--line)]" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="font-display text-4xl font-bold text-[var(--ink)]">2</span>
              <span className="text-sm text-[var(--muted)]">Semanas al primer resultado</span>
            </div>
            <div className="w-px h-12 bg-[var(--line)]" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="font-display text-4xl font-bold text-[var(--ink)]">0</span>
              <span className="text-sm text-[var(--muted)]">Contratos anuales</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
