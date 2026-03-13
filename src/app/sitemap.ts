import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://slepsluzba-nm.rs';

  // Lokacije
  const lokacije = [
    'pancevo',
  ];

  // Osnovne stranice
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2025-11-19'),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/o-nama`,
      lastModified: new Date('2025-11-19'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date('2025-11-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date('2025-11-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/galerija`,
      lastModified: new Date('2026-03-13'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // Dinamičke stranice za sve lokacije
  const locationPages: MetadataRoute.Sitemap = lokacije.map((lokacija) => ({
    url: `${baseUrl}/slep-sluzba/${lokacija}`,
    lastModified: new Date('2025-11-19'),
    changeFrequency: 'weekly',
    priority: lokacija === 'pancevo' ? 1.0 : 0.9,
  }));

  return [...staticPages, ...locationPages];
}