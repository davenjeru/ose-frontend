import { useMutation } from '@apollo/client/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import EmailInput from '@/lib/components/Footer/NewsletterForm/inputs/EmailInput';
import { SUBSCRIBE_TO_NEWSLETTER } from '@/lib/components/Footer/NewsletterForm/mutation.ts';
import {
  type FormSchema,
  formSchema,
} from '@/lib/components/Footer/NewsletterForm/schema.ts';
import GradientButton from '@/lib/components/GradientButton';
import { Form } from '@/lib/components/ui/form.tsx';

const NewsletterForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    reValidateMode: 'onBlur',
    mode: 'onBlur',
  });

  type CreateNewsletterSubscriptionResponse = {
    createNewsletterSubscription: { success: boolean };
  };

  const [subscribeToNewsletter, { loading, error, data, reset }] =
    useMutation<CreateNewsletterSubscriptionResponse>(SUBSCRIBE_TO_NEWSLETTER);

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    await subscribeToNewsletter({ variables: data });
  };

  return (
    <Form {...form}>
      <form
        className="relative flex flex-row"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div
          className={`
            flex w-full flex-col
            md:min-w-77
          `}
        >
          <EmailInput form={form} />
          <p
            className={`
              font-roboto text-[12px] font-light
              ${
                error
                  ? 'text-red-500'
                  : data
                    ? data.createNewsletterSubscription.success
                      ? 'text-green-500'
                      : 'text-red-500'
                    : ''
              }
            `}
          >
            {error && 'An error occurred, please try again.'}
            {data &&
              !data.createNewsletterSubscription.success &&
              'An error occurred, please try again.'}
            {data &&
              data.createNewsletterSubscription.success &&
              'Successfully subscribed to newsletter!'}
          </p>
        </div>
        <GradientButton
          className={`absolute top-7 right-2 h-9 w-35 rounded-[12px] py-0`}
          type="submit"
          disabled={loading}
          onClick={() => {
            if (error || data) {
              reset();
            }
          }}
        >
          Subscribe
        </GradientButton>
      </form>
    </Form>
  );
};

export default NewsletterForm;
