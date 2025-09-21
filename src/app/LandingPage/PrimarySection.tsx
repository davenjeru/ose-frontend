import type { FC, PropsWithChildren } from 'react';
import LandingPageIcon from '@/lib/components/LandingPageIcon';
import Page from '@/lib/components/Page.tsx';
import companies from '@/lib/icons/companies.svg';
import terminal from '@/lib/icons/terminal.svg';
import users from '@/lib/icons/users.svg';

const Statistic: FC<
  PropsWithChildren<{ icon: { src: string; alt: string }; percentage: number }>
> = ({ children, icon, percentage }) => (
  <div className="flex flex-col items-center font-sora">
    <LandingPageIcon {...icon} />
    <p
      className={`
        text-center text-sora-heading-medium font-light
        text-secondary-foreground
        sm:text-sora-heading-large
        xl:text-sora-heading-xlarge
      `}
    >
      {percentage}%
    </p>
    <p
      className={`
        max-w-61 text-center font-roboto font-light
        xl:text-roboto-text-large
      `}
    >
      {children}
    </p>
  </div>
);

const PrimarySection = () => (
  <Page>
    <div className={`flex flex-col items-center gap-16 pt-20`}>
      <div className="flex flex-col items-center gap-4">
        <h1
          className={`
            max-w-250 text-center font-sora text-sora-heading-medium
            md:text-sora-heading-large md:font-light
            lg:text-sora-heading-xlarge
            xl:text-sora-heading-xxlarge
          `}
        >
          What’s The Cost Of Using Open Source Blindly?
        </h1>
        <p
          className={`
            text-center font-roboto text-roboto-text-small font-light
            text-primary-grey
            md:max-w-180 md:text-roboto-text-medium
          `}
        >
          Open source is powerful — but it also opens the door to supply chain
          attacks. <br />
          Too often, essential libraries are maintained by just a handful of
          volunteers without the resources to keep them secure.
        </p>
      </div>
      <div
        className={`
          flex flex-col gap-8
          md:flex-row md:justify-center
          lg:gap-16
        `}
      >
        <Statistic
          icon={{ src: companies, alt: 'Open Source Projects Stats' }}
          percentage={90}
        >
          of companies are using open source projects
        </Statistic>
        <Statistic icon={{ src: terminal, alt: 'Code Stats' }} percentage={76}>
          of code in codebases is open source
        </Statistic>
        <Statistic
          icon={{ src: users, alt: 'Maintainers Stats' }}
          percentage={60}
        >
          of maintainers are not paid for their work
        </Statistic>
      </div>
    </div>
  </Page>
);

export default PrimarySection;
