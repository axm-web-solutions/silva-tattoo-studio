// Site data - Easily customizable for the tattoo artist
export const siteData = {
  artist: {
    name: "Silva Tattoo",
    tagline: "Arte en tu piel",
    description: "Artista tatuador profesional especializado en realismo, blackwork y diseños personalizados. Transformando ideas en obras de arte permanentes.",
    location: "Bogotá, Colombia",
    experience: "8+ años de experiencia",
    instagram: "@_silvatattoo",
    instagramUrl: "https://www.instagram.com/_silvatattoo/",
    whatsapp: "+57 300 123 4567",
    email: "contacto@silvatattoo.com",
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
      "Mi estudio en Bogotá está diseñado para ofrecerte una experiencia cómoda y segura. Utilizo solo materiales de la más alta calidad y sigo estrictos protocolos de higiene.",
    ],
  },
  
  cta: {
    title: "¿Listo para tu próximo tatuaje?",
    subtitle: "Agenda tu cita y hagamos realidad tu idea",
    buttonText: "Agendar Cita",
  },
  
  footer: {
    copyright: "© 2024 Silva Tattoo. Todos los derechos reservados.",
    location: "Bogotá, Colombia",
  },
};

// Gallery images - placeholder URLs that should be replaced with actual work
export const galleryImages = [
  {
    id: 1,
    category: "realismo",
    alt: "Tatuaje realista de retrato",
  },
  {
    id: 2,
    category: "blackwork",
    alt: "Tatuaje blackwork geométrico",
  },
  {
    id: 3,
    category: "linea-fina",
    alt: "Tatuaje de línea fina floral",
  },
  {
    id: 4,
    category: "realismo",
    alt: "Tatuaje realista de animal",
  },
  {
    id: 5,
    category: "blackwork",
    alt: "Tatuaje blackwork mandala",
  },
  {
    id: 6,
    category: "lettering",
    alt: "Tatuaje lettering script",
  },
];
