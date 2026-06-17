const clients = [
  { name: 'Codemagic', context: 'CI/CD infrastructure' },
  { name: 'Mintlify', context: 'Documentation' },
  { name: 'Dyte', context: 'Video SDK' },
];

export default function TrustBar() {
  return (
    <section className="trust">
      <div className="container">
        <div className="trust__rule" aria-hidden="true" />
        <div className="trust__inner glass" data-reveal>
          <div className="trust__left">
            <p className="trust__headline">
              Trusted by YC-backed teams building developer tooling
            </p>
            <span className="trust__via mono">Via Sarg.io · Prashant&apos;s primary role</span>
          </div>

          <div className="trust__logos">
            {clients.map((c) => (
              <div key={c.name} className="trust__logo-wrap">
                <span className="trust__logo">{c.name}</span>
                <span className="trust__tooltip" role="tooltip">{c.context}</span>
              </div>
            ))}
          </div>

          <div className="trust__right">
            <div className="trust__badge">
              <span className="trust__flag-ie" aria-label="Irish flag" aria-hidden="true">
                <span /><span /><span />
              </span>
              Irish-registered
            </div>
          </div>
        </div>
        <div className="trust__rule" aria-hidden="true" />
      </div>
    </section>
  );
}
