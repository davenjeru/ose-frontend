import CaseStudySection from '@/app/CaseStudySection.tsx';
import PrimarySection from '@/app/PrimarySection.tsx';
import NavBar from '@/lib/components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <PrimarySection />
      <CaseStudySection />
    </>
  );
};

export default App;
