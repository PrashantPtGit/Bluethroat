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
    id: 'onair',
    num: '01',
    title: 'OnAir',
    tagline: 'AI Content Autopilot — your social media, on autopilot',
    status: 'live',
    statusLabel: 'Live in production',
    url: 'content-engine-five-beryl.vercel.app',
    stack: 'React, Supabase, AI',
    timeline: '5 weeks',
    role: 'Full-stack design + engineering',
    problem: 'Most business owners disappear from social media because writing posts takes hours. Their competitors stay visible. They lose customers without realizing it.',
    build: 'AI that learns your brand voice from your past posts. PDF-to-post converter that turns any document into 7 days of content. Carousel maker with 6 templates. Auto-publishing to Instagram, LinkedIn, and Twitter. Weekly digest emails.',
    outcome: 'Business owners stay visible on social media without spending an hour a day. Content gets posted even when they’re busy with clients.',
    kpis: [{ val: '3', label: 'Platforms auto-posted' }, { val: '7', label: 'Days of content / PDF' }, { val: '24/7', label: 'Always posting' }],
    bars: [30, 42, 38, 55, 60, 68, 74, 80, 86, 92],
  },
  {
    id: 'medred',
    num: '02',
    title: 'MedRed',
    tagline: 'Medical Reports Made Simple — clinic reports in 90 seconds, not 9 minutes',
    status: 'live',
    statusLabel: 'Live',
    stack: 'Next.js, Supabase, AI',
    timeline: '4 weeks',
    role: 'Full-stack engineering',
    problem: 'Doctors were writing reports by hand or in Word docs. No standard format, no history. Patients waited weeks for paperwork. Front desk got 50+ calls a day asking for reports.',
    build: 'Smart form templates for each report type. AI-assisted text generation that doctors can edit. Auto-generated PDFs with clinic branding. Secure patient portal where patients access reports anytime.',
    outcome: 'Reports done in 90 seconds. Patients get reports the same day. Front desk calls down by 70%.',
    kpis: [{ val: '90s', label: 'Per report' }, { val: '70%', label: 'Front desk calls↓' }, { val: '100%', label: 'Digital' }],
    bars: [35, 50, 45, 66, 60, 75, 70, 85, 80, 90],
  },
  {
    id: 'skillconnect',
    num: '03',
    title: 'SkillConnect',
    tagline: 'Marketplace for Tutors and Trainers — like Airbnb, but for local services',
    status: 'live',
    statusLabel: 'Live — production',
    url: 'servide-platform.vercel.app',
    stack: 'Next.js, Supabase, Stripe',
    timeline: '6 weeks',
    role: 'Full-stack engineering, architecture',
    problem: 'Local tutors and trainers were losing 20% of every booking to platforms like Superprof. And spending hours managing bookings on WhatsApp, Excel, and email.',
    build: 'Beautiful profile pages for each provider. Location-based search so customers find people nearby. Built-in calendar booking. Stripe payments with automatic splits. In-app messaging. Mobile-first design.',
    outcome: 'Providers keep more of their earnings. Customers book in seconds. No more “is this still available?” emails.',
    kpis: [{ val: '95%', label: 'Provider earnings kept' }, { val: '<1min', label: 'To book' }, { val: 'Stripe', label: 'Built-in payments' }],
    bars: [22, 38, 52, 48, 68, 62, 80, 76, 86, 90],
  },
  {
    id: 'applyengine',
    num: '04',
    title: 'Apply Engine',
    tagline: 'AI Job Application Co-Pilot — like a personal assistant who applies to jobs for you',
    status: 'dev',
    statusLabel: 'In active development',
    stack: 'Next.js, Supabase, AI',
    timeline: 'Ongoing',
    role: 'Full-stack design + engineering',
    problem: 'Skilled people were spending evenings and weekends applying to jobs. Customizing each application takes 20+ minutes. Most never hear back. The whole process is demoralizing.',
    build: 'AI that reads job descriptions and writes custom applications in your voice. Daily queue of top 10 matches you approve with one tap. Auto-send option for cold outreach with delay rules so it looks natural. Database of companies you target.',
    outcome: 'Coming soon. First testers reporting 5x more interview requests with 10x less time spent.',
    kpis: [{ val: '5x', label: 'More interviews' }, { val: '10x', label: 'Less time spent' }, { val: '10', label: 'Daily matches queued' }],
    bars: [40, 48, 44, 58, 55, 65, 62, 72, 70, 80],
  },
  {
    id: 'fitbook',
    num: '05',
    title: 'FitBook',
    tagline: 'Gym Management That Runs Itself — members tap their finger, everything else is automatic',
    status: 'live',
    statusLabel: 'Live across 3 gyms',
    url: 'fitbook-tawny.vercel.app',
    stack: 'React, Supabase, Hikvision hardware integration',
    timeline: '3 weeks',
    role: 'Full-stack design + hardware + engineering',
    problem: 'MLC Gym was managing 3 locations using WhatsApp groups and paper logs. Owners didn’t know who actually came to the gym. Trainers couldn’t track member progress. Renewals were forgotten.',
    build: 'Connected gym entry fingerprint scanners to a central dashboard. Multi-location support so each gym sees their own data. Workout plan builder with 1000+ exercises. Auto-renewal reminders. Member portal where members see their attendance.',
    outcome: 'Live in 3 gyms. Zero paperwork. Owners save 8+ hours a week. Member support questions down 60%.',
    kpis: [{ val: '3', label: 'Gyms live' }, { val: '8+', label: 'Hours saved / week' }, { val: '60%', label: 'Support queries↓' }],
    bars: [35, 48, 42, 65, 58, 72, 78, 82, 80, 90],
  },
  {
    id: 'harmony',
    num: '06',
    title: 'Harmony',
    tagline: 'Smart Team Communications — better conversations, less noise',
    status: 'dev',
    statusLabel: 'In development',
    stack: 'AI, communications',
    timeline: 'Ongoing',
    role: 'Technical lead + pitch deck strategy',
    problem: 'Most team chat apps create noise. Important messages get buried. Decisions drag on for days because conversations sprawl across threads.',
    build: 'Technical strategy advisory: architecture review, stack selection, scalability planning, security model. Pitch deck refinement focused on the product-market fit narrative and technical defensibility for investor conversations.',
    outcome: 'Pitch deck investor-ready. Technical roadmap documented. Team positioned to build.',
    kpis: [{ val: 'Seed', label: 'Stage' }, { val: '2wk', label: 'To investor meetings' }, { val: 'AI', label: 'Core' }],
    bars: [60, 65, 70, 68, 75, 72, 80, 78, 85, 82],
  },
  // Add new projects here — they will auto-render on the /work page
];
