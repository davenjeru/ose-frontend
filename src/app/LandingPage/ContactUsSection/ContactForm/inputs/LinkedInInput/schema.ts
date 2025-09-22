import { z } from 'zod';

export default z
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
  .optional();
