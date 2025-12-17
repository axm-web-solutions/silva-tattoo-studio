export type Locale = "es" | "en" | "fr";

export type NavItem = { label: string; href: string };
export type ServiceItem = { id: number; title: string; description: string; icon: string };
export type StatItem = { value: string; label: string };
export type GalleryItem = {
  id: number;
  category: string;
  title: string;
  alt: string;
  imageUrl: string;
};

export type SiteCopy = {
  artist: {
    name: string;
    tagline: string;
    description: string;
    location: string;
    experience: string;
    instagram: string;
    instagramUrl: string;
    whatsapp: string;
    email: string;
    logoAlt?: string;
  };
  navigation: NavItem[];
  services: ServiceItem[];
  stats: StatItem[];
  about: {
    title: string;
    paragraphs: string[];
  };
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  footer: {
    location: string;
  };
};

export type UiCopy = {
  hero: {
    scrollAria: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    filters: {
      todos: string;
      realismo: string;
      blackwork: string;
      "linea-fina": string;
      lettering: string;
    };
  };
  about: {
    eyebrow: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    bookingTitle: string;
    bookingSubtitle: string;
    nameLabel: string;
    dateLabel: string;
    timeLabel: string;
    ideaLabel: string;
    ideaPlaceholder: string;
    errorRequired: string;
    disclaimer: string;
    reserveButton: string;
    hours: string;
    whatsappTemplate: string;
  };
};

export type I18nCopy = {
  site: SiteCopy;
  ui: UiCopy;
};

