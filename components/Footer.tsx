import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link href="/" className="footer__logo">
              <Image src="/logo.png" alt="Bluethroat" width={28} height={28} />
              Bluethroat
            </Link>
            <p>AI automation &amp; web platforms for non-tech professionals in Europe.</p>
            <span className="mono" style={{ color: 'var(--ink-faint)', fontSize: '0.78rem' }}>
              Dublin, Ireland · Shimla, India
            </span>
          </div>
          <div className="footer__cols">
            <div className="footer__col">
              <h4>Navigation</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/work">Work</Link></li>
                <li><Link href="/process">Process</Link></li>
                <li><Link href="/about">About</Link></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@bluethroat.in">
                    hello@bluethroat.in
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/prashant" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Bluethroat. All rights reserved.</span>
          <div className="footer__socials">
            <a
              href="https://linkedin.com/in/prashant"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg aria-hidden="true"><use href="#icon-linkedin" /></svg>
            </a>
            <a
              href="https://twitter.com/prashant"
              aria-label="X / Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg aria-hidden="true"><use href="#icon-x-social" /></svg>
            </a>
            <a
              href="https://github.com/prashant"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg aria-hidden="true"><use href="#icon-github" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
