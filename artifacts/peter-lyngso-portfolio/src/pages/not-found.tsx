import { Link } from "wouter";
import { SEO } from "@/components/SEO";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-32 px-6">
      <SEO title="Page Not Found" />
      <div className="text-center">
        <h1 className="font-serif text-8xl md:text-9xl mb-8 opacity-80">404</h1>
        <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase opacity-40 mb-12">The requested page could not be found.</p>
        <Link href="/" className="border border-[#EAE6DF]/20 px-8 py-4 font-sans text-[10px] uppercase tracking-[0.25em] hover:bg-[#EAE6DF]/10 transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
}
