import type { FC } from 'react';

export type LandingPageIconProps = { src: string; alt: string };

const LandingPageIcon: FC<LandingPageIconProps> = ({ src, alt }) => (
  <img alt={alt} src={src} width={40} height={40} />
);

export default LandingPageIcon;
