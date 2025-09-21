import type { ComponentProps, FC } from 'react';
import { cn } from '@/lib/utils.ts';

const GradientButton: FC<ComponentProps<'button'>> = ({
  className,
  children,
  ...props
}) => (
  <button
    className={cn(
      `
        cursor-pointer rounded-[12px] bg-linear-(--background-gradient) px-4
        py-2.5
        disabled:cursor-progress disabled:[filter:grayscale(0.5)]
      `,
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export default GradientButton;
