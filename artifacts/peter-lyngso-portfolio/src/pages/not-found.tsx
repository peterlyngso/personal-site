import { Link } from 'wouter';
import { SEO } from '@/components/SEO';

export default function NotFound() {
  return (
    <main className="case-study" data-testid="page-not-found">
      <SEO title="Page Not Found" />
      <p className="case-study__eyebrow">404 / No frame</p>
      <h1 className="case-study__title">Nothing here.</h1>
      <Link href="/" className="case-study__link" data-testid="link-return-home">
        Return home
      </Link>
    </main>
  );
}