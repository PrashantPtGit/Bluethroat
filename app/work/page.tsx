import Link from 'next/link';
import type { Metadata } from 'next';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Six production platforms built from scratch — design, engineering, and launch. Every one is live with real users.',
};

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="whero">
        <div className="whero__media" aria-hidden="true">
          <video src="/videos/hero.mp4" poster="/videos/hero-poster.jpg" autoPlay loop muted playsInline data-bg-video aria-hidden="true" />
          <div className="whero__overlay" />
        </div>
        <div className="container whero__content" data-reveal>
          <span className="whero__eyebrow">Portfolio</span>
          <h1 className="whero__title">
            Software<br />
            <span className="grad-text">that ships.</span>
          </h1>
          <p className="whero__sub">
            Six platforms in production. Each solved a real problem for a real business.
            Every one is live with real users.
          </p>
          <p className="whero__note">
            All code, design, and infrastructure is owned 100% by the client at handoff.
          </p>
        </div>
      </section>

      {/* Sticky project index */}
      <nav className="proj-index" aria-label="Project navigation">
        <div className="proj-index__inner">
          {projects.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="proj-index__link">
              <span className="proj-index__num">{p.num}</span>
              {p.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Case studies — data-driven, add new objects to data/projects.ts to auto-render */}
      {projects.map((p) => {
        const maxBar = Math.max(...p.bars);
        const barsNorm = p.bars.map((v) => Math.round((v / maxBar) * 100));

        return (
          <article className="case" id={p.id} key={p.id} data-reveal>
            <div className="container">
              <div className="case__top">
                {/* Left: meta */}
                <div>
                  <span className="case__num" aria-hidden="true">{p.num}</span>
                  <h2 className="case__title">{p.title}</h2>
                  <p className="case__tagline">{p.tagline}</p>
                  <div className={`case__status${p.status === 'prototype' ? ' case__status--proto' : p.status === 'dev' ? ' case__status--dev' : ''}`}>
                    <span aria-hidden="true" />
                    {p.statusLabel}
                  </div>
                  <div className="case__meta">
                    {p.url && (
                      <div className="case__meta-row">
                        <span className="case__meta-label">Live at</span>
                        <span className="case__meta-val">
                          <a href={`https://${p.url}`} target="_blank" rel="noopener noreferrer">{p.url}</a>
                        </span>
                      </div>
                    )}
                    <div className="case__meta-row">
                      <span className="case__meta-label">Stack</span>
                      <span className="case__meta-val">{p.stack}</span>
                    </div>
                    <div className="case__meta-row">
                      <span className="case__meta-label">Timeline</span>
                      <span className="case__meta-val">{p.timeline}</span>
                    </div>
                    <div className="case__meta-row">
                      <span className="case__meta-label">My role</span>
                      <span className="case__meta-val">{p.role}</span>
                    </div>
                  </div>
                  <div className="case__actions">
                    {p.url && (
                      <a href={`https://${p.url}`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <svg aria-hidden="true" width="16" height="16"><use href="#icon-arrow" /></svg>
                      </a>
                    )}
                    <a href="https://wa.me/919876543210" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <svg aria-hidden="true" width="16" height="16"><use href="#icon-whatsapp" /></svg>
                      Request Architecture Doc
                    </a>
                  </div>
                </div>

                {/* Right: mock screen */}
                <div className="case__screen" aria-hidden="true">
                  <div className="case__screen-chrome">
                    <span className="case__screen-dot case__screen-dot--r" />
                    <span className="case__screen-dot case__screen-dot--y" />
                    <span className="case__screen-dot case__screen-dot--g" />
                    {p.url && <span className="case__screen-url">{p.url}</span>}
                  </div>
                  <div className="case__screen-body">
                    <div className="case__screen-kpis">
                      {p.kpis.map((kpi) => (
                        <div className="case__screen-kpi" key={kpi.label}>
                          <strong>{kpi.val}</strong>
                          <span>{kpi.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="case__screen-bar">
                      {barsNorm.map((h, i) => (
                        <div key={i} className="case__screen-bar-col" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Problem / Build / Outcome */}
              <div className="case__body">
                <div className="case__block">
                  <h4>The Problem</h4>
                  <p>{p.problem}</p>
                </div>
                <div className="case__block">
                  <h4>What I Built</h4>
                  <p>{p.build}</p>
                </div>
                <div className="case__block">
                  <h4>The Outcome</h4>
                  <p>{p.outcome}</p>
                </div>
              </div>
            </div>
          </article>
        );
      })}

      {/* Project 07 — placeholder slot */}
      <div className="case case--placeholder" data-reveal aria-label="Project 07 — your platform could be next">
        <div className="container">
          <div className="case__placeholder-inner glass">
            <span className="case__num" aria-hidden="true">07</span>
            <h2 className="case__placeholder-title">Your Platform</h2>
            <p className="case__placeholder-sub">
              The next case study hasn&apos;t been built yet. It could be yours.
            </p>
            <a
              href="https://wa.me/919876543210"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg aria-hidden="true" width="16" height="16"><use href="#icon-whatsapp" /></svg>
              Start the conversation
            </a>
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <section className="wcta">
        <div className="wcta__media" aria-hidden="true">
          <video src="/videos/cta.mp4" poster="/videos/cta-poster.jpg" autoPlay loop muted playsInline data-bg-video aria-hidden="true" />
          <div className="wcta__overlay" />
        </div>
        <div className="container">
          <div className="wcta__inner" data-reveal>
            <h2>Your platform could be Project 07.</h2>
            <p>
              Got an idea or an existing product that needs a technical partner?
              Let&apos;s talk about what we can build together.
            </p>
            <div className="wcta__actions">
              <a href="https://wa.me/919876543210" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" width="16" height="16"><use href="#icon-whatsapp" /></svg>
                Start a Conversation
              </a>
              <a href="mailto:hello@bluethroat.in" className="btn btn-secondary btn-lg">
                <svg aria-hidden="true" width="16" height="16"><use href="#icon-mail" /></svg>
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
