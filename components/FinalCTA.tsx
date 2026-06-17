import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="cta-final">
      <div className="cta-final__media" aria-hidden="true">
        <video
          src="/videos/cta.mp4"
          poster="/videos/cta-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          data-bg-video
          aria-hidden="true"
        />
        <div className="cta-final__overlay" />
      </div>

      <div className="container">
        <div className="cta-final__inner" data-reveal>
          <span className="cta-final__eyebrow eyebrow">Ready?</span>

          <h2 className="cta-final__headline">
            Let&apos;s see if we fit.
          </h2>

          <p className="cta-final__sub">
            30-minute call. Free. No pitch deck. I&apos;ll ask about your business,
            you&apos;ll see how I think.
          </p>

          <div className="cta-final__actions">
            <Link
              href="https://wa.me/919876543210?text=Hi%20Prashant%2C%20I%27d%20like%20to%20schedule%20a%20discovery%20call."
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg aria-hidden="true" width="18" height="18"><use href="#icon-whatsapp" /></svg>
              WhatsApp Prashant
            </Link>
            <a
              href="mailto:hello@bluethroat.ie"
              className="btn btn-secondary btn-lg"
            >
              <svg aria-hidden="true" width="18" height="18"><use href="#icon-mail" /></svg>
              Send an email
            </a>
          </div>

          <p className="cta-final__note">
            Average response time: 2 hours during business hours
          </p>
        </div>
      </div>
    </section>
  );
}
