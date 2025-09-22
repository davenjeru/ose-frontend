import { z } from 'zod';
import emailSchema from './EmailInput/schema.ts';
import fullNameSchema from './FullNameInput/schema.ts';
import linkedInSchema from './LinkedInInput/schema.ts';
import messageSchema from './MessageInput/schema.ts';

export const formSchema = z.object({
  fullName: fullNameSchema,
  email: emailSchema,
  linkedInProfile: linkedInSchema,
  message: messageSchema,
});

export type FormSchema = z.infer<typeof formSchema>;
