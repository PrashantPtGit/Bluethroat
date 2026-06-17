import Link from 'next/link';

interface CaseStudyProps {
  id: string;
  num: string;
  variant: string;
  title: string;
  tagline: string;
  status: 'live' | 'prototype' | 'dev';
  statusLabel: string;
  url?: string;
  stack: string;
  timeline: string;
  role: string;
  challenge: string;
  solution: string;
  outcome: string;
  kpis: Array<{ val: string; label: string }>;
  bars: number[];
  demoHref?: string;
}

export default function ProjectCaseStudy({
  id, num, variant, title, tagline, status, statusLabel,
  url, stack, timeline, role,
  challenge, solution, outcome,
  kpis, bars, demoHref,
}: CaseStudyProps) {
  const maxBar = Math.max(...bars);
  const barsNorm = bars.map((v) => Math.round((v / maxBar) * 100));

  return (
    <article className={`case case--${variant}`} id={id} data-reveal>
      <div className="container">
        <div className="case__top">
          <div>
            <span className="case__num" aria-hidden="true">{num}</span>
            <h2 className="case__title">{title}</h2>
            <p className="case__tagline">{tagline}</p>
            <div className={`case__status case__status--${status === 'prototype' ? 'proto' : status === 'dev' ? 'dev' : ''}`}>
              <span aria-hidden="true" />
              {statusLabel}
            </div>
            <div className="case__meta">
              {url && (
                <div className="case__meta-row">
                  <span className="case__meta-label">Live at</span>
                  <span className="case__meta-val">
                    <a href={`https://${url}`} target="_blank" rel="noopener noreferrer">{url}</a>
                  </span>
                </div>
              )}
              <div className="case__meta-row">
                <span className="case__meta-label">Stack</span>
                <span className="case__meta-val">{stack}</span>
              </div>
              <div className="case__meta-row">
                <span className="case__meta-label">Timeline</span>
                <span className="case__meta-val">{timeline}</span>
              </div>
              <div className="case__meta-row">
                <span className="case__meta-label">My role</span>
                <span className="case__meta-val">{role}</span>
              </div>
            </div>
            <div className="case__actions">
              {demoHref && (
                <a href={demoHref} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Live Demo
                  <svg aria-hidden="true" width="18" height="18"><use href="#icon-arrow" /></svg>
                </a>
              )}
              <Link href="https://wa.me/919876543210" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" width="18" height="18"><use href="#icon-whatsapp" /></svg>
                Discuss a Similar Build
              </Link>
            </div>
          </div>

          <div className="case__screen" aria-hidden="true">
            <div className="case__screen-chrome">
              <span className="case__screen-dot case__screen-dot--r" />
              <span className="case__screen-dot case__screen-dot--y" />
              <span className="case__screen-dot case__screen-dot--g" />
              {url && (
                <span className="case__screen-url">{url}</span>
              )}
            </div>
            <div className="case__screen-body">
              <div className="case__screen-kpis">
                {kpis.map((kpi) => (
                  <div className="case__screen-kpi" key={kpi.label}>
                    <strong>{kpi.val}</strong>
                    <span>{kpi.label}</span>
                  </div>
                ))}
              </div>
              <div
                className="case__screen-bar"
                style={{ '--bar-count': bars.length } as React.CSSProperties}
              >
                {barsNorm.map((h, i) => (
                  <div
                    key={i}
                    className="case__screen-bar-col"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="case__body">
          <div className="case__block">
            <h4>The Challenge</h4>
            <p>{challenge}</p>
          </div>
          <div className="case__block">
            <h4>The Solution</h4>
            <p>{solution}</p>
          </div>
          <div className="case__block">
            <h4>The Outcome</h4>
            <p>{outcome}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
