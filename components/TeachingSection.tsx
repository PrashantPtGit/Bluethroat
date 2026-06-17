'use client';

import dynamic from 'next/dynamic';

const CosmicCanvas = dynamic(() => import('./CosmicCanvas'), { ssr: false });

export default function TeachingSection() {
  return (
    <section className="live">
      <div className="live__canvas" aria-hidden="true">
        <CosmicCanvas />
      </div>
      <div className="live__overlay" aria-hidden="true" />

      <div className="container live__content">
        <div className="live__head" data-reveal>
          <span className="eyebrow">Social Proof</span>
          <h2>
            500+ developers.<br />
            6 countries.<br />
            6 years of shipping.
          </h2>
          <p>
            Live from real teaching sessions and project reviews with engineers
            now at Google, Microsoft, Amazon, and their own startups.
          </p>
        </div>

        <div className="live__player" data-reveal>
          <div className="live__player-badge">
            <span aria-hidden="true" />
            Live Session
          </div>
          <video
            src="/videos/teaching-bg.mp4"
            poster="/videos/teaching-poster.jpg"
            loop
            muted
            playsInline
            preload="none"
            data-content-video
            aria-label="Teaching session preview"
          />
        </div>

        <div className="live__stats" data-reveal>
          {[
            { val: '500', suffix: '+', label: 'Developers mentored' },
            { val: '6',   suffix: '',  label: 'Countries reached' },
            { val: '100', suffix: '%', label: 'Builder-led, hands-on' },
          ].map((s) => (
            <div key={s.label} className="live__stat glass">
              <strong
                data-count={s.val}
                data-count-suffix={s.suffix}
              >
                {s.val}{s.suffix}
              </strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        <p className="live__caption live__caption--italic" data-reveal>
          Currently teaching live via Superprof Switzerland and 1:1 mentorship sessions.
        </p>
      </div>
    </section>
  );
}
