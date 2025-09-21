import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import EmailInput from '@/lib/components/Footer/NewsletterForm/EmailInput';
import {
  type FormSchema,
  formSchema,
} from '@/lib/components/Footer/NewsletterForm/schema.ts';
import GradientButton from '@/lib/components/GradientButton';
import { Form } from '@/lib/components/ui/form.tsx';

const SUBSCRIBE_TO_NEWSLETTER = gql`
  mutation CreateNewsletterSubscription($email: String!) {
    createNewsletterSubscription(input: { email: $email }) {
      success
    }
  }
`;

const NewsletterForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    reValidateMode: 'onBlur',
    mode: 'onBlur',
  });

  const [subscribeToNewsletter, { loading, error, data, reset }] = useMutation(
    SUBSCRIBE_TO_NEWSLETTER
  );

  type CreateNewsletterSubscriptionResponse = {
    createNewsletterSubscription: { success: boolean };
  };

  let subscriptionSuccess = false;

  if (data) {
    const { createNewsletterSubscription } =
      data as CreateNewsletterSubscriptionResponse;
    subscriptionSuccess = createNewsletterSubscription.success;
  }

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    await subscribeToNewsletter({ variables: data });
  };

  return (
    <Form {...form}>
      <form
        className="relative flex flex-row"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex min-w-77 flex-col">
          <EmailInput form={form} />
          <p
            className={`
              font-roboto text-[12px] font-light
              ${
                subscriptionSuccess
                  ? 'text-green-500'
                  : error
                    ? 'text-red-500'
                    : ''
              }
            `}
          >
            {!!error && 'An error occurred, please try again.'}
            {subscriptionSuccess && 'Successfully subscribed to newsletter!'}
          </p>
        </div>
        <GradientButton
          className={`absolute top-7 right-2 h-9 w-35 rounded-[12px] py-0`}
          type="submit"
          disabled={loading}
          onClick={() => {
            if (!!error || subscriptionSuccess) {
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
