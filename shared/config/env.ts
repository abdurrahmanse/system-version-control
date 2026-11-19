import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// Validated, typed environment variables. Add new variables here and in .env.example.
export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_SITE_URL: z.url().default("http://localhost:3000"),
  },
  runtimeEnv: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  emptyStringAsUndefined: true,
});
