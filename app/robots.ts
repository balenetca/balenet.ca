import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/privacy', '/terms', '/fr/confidentialite', '/fr/conditions'],
    },
    sitemap: 'https://www.balenet.ca/sitemap.xml',
  }
}