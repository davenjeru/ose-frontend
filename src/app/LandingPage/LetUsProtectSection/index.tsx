import FeatureSection from '@/app/LandingPage/LetUsProtectSection/FeatureSection';
import RiskScoreCard from '@/app/LandingPage/LetUsProtectSection/RiskScoreCard';
import Page from '@/lib/components/Page.tsx';

const LetUsProtectSection = () => (
  <Page>
    <div className="flex flex-col items-center gap-16">
      <h1 className="text-center font-sora text-sora-heading-xxlarge font-light">
        Let Us Protect You
      </h1>
      <div className="flex flex-row items-center gap-8">
        <FeatureSection />
        <RiskScoreCard />
      </div>
    </div>
  </Page>
);
export default LetUsProtectSection;
