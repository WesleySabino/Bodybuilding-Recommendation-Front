import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
});

let cachedEnv: z.infer<typeof envSchema> | null = null;

export function getEnv() {
  if (cachedEnv) return cachedEnv;

  const parsed = envSchema.safeParse({
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  });

  if (!parsed.success) {
    throw new Error('Invalid environment configuration. Check NEXT_PUBLIC_API_BASE_URL.');
  }

  cachedEnv = parsed.data;
  return cachedEnv;
}
