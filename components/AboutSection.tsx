import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__grid" data-reveal>

          {/* Left column — portrait + identity */}
          <div className="about__portrait">
            <div className="about__avatar-wrap glass">
              <div className="about__avatar" aria-hidden="true">P</div>
            </div>
            <div className="about__caption">
              <strong>Prashant Patitripathi</strong>
              <span>Founder &amp; Builder</span>
            </div>
            <div className="about__location mono">
              Shimla, India · Dublin, Ireland
            </div>
          </div>

          {/* Right column — editorial copy */}
          <div className="about__copy">
            <span className="eyebrow">Builder-Led</span>

            <h2 className="about__headline">
              I sell you me.<br />
              Not a project manager.
            </h2>

            <p>
              I started teaching code to fund my own learning. Six years later,
              I&apos;ve mentored 500+ developers across 6 countries — and built six
              production platforms for real businesses.
            </p>
            <p>
              Most agencies sell you a project manager who tells a dev team what to do.
              I sell you me. You message me on WhatsApp, I write the code. No layers,
              no losses in translation.
            </p>
            <p>
              Irish-registered for European trust. India-based for honest pricing.
              Builder-led because I do the work myself.
            </p>

            <div className="about__pills">
              <span className="about__pill">COO at Sarg.io</span>
              <span className="about__pill">Mentor to 500+ devs</span>
              <span className="about__pill">Trusted by YC-backed teams</span>
            </div>

            <Link href="/about" className="btn btn-secondary" style={{ alignSelf: 'flex-start', marginTop: '0.25rem' }}>
              Read full story
              <svg aria-hidden="true" width="16" height="16"><use href="#icon-arrow" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
