import { Link } from 'wouter';
import { projects } from '@/data/content';
import { Reveal } from '@/components/Reveal';
import { SEO } from '@/components/SEO';
import { Thumbnail } from '@/components/Thumbnail';

const doors = [
  { category: 'Labor' as const, slug: 'colectivo-mpu' },
  { category: 'Politics' as const, slug: 'miguel-alvelo-rivera' },
  { category: 'Documentary' as const, slug: 'indiana-data-centers' },
];

const selectedSlugs = [
  'colectivo-mpu',
  'miguel-alvelo-rivera',
  'indiana-data-centers',
  'kellogg-strike',
  'south-bend-doc',
];

export default function Home() {
  const selectedProjects = selectedSlugs
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
          {doors.map((door, index) => {
            const project = projects.find((item) => item.slug === door.slug);
            if (!project) return null;

            return (
              <Reveal key={door.category} delay={index * 0.08} className="door-link">
                <Link
                  href={`/work/${door.category}`}
                  className="door-link"
                  data-testid={`link-door-${door.category.toLowerCase()}`}
                >
                  <Thumbnail project={project} overlay="door" className="media-frame--door" />
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