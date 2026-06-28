import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal — Noveksia",
  robots: { index: false },
};

export default function AvisoLegal() {
  return (
    <main className="min-h-screen bg-[var(--paper)] px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors mb-10 inline-block">
          ← Volver al inicio
        </a>

        <h1 className="text-heading text-3xl sm:text-4xl text-[var(--ink)] mb-10">Aviso Legal</h1>

        <div className="flex flex-col gap-8 text-[var(--muted)] text-base leading-relaxed">

          <section>
            <h2 className="text-heading text-lg text-[var(--ink)] mb-3">Identificación del titular</h2>
            <p className="mb-3">En cumplimiento del artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que este sitio web es titularidad de:</p>
            <ul className="flex flex-col gap-1.5 list-none m-0 p-0">
              <li><strong className="text-[var(--ink)]">Titular:</strong> Alberto Alonso Ferrer</li>
              {/* NIF/CIF — pendiente de completar antes de publicar */}
              <li><strong className="text-[var(--ink)]">Domicilio:</strong> Calle de la Toronga 23</li>
              <li><strong className="text-[var(--ink)]">Correo electrónico:</strong> noveksia@gmail.com</li>
              {/* Sitio web — pendiente de confirmar dominio */}
              <li><strong className="text-[var(--ink)]">Actividad:</strong> prestación de servicios de automatización y consultoría tecnológica basada en inteligencia artificial.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading text-lg text-[var(--ink)] mb-3">Objeto</h2>
            <p>El presente aviso legal regula el acceso y uso del sitio web (en adelante, «el sitio»). El acceso al sitio implica la aceptación de estas condiciones.</p>
          </section>

          <section>
            <h2 className="text-heading text-lg text-[var(--ink)] mb-3">Condiciones de uso</h2>
            <p>El usuario se compromete a hacer un uso adecuado de los contenidos del sitio y a no emplearlos para actividades ilícitas, lesivas de derechos de terceros o que puedan dañar, inutilizar o sobrecargar el sitio.</p>
          </section>

          <section>
            <h2 className="text-heading text-lg text-[var(--ink)] mb-3">Propiedad intelectual e industrial</h2>
            <p>Todos los contenidos del sitio (textos, imágenes, logotipos, diseño, código y marca «Noveksia») son titularidad de Alberto Alonso Ferrer o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o transformación sin autorización expresa.</p>
          </section>

          <section>
            <h2 className="text-heading text-lg text-[var(--ink)] mb-3">Responsabilidad</h2>
            <p>El titular no se hace responsable de los daños derivados del uso del sitio ni de la indisponibilidad temporal del mismo por causas técnicas. El sitio puede contener enlaces a páginas de terceros, sobre cuyos contenidos el titular no asume responsabilidad alguna.</p>
          </section>

          <section>
            <h2 className="text-heading text-lg text-[var(--ink)] mb-3">Legislación aplicable y jurisdicción</h2>
            <p>Estas condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio del usuario cuando este sea consumidor, o a los del domicilio del titular en los demás casos.</p>
          </section>

        </div>
      </div>
    </main>
  );
}
