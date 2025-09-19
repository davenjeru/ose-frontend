import { z } from 'zod';

export const formSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Enter a valid email address'),
});

export type FormSchema = z.infer<typeof formSchema>;
