import { Instagram, MapPin, Phone, Mail } from 'lucide-react';
import logo from '@/assets/logo.jpg';
import { useI18n } from '@/i18n/context';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { copy } = useI18n();
  const { site } = copy;

  return (
    <footer className="bg-ink border-t border-border/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-3">
            <img
              src={logo}
              alt={site.artist.logoAlt || site.artist.name}
              className="h-12 w-12 object-contain"
              loading="lazy"
            />
            <div>
              <h3 className="font-display text-2xl text-primary mb-2">
                {site.artist.name.toUpperCase()}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {site.artist.tagline}
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="font-display text-lg text-foreground mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href={`tel:${site.artist.whatsapp.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body"
              >
                <Phone className="w-4 h-4" />
                {site.artist.whatsapp}
              </a>
              <a
                href={`mailto:${site.artist.email}`}
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body"
              >
                <Mail className="w-4 h-4" />
                {site.artist.email}
              </a>
              <p className="flex items-center justify-center gap-2 text-muted-foreground font-body">
                <MapPin className="w-4 h-4" />
                {site.artist.location}
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="font-display text-lg text-foreground mb-4">Sígueme</h4>
            <a
              href={site.artist.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body group"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {site.artist.instagram}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Copyright */}
        <p className="text-center text-muted-foreground font-body text-sm">
          © {currentYear} {site.artist.name}. Todos los derechos reservados.
          <br />
          <span className="text-xs">{site.artist.location}</span>
        </p>
      </div>
    </footer>
  );
};
