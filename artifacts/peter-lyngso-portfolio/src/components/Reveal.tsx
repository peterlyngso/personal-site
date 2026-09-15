import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'up' | 'scale' | 'none';
  margin?: string;
}

export function Reveal({
  children,
  className,
  delay = 0,
  animation = 'up',
  margin = '-50px',
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { rootMargin: margin },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [margin]);

  return (
    <div
      ref={ref}
      className={cn(
        'reveal-base',
        animation === 'scale' && 'reveal-scale',
        animation === 'none' && 'reveal-none',
        isVisible && 'reveal-visible',
        className,
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}