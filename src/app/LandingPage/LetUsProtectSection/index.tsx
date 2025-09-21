import FeatureSection from '@/app/LandingPage/LetUsProtectSection/FeatureSection';
import RiskScoreCard from '@/app/LandingPage/LetUsProtectSection/RiskScoreCard';
import Page from '@/lib/components/Page.tsx';

const LetUsProtectSection = () => (
  <Page>
    <div className="flex flex-col items-center gap-16 px-4">
      <h1
        className={`
          text-center font-sora text-sora-heading-medium
          md:text-sora-heading-large md:font-light
          lg:text-sora-heading-xlarge
          xl:text-sora-heading-xxlarge
        `}
      >
        Let Us Protect You
      </h1>
      <div
        className={`
          flex flex-col items-center justify-center gap-12
          md:flex-row md:gap-8
        `}
      >
        <FeatureSection />
        <RiskScoreCard />
      </div>
    </div>
  </Page>
);
export default LetUsProtectSection;
