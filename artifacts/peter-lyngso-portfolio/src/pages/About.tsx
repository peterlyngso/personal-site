import { additionalCredits } from '@/data/content';
import { Reveal } from '@/components/Reveal';
import { SEO } from '@/components/SEO';

export default function About() {
  return (
    <>
      <SEO title="About / Credits" />
      <main className="about-page" data-testid="page-about">
        <Reveal className="about-page__intro">
          <p className="case-study__eyebrow">About / credits</p>
          <h1>Peter<br />Lyngso</h1>
          <p className="about-page__bio">
            Filmmaker and media strategist whose work sits inside labor movements,
            political campaigns, and documentary reporting.
          </p>
          <p className="about-page__pending">Full biography and contact details pending verification.</p>
        </Reveal>

        <Reveal delay={0.12} className="about-page__credits">
          <div className="section-marker">Additional credits</div>
          <div className="about-page__list">
            {additionalCredits.map((credit) => (
              <div className="about-page__credit" key={`${credit.show}-${credit.outlet}`}>
                <h2>{credit.show}</h2>
                <div>
                  <p>{credit.outlet}</p>
                  <p>{credit.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </main>
    </>
  );
}