import { z } from 'zod';

export const formDataValidator = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});
