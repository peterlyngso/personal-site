import { Link, useRoute } from 'wouter';
import { Project, projects } from '@/data/content';
import { Reveal } from '@/components/Reveal';
import { SEO } from '@/components/SEO';
import { Thumbnail } from '@/components/Thumbnail';

export default function ProjectSlug() {
  const [, params] = useRoute('/project/:slug');
  const project = projects.find((item) => item.slug === params?.slug);
  const additionalStills = (project as (Project & { additionalStills?: string[] }) | undefined)?.additionalStills;

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
          <Thumbnail project={project} />
        </Reveal>

        <div className="case-study__body">
          <Reveal className="case-study__facts">
            <dl>
              <div className="case-study__fact">
                <dt>Roles</dt>
                <dd>{project.roles.length ? project.roles.join(' / ') : 'Unverified'}</dd>
              </div>
              <div className="case-study__fact">
                <dt>Client / outlet</dt>
                <dd>{project.clientOutlet || 'Unverified'}</dd>
              </div>
              {project.isDraft && (
                <div className="case-study__fact">
                  <dt>Status</dt>
                  <dd>Draft entry</dd>
                </div>
              )}
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
            {project.context ? (
              <p>{project.context}</p>
            ) : (
              <p className="case-study__pending">Editorial context pending verification.</p>
            )}

            {project.pressOutcomes?.length ? (
              <>
                <h2 className="case-study__subhead">Press / outcomes</h2>
                <ul className="case-study__list">
                  {project.pressOutcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
                </ul>
              </>
            ) : null}

            {project.embedUrl ? (
              <a
                href={project.embedUrl}
                target="_blank"
                rel="noreferrer"
                className="case-study__link"
                data-testid={`link-finished-work-${project.slug}`}
              >
                View finished work
              </a>
            ) : null}
          </Reveal>
        </div>

        {additionalStills?.length ? (
          <Reveal className="case-study__stills" margin="-80px">
            {additionalStills.map((still, index) => (
              <img
                key={still}
                src={still}
                alt={`${project.title} still ${index + 1}`}
                data-testid={`image-additional-still-${project.slug}-${index}`}
              />
            ))}
          </Reveal>
        ) : null}
      </article>
    </>
  );
}