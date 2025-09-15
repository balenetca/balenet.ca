import { MetadataRoute } from 'next'

// Sitemap for BALE•NET construction cleaning services
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://balenet.ca'
  const lastModified = new Date()
  
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fr`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
