import { useRoute, Link } from 'wouter';
import { projects, Category } from '@/data/content';
import { Thumbnail } from '@/components/Thumbnail';
import { Reveal } from '@/components/Reveal';
import { SEO } from '@/components/SEO';

export default function WorkCategory() {
  const [, params] = useRoute('/work/:category');
  const category = params?.category as Category;

  const categoryProjects = projects.filter(p => p.category.toLowerCase() === category?.toLowerCase());

  if (!categoryProjects.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-32 px-6">
        <SEO title="Category Not Found" />
        <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-50 mb-8">Category not found</p>
        <Link href="/" className="border border-[#EAE6DF]/20 px-8 py-4 font-sans text-[10px] uppercase tracking-[0.25em] hover:bg-[#EAE6DF]/10 transition-colors">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO title={`${category} Work`} />
      <div className="min-h-screen pt-40 pb-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <header className="mb-32 text-center md:text-left">
          <Reveal>
            <h1 className="font-serif text-6xl md:text-8xl tracking-tight leading-none">
              {category}
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#EAE6DF]/50 mt-8 flex items-center justify-center md:justify-start gap-6">
              <span className="w-12 h-[1px] bg-[#EAE6DF]/20 block"></span>
              Selected Works
            </p>
          </Reveal>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {categoryProjects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 2) * 0.15}>
              <Link href={`/project/${project.slug}`} className="group block">
                <Thumbnail project={project} className="mb-8 shadow-xl shadow-black/40" />
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl leading-tight group-hover:text-[#EAE6DF]/70 transition-colors duration-500 mb-6">{project.title}</h2>
                  <div className="flex justify-between items-center text-[#EAE6DF]/40">
                    <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.25em]">{project.clientOutlet || "Independent"}</p>
                    {project.isDraft && (
                      <p className="font-sans text-[9px] uppercase tracking-[0.25em] border border-[#EAE6DF]/20 px-2 py-1">Draft</p>
                    )}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
