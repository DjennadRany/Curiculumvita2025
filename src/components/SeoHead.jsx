import React from 'react';
import { Helmet } from 'react-helmet-async';
import profile from '../data/profile.json';

const BASE_URL = 'https://DjennadRany.github.io/Curiculumvita2025/';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.title,
  url: BASE_URL,
  sameAs: [profile.github],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    addressCountry: 'FR',
  },
};

if (profile.linkedin) jsonLd.sameAs.push(profile.linkedin);

export default function SeoHead({ title, description, path }) {
  const fullTitle = title ? `${title} | ${profile.name}` : `${profile.name} | ${profile.title}`;
  const desc = description || `Senior React & AEM Technical Lead, Fullstack Engineer et Technical Project Manager. ${profile.summary[0].slice(0, 120)}…`;
  const url = path ? `${BASE_URL}#${path}` : BASE_URL;

  return (
    <Helmet>
      <html lang="fr" />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