export const copyByLocale: Record<Locale, I18nCopy> = {
  es: {
    site: {
      artist: {
        name: "Silva Tattoo",
        tagline: "Arte en tu piel",
        description:
          "Artista tatuador profesional especializado en realismo, blackwork y diseños personalizados. Transformando ideas en obras de arte permanentes.",
        location: "Colombia",
        experience: "8+ años de experiencia",
        instagram: "@_silvatattoo",
        instagramUrl: "https://www.instagram.com/_silvatattoo/",
        whatsapp: "+57 300 3508267",
        email: "contacto@silvatattoo.com",
        logoAlt: "Logo Silva Tattoo",
      },
      navigation: [
        { label: "Inicio", href: "#inicio" },
        { label: "Galería", href: "#galeria" },
        { label: "Servicios", href: "#servicios" },
        { label: "Sobre Mí", href: "#sobre-mi" },
        { label: "Contacto", href: "#contacto" },
      ],
      services: [
        {
          id: 1,
          title: "Realismo",
          description: "Tatuajes hiperrealistas que capturan cada detalle con precisión fotográfica.",
          icon: "Eye",
        },
        {
          id: 2,
          title: "Blackwork",
          description: "Diseños en negro sólido con patrones geométricos y orgánicos impactantes.",
          icon: "Palette",
        },
        {
          id: 3,
          title: "Línea Fina",
          description: "Trazos delicados y precisos para diseños elegantes y minimalistas.",
          icon: "Pen",
        },
        {
          id: 4,
          title: "Cover Up",
          description: "Transformamos tatuajes antiguos en nuevas obras de arte.",
          icon: "Layers",
        },
        {
          id: 5,
          title: "Diseño Personalizado",
          description: "Creamos diseños únicos basados en tus ideas y visión personal.",
          icon: "Sparkles",
        },
        {
          id: 6,
          title: "Lettering",
          description: "Tipografías artísticas y caligrafía personalizada para tu mensaje.",
          icon: "Type",
        },
      ],
      stats: [
        { value: "2000+", label: "Tatuajes Realizados" },
        { value: "8+", label: "Años de Experiencia" },
        { value: "100%", label: "Higiene y Seguridad" },
        { value: "5★", label: "Calificación Clientes" },
      ],
      about: {
        title: "Mi Historia",
        paragraphs: [
          "Desde pequeño, el arte fue mi forma de expresión. Comencé dibujando en cualquier superficie disponible, y con el tiempo, descubrí que la piel era el lienzo perfecto para crear obras que cuentan historias.",
          "Después de años de formación y práctica, he desarrollado un estilo único que combina técnicas tradicionales con enfoques contemporáneos. Cada tatuaje que realizo es una colaboración entre tu visión y mi arte.",
          "Mi estudio en Colombia está diseñado para ofrecerte una experiencia cómoda y segura. Utilizo solo materiales de la más alta calidad y sigo estrictos protocolos de higiene.",
        ],
      },
      cta: {
        title: "¿Listo para tu próximo tatuaje?",
        subtitle: "Agenda tu cita y hagamos realidad tu idea",
        buttonText: "Agendar Cita",
      },
      footer: {
        location: "Colombia",
      },
    },
    ui: {
      hero: {
        scrollAria: "Ir a la galería",
      },
      services: {
        eyebrow: "Especialidades",
        title: "Servicios",
        description: "Cada estilo tiene su propia magia. Descubre cuál resuena contigo.",
      },
      gallery: {
        eyebrow: "Mi Trabajo",
        title: "Galería",
        filters: {
          todos: "Todos",
          realismo: "Realismo",
          blackwork: "Blackwork",
          "linea-fina": "Línea Fina",
          lettering: "Lettering",
        },
      },
      about: {
        eyebrow: "Conóceme",
      },
      contact: {
        eyebrow: "Hablemos",
        title: "Contacto",
        description: "¿Tienes una idea en mente? Me encantaría escucharla. Agenda tu consulta gratuita.",
        bookingTitle: "Agenda tu cita",
        bookingSubtitle: "Selecciona fecha y hora, y finaliza la reserva directamente en WhatsApp.",
        nameLabel: "Nombre",
        dateLabel: "Fecha",
        timeLabel: "Hora",
        ideaLabel: "Idea o estilo",
        ideaPlaceholder: "Describe el estilo o referencia (opcional)",
        errorRequired: "Selecciona la fecha y la hora para continuar.",
        disclaimer: "Al reservar serás dirigido a WhatsApp:",
        reserveButton: "Reservar por WhatsApp",
        hours: "Lunes - Sábado: 10:00 AM - 8:00 PM | Citas con previa reserva",
        whatsappTemplate:
          "Hola, soy {name}. Quisiera agendar una cita para tatuaje el {date} a las {time}. Detalles: {idea}.",
      },
    },
  },
  en: {
    site: {
      artist: {
        name: "Silva Tattoo",
        tagline: "Art on your skin",
        description:
          "Professional tattoo artist specialized in realism, blackwork, and custom designs. Turning ideas into lasting art.",
        location: "Colombia",
        experience: "8+ years of experience",
        instagram: "@_silvatattoo",
        instagramUrl: "https://www.instagram.com/_silvatattoo/",
        whatsapp: "+57 300 3508267",
        email: "contacto@silvatattoo.com",
        logoAlt: "Silva Tattoo logo",
      },
      navigation: [
        { label: "Home", href: "#inicio" },
        { label: "Gallery", href: "#galeria" },
        { label: "Services", href: "#servicios" },
        { label: "About", href: "#sobre-mi" },
        { label: "Contact", href: "#contacto" },
      ],
      services: [
        {
          id: 1,
          title: "Realism",
          description: "Hyper-realistic tattoos capturing every detail with photographic precision.",
          icon: "Eye",
        },
        {
          id: 2,
          title: "Blackwork",
          description: "Solid black designs with striking geometric and organic patterns.",
          icon: "Palette",
        },
        {
          id: 3,
          title: "Fine Line",
          description: "Delicate, precise strokes for elegant and minimalist designs.",
          icon: "Pen",
        },
        {
          id: 4,
          title: "Cover Up",
          description: "We transform old tattoos into new works of art.",
          icon: "Layers",
        },
        {
          id: 5,
          title: "Custom Design",
          description: "Unique pieces crafted from your ideas and personal vision.",
          icon: "Sparkles",
        },
        {
          id: 6,
          title: "Lettering",
          description: "Artistic typography and custom calligraphy for your message.",
          icon: "Type",
        },
      ],
      stats: [
        { value: "2000+", label: "Tattoos Done" },
        { value: "8+", label: "Years Experience" },
        { value: "100%", label: "Hygiene & Safety" },
        { value: "5★", label: "Client Rating" },
      ],
      about: {
        title: "My Story",
        paragraphs: [
          "Since I was a child, art has been my way of expression. I started drawing on any surface I could find, and over time I discovered skin was the perfect canvas to tell stories.",
          "After years of training and practice, I’ve developed a unique style that blends traditional techniques with contemporary approaches. Every tattoo is a collaboration between your vision and my art.",
          "My studio in Colombia is designed to offer you a comfortable, safe experience. I use top-quality materials and follow strict hygiene protocols.",
        ],
      },
      cta: {
        title: "Ready for your next tattoo?",
        subtitle: "Book your session and let’s bring your idea to life",
        buttonText: "Book Now",
      },
      footer: {
        location: "Colombia",
      },
    },
    ui: {
      hero: {
        scrollAria: "Go to gallery",
      },
      services: {
        eyebrow: "Specialties",
        title: "Services",
        description: "Each style has its own magic. Discover which one resonates with you.",
      },
      gallery: {
        eyebrow: "My Work",
        title: "Gallery",
        filters: {
          todos: "All",
          realismo: "Realism",
          blackwork: "Blackwork",
          "linea-fina": "Fine Line",
          lettering: "Lettering",
        },
      },
      about: {
        eyebrow: "About me",
      },
      contact: {
        eyebrow: "Let’s talk",
        title: "Contact",
        description: "Got an idea in mind? I’d love to hear it. Book your free consult.",
        bookingTitle: "Book your session",
        bookingSubtitle: "Pick a date and time, then finalize on WhatsApp.",
        nameLabel: "Name",
        dateLabel: "Date",
        timeLabel: "Time",
        ideaLabel: "Idea or style",
        ideaPlaceholder: "Describe style or reference (optional)",
        errorRequired: "Please select date and time to continue.",
        disclaimer: "You’ll be redirected to WhatsApp:",
        reserveButton: "Book via WhatsApp",
        hours: "Mon - Sat: 10:00 AM - 8:00 PM | By appointment",
        whatsappTemplate:
          "Hi, I'm {name}. I'd like to book a tattoo on {date} at {time}. Details: {idea}.",
      },
    },
  },
  fr: {
    site: {
      artist: {
        name: "Silva Tattoo",
        tagline: "Art sur ta peau",
        description:
          "Artiste tatoueur professionnel spécialisé en réalisme, blackwork et designs personnalisés. Transformer les idées en œuvres durables.",
        location: "Colombie",
        experience: "8+ ans d'expérience",
        instagram: "@_silvatattoo",
        instagramUrl: "https://www.instagram.com/_silvatattoo/",
        whatsapp: "+57 300 3508267",
        email: "contacto@silvatattoo.com",
        logoAlt: "Logo Silva Tattoo",
      },
      navigation: [
        { label: "Accueil", href: "#inicio" },
        { label: "Galerie", href: "#galeria" },
        { label: "Services", href: "#servicios" },
        { label: "À propos", href: "#sobre-mi" },
        { label: "Contact", href: "#contacto" },
      ],
      services: [
        {
          id: 1,
          title: "Réalisme",
          description: "Tattoos hyperréalistes capturant chaque détail avec précision photographique.",
          icon: "Eye",
        },
        {
          id: 2,
          title: "Blackwork",
          description: "Motifs noirs intenses avec des formes géométriques et organiques marquantes.",
          icon: "Palette",
        },
        {
          id: 3,
          title: "Fine line",
          description: "Traits fins et précis pour des designs élégants et minimalistes.",
          icon: "Pen",
        },
        {
          id: 4,
          title: "Cover Up",
          description: "Nous transformons les anciens tattoos en nouvelles œuvres d’art.",
          icon: "Layers",
        },
        {
          id: 5,
          title: "Design personnalisé",
          description: "Des pièces uniques créées à partir de tes idées et de ta vision.",
          icon: "Sparkles",
        },
        {
          id: 6,
          title: "Lettering",
          description: "Typographie artistique et calligraphie sur mesure pour ton message.",
          icon: "Type",
        },
      ],
      stats: [
        { value: "2000+", label: "Tattoos réalisés" },
        { value: "8+", label: "Années d’expérience" },
        { value: "100%", label: "Hygiène & sécurité" },
        { value: "5★", label: "Avis clients" },
      ],
      about: {
        title: "Mon Histoire",
        paragraphs: [
          "Depuis enfant, l’art est mon langage. Je dessinais partout, et j’ai découvert que la peau était la toile parfaite pour raconter des histoires.",
          "Après des années d’apprentissage et de pratique, j’ai développé un style unique qui mêle techniques traditionnelles et approches contemporaines. Chaque tattoo est une collaboration entre ta vision et mon art.",
          "Mon studio en Colombie est conçu pour t’offrir une expérience confortable et sûre. J’utilise des matériaux de haute qualité et des protocoles d’hygiène stricts.",
        ],
      },
      cta: {
        title: "Prêt pour ton prochain tattoo ?",
        subtitle: "Réserve ta séance et donnons vie à ton idée",
        buttonText: "Réserver",
      },
      footer: {
        location: "Colombie",
      },
    },
    ui: {
      hero: {
        scrollAria: "Aller à la galerie",
      },
      services: {
        eyebrow: "Spécialités",
        title: "Services",
        description: "Chaque style a sa magie. Découvre celui qui te correspond.",
      },
      gallery: {
        eyebrow: "Mon travail",
        title: "Galerie",
        filters: {
          todos: "Tous",
          realismo: "Réalisme",
          blackwork: "Blackwork",
          "linea-fina": "Fine line",
          lettering: "Lettering",
        },
      },
      about: {
        eyebrow: "À propos",
      },
      contact: {
        eyebrow: "On discute",
        title: "Contact",
        description: "Une idée en tête ? Raconte-moi. Réserve ta consultation gratuite.",
        bookingTitle: "Réserve ta séance",
        bookingSubtitle: "Choisis date et heure, puis finalise sur WhatsApp.",
        nameLabel: "Nom",
        dateLabel: "Date",
        timeLabel: "Heure",
        ideaLabel: "Idée ou style",
        ideaPlaceholder: "Décris le style ou une référence (optionnel)",
        errorRequired: "Choisis la date et l’heure pour continuer.",
        disclaimer: "Tu seras redirigé vers WhatsApp :",
        reserveButton: "Réserver via WhatsApp",
        hours: "Lun - Sam : 10h00 - 20h00 | Sur rendez-vous",
        whatsappTemplate:
          "Salut, c’est {name}. Je voudrais réserver un tattoo le {date} à {time}. Détails : {idea}.",
      },
    },
  },
};

