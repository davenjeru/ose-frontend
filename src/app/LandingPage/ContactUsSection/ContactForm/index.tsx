import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { type FC, type PropsWithChildren } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import EmailInput from '@/app/LandingPage/ContactUsSection/ContactForm/EmailInput';
import FullNameInput from '@/app/LandingPage/ContactUsSection/ContactForm/FullNameInput';
import LinkedInInput from '@/app/LandingPage/ContactUsSection/ContactForm/LinkedInInput';
import MessageInput from '@/app/LandingPage/ContactUsSection/ContactForm/MessageInput';
import {
  type FormSchema,
  formSchema,
} from '@/app/LandingPage/ContactUsSection/ContactForm/schema.ts';
import GradientButton from '@/lib/components/GradientButton';
import LandingPageIcon from '@/lib/components/LandingPageIcon';
import { Form } from '@/lib/components/ui/form';
import closeIcon from '@/lib/icons/close.svg';
import errorIcon from '@/lib/icons/error.svg';
import errorBullet from '@/lib/icons/error-bullet.svg';
import sentIcon from '@/lib/icons/sent.svg';

const SEND_MESSAGE = gql`
  mutation CreateReceivedMessage(
    $email: String!
    $fullName: String!
    $linkedInProfile: String
    $message: String!
  ) {
    createReceivedMessage(
      input: {
        email: $email
        fullName: $fullName
        linkedInProfile: $linkedInProfile
        message: $message
      }
    ) {
      success
    }
  }
`;

type ContactFormMessageProps = PropsWithChildren<{ close: () => void }>;

const ContactFormMessage: FC<ContactFormMessageProps> = ({
  close,
  children,
}) => (
  <div
    className={`
      absolute top-2.5 right-2.5 bottom-2.5 left-2.5 z-30 flex flex-col
      items-center gap-8 rounded-[1rem] border border-gray-700 bg-background p-4
    `}
  >
    <button
      type="button"
      onClick={close}
      className={`cursor-pointer place-self-start`}
    >
      <LandingPageIcon src={closeIcon} alt="Close" width={24} height={24} />
    </button>
    {children}
    <GradientButton
      type="button"
      className="absolute bottom-4 self-end"
      onClick={close}
    >
      Send Another Message
    </GradientButton>
  </div>
);

const ContactFormError: FC<Pick<ContactFormMessageProps, 'close'>> = ({
  close,
}) => {
  return (
    <ContactFormMessage close={close}>
      <div className="rounded-[50%] bg-[#1A283F] p-2">
        <LandingPageIcon src={errorIcon} alt="Error" />
      </div>
      <h5
        className={`
          text-center font-sora text-sora-text-large font-semibold text-red-500
        `}
      >
        Oops! Something went wrong
      </h5>
      <p
        className={`text-center font-roboto text-roboto-text-regular font-light`}
      >
        We couldn't process your request at the moment. Please check your
        connection and try again later.
      </p>
      <div
        className={`
          flex w-full flex-row justify-center gap-4 rounded-sm border
          border-gray-700 bg-[#18152D] py-4 font-roboto text-roboto-text-small
          text-red-500
        `}
      >
        <LandingPageIcon src={errorBullet} alt="." height={8} width={8} />
        <p>Error Code: 500</p>
        <p>Server Unavailable</p>
      </div>
    </ContactFormMessage>
  );
};

const ContactFormSuccess: FC<Pick<ContactFormMessageProps, 'close'>> = ({
  close,
}) => {
  return (
    <ContactFormMessage close={close}>
      <div className="rounded-[50%] bg-[#1A283F] p-4">
        <LandingPageIcon src={sentIcon} alt="Success" />
      </div>
      <h5
        className={`
          text-center font-sora text-sora-text-large font-semibold
          text-green-500
        `}
      >
        We have received your message
      </h5>
      <p className="text-center font-roboto text-roboto-text-regular font-light">
        Thank you for reaching out. We'll look at your message and get back to
        you.
      </p>
    </ContactFormMessage>
  );
};

const ContactForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    reValidateMode: 'onBlur',
    mode: 'onBlur',
  });

  const [
    sendMessage,
    { loading: messageIsSending, error: sendMessageError, data, reset },
  ] = useMutation(SEND_MESSAGE);

  type CreateReceivedMessageResponse = {
    createReceivedMessage: { success: boolean };
  };

  let sendMessageSuccess = false;
  if (data) {
    const { createReceivedMessage } = data as CreateReceivedMessageResponse;
    sendMessageSuccess = createReceivedMessage.success;
  }
  const onSubmit: SubmitHandler<FormSchema> = async (formData) => {
    await sendMessage({ variables: formData });
  };

  return (
    <div
      className={`
        relative mt-8 flex max-w-128 flex-col items-center gap-4 rounded-[1rem]
        border border-gray-700 p-4 pb-8
        [box-shadow:0px_25px_50px_-12px_rgba(239,77,172,0.25)]
        md:items-start
      `}
    >
      {sendMessageSuccess && <ContactFormSuccess close={() => reset()} />}
      {sendMessageError && <ContactFormError close={() => reset()} />}

      <h2
        className={`
          text-center font-sora text-sora-heading-small font-light
          md:text-left md:text-sora-heading-large
        `}
      >
        Get In Touch
      </h2>
      <p
        className={`
          text-center font-roboto text-roboto-text-small font-light
          md:text-left md:text-roboto-text-large
        `}
      >
        This is so that we can get in contact with you in case any opportunity
        comes up
      </p>
      <Form {...form}>
        <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mt-4 flex flex-col gap-3">
            <div
              className={`
                flex flex-col gap-3
                md:flex-row md:gap-2
              `}
            >
              <FullNameInput form={form} />
              <EmailInput form={form} />
            </div>
            <LinkedInInput form={form} />
            <MessageInput form={form} />
            <GradientButton
              type="submit"
              disabled={messageIsSending}
              className="w-35 self-end"
            >
              Send
            </GradientButton>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
