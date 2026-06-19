import Link from 'next/link';

const packages = [
  {
    id: 'launch',
    name: 'Launch',
    sub: 'For when you have nothing online yet.',
    originalPrice: '€1,800',
    originalSuffix: '–2,500',
    price: '€1,010',
    priceSuffix: '–1,400',
    discountBadge: '44% off',
    discountNote: 'Was €1,800. Now €1,010 — for first 5 clients only.',
    delivery: 'Delivered in 5-7 days.',
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
    sub: 'For when you want everything in one place.',
    originalPrice: '€3,500',
    originalSuffix: '–6,000',
    price: '€1,950',
    priceSuffix: '–3,300',
    discountBadge: '45% off',
    discountNote: 'Was €3,500. Now €1,950 — for first 5 clients only.',
    delivery: 'Delivered in 5-7 days.',
    what: 'Custom dashboard built around your business. Bookings, customer history, payments, reports — all automatic.',
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
    sub: 'For ongoing help and improvements.',
    originalPrice: '€800',
    originalSuffix: '–1,500/mo',
    price: '€450',
    priceSuffix: '–850/mo',
    discountBadge: '44% off',
    discountNote: 'Was €800. Now €450/month — for first 5 clients only.',
    delivery: 'Continuous additions + support.',
    what: 'We keep building, fixing, and improving while you focus on your business.',
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
          <h2>Pick how much help you need.</h2>
          <p>Prices visible. Outcomes specific. No mystery.</p>
        </div>

        <div className="packages__banner glass" data-reveal>
          🔥 Limited time offer — Special pricing for our next 5 clients
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
                <div className="package__price-original">
                  {pkg.originalPrice}{pkg.originalSuffix}
                </div>
                <div className="package__price">
                  {pkg.price}
                  <span className="package__price-suffix">{pkg.priceSuffix}</span>
                </div>
                <span className="package__discount-badge">{pkg.discountBadge}</span>
                <div className="package__delivery">
                  {pkg.delivery} {pkg.what}
                </div>
                <div className="package__price-note">{pkg.discountNote}</div>
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
