import { site } from "@/content/site";
import { WaveText } from "@/components/ui/wave-text";

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--paper)] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <WaveText text={site.brand.name} className="text-display text-xl font-bold" />
          <p className="text-sm text-[var(--paper)]/60 max-w-xs">{site.footer.tagline}</p>
        </div>

        <div className="flex gap-10 md:gap-20 flex-wrap">
          <nav aria-label="Navegación pie de página">
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {site.nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-[var(--paper)]/70 hover:text-[var(--paper)] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium tracking-wide uppercase text-[var(--paper)]/40">Contacto</p>
            <a href={`mailto:${site.brand.email}`} className="text-sm text-[var(--paper)]/70 hover:text-[var(--paper)] transition-colors">
              {site.brand.email}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-[var(--paper)]/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[var(--paper)]/40">{site.footer.legal}</p>
        <nav aria-label="Textos legales">
          <ul className="flex flex-wrap items-center gap-4 list-none m-0 p-0">
            {site.footer.links.map((link, i) => (
              <li key={link.href} className="flex items-center gap-4">
                {i > 0 && <span className="text-[var(--paper)]/20" aria-hidden="true">·</span>}
                <a href={link.href} className="text-xs text-[var(--paper)]/40 hover:text-[var(--paper)] transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
