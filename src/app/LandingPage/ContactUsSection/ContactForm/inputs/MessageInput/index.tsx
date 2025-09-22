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
import { Textarea } from '@/lib/components/ui/textarea.tsx';

const MessageInput: FC<{ form: UseFormReturn<FormSchema> }> = ({ form }) => {
  return (
    <FormField
      name="message"
      control={form.control}
      render={({ field }) => {
        return (
          <FormItem className="flex grow flex-col">
            <div className="flex flex-col gap-2">
              <FormLabel>Your Message*</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your message..."
                  {...field}
                  className="h-25"
                />
              </FormControl>
            </div>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default MessageInput;
