import { Project } from '@/data/content';
import { cn } from '@/lib/utils';

type ThumbnailProps = {
  project: Project;
  className?: string;
  overlay?: 'door' | 'project' | 'none';
};

function PlaceholderFrame({ project }: { project: Project }) {
  const categoryClass = `frame-placeholder--${project.category.toLowerCase()}`;

  return (
    <div
      className={cn('frame-placeholder', categoryClass)}
      aria-label={`${project.category} placeholder frame for ${project.title}`}
      data-testid={`media-placeholder-${project.slug}`}
    >
      <span className="frame-placeholder__shape frame-placeholder__shape--one" />
      <span className="frame-placeholder__shape frame-placeholder__shape--two" />
      <span className="frame-placeholder__shape frame-placeholder__shape--three" />
      <span className="frame-placeholder__line frame-placeholder__line--one" />
      <span className="frame-placeholder__line frame-placeholder__line--two" />
      <span className="frame-placeholder__label">Local frame / draft asset</span>
    </div>
  );
}

export function Thumbnail({ project, className, overlay = 'none' }: ThumbnailProps) {
  return (
    <div className={cn('media-frame', className)} data-testid={`media-frame-${project.slug}`}>
      {project.thumbnailVideo ? (
        <video
          src={project.thumbnailVideo}
          autoPlay
          muted
          loop
          playsInline
          aria-label={project.title}
          data-testid={`video-thumbnail-${project.slug}`}
        />
      ) : project.thumbnailStill ? (
        <img
          src={project.thumbnailStill}
          alt={project.title}
          data-testid={`image-thumbnail-${project.slug}`}
        />
      ) : (
        <PlaceholderFrame project={project} />
      )}

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