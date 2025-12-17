import { ChevronDown, Instagram } from 'lucide-react';
import heroImage from '@/assets/hero-tattoo.jpg';
import { useI18n } from '@/i18n/context';

export const HeroSection = () => {
  const { copy } = useI18n();
  const { site, ui } = copy;

  const scrollToGallery = () => {
    const element = document.querySelector('#galeria');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-ink/50" />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto stagger-children">
          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-primary tracking-[0.3em] uppercase mb-4">
            {site.artist.location}
          </p>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 text-shadow">
            {site.artist.name.split(' ')[0]}
            <span className="text-gradient-gold block">
              {site.artist.name.split(' ')[1]}
            </span>
          </h1>

          {/* Tagline */}
          <p className="font-body text-xl md:text-2xl text-foreground/80 mb-8 italic">
            "{site.artist.tagline}"
          </p>

          {/* Description */}
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            {site.artist.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${site.artist.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-wider uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_hsl(38_92%_50%/0.5)]"
            >
              <span className="relative z-10">{site.cta.buttonText}</span>
              <div className="absolute inset-0 bg-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
            
            <a
              href={site.artist.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 border border-foreground/30 text-foreground font-display text-sm tracking-wider uppercase hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              <span>{site.artist.instagram}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToGallery}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-primary transition-colors animate-bounce"
        aria-label={ui.hero.scrollAria}
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45 animate-pulse-glow hidden lg:block" />
      <div className="absolute bottom-40 right-10 w-24 h-24 border border-primary/10 rotate-12 hidden lg:block" />
    </section>
  );
};
