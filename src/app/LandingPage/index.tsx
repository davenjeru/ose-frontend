import CaseStudySection from '@/app/LandingPage/CaseStudySection.tsx';
import LetUsProtectSection from '@/app/LandingPage/LetUsProtectSection';
import PrimarySection from '@/app/LandingPage/PrimarySection.tsx';
import NavBar from '@/lib/components/NavBar';

const LandingPage = () => (
  <>
    <NavBar />
    <PrimarySection />
    <CaseStudySection />
    <LetUsProtectSection />
  </>
);

export default LandingPage;
