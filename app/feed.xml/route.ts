import { MetadataRoute } from 'next'

export async function GET(): Promise<Response> {
  const baseUrl = 'https://balenet.ca'
  const siteName = 'BALE•NET'
  
  const rssItems = [
    {
      title: 'BALE•NET - Construction Cleaning Services',
      description: 'Professional construction cleaning and debris removal services in Ottawa, Gatineau, Carleton, Hull, Aylmer, Orleans, Kanata, Nepean, Gloucester, Ottawa South, Barrhaven, and Stittsville. Post-construction cleanup, demolition services, and disaster recovery cleaning.',
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      title: 'Construction Cleaning Services - Ottawa & Gatineau',
      description: 'Complete post-construction cleanup services including debris removal, deep cleaning, and site preparation for construction projects in the Ottawa region.',
      url: `${baseUrl}/#services`,
      lastModified: new Date(),
    },
    {
      title: 'About BALE•NET - Professional Construction Cleaners',
      description: 'Learn about BALE•NET\'s mission to provide quality construction cleaning services across Ottawa, Carleton, Gatineau, and surrounding areas.',
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
    },
    {
      title: 'Why Choose BALE•NET - Quality Construction Cleaning',
      description: 'Discover why BALE•NET is the preferred choice for construction cleaning services with 24/7 availability, quality guarantee, and transparent pricing.',
      url: `${baseUrl}/#why-choose`,
      lastModified: new Date(),
    },
    {
      title: 'Contact BALE•NET - Get Your Free Quote Today',
      description: 'Contact BALE•NET for professional construction cleaning services. Available 7 days/week, 24/7. Call (514) 577-8776 or email info@balenet.com for a free quote.',
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
    },
  ]

  const rssXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<rss version="2.0" xmlns:atom="https://www.w3.org/2005/Atom">
  <channel>
    <title>${siteName} - Construction Cleaning Services</title>
    <description>Professional construction cleaning and debris removal services in Ottawa, Gatineau, Carleton, Hull, Aylmer, Orleans, Kanata, Nepean, Gloucester, Ottawa South, Barrhaven, and Stittsville.</description>
    <link>${baseUrl}</link>
    <language>en-CA</language>
    <copyright>© ${new Date().getFullYear()} BALE•NET. All rights reserved.</copyright>
    <managingEditor>info@balenet.com (BALE•NET)</managingEditor>
    <webMaster>info@balenet.com (BALE•NET)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Next.js RSS Generator</generator>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/images/balenet-logo.png</url>
      <title>${siteName}</title>
      <link>${baseUrl}</link>
      <width>144</width>
      <height>144</height>
    </image>
    ${rssItems.map(item => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.description}]]></description>
      <link>${item.url}</link>
      <guid isPermaLink="true">${item.url}</guid>
      <pubDate>${item.lastModified.toUTCString()}</pubDate>
      <category>Construction Cleaning</category>
    </item>
    `).join('')}
  </channel>
</rss>`

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
