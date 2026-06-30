import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — Noveksia",
  robots: { index: false },
};

export default function Privacidad() {
  return (
    <main className="min-h-screen bg-[var(--teal)] px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-sm text-white/50 hover:text-white transition-colors mb-10 inline-block">
          ← Volver al inicio
        </a>

        <h1 className="text-heading text-3xl sm:text-4xl text-white mb-10">Política de Privacidad</h1>

        <div className="flex flex-col gap-8 text-white/70 text-base leading-relaxed">

          <section>
            <h2 className="text-heading text-lg text-white mb-3">Responsable del tratamiento</h2>
            <ul className="flex flex-col gap-1.5 list-none m-0 p-0">
              <li><strong className="text-white">Responsable:</strong> Alberto Alonso Ferrer</li>
              <li><strong className="text-white">NIF:</strong> 54230282P</li>
              <li><strong className="text-white">Domicilio:</strong> Calle de la Toronga 23</li>
              <li><strong className="text-white">Correo electrónico:</strong> noveksia@gmail.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading text-lg text-white mb-3">¿Qué datos tratamos y con qué finalidad?</h2>
            <p>Tratamos los datos personales que nos facilitas a través del formulario de contacto: <strong className="text-white">nombre, correo electrónico y/o teléfono/WhatsApp, tipo de negocio y el contenido de tu mensaje</strong>. La finalidad es <strong className="text-white">atender tu consulta, ponernos en contacto contigo y, en su caso, prepararte una propuesta de servicios</strong>. También tratamos datos técnicos de navegación necesarios para el funcionamiento del sitio.</p>
          </section>

          <section>
            <h2 className="text-heading text-lg text-white mb-3">Base jurídica</h2>
            <ul className="flex flex-col gap-2 list-none m-0 p-0">
              <li>El <strong className="text-white">consentimiento</strong> que prestas al enviar el formulario (art. 6.1.a RGPD).</li>
              <li>La aplicación de <strong className="text-white">medidas precontractuales</strong> a petición tuya, para responder a tu solicitud y, en su caso, elaborar una propuesta (art. 6.1.b RGPD).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading text-lg text-white mb-3">¿Durante cuánto tiempo conservamos los datos?</h2>
            <p>Conservaremos tus datos mientras gestionamos tu consulta y la relación que pueda derivarse. Si no llega a iniciarse una relación, los suprimiremos en un plazo razonable, salvo que debamos conservarlos para cumplir obligaciones legales. Puedes retirar tu consentimiento en cualquier momento.</p>
          </section>

          <section>
            <h2 className="text-heading text-lg text-white mb-3">Destinatarios y encargados del tratamiento</h2>
            <p className="mb-3">No cedemos tus datos a terceros, salvo obligación legal. Para prestar el servicio nos apoyamos en proveedores que actúan como <strong className="text-white">encargados del tratamiento</strong>:</p>
            <ul className="flex flex-col gap-1.5 list-none m-0 p-0">
              <li><strong className="text-white">Vercel Inc.</strong> — alojamiento del sitio web.</li>
              <li><strong className="text-white">Resend (Plus Five Five, Inc.)</strong> — envío de correos electrónicos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading text-lg text-white mb-3">Transferencias internacionales</h2>
            <p>Los proveedores anteriores están ubicados en <strong className="text-white">Estados Unidos</strong>, por lo que se producen transferencias internacionales de datos. Estas se amparan en garantías adecuadas, como las <strong className="text-white">Cláusulas Contractuales Tipo</strong> aprobadas por la Comisión Europea y/o la adhesión de dichos proveedores al <strong className="text-white">Marco de Privacidad de Datos UE-EE. UU. (Data Privacy Framework)</strong>.</p>
          </section>

          <section>
            <h2 className="text-heading text-lg text-white mb-3">Tus derechos</h2>
            <p>Puedes ejercer tus derechos de <strong className="text-white">acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad</strong> escribiendo a <a href="mailto:noveksia@gmail.com" className="text-[var(--honey)] hover:text-white transition-colors">noveksia@gmail.com</a>, indicando el derecho que deseas ejercer y adjuntando copia de un documento identificativo. Si consideras que el tratamiento no se ajusta a la normativa, puedes presentar una reclamación ante la <strong className="text-white">Agencia Española de Protección de Datos (AEPD)</strong> — <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[var(--honey)] hover:text-white transition-colors">www.aepd.es</a>.</p>
          </section>

          <section>
            <h2 className="text-heading text-lg text-white mb-3">Veracidad y seguridad</h2>
            <p>Te comprometes a facilitar datos veraces. Aplicamos las medidas técnicas y organizativas adecuadas para proteger tus datos.</p>
          </section>

        </div>
      </div>
    </main>
  );
}
