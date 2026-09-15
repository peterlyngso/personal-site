import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { cn } from '@/lib/utils';

const links = [
  { href: '/work/Labor', label: 'Labor' },
  { href: '/work/Politics', label: 'Politics' },
  { href: '/work/Documentary', label: 'Documentary' },
  { href: '/about', label: 'About / Credits' },
];

export function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={cn('site-nav', scrolled && 'site-nav--scrolled')} aria-label="Primary navigation">
      <Link href="/" className="site-nav__wordmark" data-testid="link-wordmark">
        Peter Lyngso
      </Link>
      <div className="site-nav__links">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn('site-nav__link', location.startsWith(link.href) && 'site-nav__link--active')}
            data-testid={`link-nav-${link.label.toLowerCase().replace(/[^a-z]+/g, '-')}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}