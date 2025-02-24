import { z } from "zod";

export const userRegistrationSchema = z.object({
  username: z.string().trim().min(4),
  email: z.string().trim().email(),
  password: z.string().trim().min(4),
});

export const userLoginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().trim().min(4),
});
