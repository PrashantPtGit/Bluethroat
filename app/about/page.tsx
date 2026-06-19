import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Prashant Patitripathi — COO at Sarg.io, mentor to 500+ developers across 4 countries, and the person who builds every Bluethroat project personally. Irish-registered, Shimla-based.',
};

const credentials = [
  {
    icon: '🎓',
    title: 'Computer Science Engineering',
    body: 'Graduated from a tier-1 engineering college with a specialisation in distributed systems and software architecture.',
    detail: 'B.Tech CSE · 2020',
  },
  {
    icon: '🏢',
    title: 'Ex-Startup Engineer',
    body: 'Built core features at a Series B edtech startup — designed the real-time collaboration engine used by 200K+ students.',
    detail: 'Senior Engineer · 2020–2022',
  },
  {
    icon: '🚀',
    title: 'Indie Product Builder',
    body: 'Shipped 6 production SaaS products since 2022, serving founders across fitness, fintech, healthcare, and education.',
    detail: 'Founder, Bluethroat · 2022–Present',
  },
  {
    icon: '🧑‍🏫',
    title: 'Engineering Mentor',
    body: 'Mentored 500+ developers through live sessions, code reviews, and career guidance — from juniors to senior engineers.',
    detail: '500+ mentored · 2021–Present',
  },
  {
    icon: '📦',
    title: 'Open Source Contributor',
    body: 'Contributed to Next.js ecosystem tooling and published three open-source packages with combined 12K+ weekly downloads.',
    detail: '12K+ weekly downloads',
  },
  {
    icon: '🎤',
    title: 'Community Speaker',
    body: 'Spoken at React Bangalore, JSConf India, and multiple product meetups on topics ranging from architecture to indie hacking.',
    detail: 'React Bangalore · JSConf India',
  },
];

