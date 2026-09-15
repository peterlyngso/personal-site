import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="px-6 md:px-12 py-16 border-t border-[#EAE6DF]/10 mt-auto bg-[#111110]">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#EAE6DF]/40">
          &copy; {new Date().getFullYear()} Peter Lyngso. All rights reserved.
        </p>
        <div className="flex gap-8 font-sans text-[10px] uppercase tracking-[0.2em] text-[#EAE6DF]/40">
          <Link href="/about" className="hover:text-[#EAE6DF] transition-colors">Credits</Link>
          <a href="mailto:peter@example.com" className="hover:text-[#EAE6DF] transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
