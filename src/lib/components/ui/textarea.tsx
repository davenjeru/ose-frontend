import * as React from 'react';
import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        `
          flex field-sizing-content min-h-16 w-full rounded-md border
          border-gray-700 bg-transparent px-3 py-2 text-base shadow-xs
          transition-[color,box-shadow] outline-none
          selection:bg-secondary-foreground-2
          placeholder:font-roboto placeholder:text-[14px] placeholder:font-light
          placeholder:text-primary-grey
          focus-visible:border-ring focus-visible:ring-[3px]
          focus-visible:ring-ring/50
          disabled:cursor-not-allowed disabled:opacity-50
          aria-invalid:border-destructive aria-invalid:ring-destructive/20
          md:text-sm
          dark:bg-input/30 dark:aria-invalid:ring-destructive/40
        `,
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
