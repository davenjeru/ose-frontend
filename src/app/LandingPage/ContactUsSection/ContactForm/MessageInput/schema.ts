import { z } from 'zod';

export default z
  .string({
    required_error: 'Message is required',
  })
  .min(1, 'Message is required')
  .max(1000, 'Message should contain fewer than 1000 characters');
