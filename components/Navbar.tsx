"use client";

import { useState, useEffect } from "react";
import { site } from "@/content/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function closeMobileMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--paper)]/95 backdrop-blur-sm shadow-sm border-b border-[var(--line)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a
          href="#"
          className="font-display text-xl font-bold text-[var(--ink)] tracking-tight"
          aria-label="Noveksia — Inicio"
        >
          Noveksia
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {site.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMobileMenu}
                className="text-sm font-medium text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 bg-[var(--honey)] text-[var(--ink)] text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 active:scale-95 transition-all"
        >
          {site.nav.cta}
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-[var(--ink)] hover:bg-[var(--line)] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {menuOpen ? (
              <>
                <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[var(--paper)] border-t border-[var(--line)] px-6 py-4 flex flex-col gap-4"
        >
          {site.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-[var(--ink)] py-1"
              onClick={closeMobileMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-2 inline-flex items-center justify-center bg-[var(--honey)] text-[var(--ink)] text-sm font-semibold px-5 py-3 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            {site.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
