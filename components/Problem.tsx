import { site } from "@/content/site";

const iconMap: Record<string, React.ReactNode> = {
  clock: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  inbox: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 8H3l2 10h14l2-10z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M3 8l4-4h10l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 13h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  "trend-down": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 9v6a1 1 0 001 1h3l5 5V4L7 9H4a1 1 0 00-1 1z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M17 8.5c1.5 1 2.5 2.7 2.5 4.5s-1 3.5-2.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
};

export function Problem() {
  const { problem } = site;

  return (
    <section className="py-14 md:py-24 px-6 bg-[var(--teal)]" aria-labelledby="problem-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span
            className="inline-block font-mono text-xs font-medium uppercase text-[var(--honey)] mb-4"
            style={{ letterSpacing: "0.5em" }}
          >
            {problem.eyebrow}
          </span>
          <h2
            id="problem-heading"
            className="text-heading text-3xl sm:text-4xl text-white max-w-2xl mx-auto"
          >
            El día a día que no debería ser así
          </h2>
        </div>

        <ul className="grid sm:grid-cols-3 gap-6 list-none m-0 p-0 mb-16">
          {problem.items.map((item, i) => (
            <li
              key={i}
              className="flex flex-col gap-4 p-5 sm:p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                {iconMap[item.icon]}
              </div>
              <p className="text-white/80 text-base leading-relaxed">{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white text-xl sm:text-2xl font-medium leading-relaxed border-t border-white/10 pt-8 md:pt-12">
            {problem.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
}
