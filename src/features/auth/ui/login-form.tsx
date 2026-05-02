'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormValues = z.infer<typeof schema>;

export function LoginForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', password: '' },
  });

  return (
    <form className="space-y-3 rounded-lg border bg-card p-6" onSubmit={form.handleSubmit(console.log)}>
      <input className="w-full rounded-md border bg-background p-2" placeholder="Email" {...form.register('email')} />
      <input
        className="w-full rounded-md border bg-background p-2"
        type="password"
        placeholder="Password"
        {...form.register('password')}
      />
      <button className="w-full rounded-md bg-primary px-4 py-2 text-primary-foreground" type="submit">
        Sign in
      </button>
    </form>
  );
}
