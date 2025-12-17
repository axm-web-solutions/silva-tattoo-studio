// Site data - Easily customizable for the tattoo artist
export const siteData = {
  artist: {
    name: "Silva Tattoo",
    tagline: "Arte en tu piel",
    description: "Artista tatuador profesional especializado en realismo, blackwork y diseños personalizados. Transformando ideas en obras de arte permanentes.",
    location: "Colombia",
    experience: "8+ años de experiencia",
    instagram: "@_silvatattoo",
    instagramUrl: "https://www.instagram.com/_silvatattoo/",
    whatsapp: "+57 300 3508267",
    email: "contacto@silvatattoo.com",
    logoAlt: "Silva Tattoo logo",
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
    copyright: "© 2024 Silva Tattoo. Todos los derechos reservados.",
    location: "Colombia",
  },
};

// Gallery images - placeholder URLs that should be replaced with actual work
export const galleryImages = [
  {
    id: 1,
    category: "realismo",
    title: "Retrato realista",
    alt: "Tatuaje realista de retrato",
    imageUrl: "https://scontent.cdninstagram.com/v/t51.82787-15/521166430_18516595282053207_231837085593717906_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=107&ig_cache_key=MzY3OTAzNTUzOTQ5NjE3Nzk3NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=GCsrQsGPAuUQ7kNvwGoKW3a&_nc_oc=AdkKUKh030xSqUg2UxEMn6RtQTFD2NlqsI1NmjyXgUyK-CvzM4gI2mAu7VJuNSH6EvQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=1qlbpWF9i-b693nO8S3Nww&oh=00_AfnLzW1rLkTWKz3S2vdCyYc4HIUrz4t-Ow37isI6naBYBw&oe=69480283",
  },
  {
    id: 2,
    category: "linea-fina",
    title: "Detalle línea fina",
    alt: "Tatuaje línea fina",
    imageUrl: "https://scontent.cdninstagram.com/v/t51.82787-15/581593899_18541521277053207_3036185750695272176_n.jpg?stp=dst-jpegr_e35_p320x320_tt6&_nc_cat=101&ig_cache_key=Mzc2NTMwMTExNDU1Njc3NDYzMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=jRtxgErmCoMQ7kNvwEUexho&_nc_oc=AdnADYjG1mIwFUaSkqstNbLSJxalGyLHRXfe7As1EOp_aLtnBfaQOL5J6avpaU8KMko&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=1qlbpWF9i-b693nO8S3Nww&oh=00_AfmzxxzryKPZOIh5M7IedpY0AbqwAFeh7PGLqtHA2lKutg&oe=694825CF",
  },
  {
    id: 7,
    category: "realismo",
    title: "Koala y rana",
    alt: "Tatuaje realista de koala y rana",
    imageUrl: "",
  },
  {
    id: 8,
    category: "blackwork",
    title: "Tigre blackwork",
    alt: "Tatuaje tigre blackwork",
    imageUrl: "",
  },
  {
    id: 9,
    category: "realismo",
    title: "Retrato realista brazo",
    alt: "Tatuaje realista de retrato en brazo",
    imageUrl: "",
  },
  {
    id: 10,
    category: "realismo",
    title: "Retrato realista pecho",
    alt: "Tatuaje realista en pecho",
    imageUrl: "",
  },
];
