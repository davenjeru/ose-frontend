import '@/index.css';
import { zodResolver } from '@hookform/resolvers/zod';
import type { FC, JSX } from 'react';
import {
  type SubmitHandler,
  useForm,
  type UseFormReturn,
} from 'react-hook-form';
import { z } from 'zod';
import { type FormSchema } from '@/app/LandingPage/ContactUsSection/ContactForm/schema.ts';
import GradientButton from '@/lib/components/GradientButton';
import { Form } from '@/lib/components/ui/form.tsx';

export type ContactFormTestHarness = {
  formSchema: z.infer<never>;
  onSubmit: SubmitHandler<FormSchema>;
  children: (form: UseFormReturn<never>) => JSX.Element;
};

const NewsletterFormTestHarness: FC<ContactFormTestHarness> = ({
  formSchema,
  onSubmit,
  children,
}) => {
  const form = useForm<never>({
    resolver: zodResolver(formSchema),
    reValidateMode: 'onBlur',
    mode: 'onBlur',
  });

  return (
    <Form {...form}>
      <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mt-4 flex flex-col gap-3">
          {children(form)}
          <GradientButton type="submit" className="w-35 self-end">
            Subscribe
          </GradientButton>
        </div>
      </form>
    </Form>
  );
};

export default NewsletterFormTestHarness;
