import type { FC } from 'react';

export type LandingPageIconProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const LandingPageIcon: FC<LandingPageIconProps> = ({
  src,
  alt,
  width = 40,
  height = 40,
}) => <img alt={alt} src={src} width={width} height={height} />;

export default LandingPageIcon;
