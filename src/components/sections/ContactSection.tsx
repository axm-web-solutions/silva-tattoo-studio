import { RefObject } from 'react';
import { Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { siteData } from '@/data/siteData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const contactInfo = [
    {
      icon: Phone,
      label: 'WhatsApp',
      value: siteData.artist.whatsapp,
      href: `https://wa.me/${siteData.artist.whatsapp.replace(/[^0-9]/g, '')}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: siteData.artist.email,
      href: `mailto:${siteData.artist.email}`,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: siteData.artist.instagram,
      href: siteData.artist.instagramUrl,
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: siteData.artist.location,
      href: 'https://maps.google.com/?q=Bogota,Colombia',
    },
  ];

  return (
    <Section id="contacto" className="py-20 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/15 rounded-full" />
      </div>

      <div ref={ref as RefObject<HTMLDivElement>} className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-primary tracking-[0.3em] uppercase mb-4">
            Hablemos
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Contacto
          </h2>
          <div className="w-24 h-0.5 bg-gradient-gold mx-auto mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes una idea en mente? Me encantaría escucharla. Agenda tu consulta gratuita.
          </p>
        </div>

        {/* Main CTA */}
        <div
          className={cn(
            'max-w-3xl mx-auto text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <div className="bg-card border border-border p-8 md:p-12">
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              {siteData.cta.title}
            </h3>
            <p className="font-body text-muted-foreground mb-8">
              {siteData.cta.subtitle}
            </p>
            <a
              href={`https://wa.me/${siteData.artist.whatsapp.replace(/[^0-9]/g, '')}?text=Hola!%20Me%20gustaría%20agendar%20una%20cita%20para%20un%20tatuaje.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-display text-sm tracking-wider uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_hsl(38_92%_50%/0.5)]"
            >
              <Phone className="w-5 h-5" />
              <span className="relative z-10">{siteData.cta.buttonText}</span>
              <div className="absolute inset-0 bg-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group p-6 bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 text-center',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-2">
                {item.label}
              </p>
              <p className="font-body text-foreground group-hover:text-primary transition-colors">
                {item.value}
              </p>
            </a>
          ))}
        </div>

        {/* Hours */}
        <div
          className={cn(
            'mt-12 text-center transition-all duration-700 delay-500',
            isVisible ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div className="inline-flex items-center gap-3 text-muted-foreground">
            <Clock className="w-5 h-5" />
            <p className="font-body">
              Lunes - Sábado: 10:00 AM - 8:00 PM | Citas con previa reserva
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
