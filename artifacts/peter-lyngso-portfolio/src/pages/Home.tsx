import { Link } from 'wouter';
import { projects } from '@/data/content';
import { Thumbnail } from '@/components/Thumbnail';
import { Reveal } from '@/components/Reveal';
import { SEO } from '@/components/SEO';

export default function Home() {
  return (
    <>
      <SEO title="Selected Work" />
      <div className="min-h-screen pt-40 pb-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => (
            <Reveal key={project.slug} margin="-100px">
              <Link href={`/project/${project.slug}`} className="group block cursor-pointer">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                  <div className={`lg:col-span-8 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Thumbnail project={project} className="shadow-2xl shadow-black/50" />
                  </div>
                  <div className={`lg:col-span-4 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1 lg:items-end lg:text-right' : 'lg:order-2'}`}>
                    <p className="text-[10px] md:text-xs font-sans uppercase tracking-[0.25em] text-[#EAE6DF]/40 mb-6 flex items-center gap-4">
                      {index % 2 === 1 && <span className="w-8 h-[1px] bg-[#EAE6DF]/10 inline-block"></span>}
                      {project.category}
                      {index % 2 === 0 && <span className="w-8 h-[1px] bg-[#EAE6DF]/10 inline-block"></span>}
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-8 group-hover:text-[#EAE6DF]/70 transition-colors duration-500">
                      {project.title}
                    </h2>
                    {project.roles.length > 0 && (
                      <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#EAE6DF]/40">
                        {project.roles.join(' • ')}
                      </p>
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
