import type { FC, PropsWithChildren } from 'react';
import communityIcon from '../../public/icons/community-icon.svg';
import listStyleIcon from '../../public/icons/list-style.svg';
import shieldIcon from '../../public/icons/shield-icon.svg';
import supplyChainIcon from '../../public/icons/supply-chain-icon.svg';
import LandingPageIcon, {
  type LandingPageIconProps,
} from '@/lib/components/LandingPageIcon';
import Page from '@/lib/components/Page';
import RiskScoreVisualizer from '@/lib/components/RiskScoreVisualizer';

const FeatureList: FC<PropsWithChildren> = ({ children }) => (
  <dl
    className={`
      flex list-none flex-col gap-20
      [counter-reset:feature]
    `}
  >
    {children}
  </dl>
);

const FeatureItem: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => (
  <li
    className={`
      flex flex-row
      [counter-increment:feature]
      before:mr-4 before:font-sora before:text-sora-heading-xlarge
      before:font-light before:text-secondary-foreground-2
      ${'before:[content:counter(feature,decimal-leading-zero)]'}
    `}
  >
    <div className="flex flex-col gap-1">
      <dt className="font-sora text-sora-heading-xlarge font-light">
        <h1>{title}</h1>
      </dt>
      <dd
        className={`
          -ml-18 font-roboto text-roboto-text-large font-light text-subtitle
        `}
      >
        {children}
      </dd>
    </div>
  </li>
);

const RiskList: FC<PropsWithChildren> = ({ children }) => (
  <ul
    className={`
      flex list-none flex-col gap-1 text-roboto-text-tiny text-primary-grey
    `}
  >
    {children}
  </ul>
);

const RiskItem: FC<PropsWithChildren<{ icon: LandingPageIconProps }>> = ({
  icon,
  children,
}) => (
  <li className="flex flex-row gap-2">
    <LandingPageIcon {...icon} width={10} height={10} />
    <p>{children}</p>
  </li>
);

const RiskScoreCard = () => {
  const listStyle: LandingPageIconProps = {
    alt: '.',
    src: listStyleIcon,
  };

  return (
    <div
      className={`
        flex h-134 w-[325px] flex-col items-center rounded-md border
        border-gray-700 p-2
      `}
    >
      <h3 className="font-sora text-sora-heading-small font-light">
        RISK SCORE
      </h3>
      <RiskScoreVisualizer score={Math.random() * 100} />
      <br />
      <div className="px-4 pt-6 font-roboto">
        <h4 className="font-bold">Why This Score Matters</h4>
        <RiskList>
          <RiskItem icon={listStyle}>
            Supply chain attacks increased 650% in 2022
          </RiskItem>
          <RiskItem icon={listStyle}>
            70% of vulnerabilities are in dependencies, not your code
          </RiskItem>
          <RiskItem icon={listStyle}>
            Medium risk dependencies need active monitoring
          </RiskItem>
        </RiskList>
        <br />
        <h4 className="font-bold">What We Analyze</h4>
        <RiskList>
          <RiskItem icon={{ src: communityIcon, alt: 'Community Health Icon' }}>
            Community Health
          </RiskItem>
          <RiskItem icon={{ src: shieldIcon, alt: 'Security Practices Icon' }}>
            Security Practices
          </RiskItem>
          <RiskItem
            icon={{ src: supplyChainIcon, alt: 'Supply Chain Integrity Icon' }}
          >
            Supply Chain Integrity
          </RiskItem>
        </RiskList>
      </div>
    </div>
  );
};

const LetUsProtectSection = () => (
  <Page>
    <div className="-mt-20 flex flex-col items-center gap-16">
      <h1 className="text-center font-sora text-sora-heading-xxlarge font-light">
        Let Us Protect You
      </h1>
      <div className="flex flex-row items-center gap-8">
        <FeatureList>
          <FeatureItem title="We Analyze">
            We score your open source dependencies, measuring community
            strength, maintainer expertise, <br /> and supply chain integrity.
          </FeatureItem>
          <FeatureItem title="We Alert">
            We send actionable, real-time alerts—detecting hidden risks, mapping
            CVEs, and clarifying <br /> exploitability with VEX to eliminate
            false positives.
          </FeatureItem>
          <FeatureItem title="We Partner">
            For your most critical dependencies, we provide direct support,
            collaborating with maintainers, <br /> hardening projects, and
            ensuring long-term security and sustainability.
          </FeatureItem>
        </FeatureList>
        <RiskScoreCard />
      </div>
    </div>
  </Page>
);
export default LetUsProtectSection;
