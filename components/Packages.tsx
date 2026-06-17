import Link from 'next/link';

const packages = [
  {
    id: 'launch',
    name: 'Launch',
    sub: 'For when you have nothing.',
    price: '€1,800',
    priceSuffix: '–2,500',
    delivery: '10-day delivery.',
    what: 'Website + booking + payments.',
    features: [
      'Up to 5 screens / user flows',
      'Next.js website + Supabase backend',
      'Booking form + calendar integration',
      'Stripe payment integration',
      'Mobile-first, GDPR-compliant',
      '1 round of revisions',
    ],
    cta: 'WhatsApp about Launch',
    msg: "Hi Prashant, I'm interested in the Launch package.",
  },
  {
    id: 'platform',
    name: 'Platform',
    sub: 'For when you need everything.',
    price: '€3,500',
    priceSuffix: '–6,000',
    delivery: '3-5 week delivery.',
    what: 'Full custom platform + automation.',
    features: [
      'Unlimited screens & flows',
      'Admin dashboard + analytics',
      'Stripe payments + subscriptions',
      'Automated emails, reminders, reports',
      'Custom design system',
      '3 rounds of revisions',
      'Post-launch support (30 days)',
    ],
    featured: true,
    badge: 'Most Popular',
    cta: 'WhatsApp about Platform',
    msg: "Hi Prashant, I'm interested in the Platform package.",
  },
  {
    id: 'retainer',
    name: 'Retainer',
    sub: 'For when you need it ongoing.',
    price: '€800',
    priceSuffix: '–1,500/mo',
    delivery: 'Continuous additions + support.',
    what: 'Monthly performance report.',
    features: [
      'New features every month',
      'Bug fixes within 24h',
      'Performance monitoring',
      'Architecture reviews',
      'WhatsApp direct access',
      'Monthly progress report',
    ],
    cta: 'WhatsApp about Retainer',
    msg: "Hi Prashant, I'm interested in the Retainer package.",
  },
];

export default function Packages() {
  return (
    <section className="packages">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Packages</span>
          <h2>Three ways to work together.</h2>
          <p>Prices visible. Outcomes specific. No mystery.</p>
        </div>

        <div className="packages__grid">
          {packages.map((pkg, i) => (
            <div
              key={pkg.id}
              className={`package glass${pkg.featured ? ' package--featured' : ''}`}
              data-reveal
              style={{ '--delay': `${i * 0.12}s` } as React.CSSProperties}
            >
              {pkg.badge && <span className="package__badge">{pkg.badge}</span>}

              <div className="package__header">
                <div className="package__name">{pkg.name}</div>
                <div className="package__sub">{pkg.sub}</div>
                <div className="package__price">
                  {pkg.price}
                  <span className="package__price-suffix">{pkg.priceSuffix}</span>
                </div>
                <div className="package__delivery">
                  {pkg.delivery} {pkg.what}
                </div>
              </div>

              <hr className="package__divider" />

              <ul className="package__list">
                {pkg.features.map((f) => (
                  <li key={f}>
                    <svg aria-hidden="true" width="14" height="14"><use href="#icon-check" /></svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={`https://wa.me/919876543210?text=${encodeURIComponent(pkg.msg)}`}
                className={`btn btn-block${pkg.featured ? ' btn-primary' : ' btn-secondary'}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {pkg.cta}
                <svg aria-hidden="true" width="16" height="16"><use href="#icon-arrow" /></svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
