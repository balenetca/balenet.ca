import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.balenet.ca'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          en: baseUrl,
          fr: `${baseUrl}/fr`,
        },
      },
    },
    {
      url: `${baseUrl}/fr`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Pillar pages - English
    {
      url: `${baseUrl}/clean`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/clean`,
          fr: `${baseUrl}/fr/nettoyer`,
        },
      },
    },
    {
      url: `${baseUrl}/restore`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/restore`,
          fr: `${baseUrl}/fr/restaurer`,
        },
      },
    },
    {
      url: `${baseUrl}/construct`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/construct`,
          fr: `${baseUrl}/fr/construire`,
        },
      },
    },
    // Pillar pages - French
    {
      url: `${baseUrl}/fr/nettoyer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fr/restaurer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fr/construire`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Compliance pages - English
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          en: `${baseUrl}/privacy`,
          fr: `${baseUrl}/fr/confidentialite`,
        },
      },
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          en: `${baseUrl}/terms`,
          fr: `${baseUrl}/fr/conditions`,
        },
      },
    },
    // Compliance pages - French
    {
      url: `${baseUrl}/fr/confidentialite`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/fr/conditions`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}