const principles = [
  {
    num: '01',
    title: 'Ship first, perfect later.',
    body: 'A working product in users\' hands beats a perfect product in Figma. I bias heavily toward shipping early and iterating based on real feedback.',
  },
  {
    num: '02',
    title: 'Code is a product decision.',
    body: 'Every architectural choice has a business consequence. I think about scalability, maintainability, and cost — not just making tests pass.',
  },
  {
    num: '03',
    title: 'Own the outcome.',
    body: 'I don\'t clock in and clock out. When I\'m building your product, I\'m thinking about it in the shower, on weekends, at 2am. That\'s what ownership feels like.',
  },
  {
    num: '04',
    title: 'Radical simplicity.',
    body: 'The best code is code you don\'t write. The best feature is the one users don\'t need to learn. Complexity is a cost — I spend it carefully.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="ahero">
        <div className="container">
          <div className="ahero__inner">
            <div data-reveal>
              <span className="ahero__eyebrow">About</span>
              <h1 className="ahero__title">
                <span className="grad-text">Engineer</span><br />
                by trade.<br />
                Founder<br />
                by nature.
              </h1>
              <p className="ahero__lead">
                I build products the way I&apos;d want them built for myself — fast, clean,
                thoughtful. I care about the business outcome as much as the code quality.
              </p>
            </div>

            <div className="ahero__card" data-reveal>
              <div className="ahero__card-top">
                <div className="ahero__avatar" aria-label="Prashant">P</div>
                <div className="ahero__card-name">Prashant Patitripathi</div>
                <div className="ahero__card-role">COO, Sarg.io · Founder, Bluethroat</div>
                <div className="ahero__card-location">
                  <svg aria-hidden="true" width="12" height="12"><use href="#icon-pin" /></svg>
                  Shimla, India · Dublin, Ireland
                </div>
              </div>
              <div className="ahero__card-body">
                <div className="ahero__card-stats">
                  <div className="ahero__card-stat">
                    <strong>6+</strong>
                    <span>Products</span>
                  </div>
                  <div className="ahero__card-stat">
                    <strong>500+</strong>
                    <span>Mentored</span>
                  </div>
                  <div className="ahero__card-stat">
                    <strong>4yr</strong>
                    <span>Building</span>
                  </div>
                </div>
                <div className="ahero__card-badges">
                  <span className="ahero__badge">
                    <svg aria-hidden="true" width="10" height="10"><use href="#icon-tech-react" /></svg>
                    React
                  </span>
                  <span className="ahero__badge">
                    <svg aria-hidden="true" width="10" height="10"><use href="#icon-tech-nextjs" /></svg>
                    Next.js
                  </span>
                  <span className="ahero__badge">
                    <svg aria-hidden="true" width="10" height="10"><use href="#icon-tech-supabase" /></svg>
                    Supabase
                  </span>
                  <span className="ahero__badge">
                    <svg aria-hidden="true" width="10" height="10"><use href="#icon-tech-stripe" /></svg>
                    Stripe
                  </span>
                  <span className="ahero__badge">
                    <svg aria-hidden="true" width="10" height="10"><use href="#icon-tech-vercel" /></svg>
                    Vercel
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="container">
          <div className="story__inner">
            <span className="story__label eyebrow">My Story</span>
            <div className="story__blocks">
              <div className="story__block" data-reveal>
                <h3>I started as a developer who thought good code was enough.</h3>
                <p>
                  In my first job, I was the engineer who stayed late to refactor for
                  elegance, who argued for TypeScript when nobody wanted it, who wrote
                  comprehensive tests for features that would never ship. I was technically
                  solid and commercially naive.
                </p>
              </div>
              <div className="story__block" data-reveal>
                <h3>Then I worked at a startup and learned what actually matters.</h3>
                <p>
                  At the Series B edtech where I spent two years as a senior engineer, I
                  watched us rebuild features three times because nobody talked to users first.
                  I saw beautiful architecture decisions get killed by business pivots. And I saw
                  a scrappy competitor with messy code beat us to market and capture the users.
                </p>
                <p>
                  That&apos;s when it clicked: the job isn&apos;t to write good code. The job is to
                  build things people want to use.
                </p>
              </div>
              <div className="story__block" data-reveal>
                <h3>So I started building products, not just features.</h3>
                <p>
                  I went indie in 2022. Since then I&apos;ve built six production products for
                  founders across fitness, mentorship, spirituality, fintech, healthcare, and
                  HR. Along the way I&apos;ve mentored 500+ developers — not to teach them syntax,
                  but to show them how to think about product engineering.
                </p>
                <p>
                  Bluethroat is the name I build under. It stands for precision, speed, and
                  something rare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="credentials">
        <div className="container">
          <span className="credentials__eyebrow eyebrow" data-reveal>Background</span>
          <h2 className="credentials__title" data-reveal>Experience &amp; credentials.</h2>
          <p className="credentials__current" data-reveal>
            Currently building for: clinics, gyms, coaches, brokers, consultants across
            Ireland, UK, Australia, and India.
          </p>
          <div className="credentials__grid">
            {credentials.map((c) => (
              <div className="cred" key={c.title} data-reveal>
                <div className="cred__icon" aria-hidden="true">{c.icon}</div>
                <div className="cred__title">{c.title}</div>
                <div className="cred__body">{c.body}</div>
                <div className="cred__detail mono">{c.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy">
        <div className="container">
          <div className="philosophy__header" data-reveal>
            <span className="philosophy__eyebrow eyebrow">How I Work</span>
            <h2 className="philosophy__title">Four things I believe deeply.</h2>
          </div>
          <div className="philosophy__grid">
            {principles.map((p) => (
              <div className="principle" key={p.num} data-reveal>
                <div className="principle__num">{p.num}</div>
                <div className="principle__title">{p.title}</div>
                <div className="principle__body">{p.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="connect">
        <div className="container">
          <div className="connect__inner" data-reveal>
            <span className="connect__eyebrow eyebrow">Get in Touch</span>
            <h2 className="connect__title">Let&apos;s build something together.</h2>
            <p className="connect__sub">
              Whether you have a product idea, need a technical partner, or just want to
              talk shop — my DMs are open.
            </p>
            <div className="connect__actions">
              <Link
                href="https://wa.me/919876543210"
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg aria-hidden="true" width="18" height="18"><use href="#icon-whatsapp" /></svg>
                WhatsApp Me
              </Link>
              <a
                href="mailto:hello@bluethroat.ie"
                className="btn btn-secondary btn-lg"
              >
                <svg aria-hidden="true" width="18" height="18"><use href="#icon-mail" /></svg>
                Send an Email
              </a>
            </div>
            <div className="connect__links">
              <a
                href="https://linkedin.com/in/prashant"
                className="connect__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/prashant"
                className="connect__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                X / Twitter
              </a>
              <a
                href="https://github.com/prashant"
                className="connect__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
