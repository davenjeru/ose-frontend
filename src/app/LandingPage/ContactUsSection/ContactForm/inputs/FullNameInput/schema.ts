import { z } from 'zod';

export default z
  .string({ required_error: 'Full Name is required' })
  .min(1, 'Full Name is required')
  .max(100, 'Full Name should be fewer than 100 characters');
