'use client';

import dynamic from 'next/dynamic';

const DashboardOverview = dynamic(() => import('./dashboard-overview').then((module) => module.DashboardOverview), {
  ssr: false,
});

export function DashboardOverviewClient() {
  return <DashboardOverview />;
}
