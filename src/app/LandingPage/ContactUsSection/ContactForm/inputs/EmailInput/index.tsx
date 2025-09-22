import type { FC } from 'react';
import type { UseFormReturn } from 'react-hook-form';
import type { FormSchema } from '@/app/LandingPage/ContactUsSection/ContactForm/schema.ts';
import LandingPageIcon from '@/lib/components/LandingPageIcon';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/lib/components/ui/form.tsx';
import { Input } from '@/lib/components/ui/input.tsx';
import mail from '@/lib/icons/mail.svg';

const EmailInput: FC<{ form: UseFormReturn<FormSchema> }> = ({ form }) => {
  return (
    <FormField
      name="email"
      control={form.control}
      render={({ field }) => {
        return (
          <FormItem className="flex grow flex-col">
            <div className="relative flex flex-col gap-2">
              <FormLabel>Your Email*</FormLabel>
              <FormControl>
                <Input placeholder="Your Email" {...field} type="email" />
              </FormControl>
              <LandingPageIcon
                src={mail}
                alt="Email Icon"
                className="absolute top-8.5 right-2"
                height={24}
                width={24}
              />
            </div>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default EmailInput;
