import { useState, RefObject } from 'react';
import { Section } from '@/components/layout/Section';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

// Import gallery images
import tattoo1 from '@/assets/gallery/tattoo-1.jpg';
import tattoo2 from '@/assets/gallery/tattoo-2.jpg';
import tattoo3 from '@/assets/gallery/tattoo-3.jpg';
import tattoo4 from '@/assets/gallery/tattoo-4.jpg';
import tattoo5 from '@/assets/gallery/tattoo-5.jpg';
import tattoo6 from '@/assets/gallery/tattoo-6.jpg';

const galleryItems = [
  { id: 1, src: tattoo1, category: 'realismo', title: 'Retrato de León' },
  { id: 2, src: tattoo2, category: 'blackwork', title: 'Mandala Geométrica' },
  { id: 3, src: tattoo3, category: 'linea-fina', title: 'Rosa Delicada' },
  { id: 4, src: tattoo4, category: 'realismo', title: 'Lobo Salvaje' },
  { id: 5, src: tattoo5, category: 'blackwork', title: 'Geometría Sagrada' },
  { id: 6, src: tattoo6, category: 'lettering', title: 'Script Elegante' },
];

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'realismo', label: 'Realismo' },
  { id: 'blackwork', label: 'Blackwork' },
  { id: 'linea-fina', label: 'Línea Fina' },
  { id: 'lettering', label: 'Lettering' },
];

export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const filteredItems = activeCategory === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <Section id="galeria" className="py-20 bg-smoke">
      {/* Section Header */}
      <div ref={ref as RefObject<HTMLDivElement>} className="text-center mb-12">
        <p className="font-body text-primary tracking-[0.3em] uppercase mb-4">
          Mi Trabajo
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
          Galería
        </h2>
        <div className="w-24 h-0.5 bg-gradient-gold mx-auto" />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              'px-6 py-2 font-body text-sm tracking-wider uppercase transition-all duration-300',
              activeCategory === cat.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-transparent text-muted-foreground border border-border hover:border-primary hover:text-primary'
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              'group relative aspect-[4/5] overflow-hidden cursor-pointer',
              'transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
            onClick={() => setSelectedImage(item)}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-primary text-sm uppercase tracking-wider mb-1">
                {categories.find(c => c.id === item.category)?.label}
              </p>
              <h3 className="font-display text-xl text-foreground">
                {item.title}
              </h3>
            </div>
            {/* Border Animation */}
            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-500" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] animate-scale-in">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-primary text-sm uppercase tracking-wider mb-1">
                {categories.find(c => c.id === selectedImage.category)?.label}
              </p>
              <h3 className="font-display text-2xl text-foreground">
                {selectedImage.title}
              </h3>
            </div>
            <button
              className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <span className="sr-only">Cerrar</span>
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </Section>
  );
};
