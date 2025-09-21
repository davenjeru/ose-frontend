import type { FC, PropsWithChildren } from 'react';
import LandingPageIcon, {
  type LandingPageIconProps,
} from '@/lib/components/LandingPageIcon';
import RiskScoreVisualizer from '@/lib/components/RiskScoreVisualizer';
import communityIcon from '@/lib/icons/community-icon.svg';
import listStyleIcon from '@/lib/icons/list-style.svg';
import shieldIcon from '@/lib/icons/shield-icon.svg';
import supplyChainIcon from '@/lib/icons/supply-chain-icon.svg';

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
        flex max-w-80 flex-col items-center rounded-md border border-gray-700
        p-2 pb-4
        md:h-134
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

export default RiskScoreCard;
