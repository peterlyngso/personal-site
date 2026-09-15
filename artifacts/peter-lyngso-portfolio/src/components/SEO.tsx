import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    const siteName = "Peter Lyngso | Filmmaker & Media Strategist";
    document.title = title ? `${title} — ${siteName}` : siteName;

    let metaDescription = document.querySelector('meta[name="description"]');
    const defaultDesc = "Filmmaker and media strategist whose work sits inside labor movements, political campaigns, and documentary reporting.";
    
    if (metaDescription) {
      metaDescription.setAttribute('content', description || defaultDesc);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description || defaultDesc);
      document.head.appendChild(metaDescription);
    }
  }, [title, description]);

  return null;
}
