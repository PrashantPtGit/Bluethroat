'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav__inner">
        <Link href="/" className="nav__logo">
          <Image src="/logo.png" alt="Bluethroat" width={28} height={28} priority />
          Bluethroat
        </Link>

        <div className="nav__links" role="list">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="nav__actions">
          <Link
            href="https://wa.me/919876543210"
            className="btn btn-primary btn-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg aria-hidden="true"><use href="#icon-whatsapp" /></svg>
            Let&apos;s Talk
          </Link>
          <button className="nav__toggle" aria-label="Open menu" aria-expanded="false">
            <svg aria-hidden="true" className="icon-menu"><use href="#icon-menu" /></svg>
            <svg aria-hidden="true" className="icon-close"><use href="#icon-close" /></svg>
          </button>
        </div>
      </div>

      <div className="nav__mobile" aria-hidden="true">
        {links.map((l) => (
          <Link key={l.href} href={l.href} aria-current={pathname === l.href ? 'page' : undefined}>
            {l.label}
          </Link>
        ))}
        <Link
          href="https://wa.me/919876543210"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg aria-hidden="true"><use href="#icon-whatsapp" /></svg>
          Let&apos;s Talk
        </Link>
      </div>
    </nav>
  );
}
