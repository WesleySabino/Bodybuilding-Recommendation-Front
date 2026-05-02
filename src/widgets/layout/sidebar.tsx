import Link from 'next/link';

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/auth/login', label: 'Login' },
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 border-r bg-card p-4 md:block">
      <nav className="space-y-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="block rounded-md px-3 py-2 hover:bg-muted">
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
