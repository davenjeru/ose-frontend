import type { FC, PropsWithChildren } from 'react';
import LandingPageIcon from '@/lib/components/LandingPageIcon';
import Page from '@/lib/components/Page.tsx';
import companies from '@/lib/icons/companies.svg';
import terminal from '@/lib/icons/terminal.svg';
import users from '@/lib/icons/users.svg';

const Statistic: FC<
  PropsWithChildren<{ icon: { src: string; alt: string }; percentage: number }>
> = ({ children, icon, percentage }) => (
  <div className="flex w-84 flex-col items-center px-4 font-sora">
    <LandingPageIcon {...icon} />
    <p
      className={`
        text-center text-sora-heading-xlarge font-light
        text-secondary-foreground
      `}
    >
      {percentage}%
    </p>
    <p className="text-center font-roboto text-roboto-text-large font-light">
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
            text-center font-sora text-sora-heading-xxlarge font-light
          `}
        >
          What’s The Cost Of Using Open <br /> Source Blindly?
        </h1>
        <p
          className={`
            text-center font-roboto text-roboto-text-medium text-primary-grey
          `}
        >
          Open source is powerful — but it also opens the door to supply chain
          attacks. <br />
          Too often, essential libraries are maintained by just a handful of
          volunteers without the <br />
          resources to keep them secure.
        </p>
      </div>
      <div className="flex flex-row">
        <Statistic
          icon={{ src: companies, alt: 'Open Source Projects Stats' }}
          percentage={90}
        >
          of companies are using <br />
          open source projects
        </Statistic>
        <Statistic icon={{ src: terminal, alt: 'Code Stats' }} percentage={76}>
          of code in codebases is <br />
          open source
        </Statistic>
        <Statistic
          icon={{ src: users, alt: 'Maintainers Stats' }}
          percentage={60}
        >
          of maintainers <br />
          are not paid for their work
        </Statistic>
      </div>
    </div>
  </Page>
);

export default PrimarySection;
