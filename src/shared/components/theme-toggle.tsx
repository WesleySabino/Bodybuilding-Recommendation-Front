'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      <button className="rounded-md border p-2" onClick={() => setTheme('light')}>
        <Sun className="h-4 w-4" />
      </button>
      <button className="rounded-md border p-2" onClick={() => setTheme('dark')}>
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );
}
