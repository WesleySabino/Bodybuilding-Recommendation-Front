import { getEnv } from '@/shared/config/env';

export async function http<T>(path: string, init?: RequestInit): Promise<T> {
  const { NEXT_PUBLIC_API_BASE_URL } = getEnv();
  const response = await fetch(`${NEXT_PUBLIC_API_BASE_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(body || `Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}
