import type { FC } from 'react';
import type { UseFormReturn } from 'react-hook-form';
import type { FormSchema } from '@/app/LandingPage/ContactUsSection/ContactForm/schema.ts';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/lib/components/ui/form.tsx';
import { Input } from '@/lib/components/ui/input.tsx';

const LinkedInInput: FC<{ form: UseFormReturn<FormSchema> }> = ({ form }) => {
  return (
    <FormField
      name="linkedInProfile"
      control={form.control}
      render={({ field }) => {
        return (
          <FormItem className="flex grow flex-col gap-2">
            <FormLabel>Your LinkedIn</FormLabel>
            <FormControl>
              <Input placeholder="Your LinkedIn" {...field} type="url" />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default LinkedInInput;
