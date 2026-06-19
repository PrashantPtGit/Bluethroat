'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const WORDMARK = 'Bluethroat';
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Hero() {
  const [ready, setReady] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { damping: 35, stiffness: 70 });
  const springY = useSpring(rawY, { damping: 35, stiffness: 70 });

  // Three cards at different parallax depths
  const c1x = useTransform(springX, [-1, 1], [-22, 22]);
  const c1y = useTransform(springY, [-1, 1], [-14, 14]);
  const c2x = useTransform(springX, [-1, 1], [14, -14]);
  const c2y = useTransform(springY, [-1, 1], [-10, 10]);
  const c3x = useTransform(springX, [-1, 1], [-10, 10]);
  const c3y = useTransform(springY, [-1, 1], [16, -16]);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    setReady(true);

    const onMove = (e: MouseEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 2);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [rawX, rawY]);

  return (
    <section className="hero">
      {/* ── Layer 1: Media ── */}
      <div className="hero__media" aria-hidden="true">
        <video
          className="hero__video"
          src="/videos/hero.mp4"
          poster="/videos/hero-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          data-bg-video
        />
        <div className="hero__overlay" />
        {/* Atmospheric depth — animated radial glows */}
        <div className="hero__cosmic" />
        <div className="hero__grain" />
        <div className="hero__vignette" />
        {/* Bottom scrim — keeps top cosmic-bright, darkens bottom for small text */}
        <div className="hero__scrim" />
      </div>

      {/* ── Layer 2: Floating glass cards (desktop + pointer only) ── */}
      {ready && (
        <div className="hero__cards" aria-hidden="true">
          {/* Card: FitBook KPI */}
          <motion.div className="hcard hcard--1" style={{ x: c1x, y: c1y }}>
            <div className="hcard__float">
              <span className="hcard__dot" />
              <div className="hcard__project">FitBook</div>
              <div className="hcard__metric">60%↓</div>
              <div className="hcard__desc">member support queries</div>
              <div className="hcard__tags">
                <span>3 gyms</span>
                <span>Live</span>
              </div>
            </div>
          </motion.div>

          {/* Card: MedRed KPI */}
          <motion.div className="hcard hcard--2" style={{ x: c2x, y: c2y }}>
            <div className="hcard__float">
              <span className="hcard__dot hcard__dot--blue" />
              <div className="hcard__project">MedRed</div>
              <div className="hcard__metric">90s</div>
              <div className="hcard__desc">per clinical report</div>
            </div>
          </motion.div>

          {/* Card: Aggregate */}
          <motion.div className="hcard hcard--3" style={{ x: c3x, y: c3y }}>
            <div className="hcard__float">
              <div className="hcard__project">Platforms shipped</div>
              <div className="hcard__metric">6</div>
              <div className="hcard__tags">
                <span>Next.js</span>
                <span>Supabase</span>
                <span>Stripe</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* ── Layer 3: Content ── */}
      <div className="container hero__content">
        {/* Eyebrow */}
        <div className="hero__eyebrow">
          <span className="hero__eyebrow-dot" aria-hidden="true" />
          500+ developers mentored · 20+ businesses helped · Trusted by YC-backed teams
        </div>

        {/* Wordmark — massive sans-serif, the dominant signal */}
        <h1 className="hero__wordmark" aria-label="Bluethroat">
          {WORDMARK.split('').map((char, i) => (
            <motion.span
              key={i}
              className="hero__letter"
              aria-hidden="true"
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.04 + i * 0.055, ease: EASE }}
              style={{ display: 'inline-block', willChange: 'transform, opacity' }}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        {/* Sub-headline */}
        <p className="hero__sub" data-reveal>
          We build websites and tools that handle your boring work — so you can focus on
          your customers.
        </p>

        <p className="hero__sub-sub" data-reveal>
          Used by clinics, gyms, coaches, and brokers across Ireland, UK, and Europe.
        </p>

        <p className="hero__meta" data-reveal>
          Irish-registered&ensp;·&ensp;Builder-led&ensp;·&ensp;6 production builds shipped
        </p>

        {/* CTAs */}
        <div className="hero__cta" data-reveal>
          <Link
            href="https://wa.me/919876543210"
            className="btn btn-primary btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg aria-hidden="true" width="18" height="18"><use href="#icon-whatsapp" /></svg>
            WhatsApp Us
          </Link>
          <Link href="/work" className="btn btn-secondary btn-lg">
            See the work
            <svg aria-hidden="true" width="18" height="18"><use href="#icon-arrow" /></svg>
          </Link>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-label">scroll</span>
      </div>
    </section>
  );
}
