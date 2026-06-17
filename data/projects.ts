export type ProjectStatus = 'live' | 'prototype' | 'dev';

export interface Project {
  id: string;
  num: string;
  title: string;
  tagline: string;
  status: ProjectStatus;
  statusLabel: string;
  url?: string;
  stack: string;
  timeline: string;
  role: string;
  problem: string;
  build: string;
  outcome: string;
  kpis: Array<{ val: string; label: string }>;
  bars: number[];
}

export const projects: Project[] = [
  {
    id: 'fitbook',
    num: '01',
    title: 'FitBook',
    tagline: 'Multi-gym SaaS with hardware integration',
    status: 'live',
    statusLabel: 'Live in production',
    url: 'fitbook-tawny.vercel.app',
    stack: 'React 18, Vite, Supabase, Tailwind, Vercel',
    timeline: '3 weeks',
    role: 'Full-stack design + engineering',
    problem: 'MLC Gym managed 3 locations via WhatsApp and paper logs. Scheduling, attendance, and member history were a constant operational headache.',
    build: 'Multi-tenant SaaS with role-based access for gym owners, trainers, and members. Real-time attendance data via Supabase Realtime. Hikvision fingerprint/face scanner integration for automated check-ins. Member portal with custom workout plans and progress tracking.',
    outcome: 'Live across 3 gyms. Zero manual data entry. Member support queries down 60%+. Gym owner now manages all locations from a single dashboard.',
    kpis: [{ val: '3', label: 'Gyms live' }, { val: '60%', label: 'Support queries↓' }, { val: '0', label: 'Manual entry' }],
    bars: [35, 48, 42, 65, 58, 72, 78, 82, 80, 90],
  },
  {
    id: 'skillconnect',
    num: '02',
    title: 'SkillConnect',
    tagline: 'Superprof-style local services marketplace',
    status: 'live',
    statusLabel: 'Live — production',
    url: 'servide-platform.vercel.app',
    stack: 'Next.js 16, TypeScript, Supabase, Prisma, Stripe',
    timeline: '6 weeks',
    role: 'Full-stack engineering, architecture',
    problem: 'Tutors and service providers paying 20%+ commission to existing platforms. No way to own their audience or set their own terms.',
    build: 'Full marketplace with geolocation search, in-app messaging, Stripe Connect for split payouts, admin moderation dashboard, SEO-optimised provider profile pages, GDPR-compliant data handling, PWA-enabled for mobile users.',
    outcome: 'Production-grade build covering 16+ feature modules. Providers keep 95% of their earnings vs 80% on competitor platforms.',
    kpis: [{ val: '16+', label: 'Feature modules' }, { val: '95%', label: 'Provider earnings' }, { val: 'PWA', label: 'Mobile-first' }],
    bars: [22, 38, 52, 48, 68, 62, 80, 76, 86, 90],
  },
  {
    id: 'sadhana',
    num: '03',
    title: 'Sadhana',
    tagline: 'Mobile app + custom Bluetooth haptic ring device',
    status: 'prototype',
    statusLabel: 'Prototype shipped',
    stack: 'React, Vite, Supabase, BLE HID, custom hardware',
    timeline: '4 weeks',
    role: 'Full-stack design + hardware + engineering',
    problem: 'Traditional mala jap counters interrupt meditation by requiring the practitioner to look at a screen or press a button. Screen interaction breaks the state.',
    build: 'Custom haptic ring pairs via Bluetooth LE using the HID protocol. Counts chants without requiring any screen interaction. App tracks streaks, mantras practiced, session insights, and community accountability.',
    outcome: 'Working prototype with real users in spiritual communities. Provisional patent filed. Trademark registered. Featured in two yoga teacher communities.',
    kpis: [{ val: 'BLE', label: 'Hardware' }, { val: 'Patent', label: 'Filed' }, { val: '0', label: 'Screen touches' }],
    bars: [40, 55, 50, 72, 65, 80, 75, 85, 90, 88],
  },
  {
    id: 'bhaagya',
    num: '04',
    title: 'Bhaagya',
    tagline: 'Astrology consultation platform',
    status: 'live',
    statusLabel: 'Live',
    stack: 'Next.js, Supabase, Stripe',
    timeline: '3 weeks',
    role: 'Full-stack design + engineering',
    problem: 'Traditional astrologers had no professional web presence. Bookings happened over phone calls, payments were cash-only, and there was no record of client history.',
    build: 'Custom consultation platform with astrologer profiles, real-time availability calendar, booking and payment flow, client history tracking, and secure session notes. Stripe for INR payments.',
    outcome: 'Live and serving real consultations. Astrologers report 40%+ increase in bookings from their online presence. Zero missed bookings since launch.',
    kpis: [{ val: '40%', label: 'Bookings↑' }, { val: '0', label: 'Missed bookings' }, { val: 'INR', label: 'Payments' }],
    bars: [50, 42, 60, 55, 70, 65, 75, 80, 85, 78],
  },
  {
    id: 'medred',
    num: '05',
    title: 'MedRed',
    tagline: 'Medical reports & clinical workflow tool',
    status: 'live',
    statusLabel: 'Live in clinical practice',
    stack: 'Next.js, TypeScript, Supabase',
    timeline: '4 weeks',
    role: 'Full-stack engineering',
    problem: 'Clinics generating medical reports manually — handwritten forms, no standardisation, no digital patient history, prescription errors from illegible handwriting.',
    build: 'Clinical workflow system with templated report forms, digital doctor signatures, automated PDF generation, patient portal for accessing reports, HIPAA-aware data handling, and appointment follow-up reminders.',
    outcome: 'Live in clinical practice. Reports generated in 90 seconds vs 15 minutes manually. Prescription errors eliminated. Patients can access reports from their phone.',
    kpis: [{ val: '90s', label: 'Per report' }, { val: '0', label: 'Rx errors' }, { val: '100%', label: 'Digital' }],
    bars: [35, 50, 45, 66, 60, 75, 70, 85, 80, 90],
  },
  {
    id: 'harmony',
    num: '06',
    title: 'Harmony',
    tagline: 'Communications platform (technical advisory)',
    status: 'dev',
    statusLabel: 'In development',
    stack: 'Next.js, Supabase, OpenAI',
    timeline: 'Ongoing',
    role: 'Technical lead + pitch deck strategy',
    problem: 'AI communications platform needed credible technical architecture and a pitch deck that could stand up to investor scrutiny on product-market fit and defensibility.',
    build: 'Technical strategy advisory: architecture review, stack selection, scalability planning, security model. Pitch deck refinement focused on product-market fit narrative, moat, and go-to-market clarity.',
    outcome: 'Pitch deck investor-ready. Architecture documented with clear technical differentiation. Founder secured initial investor meetings within 2 weeks of revised deck.',
    kpis: [{ val: 'Seed', label: 'Stage' }, { val: '2wk', label: 'To meetings' }, { val: 'AI', label: 'Core' }],
    bars: [60, 65, 70, 68, 75, 72, 80, 78, 85, 82],
  },
  // Add new projects here — they will auto-render on the /work page
];
