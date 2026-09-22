import { useEffect, useRef, useState } from 'react';
import { MediaItem } from '@/data/content';
import { cn } from '@/lib/utils';

type MediaItemViewProps = {
  media: MediaItem;
  fallback?: MediaItem;
  priority?: boolean;
  className?: string;
  testId?: string;
};

function useVideoVisibility(priority: boolean) {
  const ref = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(priority);

  useEffect(() => {
    if (priority || !ref.current) return;

    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '240px 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [priority]);

  return { ref, isVisible };
}

function DarkFallback({ className, testId }: Pick<MediaItemViewProps, 'className' | 'testId'>) {
  return (
    <div
      className={cn('media-fallback', className)}
      aria-hidden="true"
      data-testid={testId ? `${testId}-fallback` : undefined}
    />
  );
}

export function MediaItemView({
  media,
  fallback,
  priority = false,
  className,
  testId,
}: MediaItemViewProps) {
  const [hasError, setHasError] = useState(false);
  const { ref: videoRef, isVisible } = useVideoVisibility(priority);
  const fallbackMedia = fallback?.kind === 'image' && fallback.src ? fallback : undefined;
  const fallbackSrc = media.poster || fallbackMedia?.src;
  const fallbackAlt = fallbackMedia?.alt || media.alt;

  useEffect(() => {
    setHasError(false);
  }, [media.src, media.kind]);

  if (hasError || !media.src) {
    if (fallbackSrc && media.kind === 'video') {
      return (
        <img
          className={className}
          src={fallbackSrc}
          alt={fallbackAlt}
          style={{ objectPosition: fallbackMedia?.objectPosition || media.objectPosition }}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          data-testid={testId ? `${testId}-poster-fallback` : undefined}
        />
      );
    }

    if (fallbackMedia) {
      return (
        <img
          className={className}
          src={fallbackMedia.src}
          alt={fallbackMedia.alt}
          style={{ objectPosition: fallbackMedia.objectPosition }}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          data-testid={testId ? `${testId}-fallback-image` : undefined}
        />
      );
    }

    return <DarkFallback className={className} testId={testId} />;
  }

  if (media.kind === 'video') {
    return (
      <video
        ref={videoRef}
        src={isVisible ? media.src : undefined}
        poster={fallbackSrc}
        autoPlay
        muted
        loop
        playsInline
        preload={priority ? 'auto' : 'metadata'}
        className={className}
        aria-label={media.alt}
        style={{ objectPosition: media.objectPosition }}
        onError={() => setHasError(true)}
        data-testid={testId}
      />
    );
  }

  return (
    <img
      className={className}
      src={media.src}
      alt={media.alt}
      style={{ objectPosition: media.objectPosition }}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setHasError(true)}
      data-testid={testId}
    />
  );
}