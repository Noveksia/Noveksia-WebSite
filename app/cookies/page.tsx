import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies — Noveksia",
  robots: { index: false },
};

export default function Cookies() {
  return (
    <main className="min-h-screen bg-[var(--paper)] px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors mb-10 inline-block">
          ← Volver al inicio
        </a>

        <h1 className="text-heading text-3xl sm:text-4xl text-[var(--ink)] mb-10">Política de Cookies</h1>

        <div className="flex flex-col gap-8 text-[var(--muted)] text-base leading-relaxed">

          <section>
            <h2 className="text-heading text-lg text-[var(--ink)] mb-3">¿Qué son las cookies?</h2>
            <p>Son pequeños archivos que se almacenan en tu dispositivo al navegar y permiten que el sitio funcione correctamente.</p>
          </section>

          <section>
            <h2 className="text-heading text-lg text-[var(--ink)] mb-3">Cookies que utiliza este sitio</h2>
            <p className="mb-4">Este sitio utiliza únicamente <strong className="text-[var(--ink)]">cookies técnicas o estrictamente necesarias</strong> para su correcto funcionamiento (por ejemplo, seguridad y preferencias básicas). Estas cookies están exentas del deber de consentimiento conforme al artículo 22.2 de la LSSI.</p>
            <div className="overflow-x-auto rounded-xl border border-[var(--line)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--line)]/60 text-[var(--ink)]">
                    <th className="text-left px-4 py-3 font-semibold">Cookie</th>
                    <th className="text-left px-4 py-3 font-semibold">Proveedor</th>
                    <th className="text-left px-4 py-3 font-semibold">Finalidad</th>
                    <th className="text-left px-4 py-3 font-semibold">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[var(--line)]">
                    <td className="px-4 py-3 font-mono text-xs">__vercel_live_token</td>
                    <td className="px-4 py-3">Vercel</td>
                    <td className="px-4 py-3">Técnica — funcionamiento del alojamiento</td>
                    <td className="px-4 py-3">Sesión</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm italic">Si en el futuro se añaden cookies analíticas o de terceros, se actualizará esta tabla y se activará un banner de consentimiento.</p>
          </section>

          <section>
            <h2 className="text-heading text-lg text-[var(--ink)] mb-3">Gestión de cookies</h2>
            <p>Puedes configurar o eliminar las cookies desde la configuración de tu navegador (Chrome, Firefox, Safari, Edge…). Ten en cuenta que desactivar las cookies técnicas puede afectar al funcionamiento del sitio.</p>
          </section>

        </div>
      </div>
    </main>
  );
}
