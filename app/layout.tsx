import type { Metadata } from 'next';
import { Geist, Geist_Mono, Cormorant } from 'next/font/google';
import { ViewTransition } from 'react';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageBackground from '@/components/PageBackground';
import IconSprite from '@/components/IconSprite';
import AnimationProvider from '@/components/AnimationProvider';
import ScrollProgress from '@/components/ScrollProgress';
import CursorFollower from '@/components/CursorFollower';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const cormorant = Cormorant({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Bluethroat — AI automation & web platforms for European SMEs',
    template: '%s — Bluethroat',
  },
  description:
    'Automation dashboards and web platforms for non-tech professionals in Europe. Irish-registered. Builder-led. Trusted by YC-backed teams.',
  metadataBase: new URL('https://bluethroat.ie'),
  openGraph: {
    title: 'Bluethroat — AI automation & web platforms for European SMEs',
    description:
      'Automation dashboards and web platforms for non-tech professionals in Europe. Irish-registered. Builder-led.',
    siteName: 'Bluethroat',
    type: 'website',
    locale: 'en_IE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bluethroat — AI automation & web platforms for European SMEs',
    description:
      'Automation dashboards and web platforms for non-tech professionals in Europe. Irish-registered. Builder-led.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Add 'js' class synchronously before any paint — prevents FOUC on reveal animations */}
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('js');` }} />
      </head>
      <body>
        <IconSprite />
        <PageBackground />
        <ScrollProgress />
        <CursorFollower />
        <ViewTransition name="site-header">
          <Nav />
        </ViewTransition>
        <main>
          <ViewTransition default="page-fade">
            {children}
          </ViewTransition>
        </main>
        <Footer />
        <AnimationProvider />
      </body>
    </html>
  );
}
