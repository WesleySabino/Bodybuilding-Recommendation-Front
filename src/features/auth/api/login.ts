import { LoginRequest, LoginResponse } from '@/entities/auth/model/types';
import { http } from '@/shared/api/http';

export function login(payload: LoginRequest) {
  return http<LoginResponse>('/api/v1/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
