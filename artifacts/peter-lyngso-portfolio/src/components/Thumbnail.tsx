import { MediaItem, Project } from '@/data/content';
import { cn } from '@/lib/utils';
import { MediaItemView } from '@/components/MediaItemView';

type ThumbnailProps = {
  project: Project;
  media?: MediaItem;
  className?: string;
  overlay?: 'door' | 'project' | 'none';
  priority?: boolean;
};

export function Thumbnail({
  project,
  media = project.media.previewLoop || project.media.hero,
  className,
  overlay = 'none',
  priority = false,
}: ThumbnailProps) {
  const fallback = media.kind === 'video' ? project.media.hero : undefined;

  return (
    <div
      className={cn('media-frame', className)}
      style={media.aspectRatio ? { aspectRatio: media.aspectRatio } : undefined}
      data-testid={`media-frame-${project.slug}`}
    >
      <MediaItemView
        media={media}
        fallback={fallback}
        priority={priority}
        className="media-frame__asset"
        testId={`media-${project.slug}`}
      />

      {overlay === 'door' && (
        <div className="door-overlay">
          <span className="door-overlay__number">0{project.category === 'Labor' ? '1' : project.category === 'Politics' ? '2' : '3'}</span>
          <span className="door-overlay__title">{project.category.toUpperCase()}</span>
        </div>
      )}

      {overlay === 'project' && (
        <div className="project-overlay">
          <span className="project-overlay__title">{project.title}</span>
          <span className="project-overlay__category">{project.category}</span>
        </div>
      )}
    </div>
  );
}