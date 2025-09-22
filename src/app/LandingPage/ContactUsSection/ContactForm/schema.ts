import { z } from 'zod';
import emailSchema from './inputs/EmailInput/schema.ts';
import fullNameSchema from './inputs/FullNameInput/schema.ts';
import linkedInSchema from './inputs/LinkedInInput/schema.ts';
import messageSchema from './inputs/MessageInput/schema.ts';

export const formSchema = z.object({
  fullName: fullNameSchema,
  email: emailSchema,
  linkedInProfile: linkedInSchema,
  message: messageSchema,
});

export type FormSchema = z.infer<typeof formSchema>;
