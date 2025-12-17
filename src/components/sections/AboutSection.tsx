import { RefObject } from 'react';
import { Section } from '@/components/layout/Section';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import aboutPhoto from '@/assets/521166430_18516595282053207_231837085593717906_n.jpg';
import { useI18n } from '@/i18n/context';

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { copy } = useI18n();
  const { site, ui } = copy;

  return (
    <Section id="sobre-mi" className="py-20 bg-smoke relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 border border-primary rotate-45" />
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-primary -rotate-12" />
      </div>

      <div ref={ref as RefObject<HTMLDivElement>} className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={cn(
              'relative aspect-[4/5] max-w-md mx-auto lg:mx-0 transition-all duration-1000',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            )}
          >
            <img
              src={aboutPhoto}
              alt="Silva Tattoo Artist"
              className="w-full h-full object-cover"
            />
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-primary/30 -z-10" />
            <div className="absolute -inset-8 border border-primary/10 -z-20" />
            
            {/* Experience Badge */}
            <div className="absolute -right-4 lg:-right-8 -bottom-4 lg:-bottom-8 bg-primary text-primary-foreground p-6 text-center">
              <p className="font-display text-3xl">8+</p>
              <p className="font-body text-sm uppercase tracking-wider">Años</p>
            </div>
          </div>

          {/* Content */}
          <div
            className={cn(
              'transition-all duration-1000 delay-300',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            )}
          >
            <p className="font-body text-primary tracking-[0.3em] uppercase mb-4">
              {ui.about.eyebrow}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
              {site.about.title}
            </h2>

            <div className="space-y-6">
              {site.about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-body text-lg text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="font-display text-2xl text-primary italic">
                Silva
              </p>
              <p className="font-body text-muted-foreground">
                Artista Tatuador · {site.artist.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
