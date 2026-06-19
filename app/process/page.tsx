import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process',
  description: 'From first call to live software in 5 days. Here is exactly how we work — step by step, with clear deliverables at each stage.',
};

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    duration: 'Same day · Free',
    description: 'We align on your problem, your users, and what success looks like. No NDA required, no commitment.',
    deliverables: ['Written brief summarising the scope', 'Initial tech stack recommendation', 'First rough timeline estimate'],
    detail: "I ask 10 sharp questions. Most founders come in knowing what they want to build. My job is to surface what they actually need to build — the smallest, highest-value version that solves the real problem.",
  },
  {
    num: '02',
    title: 'Proposal + Demo',
    duration: '1-2 days',
    description: 'A written proposal with scope, timeline, price, and a clickable Figma prototype so you can see it before committing.',
    deliverables: ['Fixed-price written proposal', 'Figma prototype / wireframes', 'Architecture decision record (ADR)'],
    detail: "You get a PDF proposal, not a pitch deck. Everything is fixed: scope, timeline, and price. No hidden clauses. If scope changes, we agree in writing first — changes are tracked and priced as add-ons, never surprises.",
  },
  {
    num: '03',
    title: 'Build Phase',
    duration: '3-5 days',
    description: 'Daily commits to a staging URL you can access throughout. Weekly video update. Real progress, not status reports.',
    deliverables: ['Weekly demo videos (Loom)', 'Staging URL live from day 2', 'Weekly written progress note'],
    detail: "I write code every day. You can open the staging URL at any point and test it yourself. I use GitHub for version control — you have read access throughout. If something does not look right, you tell me and I fix it same day.",
  },
  {
    num: '04',
    title: 'Launch + Training',
    duration: '1 day',
    description: 'Production deployment, domain configuration, team training, and a full handoff document — so you are never dependent on me to keep it running.',
    deliverables: ['Production deployment on your infrastructure', '1-hour live training session (recorded)', 'Full handoff doc: architecture, env vars, runbook'],
    detail: "Everything is deployed to your Vercel, your Supabase, your domain. I write you a runbook any developer can follow. The training session is recorded so your team can reference it. You own everything from this point.",
  },
  {
    num: '05',
    title: 'Ongoing Support',
    duration: 'Ongoing',
    description: 'Async Slack support, monthly retainer, or nothing — your choice. Your code does not stop working just because the contract ends.',
    deliverables: ['30-day bug-fix warranty (included)', 'Optional async retainer from ₹15k/mo', 'Optional feature sprint packs'],
    detail: "Growth Build includes 30 days of post-launch support for bugs in delivered scope. After that, you can continue on an async retainer, hire a developer using the codebase, or simply use what was built. I write code that does not require me to maintain it.",
  },
];

