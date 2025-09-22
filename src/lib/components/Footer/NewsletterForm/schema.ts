import { z } from 'zod';
import emailSchema from './inputs/EmailInput/schema.ts';

export const formSchema = z.object({
  email: emailSchema,
});

export type FormSchema = z.infer<typeof formSchema>;
