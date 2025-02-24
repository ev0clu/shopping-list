import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    DEV_DB_USER: z
      .string()
      .trim()
      .min(3, { message: "DEV_DB_USER is invalid." }),
    DEV_DB_PASSWORD: z
      .string()
      .trim()
      .min(3, { message: "DEV_DB_PASSWORD is invalid." }),
    DEV_DB_NAME: z
      .string()
      .trim()
      .min(3, { message: "DEV_DB_NAME is invalid." }),
    DEV_DB_PORT: z
      .string()
      .trim()
      .length(4, { message: "DEV_DB_PORT is invalid." }),
    DATABASE_URL: z
      .string()
      .trim()
      .min(1)
      .refine(
        (url) =>
          url.startsWith("postgresql://") ||
          url.startsWith("http") ||
          url.startsWith("https"),
        "Invalid URL format"
      ),
    SALT_ROUNDS: z
      .string()
      .trim()
      .min(1)
      .refine(
        (rounds) => parseInt(rounds) >= 10 && parseInt(rounds) <= 12,
        "Invalid salt rounds number, it needs to be >=10 and <=12"
      ),
    AUTH_SECRET: z.string().trim().min(10),
  },
  client: {
    NEXT_PUBLIC_PRODUCTION_HOST: z.string(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DEV_DB_USER: process.env.DEV_DB_USER,
    DEV_DB_PASSWORD: process.env.DEV_DB_PASSWORD,
    DEV_DB_NAME: process.env.DEV_DB_NAME,
    DEV_DB_PORT: process.env.DEV_DB_PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    SALT_ROUNDS: process.env.SALT_ROUNDS,
    AUTH_SECRET: process.env.AUTH_SECRET,
    NEXT_PUBLIC_PRODUCTION_HOST: process.env.NEXT_PUBLIC_PRODUCTION_HOST,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation:
    !!process.env.SKIP_ENV_VALIDATION || process.env.NODE_ENV === "test",
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
