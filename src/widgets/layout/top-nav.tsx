import { ThemeToggle } from '@/shared/components/theme-toggle';

export function TopNav() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-card/80 px-4 backdrop-blur">
      <h1 className="text-lg font-semibold">Bodybuilding Recommender</h1>
      <ThemeToggle />
    </header>
  );
}
