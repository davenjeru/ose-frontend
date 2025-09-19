import { zodResolver } from '@hookform/resolvers/zod';
import {
  type SubmitErrorHandler,
  type SubmitHandler,
  useForm,
} from 'react-hook-form';
import EmailInput from '@/lib/components/Footer/NewsletterForm/EmailInput';
import {
  type FormSchema,
  formSchema,
} from '@/lib/components/Footer/NewsletterForm/schema.ts';
import { Form } from '@/lib/components/ui/form.tsx';

const NewsletterForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    reValidateMode: 'onBlur',
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => console.log(data);

  const onSubmitError: SubmitErrorHandler<FormSchema> = (data) =>
    console.log(data);

  return (
    <Form {...form}>
      <form
        className="relative flex h-full min-w-77 flex-row"
        onSubmit={form.handleSubmit(onSubmit, onSubmitError)}
      >
        <EmailInput form={form} />
        <button
          className={`
            absolute top-7 right-2 h-9 w-35 cursor-pointer self-center
            rounded-[12px] bg-linear-(--background-gradient)
          `}
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </Form>
  );
};

export default NewsletterForm;
