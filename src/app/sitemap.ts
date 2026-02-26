import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://slepsluzba-nm.rs';

  // Sve lokacije iz XML sitemap-a
  const lokacije = [
    'pancevo',      // Glavna lokacija - priority 1.0
    'stari-grad',
    'vracar',
    'novi-beograd',
    'zemun',
    'vozdovac',
    'zvezdara',
    'cukarica',
    'rakovica',
    'palilula',
    'grocka',
    'savski-venac',
    'surcin'
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