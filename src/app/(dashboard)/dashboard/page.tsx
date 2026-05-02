import { DashboardOverviewClient } from '@/features/dashboard/ui/dashboard-overview-client';
import { Card } from '@/shared/components/ui/card';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <Card className="p-4">
        <h2 className="text-xl font-semibold">Welcome back</h2>
        <p className="text-muted-foreground">Your training recommendation summary lives here.</p>
      </Card>
      <DashboardOverviewClient />
    </div>
  );
}
