import { additionalCredits } from '@/data/content';
import { Reveal } from '@/components/Reveal';
import { SEO } from '@/components/SEO';

export default function About() {
  return (
    <>
      <SEO title="About & Credits" />
      <div className="min-h-screen pt-40 pb-32 px-6 md:px-12 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
        <Reveal className="lg:col-span-5">
          <h1 className="font-serif text-6xl md:text-8xl leading-[1.05] tracking-tight mb-12">Peter<br/>Lyngso</h1>
          <div className="font-sans font-light text-lg md:text-xl leading-[1.8] text-[#EAE6DF]/80 space-y-8">
            <p>
              Filmmaker and media strategist whose work sits inside labor movements, political campaigns, and documentary reporting.
            </p>
            <p className="text-[#EAE6DF]/40 italic text-base">
              [DRAFT: Full biography and philosophical approach to be provided.]
            </p>
          </div>
          
          <div className="mt-20 font-sans text-[10px] uppercase tracking-[0.25em] space-y-8">
            <div className="flex items-center gap-6">
              <span className="w-8 h-[1px] bg-[#EAE6DF]/20"></span>
              <a href="mailto:peter@example.com" className="text-[#EAE6DF]/60 hover:text-[#EAE6DF] transition-colors pb-1 border-b border-transparent hover:border-[#EAE6DF]/40">Email</a>
            </div>
            <div className="flex items-center gap-6">
              <span className="w-8 h-[1px] bg-[#EAE6DF]/20"></span>
              <a href="#" className="text-[#EAE6DF]/60 hover:text-[#EAE6DF] transition-colors pb-1 border-b border-transparent hover:border-[#EAE6DF]/40">Instagram</a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="lg:col-span-7">
          <div className="flex items-center gap-8 mb-16">
            <h2 className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#EAE6DF]/40">Additional Credits</h2>
            <div className="flex-1 h-[1px] bg-[#EAE6DF]/10"></div>
          </div>
          
          <div className="space-y-12">
            {additionalCredits.map((credit, i) => (
              <div key={i} className="group flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 border-b border-[#EAE6DF]/10 pb-12 hover:border-[#EAE6DF]/30 transition-colors">
                <h3 className="font-serif text-3xl md:text-4xl text-[#EAE6DF]/80 md:w-1/2 group-hover:text-[#EAE6DF] transition-colors">{credit.show}</h3>
                <div className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-[#EAE6DF]/40 md:w-1/2 flex flex-col sm:flex-row justify-between gap-3 sm:gap-6">
                  <span>{credit.outlet}</span>
                  <span className="text-[#EAE6DF]/30">{credit.notes}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </>
  );
}
