import { Link } from 'wouter';
import { homeCuration, projects } from '@/data/content';
import { Reveal } from '@/components/Reveal';
import { SEO } from '@/components/SEO';
import { Thumbnail } from '@/components/Thumbnail';

export default function Home() {
  const selectedProjects = homeCuration.selectedWork
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <>
      <SEO title="Selected Work" />
      <main className="landing" data-testid="page-home">
        <div className="landing__marker" data-testid="text-landing-marker">
          Selected work / 01—03
        </div>
        <div className="door-grid" data-testid="category-doors">
          {homeCuration.doors.map((door, index) => {
            const project = projects.find((item) => item.slug === door.projectSlug);
            if (!project) return null;

            return (
              <Reveal key={door.category} delay={index * 0.08} className="door-link">
                <Link
                  href={`/work/${door.category}`}
                  className="door-link"
                  data-testid={`link-door-${door.category.toLowerCase()}`}
                >
                  <Thumbnail
                    project={project}
                    media={door.media}
                    overlay="door"
                    className="media-frame--door"
                    priority
                  />
                </Link>
              </Reveal>
            );
          })}
        </div>

        <section className="selected-work" aria-labelledby="selected-work-heading">
          <div className="section-marker" id="selected-work-heading">
            A selection
          </div>
          <div className="mosaic">
            {selectedProjects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 2) * 0.08} className="mosaic__item">
                <Link
                  href={`/project/${project.slug}`}
                  className="block"
                  data-testid={`link-selected-project-${project.slug}`}
                >
                   <Thumbnail project={project} overlay="project" className="mosaic__media" />
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}