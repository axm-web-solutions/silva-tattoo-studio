import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.jpg';
import { useI18n } from '@/i18n/context';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { copy, locale, setLocale } = useI18n();
  const { site } = copy;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50 py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#inicio');
          }}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt={site.artist.logoAlt || site.artist.name}
            className="h-10 w-10 object-contain"
            loading="lazy"
          />
          <span className="font-display text-xl md:text-2xl tracking-wider text-primary hover:text-gold-light transition-colors">
            {site.artist.name.toUpperCase()}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {site.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="font-body text-lg text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={site.artist.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <Select value={locale} onValueChange={(val) => setLocale(val as any)}>
            <SelectTrigger className="w-28 h-10 border-border/60 bg-card text-foreground">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="es">🇪🇸 Español</SelectItem>
              <SelectItem value="en">🇺🇸 English</SelectItem>
              <SelectItem value="fr">🇫🇷 Français</SelectItem>
            </SelectContent>
          </Select>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 top-[60px] bg-background/98 backdrop-blur-lg transition-all duration-500 z-40',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {site.navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="font-display text-2xl text-foreground hover:text-primary transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.artist.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary mt-4"
          >
            <Instagram className="w-6 h-6" />
            <span className="font-body text-lg">{site.artist.instagram}</span>
          </a>
          <Select
            value={locale}
            onValueChange={(val) => {
              setLocale(val as any);
              setIsMobileMenuOpen(false);
            }}
          >
            <SelectTrigger className="w-40 h-12 border-border/60 bg-card text-foreground">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="es">🇪🇸 Español</SelectItem>
              <SelectItem value="en">🇺🇸 English</SelectItem>
              <SelectItem value="fr">🇫🇷 Français</SelectItem>
            </SelectContent>
          </Select>
        </nav>
      </div>
    </header>
  );
};
