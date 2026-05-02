'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/cashflow', label: 'Cashflow', icon: TrendIcon },
  { href: '/advisor', label: 'Advisor', icon: SparkIcon },
  { href: '/timeline', label: 'Timeline', icon: TimelineIcon }
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav bottom-nav--three" aria-label="Primary">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link${isActive ? ' active' : ''}`}
          >
            <Icon />
            <span>{item.label}</span>
            <span className="nav-indicator" aria-hidden="true" />
          </Link>
        );
      })}
    </nav>
  );
}

function TrendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 16l6-6 4 4 6-7" strokeLinecap="round" />
      <path d="M20 10V4h-6" strokeLinecap="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l2.5 5.5L20 10l-5.5 2.5L12 18l-2.5-5.5L4 10l5.5-2.5L12 2z" />
    </svg>
  );
}


function TimelineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 5h16" strokeLinecap="round" />
      <path d="M4 12h10" strokeLinecap="round" />
      <path d="M4 19h14" strokeLinecap="round" />
      <circle cx="18" cy="12" r="2" />
    </svg>
  );
}
