import { useState, RefObject } from 'react';
import { Section } from '@/components/layout/Section';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { siteData } from '@/data/siteData';

// Import gallery images (local fallback assets)
import photoKoala from '@/assets/584401492_18543347149053207_6067807685082180606_n.jpg';
import photoTigre from '@/assets/553355396_18529682662053207_8862047222774952765_n.jpg';
import photoRetratoBrazo from '@/assets/521166430_18516595282053207_231837085593717906_n.jpg';
import photoRetratoPecho from '@/assets/581593899_18541521277053207_3036185750695272176_n.jpg';

const localImages: Record<number, string> = {
  1: photoRetratoBrazo,
  2: photoRetratoPecho,
  3: photoKoala,
  4: photoTigre,
  5: photoRetratoBrazo,
  6: photoRetratoPecho,
  7: photoKoala,
  8: photoTigre,
  9: photoRetratoBrazo,
  10: photoRetratoPecho,
};

// Default fallback items (shown if no data is provided)
const defaultGallery = [
  { id: 1, category: 'realismo', title: 'Retrato realista', alt: 'Tatuaje realista de retrato', imageUrl: '' },
  { id: 2, category: 'realismo', title: 'Retrato realista pecho', alt: 'Tatuaje realista en pecho', imageUrl: '' },
  { id: 3, category: 'realismo', title: 'Koala y rana', alt: 'Tatuaje realista de koala y rana', imageUrl: '' },
  { id: 4, category: 'blackwork', title: 'Tigre blackwork', alt: 'Tatuaje tigre blackwork', imageUrl: '' },
];

const sourceItems = siteData.galleryImages?.length ? siteData.galleryImages : defaultGallery;

const galleryItems = sourceItems.map((item, index) => {
  const fallbackId = item.id ?? index + 1;
  const src =
    item.imageUrl && item.imageUrl.trim().length > 0
      ? item.imageUrl
      : localImages[fallbackId] ?? localImages[1];

  return {
    id: fallbackId,
    src,
    category: item.category ?? 'otros',
    title: item.title ?? item.alt ?? 'Tatuaje',
    alt: item.alt ?? item.title ?? 'Tatuaje',
  };
});

const uniqueCategories = Array.from(
  new Set(galleryItems.map((item) => item.category || 'otros'))
);

const categories =
  uniqueCategories.length === 0
    ? [{ id: 'todos', label: 'Todos' }]
    : [
        { id: 'todos', label: 'Todos' },
        ...uniqueCategories.map((cat) => ({
          id: cat,
          label: cat
            .replace(/-/g, ' ')
            .replace(/^\w/, (c) => c.toUpperCase()),
        })),
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
