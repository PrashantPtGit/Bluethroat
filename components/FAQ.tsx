'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const faqs = [
  {
    q: 'How much does a typical project cost?',
    a: 'A Launch package (website + booking + payments) runs €1,800–2,500. A full Platform build runs €3,500–6,000. Retainer support is €800–1,500/month. Scope and pricing are agreed upfront — no surprises, no change orders.',
  },
  {
    q: 'How long from first message to live software?',
    a: 'A Launch build takes 10 days. A Platform build takes 3-5 weeks. The clock starts when we agree scope, not when you first message. Discovery Call is free and can happen within 24 hours.',
  },
  {
    q: "What if I'm not technical?",
    a: "That's exactly who I build for. Physios, mortgage brokers, gym owners, coaches — people who know their business deeply but don't speak code. I translate. You tell me what needs to happen, I figure out how the software does it.",
  },
  {
    q: 'Do I own the code afterward?',
    a: 'Yes. 100%. All source code, database schema, and hosting access are transferred to you at launch. No lock-in, no ongoing platform fees to me. You own everything.',
  },
  {
    q: 'Is the work GDPR-compliant?',
    a: 'Yes. Bluethroat is Irish-registered, which means working within EU/EEA legal frameworks. Every build includes GDPR-aware data handling: consent flows, data minimisation, the right to erasure, and documentation you can show to auditors.',
  },
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Questions</span>
          <h2>What every buyer asks.</h2>
          <p>Direct answers. No corporate hedging.</p>
        </div>

        <div className="faq__list">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className="faq__item" key={i} data-reveal style={{ '--delay': `${i * 0.06}s` } as React.CSSProperties}>
                <button
                  className={`faq__q${isOpen ? ' faq__q--open' : ''}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-body-${i}`}
                >
                  <span>{item.q}</span>
                  <span className="faq__icon" aria-hidden="true">
                    <span className="faq__icon-bar faq__icon-bar--h" />
                    <span className={`faq__icon-bar faq__icon-bar--v${isOpen ? ' faq__icon-bar--hidden' : ''}`} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-body-${i}`}
                      className="faq__body"
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: EASE }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="faq__body-inner">{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="faq__hairline" aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
