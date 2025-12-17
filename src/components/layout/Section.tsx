import { useRef, RefObject } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  fullHeight?: boolean;
  noAnimation?: boolean;
}

export const Section = ({
  id,
  children,
  className,
  containerClassName,
  fullHeight = false,
  noAnimation = false,
}: SectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref as RefObject<HTMLElement>}
      className={cn(
        'relative',
        fullHeight && 'min-h-screen',
        className
      )}
    >
      <div
        className={cn(
          'container mx-auto px-4',
          !noAnimation && 'transition-all duration-1000',
          !noAnimation && (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'),
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
};
