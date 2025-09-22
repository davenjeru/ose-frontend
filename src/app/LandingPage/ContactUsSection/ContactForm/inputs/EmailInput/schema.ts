import { z } from 'zod';

export default z
  .string({ required_error: 'Email is required' })
  .min(1, 'Email is required')
  .email('Enter a valid email address');
