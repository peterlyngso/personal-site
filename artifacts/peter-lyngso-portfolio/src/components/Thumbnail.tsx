import { Project } from '@/data/content';
import { cn } from '@/lib/utils';

export function Thumbnail({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={cn("relative w-full aspect-[16/9] bg-[#1A1A18] overflow-hidden group", className)}>
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay z-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {project.thumbnailVideo ? (
        <video 
          src={project.thumbnailVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out motion-safe:group-hover:scale-[1.03]"
        />
      ) : project.thumbnailStill ? (
        <img 
          src={project.thumbnailStill} 
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out motion-safe:group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-8 bg-gradient-to-br from-[#1A1A18] to-[#0F0F0E] transition-transform duration-[1.5s] ease-out motion-safe:group-hover:scale-[1.03]">
           <div className="text-center w-full max-w-2xl px-6 relative z-20">
             <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#EAE6DF] opacity-90 leading-[1.1] mb-8">{project.title}</h3>
             <div className="w-12 h-[1px] bg-[#EAE6DF]/20 mx-auto mb-8"></div>
             <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[#EAE6DF]/40">
               {project.category} {project.isDraft ? '— DRAFT ENTRY' : ''}
             </p>
           </div>
        </div>
      )}
    </div>
  );
}
