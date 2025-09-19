import CaseStudySection from '@/app/LandingPage/CaseStudySection.tsx';
import ContactUsSection from '@/app/LandingPage/ContactUsSection';
import LetUsProtectSection from '@/app/LandingPage/LetUsProtectSection';
import PrimarySection from '@/app/LandingPage/PrimarySection.tsx';
import Footer from '@/lib/components/Footer';
import NavBar from '@/lib/components/NavBar';

const LandingPage = () => (
  <>
    <NavBar />
    <PrimarySection />
    <CaseStudySection />
    <LetUsProtectSection />
    <ContactUsSection />
    <Footer />
  </>
);

export default LandingPage;
