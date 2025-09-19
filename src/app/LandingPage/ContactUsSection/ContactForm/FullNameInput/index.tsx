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

const FullNameInput: FC<{ form: UseFormReturn<FormSchema> }> = ({ form }) => {
  return (
    <FormField
      name="fullName"
      control={form.control}
      render={({ field }) => {
        return (
          <FormItem className="flex grow flex-col">
            <div className="flex flex-col gap-2">
              <FormLabel>Your Full Name*</FormLabel>
              <FormControl>
                <Input placeholder="Your Full Name" {...field} />
              </FormControl>
            </div>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
export default FullNameInput;
