import { Sidebar } from '@/widgets/layout/sidebar';
import { TopNav } from '@/widgets/layout/top-nav';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen md:flex">
      <Sidebar />
      <div className="flex-1">
        <TopNav />
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