const tech = [
  { category: 'Frontend', items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Supabase', 'PostgreSQL', 'Prisma', 'Edge Functions'] },
  { category: 'Payments', items: ['Stripe', 'Razorpay', 'Stripe Connect'] },
  { category: 'Infra', items: ['Vercel', 'Railway', 'Resend', 'Sentry'] },
];

const included = [
  'Full source code — no lock-in',
  'Database schema + migrations',
  'Auth (email, Google, magic link)',
  'Mobile-responsive design',
  'Admin dashboard',
  'Payments & subscriptions',
  'Email notifications via Resend',
  'Error monitoring via Sentry',
  'CI/CD pipeline (GitHub Actions)',
  'Complete handoff documentation',
];

const notIncluded = [
  'Native mobile apps (iOS / Android)',
  'Machine learning / AI model training',
  'Content creation or copywriting',
  'Logo and brand identity design',
  'Hardware / IoT (scoped separately)',
  'Ongoing maintenance (see retainer)',
];

const faqs = [
  {
    q: 'What if I hate the demo and want changes?',
    a: 'The Figma prototype exists precisely for this moment. Change anything at the prototype stage — it costs nothing. After we agree on scope and sign, changes are treated as add-ons (price agreed in writing first, always). The build phase stays focused on the agreed brief.',
  },
  {
    q: 'What if you go silent mid-project?',
    a: "You have the staging URL, the GitHub repo with read access, and a Slack channel. Daily commits mean there is always a working state. If I am sick or in an emergency, I will let you know immediately. I have never gone silent on a project.",
  },
  {
    q: 'Who owns the code?',
    a: 'You do. 100%. All code, database schema, design files, and infrastructure are transferred to you at handoff. No ongoing licensing fee, no lock-in to my tools. You can take the code, hire someone else to build on top of it, and I have no claim.',
  },
  {
    q: 'What if I need changes after launch?',
    a: 'Growth Build includes 30 days of post-launch bug fixes for delivered scope at no charge. New features are quoted separately and arranged as mini-sprints. Most clients run one or two feature sprints in the first few months.',
  },
  {
    q: 'Will you sign an NDA?',
    a: "Yes, on request. I sign NDAs regularly — send me your standard form and I'll review it. One ask: let me show the live URL and a description in my portfolio (no internal code or data). If that's sensitive, we can negotiate a 6-month delayed disclosure.",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="phero">
        <div className="phero__media" aria-hidden="true">
          <video src="/videos/hero.mp4" poster="/videos/hero-poster.jpg" autoPlay loop muted playsInline data-bg-video aria-hidden="true" />
          <div className="phero__overlay" />
        </div>
        <div className="container phero__content" data-reveal>
          <span className="phero__eyebrow">How We Work</span>
          <h1 className="phero__title">
            From first call to<br />
            <span className="grad-text">live software</span><br />
            in 5 days.
          </h1>
          <p className="phero__sub">
            Yes, really. We have a team. We move fast.
          </p>
          <div className="phero__cta">
            <Link href="https://wa.me/919876543210" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
              <svg aria-hidden="true" width="18" height="18"><use href="#icon-whatsapp" /></svg>
              Start with a free Discovery Call
            </Link>
            <Link href="/work" className="btn btn-secondary btn-lg">
              See Past Work
              <svg aria-hidden="true" width="18" height="18"><use href="#icon-arrow" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 5-step timeline */}
      <section className="timeline">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">The 5 Steps</span>
            <h2>Step by step, from idea to live product.</h2>
            <p>Each step has clear deliverables. You always know where we are.</p>
          </div>

          <div className="timeline__list">
            {steps.map((step) => (
              <div className="timeline__item" key={step.num} data-reveal>
                <div className="timeline__head">
                  <div className="timeline__num">{step.num}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <span className="timeline__duration mono">{step.duration}</span>
                  </div>
                </div>
                <div className="timeline__body glass">
                  <p className="timeline__desc">{step.description}</p>
                  <p className="timeline__detail">{step.detail}</p>
                  <div className="timeline__deliverables">
                    <strong>Deliverables</strong>
                    <ul>
                      {step.deliverables.map((d) => (
                        <li key={d}>
                          <svg aria-hidden="true" width="14" height="14"><use href="#icon-check" /></svg>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="techstack">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Tech Stack</span>
            <h2>Battle-tested tools, not experiments.</h2>
            <p>
              Every tool chosen for stability, documentation quality, and community support.
              No bleeding-edge tech for its own sake.
            </p>
          </div>
          <div className="ptech__grid" data-reveal>
            {tech.map((group) => (
              <div className="ptech__group glass" key={group.category}>
                <span className="ptech__cat">{group.category}</span>
                <div className="ptech__items">
                  {group.items.map((item) => (
                    <span className="ptech__item" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included / Not Included */}
      <section className="included">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Scope</span>
            <h2>What&apos;s included and what&apos;s not.</h2>
            <p>Full transparency on scope so there are no surprises.</p>
          </div>

          <div className="included__grid">
            <div className="included__card included__card--yes glass" data-reveal>
              <h3>
                <svg aria-hidden="true" width="20" height="20"><use href="#icon-check" /></svg>
                Included
              </h3>
              <ul>
                {included.map((item) => (
                  <li key={item}>
                    <svg aria-hidden="true" width="16" height="16"><use href="#icon-check" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="included__card included__card--no glass" data-reveal>
              <h3>
                <svg aria-hidden="true" width="20" height="20"><use href="#icon-x" /></svg>
                Not Included
              </h3>
              <ul>
                {notIncluded.map((item) => (
                  <li key={item}>
                    <svg aria-hidden="true" width="16" height="16"><use href="#icon-x" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="pscope__note">
                Hardware, AI model training, and native mobile can be scoped separately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process FAQs */}
      <section className="faq">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Process FAQ</span>
            <h2>Common questions about how this works.</h2>
          </div>
          <div className="faq__list">
            {faqs.map((item, i) => (
              <details className="faq__item glass" key={i} data-reveal>
                <summary>
                  {item.q}
                  <svg aria-hidden="true" width="18" height="18"><use href="#icon-chevron" /></svg>
                </summary>
                <div className="faq__body">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-final">
        <div className="cta-final__media" aria-hidden="true">
          <video src="/videos/cta.mp4" poster="/videos/cta-poster.jpg" autoPlay loop muted playsInline data-bg-video aria-hidden="true" />
          <div className="cta-final__overlay" />
        </div>
        <div className="container">
          <div className="cta-final__inner" data-reveal>
            <h2>
              Ready to start?{' '}
              <span className="grad-text">Let&apos;s talk.</span>
            </h2>
            <p>
              Book a free discovery call. 30 minutes. No pitch, no pressure.
              Just an honest conversation about your product.
            </p>
            <div className="cta-final__actions">
              <Link href="https://wa.me/919876543210" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" width="18" height="18"><use href="#icon-whatsapp" /></svg>
                Message on WhatsApp
              </Link>
              <Link href="/work" className="btn btn-secondary btn-lg">
                See Past Work
                <svg aria-hidden="true" width="18" height="18"><use href="#icon-arrow" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
