import { zodResolver } from '@hookform/resolvers/zod';
import {
  type SubmitErrorHandler,
  type SubmitHandler,
  useForm,
} from 'react-hook-form';
import EmailInput from '@/app/LandingPage/ContactUsSection/ContactForm/EmailInput';
import FullNameInput from '@/app/LandingPage/ContactUsSection/ContactForm/FullNameInput';
import LinkedInInput from '@/app/LandingPage/ContactUsSection/ContactForm/LinkedInInput';
import MessageInput from '@/app/LandingPage/ContactUsSection/ContactForm/MessageInput';
import {
  type FormSchema,
  formSchema,
} from '@/app/LandingPage/ContactUsSection/ContactForm/schema.ts';
import { Form } from '@/lib/components/ui/form';

const ContactForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    reValidateMode: 'onBlur',
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => console.log(data);

  const onSubmitError: SubmitErrorHandler<FormSchema> = (data) =>
    console.log(data);

  return (
    <div
      className={`
        mt-8 flex w-128 flex-col items-center gap-4 rounded-md border
        border-gray-700 p-4 pb-8
        [box-shadow:0px_25px_50px_-12px_rgba(239,77,172,0.25)]
      `}
    >
      <h2 className="self-start font-sora text-sora-heading-large font-light">
        Get In Touch
      </h2>
      <p className="self-start font-roboto text-roboto-text-large font-light">
        This is so that we can get in contact with you in case any opportunity
        comes up
      </p>
      <Form {...form}>
        <form
          className="h-full w-full"
          onSubmit={form.handleSubmit(onSubmit, onSubmitError)}
        >
          <div className="mt-4 flex flex-col gap-3">
            <div className="flex flex-row gap-2">
              <FullNameInput form={form} />
              <EmailInput form={form} />
            </div>
            <LinkedInInput form={form} />
            <MessageInput form={form} />
            <button
              className={`
                h-11 w-35 cursor-pointer self-end rounded-[12px]
                bg-linear-(--background-gradient)
              `}
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
