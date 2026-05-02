'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/shared/components/ui/button';

export function ThemeToggle() {
  const { setTheme } = useTheme();
  return (
    <div className="flex gap-1">
      <Button size="icon" variant="outline" onClick={() => setTheme('light')} aria-label="Switch to light theme">
        <Sun className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="outline" onClick={() => setTheme('dark')} aria-label="Switch to dark theme">
        <Moon className="h-4 w-4" />
      </Button>
    </div>
  );
}
