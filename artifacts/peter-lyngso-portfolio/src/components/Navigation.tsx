import { Link, useLocation } from 'wouter';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/work/Labor', label: 'Labor' },
    { href: '/work/Politics', label: 'Politics' },
    { href: '/work/Documentary', label: 'Documentary' },
    { href: '/about', label: 'About & Credits' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-500",
      scrolled ? "bg-[#111110]/95 backdrop-blur-md border-b border-[#EAE6DF]/10 py-4" : "bg-transparent py-8"
    )}>
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
        <Link href="/" className="font-serif text-2xl md:text-3xl tracking-wide hover:opacity-70 transition-opacity">
          Peter Lyngso
        </Link>
        <div className="flex flex-wrap gap-6 md:gap-8 text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "hover:text-[#EAE6DF] transition-colors pb-1",
                location.startsWith(link.href) 
                  ? "text-[#EAE6DF] border-b border-[#EAE6DF]/40" 
                  : "text-[#EAE6DF]/50"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
