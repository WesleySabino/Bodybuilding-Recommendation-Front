import { DashboardOverview } from '@/features/dashboard/ui/dashboard-overview';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-lg border bg-card p-4">
        <h2 className="text-xl font-semibold">Welcome back</h2>
        <p className="text-muted-foreground">Your training recommendation summary lives here.</p>
      </section>
      <DashboardOverview />
    </div>
  );
}
