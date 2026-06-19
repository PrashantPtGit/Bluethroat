import Link from 'next/link';

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    duration: '30 min · Free',
    description:
      'We align on your business, the problem, and what success looks like. You get a written brief the same day.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Proposal + Live Demo',
    duration: '3-5 days',
    description:
      'You get a scope doc, timeline, and a live demo of what I\'m building — before we start. No guesswork, no surprises.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Build, Launch, Support',
    duration: '3-5 days',
    description:
      'Daily progress. Real staging URL from day one. Launched when you say go. 30 days of support after.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22 11 13 2 9l20-7z" />
      </svg>
    ),
  },
];

export default function ProcessTeaser() {
  return (
    <section className="process-teaser">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">How We Work</span>
          <h2>From first call to live software<br />in 5 days to 1 week.</h2>
        </div>

        <div className="process-teaser__track">
          {steps.map((s, i) => (
            <div className="process-teaser__item" key={s.num} data-reveal>
              {/* Huge background number */}
              <div className="process-teaser__bg-num" aria-hidden="true">{s.num}</div>

              <div className="process-teaser__step glass">
                <div className="process-teaser__step-top">
                  <div className="process-teaser__icon">{s.icon}</div>
                  <span className="process-teaser__duration mono">{s.duration}</span>
                </div>
                <div className="process-teaser__num-badge">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>

              {/* Connector between cards */}
              {i < steps.length - 1 && (
                <div className="process-teaser__connector" aria-hidden="true">
                  <div className="process-teaser__connector-line" />
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
                    <polygon points="0,0 8,4 0,8" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="process-teaser__cta" data-reveal>
          <Link href="/process">
            See full process
            <svg aria-hidden="true" width="16" height="16"><use href="#icon-arrow" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
