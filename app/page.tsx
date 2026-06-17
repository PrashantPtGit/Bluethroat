import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import TeachingSection from '@/components/TeachingSection';
import ProblemSection from '@/components/ProblemSection';
import Packages from '@/components/Packages';
import ProcessTeaser from '@/components/ProcessTeaser';
import DemosGrid from '@/components/DemosGrid';
import AboutSection from '@/components/AboutSection';
import StudentQuotes from '@/components/StudentQuotes';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <TeachingSection />
      <ProblemSection />
      <Packages />
      <ProcessTeaser />
      <DemosGrid />
      <AboutSection />
      <StudentQuotes />
      <FAQ />
      <FinalCTA />
    </>
  );
}
