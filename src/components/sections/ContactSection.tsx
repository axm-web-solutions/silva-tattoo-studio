import { RefObject, useState } from 'react';
import { Instagram, Phone, Mail, MapPin, Clock, CalendarClock } from 'lucide-react';
import { format } from 'date-fns';
import { es, enUS, fr } from 'date-fns/locale';
import { Section } from '@/components/layout/Section';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { useI18n } from '@/i18n/context';

export const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { copy, locale } = useI18n();
  const { site, ui } = copy;
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [idea, setIdea] = useState('');
  const [error, setError] = useState<string | null>(null);

  const phoneNumber = site.artist.whatsapp.replace(/[^0-9]/g, '');

  const timeOptions = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
    '8:00 PM',
  ];

  const localeMap = {
    es,
    en: enUS,
    fr,
  } as const;

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      setError(ui.contact.errorRequired);
      return;
    }

    setError(null);
    const formattedDate = format(selectedDate, 'PPP', { locale: localeMap[locale] });
    const clientName = name.trim() || site.artist.name;
    const ideaText = idea.trim() || ui.contact.ideaLabel;

    const template = ui.contact.whatsappTemplate
      .replace("{name}", clientName)
      .replace("{date}", formattedDate)
      .replace("{time}", selectedTime)
      .replace("{idea}", ideaText);

    const message = encodeURIComponent(template);

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const contactLabels: Record<typeof locale, { whatsapp: string; email: string; instagram: string; location: string }> = {
    es: { whatsapp: 'WhatsApp', email: 'Email', instagram: 'Instagram', location: 'Ubicación' },
    en: { whatsapp: 'WhatsApp', email: 'Email', instagram: 'Instagram', location: 'Location' },
    fr: { whatsapp: 'WhatsApp', email: 'Email', instagram: 'Instagram', location: 'Localisation' },
  };

  const contactInfo = [
    {
      icon: Phone,
      label: contactLabels[locale].whatsapp,
      value: site.artist.whatsapp,
      href: `https://wa.me/${site.artist.whatsapp.replace(/[^0-9]/g, '')}`,
    },
    {
      icon: Mail,
      label: contactLabels[locale].email,
      value: site.artist.email,
      href: `mailto:${site.artist.email}`,
    },
    {
      icon: Instagram,
      label: contactLabels[locale].instagram,
      value: site.artist.instagram,
      href: site.artist.instagramUrl,
    },
    {
      icon: MapPin,
      label: contactLabels[locale].location,
      value: site.artist.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(site.artist.location)}`,
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
            {ui.contact.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            {ui.contact.title}
          </h2>
          <div className="w-24 h-0.5 bg-gradient-gold mx-auto mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            {ui.contact.description}
          </p>
        </div>

        {/* Booking Form */}
        <div
          className={cn(
            'max-w-4xl mx-auto mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <div className="bg-card border border-border p-8 md:p-10">
            <div className="flex items-start gap-3 mb-6">
              <CalendarClock className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                  {ui.contact.bookingTitle}
                </h3>
                <p className="font-body text-muted-foreground">
                  {ui.contact.bookingSubtitle}
                </p>
              </div>
            </div>

            <form
              className="grid gap-6 md:grid-cols-2"
              onSubmit={(event) => {
                event.preventDefault();
                handleBooking();
              }}
            >
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">{ui.contact.nameLabel}</Label>
                <Input
                  id="name"
                  placeholder={ui.contact.nameLabel}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label>{ui.contact.dateLabel}</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        'justify-start text-left font-body',
                        !selectedDate && 'text-muted-foreground'
                      )}
                    >
                      <CalendarClock className="mr-2 h-4 w-4" />
                      {selectedDate
                        ? format(selectedDate, "PPP", { locale: localeMap[locale] })
                        : ui.contact.dateLabel}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      locale={es}
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex flex-col gap-2">
                <Label>{ui.contact.timeLabel}</Label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger>
                    <SelectValue placeholder={ui.contact.timeLabel} />
                  </SelectTrigger>
                  <SelectContent>
                    {timeOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="idea">{ui.contact.ideaLabel}</Label>
                <Textarea
                  id="idea"
                  placeholder={ui.contact.ideaPlaceholder}
                  rows={4}
                  value={idea}
                  onChange={(event) => setIdea(event.target.value)}
                />
              </div>

              {error && (
                <p className="md:col-span-2 text-sm text-destructive">{error}</p>
              )}

              <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  {ui.contact.disclaimer}{" "}
                  <span className="text-foreground font-medium">{site.artist.whatsapp}</span>
                </p>
                <Button type="submit" className="group relative px-8 py-3">
                  <Phone className="w-4 h-4 mr-2" />
                  {ui.contact.reserveButton}
                  <span className="absolute inset-0 -z-10 bg-gold-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </Button>
              </div>
            </form>
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
              {ui.contact.hours}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
