import type { FC, PropsWithChildren } from 'react';
import LandingPageIcon, {
  type LandingPageIconProps,
} from '@/lib/components/LandingPageIcon';
import Page from '@/lib/components/Page.tsx';
import financialDevastation from '@/lib/icons/financial-devastation.svg';
import moneyLoss from '@/lib/icons/money-loss.svg';
import operationalParalysis from '@/lib/icons/operational-paralysis.svg';

const CaseStudyStats: FC<
  PropsWithChildren<{ icon: LandingPageIconProps; title: string }>
> = ({ icon, title, children }) => (
  <div
    className={`
      flex flex-col gap-4 text-center font-sora
      md:max-w-45 md:text-left
      xl:max-w-82
    `}
  >
    <LandingPageIcon
      {...icon}
      className={`
        self-center
        md:self-start
      `}
    />
    <h1
      className={`
        text-sora-heading-small text-secondary-foreground
        xl:text-sora-heading-large
      `}
    >
      {title}
    </h1>
    {children}
  </div>
);

const CaseStudySection = () => (
  <Page>
    <div className="flex flex-col items-center gap-16">
      <div className="flex flex-col items-center gap-4">
        <h1
          className={`
            text-center font-sora text-sora-heading-medium
            md:text-sora-heading-large md:font-light
            lg:text-sora-heading-xlarge
            xl:text-sora-heading-xxlarge
          `}
        >
          Do You Remember{' '}
          <span className="text-secondary-foreground">Log4Shell?</span>
        </h1>
        <p
          className={`
            text-center font-roboto text-roboto-text-small font-light
            text-primary-grey
            md:max-w-180 md:text-roboto-text-medium
          `}
        >
          In December 2021, Log4Shell (CVE-2021-44228) exposed millions of
          Java-based systems worldwide. A single logging library triggered a
          global cybersecurity crisis with catastrophic consequences.
        </p>
      </div>
      <div
        className={`
          flex w-full max-w-328 flex-col items-center gap-10 px-20
          md:flex-row md:justify-center md:gap-20
        `}
      >
        <CaseStudyStats
          icon={{ src: moneyLoss, alt: 'Reputational Damage Icon' }}
          title="Reputational Damage"
        >
          <ul
            className={`
              flex flex-col items-center gap-4 font-roboto font-light
              md:items-start
            `}
          >
            <li>Damaged brand reputation.</li>
            <li>Consumer trust erosion.</li>
            <li>Negative press and public scrutiny.</li>
          </ul>
        </CaseStudyStats>
        <CaseStudyStats
          icon={{
            src: financialDevastation,
            alt: 'Financial Devastation Icon',
          }}
          title="Financial Devastation"
        >
          <ul
            className={`
              flex flex-col items-center gap-4 font-roboto font-light
              md:items-start
            `}
          >
            <li>
              <b>$700M+</b> legal exposure established.
            </li>
            <li>
              <b>$90,000+</b> average direct cost per breach
            </li>
            <li>Massive overtime for 24/7 “war rooms”.</li>
          </ul>
        </CaseStudyStats>
        <CaseStudyStats
          icon={{
            src: operationalParalysis,
            alt: 'Operational Paralysis Icon',
          }}
          title="Operational Paralysis"
        >
          <ul
            className={`
              flex flex-col items-center gap-4 font-roboto font-light
              md:items-start
            `}
          >
            <li>
              <b>Up to 3,300 developer hours lost.</b>
            </li>
            <li>All innovation halted.</li>
            <li>29% recurrence rate forced costly rework cycles.</li>
          </ul>
        </CaseStudyStats>
      </div>
      <h3
        className={`
          text-center font-sora text-sora-heading-xsmall font-light
          text-primary-grey
          md:text-sora-heading-small
        `}
      >
        Don’t let your organization be the next case study.
      </h3>
    </div>
  </Page>
);
export default CaseStudySection;
