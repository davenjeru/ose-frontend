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
  <div className="flex w-84 flex-col gap-4 font-sora">
    <LandingPageIcon {...icon} />
    <h1 className="text-left text-sora-heading-large text-secondary-foreground">
      {title}
    </h1>
    {children}
  </div>
);

const CaseStudySection = () => (
  <Page>
    <div className="-mt-45 flex flex-col items-center gap-16">
      <div className="flex flex-col items-center gap-4">
        <h1
          className={`
            text-center font-sora text-sora-heading-xxlarge font-light
          `}
        >
          Do You Remember{' '}
          <span className="text-secondary-foreground">Log4Shell?</span>
        </h1>
        <p
          className={`
            text-center font-roboto text-roboto-text-medium text-primary-grey
          `}
        >
          In December 2021, Log4Shell (CVE-2021-44228) exposed millions of
          Java-based systems <br /> worldwide. A single logging library
          triggered a global cybersecurity crisis with catastrophic <br />
          consequences.
        </p>
      </div>
      <div className="flex flex-row gap-8">
        <CaseStudyStats
          icon={{ src: moneyLoss, alt: 'Reputational Damage Icon' }}
          title="Reputational Damage"
        >
          <ul className="flex flex-col gap-4 font-roboto font-light">
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
          <ul className="flex flex-col gap-4 font-roboto font-light">
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
          <ul className="flex flex-col gap-4 font-roboto font-light">
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
          font-sora text-sora-heading-small font-light text-primary-grey
        `}
      >
        Don’t let your organization be the next case study.
      </h3>
    </div>
  </Page>
);
export default CaseStudySection;
