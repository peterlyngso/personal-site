import { Link, useRoute } from 'wouter';
import { MediaItem, Project, projects } from '@/data/content';
import { MediaItemView } from '@/components/MediaItemView';
import { Reveal } from '@/components/Reveal';
import { SEO } from '@/components/SEO';
import { Thumbnail } from '@/components/Thumbnail';

function getFinishedWorkEmbed(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, '');

    if (host === 'youtube.com' || host === 'youtu.be' || host === 'youtube-nocookie.com') {
      const videoId = host === 'youtu.be'
        ? parsed.pathname.slice(1)
        : parsed.searchParams.get('v') || parsed.pathname.split('/').filter(Boolean).pop();
      return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0` : null;
    }

    if (host === 'vimeo.com' || host === 'player.vimeo.com') {
      const videoId = parsed.pathname.split('/').filter(Boolean).pop();
      return videoId ? `https://player.vimeo.com/video/${videoId}` : null;
    }
  } catch {
    return null;
  }

  return null;
}

function FinishedWork({ project }: { project: Project }) {
  const url = project.media.finishedWorkUrl;
  if (!url) return null;

  const embedUrl = getFinishedWorkEmbed(url);
  if (!embedUrl) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="case-study__link"
        data-testid={`link-finished-work-${project.slug}`}
      >
        View finished work
      </a>
    );
  }

  return (
    <div className="finished-work" data-testid={`embed-finished-work-${project.slug}`}>
      <iframe
        src={embedUrl}
        title={`${project.title} finished work`}
        loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="case-study__link"
        data-testid={`link-finished-work-${project.slug}`}
      >
        Open finished work
      </a>
    </div>
  );
}

function ProjectGallery({ project }: { project: Project }) {
  const gallery = project.media.gallery;
  if (!gallery?.length) return null;

  return (
    <Reveal className="case-study__stills" margin="-80px">
      {gallery.map((media: MediaItem, index) => (
        <figure key={`${media.src || media.alt}-${index}`}>
          <MediaItemView
            media={media}
            fallback={project.media.hero}
            className="case-study__gallery-media"
            testId={`gallery-media-${project.slug}-${index}`}
          />
          {media.caption ? <figcaption>{media.caption}</figcaption> : null}
        </figure>
      ))}
    </Reveal>
  );
}

export default function ProjectSlug() {
  const [, params] = useRoute('/project/:slug');
  const project = projects.find((item) => item.slug === params?.slug);

  if (!project) {
    return (
      <main className="case-study" data-testid="page-project-not-found">
        <SEO title="Project Not Found" />
        <p className="case-study__eyebrow">Project not found</p>
        <Link href="/" className="case-study__link" data-testid="link-return-home">
          Return home
        </Link>
      </main>
    );
  }

  return (
    <>
      <SEO title={project.title} description={project.context} />
      <article className="case-study" data-testid={`page-project-${project.slug}`}>
        <Reveal className="case-study__header">
          <div className="case-study__eyebrow">
            <Link href={`/work/${project.category}`} data-testid={`link-project-category-${project.slug}`}>
              {project.category}
            </Link>
            <span>Case study</span>
          </div>
          <h1 className="case-study__title">{project.title}</h1>
        </Reveal>

        <Reveal animation="scale" delay={0.1} className="case-study__hero">
          <Thumbnail project={project} media={project.media.hero} />
        </Reveal>

        <div className="case-study__body">
          <Reveal className="case-study__facts">
            <dl>
              {project.roles.length ? (
                <div className="case-study__fact">
                  <dt>Roles</dt>
                  <dd>{project.roles.join(' / ')}</dd>
                </div>
              ) : null}
              {project.clientOutlet ? (
                <div className="case-study__fact">
                  <dt>Client / outlet</dt>
                  <dd>{project.clientOutlet}</dd>
                </div>
              ) : null}
              {project.credits?.length ? (
                <div className="case-study__fact">
                  <dt>Credits</dt>
                  <dd>
                    {project.credits.map((credit) => `${credit.role}: ${credit.name}`).join(' / ')}
                  </dd>
                </div>
              ) : null}
            </dl>
          </Reveal>

          <Reveal delay={0.12} className="case-study__copy">
            {project.context ? <p>{project.context}</p> : null}

            {project.pressOutcomes?.length ? (
              <>
                <h2 className="case-study__subhead">Press / outcomes</h2>
                <ul className="case-study__list">
                  {project.pressOutcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
                </ul>
              </>
            ) : null}

            <FinishedWork project={project} />
          </Reveal>
        </div>

        <ProjectGallery project={project} />
      </article>
    </>
  );
}