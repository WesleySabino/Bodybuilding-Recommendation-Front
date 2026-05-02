import { Dumbbell } from 'lucide-react';
import { ThemeToggle } from '@/shared/components/theme-toggle';

export function TopNav() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/90 px-4 backdrop-blur">
      <div className="flex items-center gap-2 font-semibold">
        <Dumbbell className="h-5 w-5 text-primary" />
        <span>Bodybuilding Recommender</span>
      </div>
      <ThemeToggle />
    </header>
  );
}
