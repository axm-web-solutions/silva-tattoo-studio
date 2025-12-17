import { RefObject } from 'react';
import { Eye, Palette, Pen, Layers, Sparkles, Type, LucideIcon } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { siteData } from '@/data/siteData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  Eye,
  Palette,
  Pen,
  Layers,
  Sparkles,
  Type,
};

export const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Section id="servicios" className="py-20 bg-background">
      {/* Section Header */}
      <div ref={ref as RefObject<HTMLDivElement>} className="text-center mb-16">
        <p className="font-body text-primary tracking-[0.3em] uppercase mb-4">
          Especialidades
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
          Servicios
        </h2>
        <div className="w-24 h-0.5 bg-gradient-gold mx-auto mb-6" />
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
          Cada estilo tiene su propia magia. Descubre cuál resuena contigo.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteData.services.map((service, index) => {
          const IconComponent = iconMap[service.icon];
          
          return (
            <div
              key={service.id}
              className={cn(
                'group relative p-8 bg-card border border-border/50 hover:border-primary/50 transition-all duration-500',
                'hover:shadow-[0_0_30px_hsl(38_92%_50%/0.1)]',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6 flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                {IconComponent && (
                  <IconComponent className="w-8 h-8 text-primary" />
                )}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-primary/0 group-hover:border-primary/30 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-primary/0 group-hover:border-primary/30 transition-colors duration-500" />
            </div>
          );
        })}
      </div>

      {/* Stats */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        {siteData.stats.map((stat, index) => (
          <div
            key={index}
            className={cn(
              'text-center',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
            style={{ transitionDelay: `${(index + 6) * 100}ms` }}
          >
            <p className="font-display text-4xl md:text-5xl text-primary mb-2">
              {stat.value}
            </p>
            <p className="font-body text-muted-foreground uppercase tracking-wider text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
