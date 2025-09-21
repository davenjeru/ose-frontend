import type { FC, PropsWithChildren } from 'react';

export const FeatureList: FC<PropsWithChildren> = ({ children }) => (
  <dl
    className={`
      flex list-none flex-col gap-10
      [counter-reset:feature]
      md:gap-20
    `}
  >
    {children}
  </dl>
);

export const FeatureItem: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => (
  <li className="[counter-increment:feature]">
    <div className="flex flex-col gap-1">
      <dt
        className={`
          flex flex-row gap-2 font-sora text-sora-heading-small font-light
          before:font-sora before:text-sora-heading-small before:font-light
          before:text-secondary-foreground-2
          md:gap-4 md:text-sora-heading-medium
          md:before:text-sora-heading-medium
          lg:text-sora-heading-large lg:before:text-sora-heading-large
          xl:text-sora-heading-xlarge xl:before:text-sora-heading-xlarge
          ${`
            before:[content:counter(feature,decimal-leading-zero)]
            md:before:[content:counter(feature,decimal-leading-zero)]
            lg:before:[content:counter(feature,decimal-leading-zero)]
            xl:before:[content:counter(feature,decimal-leading-zero)]
          `}
          items-center justify-center
          md:items-start md:justify-normal
        `}
      >
        <h1>{title}</h1>
      </dt>
      <dd
        className={`
          max-w-218 text-center font-roboto text-roboto-text-small font-light
          text-subtitle
          sm:text-roboto-text-regular
          md:text-left md:text-roboto-text-medium
          lg:text-roboto-text-large
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
      maintainer expertise, and supply chain integrity.
    </FeatureItem>
    <FeatureItem title="We Alert">
      We send actionable, real-time alerts—detecting hidden risks, mapping CVEs,
      and clarifying exploitability with VEX to eliminate false positives.
    </FeatureItem>
    <FeatureItem title="We Partner">
      For your most critical dependencies, we provide direct support,
      collaborating with maintainers, hardening projects, and ensuring long-term
      security and sustainability.
    </FeatureItem>
  </FeatureList>
);

export default FeatureSection;
