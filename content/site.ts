// ─────────────────────────────────────────────────────────────────────────────
// content/site.ts — Fuente de verdad para TODO el copy y datos de Noveksia.
// Edita aquí sin tocar los componentes.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  brand: {
    name: "Noveksia",
    tagline: "Automatización con IA para cualquier negocio",
    domain: "noveksia.com", // pendiente de confirmar
    email: "noveksia@gmail.com",
    social: {
      linkedin: "#",
      instagram: "#",
    },
  },

  nav: {
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Para quién", href: "#para-quien" },
      { label: "Cómo trabajamos", href: "#como-trabajamos" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Habla con nosotros",
  },

  hero: {
    eyebrow: "Automatización con IA",
    headline: "Recupera tu tiempo.\nVende más.",
    subheadline:
      "Atendemos a tus clientes, captamos leads y mantenemos tu negocio activo — con IA. Tú te centras en lo que importa.",
    cta: { label: "Pide tu diagnóstico gratis", href: "#contacto" },
    ctaSecondary: { label: "Ver cómo funciona", href: "#servicios" },
    floatingMessages: [
      "¿Dónde está mi pedido?",
      "¿Tenéis cita el jueves?",
      "¿Hacéis envíos?",
      "¿Abrís el domingo?",
      "¿Te queda talla M?",
      "Quiero una devolución",
      "¿Qué horario tenéis?",
      "¿Hacéis descuentos?",
    ],
    // Conversación guionizada para el mini-demo del asistente
    demo: {
      title: "Tu asistente IA",
      subtitle: "Disponible 24/7, responde al instante",
      conversations: [
        {
          id: "ecommerce",
          tab: "Tienda online",
          messages: [
            { from: "user", text: "¿Dónde está mi pedido #4821?" },
            {
              from: "bot",
              text: "Tu pedido #4821 salió de almacén esta mañana. Llegará mañana antes de las 14h. ¿Te envío el seguimiento por WhatsApp?",
              delay: 800,
            },
            { from: "user", text: "Sí, gracias" },
            {
              from: "bot",
              text: "¡Listo! Ya tienes el enlace en tu móvil. Que lo disfrutes 😊",
              delay: 600,
            },
          ],
        },
        {
          id: "local",
          tab: "Negocio físico",
          messages: [
            { from: "user", text: "¿Tenéis hueco esta semana para una cita?" },
            {
              from: "bot",
              text: "Sí, tenemos disponibilidad el miércoles a las 10h o el jueves a las 17h. ¿Cuál te viene mejor?",
              delay: 800,
            },
            { from: "user", text: "El jueves a las 17h" },
            {
              from: "bot",
              text: "Cita confirmada para el jueves a las 17h. Te mando un recordatorio el día antes 👍",
              delay: 600,
            },
          ],
        },
      ],
    },
  },

  problem: {
    eyebrow: "¿Te suena esto?",
    items: [
      {
        icon: "clock",
        text: "Pasas más tiempo respondiendo mensajes que haciendo crecer tu negocio.",
      },
      {
        icon: "inbox",
        text: "Los clientes preguntan lo mismo una y otra vez — y no puedes desconectar.",
      },
      {
        icon: "trend-down",
        text: "Sabes que deberías hacer más marketing, pero no tienes ni tiempo ni energía.",
      },
    ],
    conclusion:
      "No es que te falte capacidad. Es que nadie debería llevar solo un negocio y atender a todo el mundo al mismo tiempo.",
  },

  services: {
    eyebrow: "Lo que hacemos",
    headline: "Automatizamos lo repetitivo. Tú haces lo que importa.",
    items: [
      {
        id: "atencion",
        icon: "chat",
        title: "Atención al cliente",
        description:
          "Un asistente IA que atiende dudas, seguimientos de pedido, devoluciones y reservas — las 24 horas, los 7 días.",
        benefit: "Ahorra hasta 3 horas al día en mensajes repetitivos.",
        examples: ["¿Dónde está mi pedido?", "¿Hacéis devoluciones?", "¿Tenéis talla XL?"],
      },
      {
        id: "captacion",
        icon: "magnet",
        title: "Captación de leads",
        description:
          "Recupera carritos abandonados, recomienda productos y cualifica clientes potenciales por email o WhatsApp.",
        benefit: "Recupera entre un 10 y un 25% de los carritos que se iban sin comprar.",
        examples: ["Recordatorio de carrito", "Recomendación personalizada", "Cualificación por WhatsApp"],
      },
      {
        id: "marketing",
        icon: "sparkles",
        title: "Marketing y contenido",
        description:
          "Fichas de producto, emails y posts para redes generados automáticamente con tu voz y tu estilo.",
        benefit: "Publica cada semana sin escribir nada tú.",
        examples: ["Fichas de producto", "Newsletter mensual", "Posts para Instagram"],
      },
    ],
  },

  audience: {
    eyebrow: "Para quién",
    headline: "Mismo problema, dos mundos distintos",
    tabs: [
      {
        id: "ecommerce",
        label: "Tienda online",
        description:
          "Tienes una tienda en Shopify, WooCommerce o similar. Estás solo o con un equipo pequeño y no das abasto con el soporte y el marketing.",
        painPoints: [
          "\"¿Dónde está mi pedido?\" — 20 veces al día",
          "Carritos abandonados que no recuperas",
          "Fichas de producto a medias por falta de tiempo",
          "Newsletter que llevas meses sin mandar",
        ],
        solution:
          "Automatizamos el soporte, recuperamos carritos y generamos el contenido. Tú revisas y apruebas.",
      },
      {
        id: "local",
        label: "Negocio físico",
        description:
          "Eres autónomo o tienes una micro-empresa de servicios o producto. Contestas tú mismo los mensajes de Instagram, WhatsApp y el teléfono.",
        painPoints: [
          "\"¿Tenéis disponibilidad el martes?\" — sin parar",
          "Clientes que preguntan y no vuelven porque tardas en contestar",
          "Sin tiempo para publicar en redes",
          "Agenda desorganizada y reservas manuales",
        ],
        solution:
          "Un asistente IA atiende, reserva y capta. Tú ves el resumen del día al levantarte.",
      },
    ],
  },

  process: {
    eyebrow: "Cómo trabajamos",
    headline: "Del problema al piloto en menos de dos semanas",
    steps: [
      {
        number: "01",
        title: "Diagnóstico",
        description:
          "Una llamada de 30 minutos para entender tu negocio, tus cuellos de botella y qué tareas te roban más tiempo.",
        duration: "30 min",
      },
      {
        number: "02",
        title: "Montaje",
        description:
          "Configuramos el asistente con el conocimiento de tu negocio: productos, preguntas frecuentes, tono de voz.",
        duration: "3–5 días",
      },
      {
        number: "03",
        title: "Puesta en marcha",
        description:
          "Conectamos con tus canales (WhatsApp, Instagram, email…) y hacemos pruebas contigo antes de lanzar.",
        duration: "2–3 días",
      },
      {
        number: "04",
        title: "Soporte continuo",
        description:
          "Ajustamos, mejoramos y ampliamos según los datos reales. Tú nunca estás solo después del lanzamiento.",
        duration: "Siempre",
      },
    ],
  },

  results: {
    eyebrow: "Resultados",
    headline: "Lo que la automatización consigue para negocios como el tuyo",
    metrics: [
      { value: "–65%", label: "Tiempo en soporte al cliente" },
      { value: "+18%", label: "Recuperación de carritos" },
      { value: "3–5h", label: "Ahorradas a la semana de media" },
      { value: "< 2s", label: "Tiempo de respuesta del asistente" },
    ],
    testimonials: [],
  },

  about: {
    eyebrow: "Quiénes somos",
    headline: "Una agencia nueva, pero no improvisada",
    paragraphs: [
      "Noveksia nació de una idea concreta: las herramientas de IA que usan las grandes empresas deberían estar al alcance de cualquier negocio pequeño.",
      "Somos un equipo especializado en automatización con IA. No somos una agencia de marketing de toda la vida que ha añadido 'IA' a su nombre — construimos asistentes, flujos y sistemas que funcionan de verdad.",
      "Trabajamos con negocios pequeños porque es donde el impacto es inmediato y visible. Cuando a ti te sobra una tarde libre, algo hemos hecho bien.",
    ],
  },

  faq: {
    eyebrow: "Preguntas frecuentes",
    headline: "Lo que nos preguntan antes de empezar",
    items: [
      {
        question: "¿Cuánto cuesta?",
        answer:
          "Depende del número de servicios y del volumen de tu negocio. Hacemos un diagnóstico gratuito primero para que el precio tenga sentido para lo que realmente necesitas. No hay contratos anuales obligatorios.",
      },
      {
        question: "¿Cuánto tiempo tardáis en montarlo?",
        answer:
          "Un asistente básico puede estar funcionando en menos de una semana. La integración completa con todos tus canales suele tardar entre 10 y 15 días desde el primer contacto.",
      },
      {
        question: "¿Sirve para mi tipo de negocio?",
        answer:
          "Si recibes mensajes repetitivos o quieres captar y retener clientes, sí. Está pensado para e-commerce, negocios locales de servicios, hostelería, clínicas, academias y más. Si no encaja, te lo decimos en el diagnóstico.",
      },
      {
        question: "¿Qué necesito aportar yo?",
        answer:
          "Poco. Una llamada de 30 minutos, acceso a tus canales de comunicación y un documento con las preguntas frecuentes de tu negocio (si no lo tienes, te ayudamos a crearlo). El resto lo hacemos nosotros.",
      },
      {
        question: "¿El asistente puede equivocarse?",
        answer:
          "Sí, y lo decimos sin problema. Por eso empezamos con un piloto supervisado y ajustamos según los casos reales. Con el tiempo, los errores se reducen a cero prácticamente. Siempre hay un mecanismo de escalado a ti si la IA no sabe la respuesta.",
      },
      {
        question: "¿Qué pasa si quiero cancelar?",
        answer:
          "Sin penalizaciones. Avisas con 15 días de antelación y listo. Nos quedamos con que hayas recuperado tiempo y vendido más mientras estuvimos juntos.",
      },
    ],
  },

  contact: {
    eyebrow: "Contacto",
    headline: "Cuéntanos cómo podemos ayudarte",
    subheadline:
      "Sin compromisos. Una llamada de 30 minutos para entender tu situación y ver si encajamos.",
    cta: "Enviar mensaje",
    businessTypes: [
      "Tienda online (Shopify, WooCommerce…)",
      "Tienda física o negocio físico",
      "Servicios (fisio, academia, clínica…)",
      "Hostelería (restaurante, bar, cafetería…)",
      "Otro",
    ],
  },

  footer: {
    tagline: "Automatización con IA para cualquier negocio.",
    links: [
      { label: "Aviso legal", href: "/aviso-legal" },
      { label: "Privacidad", href: "/privacidad" },
      { label: "Cookies", href: "/cookies" },
    ],
    legal: "© 2026 Noveksia. Todos los derechos reservados.",
  },
};
