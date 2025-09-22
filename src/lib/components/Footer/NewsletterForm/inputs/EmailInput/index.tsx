import type { FC } from 'react';
import type { UseFormReturn } from 'react-hook-form';
import type { FormSchema } from '@/lib/components/Footer/NewsletterForm/schema.ts';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/lib/components/ui/form.tsx';
import { Input } from '@/lib/components/ui/input.tsx';

const EmailInput: FC<{ form: UseFormReturn<FormSchema> }> = ({ form }) => {
  return (
    <FormField
      name="email"
      control={form.control}
      render={({ field }) => {
        return (
          <FormItem className="flex grow flex-col">
            <div className="relative flex flex-col gap-2">
              <FormLabel>Newsletter</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Email" {...field} type="email" />
              </FormControl>
            </div>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default EmailInput;
