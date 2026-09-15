import { useRoute, Link } from 'wouter';
import { projects } from '@/data/content';
import { Thumbnail } from '@/components/Thumbnail';
import { Reveal } from '@/components/Reveal';
import { SEO } from '@/components/SEO';

export default function ProjectSlug() {
  const [, params] = useRoute('/project/:slug');
  const project = projects.find(p => p.slug === params?.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <SEO title="Project Not Found" />
        <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-50 mb-8">Project not found</p>
        <Link href="/" className="border border-[#EAE6DF]/20 px-8 py-4 font-sans text-[10px] uppercase tracking-[0.25em] hover:bg-[#EAE6DF]/10 transition-colors">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-40 pb-40">
      <SEO title={project.title} description={project.context} />
      
      <div className="px-6 md:px-12 max-w-[1200px] mx-auto mb-20 md:mb-32">
        <Reveal className="max-w-4xl">
          <div className="flex items-center gap-4 mb-12">
            <Link href={`/work/${project.category}`} className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-[#EAE6DF]/50 hover:text-[#EAE6DF] transition-colors">
              {project.category}
            </Link>
            <span className="w-6 h-[1px] bg-[#EAE6DF]/20"></span>
            <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-[#EAE6DF]/30">Case Study</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8">
            {project.title}
          </h1>
          
          {project.isDraft && (
            <div className="inline-block border border-[#EAE6DF]/20 px-4 py-2 mt-4">
              <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#EAE6DF]/50">Draft Entry — Awaiting Full Assets</span>
            </div>
          )}
        </Reveal>
      </div>

      <Reveal delay={0.2} animation="scale" className="w-full max-w-[1600px] mx-auto mb-24 md:mb-40 px-6 md:px-12">
        <Thumbnail project={project} className="shadow-2xl shadow-black/60" />
      </Reveal>

      <div className="px-6 md:px-12 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-4 font-sans text-[10px] md:text-[11px] uppercase tracking-[0.2em] leading-loose">
          <div className="border-t border-[#EAE6DF]/10 pt-8 mb-16">
            <p className="text-[#EAE6DF]/40 mb-6">Roles</p>
            {project.roles.length > 0 ? (
              <ul className="space-y-3 text-[#EAE6DF]/80">
                {project.roles.map(role => <li key={role}>{role}</li>)}
              </ul>
            ) : (
              <p className="text-[#EAE6DF]/30">[Unverified]</p>
            )}
          </div>

          <div className="border-t border-[#EAE6DF]/10 pt-8 mb-16">
            <p className="text-[#EAE6DF]/40 mb-6">Client / Outlet</p>
            {project.clientOutlet ? (
              <p className="text-[#EAE6DF]/80">{project.clientOutlet}</p>
            ) : (
              <p className="text-[#EAE6DF]/30">[Unverified]</p>
            )}
          </div>

          {(project.credits && project.credits.length > 0) && (
            <div className="border-t border-[#EAE6DF]/10 pt-8 mb-16">
              <p className="text-[#EAE6DF]/40 mb-8">Additional Credits</p>
              <ul className="space-y-8">
                {project.credits.map((c, i) => (
                  <li key={i}>
                    <span className="text-[#EAE6DF]/40 block text-[9px] mb-2">{c.role}</span>
                    <span className="text-[#EAE6DF]/80">{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="lg:col-span-8">
          <div className="prose prose-invert prose-lg md:prose-xl max-w-3xl prose-p:font-sans prose-p:font-light prose-p:leading-relaxed prose-p:text-[#EAE6DF]/70">
            {project.context ? (
              <p className="text-xl md:text-2xl leading-[1.6] text-[#EAE6DF]/90 font-serif mb-12">{project.context}</p>
            ) : (
              <p className="italic text-[#EAE6DF]/40 font-serif text-xl">[Editorial context pending verification.]</p>
            )}

            {project.pressOutcomes && project.pressOutcomes.length > 0 && (
              <div className="mt-24">
                <h3 className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#EAE6DF]/40 mb-10 border-b border-[#EAE6DF]/10 pb-6">Press & Outcomes</h3>
                <ul className="space-y-8">
                  {project.pressOutcomes.map((outcome, i) => (
                    <li key={i} className="font-sans text-sm md:text-base font-light leading-relaxed pl-8 border-l border-[#EAE6DF]/20 text-[#EAE6DF]/80">
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.embedUrl && (
              <div className="mt-32 pt-16 border-t border-[#EAE6DF]/10">
                 <div className="aspect-[16/9] bg-[#111110] border border-[#EAE6DF]/10 flex flex-col items-center justify-center p-8 text-center hover:bg-[#EAE6DF]/5 transition-colors cursor-pointer group">
                    <h4 className="font-serif text-3xl text-[#EAE6DF]/90 mb-6 group-hover:scale-105 transition-transform duration-500">View Finished Work</h4>
                    <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#EAE6DF]/40 group-hover:text-[#EAE6DF]/70 transition-colors">Opens in new tab</p>
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
