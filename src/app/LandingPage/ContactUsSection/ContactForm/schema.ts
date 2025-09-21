import { z } from 'zod';

export const formSchema = z.object({
  fullName: z
    .string({ required_error: 'Full Name is required' })
    .refine((f) => !(f.length < 1), { message: 'Full Name is required' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Enter a valid email address'),
  linkedInProfile: z
    .string()
    .refine(
      (l) => {
        if (l.length > 0) {
          const linkedInRegex =
            /^https?:\/\/(?:www\.)?linkedin\.com\/(?:in|pub|company)(?:\/|$)/i;
          return linkedInRegex.test(l);
        }
        return true;
      },
      { message: 'Enter a valid LinkedIn profile url' }
    )
    .optional(),
  message: z
    .string({
      required_error: 'Message is required',
    })
    .max(1000, 'Message should contain fewer than 1000 characters')
    .refine((m) => !(m.length < 1), { message: 'Message is required' }),
});

export type FormSchema = z.infer<typeof formSchema>;
