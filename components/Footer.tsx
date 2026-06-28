import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--paper)] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <span className="font-display text-xl font-bold tracking-tight">
            {site.brand.name}
          </span>
          <p className="text-sm text-[var(--paper)]/60 max-w-xs">
            {site.footer.tagline}
          </p>
        </div>

        {/* Nav links only — legales van abajo */}
        <nav aria-label="Navegación pie de página">
          <ul className="flex flex-wrap gap-6 list-none m-0 p-0">
            {site.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--paper)]/60 hover:text-[var(--paper)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom bar: copyright + políticas legales + redes */}
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-[var(--paper)]/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[var(--paper)]/40">{site.footer.legal}</p>

        <nav aria-label="Textos legales">
          <ul className="flex flex-wrap items-center gap-4 list-none m-0 p-0">
            {site.footer.links.map((link, i) => (
              <li key={link.href} className="flex items-center gap-4">
                {i > 0 && <span className="text-[var(--paper)]/20" aria-hidden="true">·</span>}
                <a
                  href={link.href}
                  className="text-xs text-[var(--paper)]/40 hover:text-[var(--paper)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {site.brand.social.linkedin !== "#" && (
            <a
              href={site.brand.social.linkedin}
              className="text-xs text-[var(--paper)]/40 hover:text-[var(--paper)] transition-colors"
              aria-label="LinkedIn de Noveksia"
            >
              LinkedIn
            </a>
          )}
          {site.brand.social.instagram !== "#" && (
            <a
              href={site.brand.social.instagram}
              className="text-xs text-[var(--paper)]/40 hover:text-[var(--paper)] transition-colors"
              aria-label="Instagram de Noveksia"
            >
              Instagram
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
