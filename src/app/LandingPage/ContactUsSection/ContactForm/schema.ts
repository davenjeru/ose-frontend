import { z } from 'zod';

export const formSchema = z.object({
  fullName: z
    .string({ required_error: 'Full Name is required' })
    .refine((f) => !(f.length < 1), { message: 'Message is required' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Enter a valid email address'),
  linkedInProfile: z
    .string()
    .url('Enter a valid LinkedIn profile url')
    .optional(),
  message: z
    .string({
      required_error: 'Message is required',
    })
    .refine((m) => !(m.length < 1), { message: 'Message is required' }),
});

export type FormSchema = z.infer<typeof formSchema>;
