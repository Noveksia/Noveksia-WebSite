import { MessageSquare, Target, Sparkles } from "lucide-react";
import { site } from "@/content/site";
import DisplayCards from "@/components/ui/display-cards";

const iconMap: Record<string, React.ReactNode> = {
  chat:     <MessageSquare className="w-5 h-5" />,
  magnet:   <Target className="w-5 h-5" />,
  sparkles: <Sparkles className="w-5 h-5" />,
};

export function Services() {
  const { services } = site;

  const cards = services.items.map((service) => ({
    icon: iconMap[service.icon],
    title: service.title,
    description: service.description,
    benefit: service.benefit,
    examples: service.examples,
  }));

  return (
    <section
      id="servicios"
      className="py-24 px-6 bg-[var(--paper)]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-eyebrow block mb-4">{services.eyebrow}</span>
          <h2
            id="services-heading"
            className="text-heading text-3xl sm:text-4xl text-[var(--ink)]"
          >
            {services.headline}
          </h2>
        </div>

        <DisplayCards cards={cards} />

        <div className="mt-12 text-center max-w-2xl mx-auto flex flex-col gap-3">
          <p className="text-[var(--ink)] font-medium text-base">
            Esto es solo el punto de partida.
          </p>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            Cada negocio tiene sus propios cuellos de botella. Quizás el tuyo no es la atención al cliente
            sino el seguimiento de presupuestos, la gestión de reservas, los recordatorios de pago
            o simplemente no llegar a todo. Nos lo cuentas, y nosotros vemos cómo la IA puede resolverlo.
            Tú decides qué automatizar y en qué orden — nosotros lo construimos.
          </p>
        </div>
      </div>
    </section>
  );
}
