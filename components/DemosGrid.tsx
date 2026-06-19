import Link from 'next/link';
import { projects } from '@/data/projects';

const bgMap: Record<string, string> = {
  onair:       '#08131E',
  medred:      '#060C1A',
  skillconnect: '#061320',
  applyengine: '#080F1C',
  fitbook:     '#060D1A',
  harmony:     '#080E1E',
};
const accentMap: Record<string, string> = {
  onair:       '#B0C4DE',
  medred:      '#C4D4E8',
  skillconnect: '#7C9EC7',
  applyengine: '#8CA6C4',
  fitbook:     '#6789B5',
  harmony:     '#94B0CC',
};

const featuredIds = ['onair', 'medred'];
const featured = projects.filter((p) => featuredIds.includes(p.id));
const smaller  = projects.filter((p) => !featuredIds.includes(p.id));

function DemoCard({ p, large = false }: { p: typeof projects[number]; large?: boolean }) {
  const bg     = bgMap[p.id]     ?? '#060D1A';
  const accent = accentMap[p.id] ?? '#6789B5';
  const maxBar = Math.max(...p.bars);
  const pts    = p.bars
    .map((v, i) => `${(i / (p.bars.length - 1)) * 100},${100 - (v / maxBar) * 80}`)
    .join(' ');
  const area = `0,100 ${pts} 100,100`;
  const stack = p.stack.split(', ').slice(0, 3);

  return (
    <article
      className={`demo${large ? ' demo--large' : ''}`}
      data-reveal
      style={{ '--demo-bg': bg, '--demo-accent': accent } as React.CSSProperties}
    >
      {/* Mock browser visual */}
      <div className="demo__thumb">
        <div className="demo__chrome">
          <span className="demo__dot demo__dot--r" />
          <span className="demo__dot demo__dot--y" />
          <span className="demo__dot demo__dot--g" />
          <span className="demo__url">{p.url ?? `${p.id}.app`}</span>
          <span className="demo__live">
            <span aria-hidden="true" />
            {p.status === 'live' ? 'Live' : p.statusLabel}
          </span>
        </div>
        <div className="demo__mock">
          <div className="demo__mock-side">
            <span /><span /><span /><span /><span />
          </div>
          <div className="demo__mock-main">
            <div className="demo__mock-kpis">
              {p.kpis.slice(0, 3).map((kpi) => (
                <div className="demo__mock-kpi" key={kpi.label}>
                  <strong>{kpi.val}</strong>
                  <span>{kpi.label}</span>
                </div>
              ))}
            </div>
            <svg
              className="demo__mock-chart"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon className="demo__mock-area" points={area} />
              <polyline className="demo__mock-line" points={pts} />
            </svg>
          </div>
        </div>

        {/* Glass overlay — always visible at bottom, CTA appears on hover */}
        <div className="demo__glass">
          <div className="demo__glass-meta">
            <span className={`demo__status-chip demo__status-chip--${p.status}`}>
              <span aria-hidden="true" />
              {p.statusLabel}
            </span>
          </div>
          <h3 className="demo__title">{p.title}</h3>
          <p className="demo__tagline">{p.tagline}</p>
          <div className="demo__chips">
            {stack.map((s) => <span key={s}>{s}</span>)}
          </div>
          <Link href={`/work#${p.id}`} className="demo__cta" tabIndex={0}>
            Read case study
            <svg aria-hidden="true" width="14" height="14"><use href="#icon-arrow" /></svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function DemosGrid() {
  return (
    <section className="demos">
      <div className="demos__media" aria-hidden="true">
        <video
          src="/videos/demos.mp4"
          poster="/videos/demos-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          data-bg-video
          aria-hidden="true"
        />
        <div className="demos__overlay" />
      </div>

      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Live Work</span>
          <h2>Real software. Real businesses.</h2>
          <p>Six platforms built from scratch. Each solved a problem for a real business.</p>
        </div>

        {/* Featured row — 2 large */}
        <div className="demos__featured">
          {featured.map((p) => <DemoCard key={p.id} p={p} large />)}
        </div>

        {/* Smaller row — 4 cards */}
        <div className="demos__smaller">
          {smaller.map((p) => <DemoCard key={p.id} p={p} />)}
        </div>

        <div className="demos__footer" data-reveal>
          <Link href="/work" className="btn btn-secondary">
            See all 6 case studies
            <svg aria-hidden="true" width="16" height="16"><use href="#icon-arrow" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
