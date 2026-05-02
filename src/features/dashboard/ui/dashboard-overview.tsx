'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Card } from '@/shared/components/ui/card';

const data = [
  { day: 'Mon', recs: 3 },
  { day: 'Tue', recs: 4 },
  { day: 'Wed', recs: 2 },
  { day: 'Thu', recs: 5 },
  { day: 'Fri', recs: 4 },
];

export function DashboardOverview() {
  return (
    <Card className="p-4">
      <h2 className="mb-4 text-base font-medium">Weekly Recommendation Volume</h2>
      <div className="h-64 min-h-64 w-full">
        <ResponsiveContainer width="100%" height="100%" minWidth={280}>
          <BarChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Bar dataKey="recs" fill="currentColor" className="text-primary" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
