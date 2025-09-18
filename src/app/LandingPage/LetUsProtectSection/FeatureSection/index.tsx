import type { FC, PropsWithChildren } from 'react';

export const FeatureList: FC<PropsWithChildren> = ({ children }) => (
  <dl
    className={`
      flex list-none flex-col gap-20
      [counter-reset:feature]
    `}
  >
    {children}
  </dl>
);

export const FeatureItem: FC<PropsWithChildren<{ title: string }>> = ({
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

const FeatureSection = () => (
  <FeatureList>
    <FeatureItem title="We Analyze">
      We score your open source dependencies, measuring community strength,
      maintainer expertise, <br /> and supply chain integrity.
    </FeatureItem>
    <FeatureItem title="We Alert">
      We send actionable, real-time alerts—detecting hidden risks, mapping CVEs,
      and clarifying <br /> exploitability with VEX to eliminate false
      positives.
    </FeatureItem>
    <FeatureItem title="We Partner">
      For your most critical dependencies, we provide direct support,
      collaborating with maintainers, <br /> hardening projects, and ensuring
      long-term security and sustainability.
    </FeatureItem>
  </FeatureList>
);

export default FeatureSection;
