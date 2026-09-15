import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    const siteName = 'Peter Lyngso | Filmmaker & Media Strategist';
    const defaultDesc =
      'Filmmaker and media strategist whose work sits inside labor movements, political campaigns, and documentary reporting.';
    const resolvedTitle = title ? `${title} — ${siteName}` : siteName;
    const resolvedDescription = description || defaultDesc;

    document.title = resolvedTitle;

    let metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute('content', resolvedDescription);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', resolvedDescription);
      document.head.appendChild(metaDescription);
    }

    const socialMetadata = [
      ['property', 'og:title', resolvedTitle],
      ['property', 'og:description', resolvedDescription],
      ['property', 'og:type', 'website'],
      ['name', 'twitter:card', 'summary'],
      ['name', 'twitter:title', resolvedTitle],
      ['name', 'twitter:description', resolvedDescription],
    ];

    socialMetadata.forEach(([attribute, key, content]) => {
      let tag = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
  }, [title, description]);

  return null;
}
