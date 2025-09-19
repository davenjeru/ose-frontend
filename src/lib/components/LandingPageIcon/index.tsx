import { type FC } from 'react';
import * as React from 'react';
import { cn } from '@/lib/utils.ts';

export type LandingPageIconProps = React.ComponentProps<'img'>;

const LandingPageIcon: FC<LandingPageIconProps> = ({
  src,
  alt,
  className,
  width = 40,
  height = 40,
}) => (
  <img
    alt={alt}
    src={src}
    width={width}
    height={height}
    className={cn(className)}
  />
);

export default LandingPageIcon;
