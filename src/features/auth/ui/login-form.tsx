'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/shared/components/ui/button';
import { Card } from '@/shared/components/ui/card';
import { useLogin } from '@/features/auth/model/use-login';

const schema = z.object({
  email: z.string().email('Enter a valid email.'),
  password: z.string().min(8, 'Password must have at least 8 characters.'),
});

type FormValues = z.infer<typeof schema>;

export function LoginForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', password: '' },
  });
  const loginMutation = useLogin();

  const onSubmit = (values: FormValues) => loginMutation.mutate(values);

  return (
    <Card className="w-full p-6">
      <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
        <input className="w-full rounded-md border bg-background p-2" placeholder="Email" {...form.register('email')} />
        {form.formState.errors.email && <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>}
        <input
          className="w-full rounded-md border bg-background p-2"
          type="password"
          placeholder="Password"
          {...form.register('password')}
        />
        {form.formState.errors.password && <p className="text-sm text-red-500">{form.formState.errors.password.message}</p>}
        {loginMutation.isError && <p className="text-sm text-red-500">Unable to authenticate. Please try again.</p>}
        <Button className="w-full" type="submit" disabled={loginMutation.isPending}>
          {loginMutation.isPending ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>
    </Card>
  );
}
