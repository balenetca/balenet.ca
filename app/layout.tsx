import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "BALE•NET - Professional Construction Cleaning Services | Ottawa, Gatineau",
  description:
    "Professional construction cleaning and debris removal services in Ottawa, Gatineau, Carleton, Hull, Aylmer, Orleans, Kanata, Nepean, Gloucester, Ottawa South, Barrhaven, and Stittsville. Post-construction cleanup, demolition services, and disaster recovery cleaning. Free quotes available.",
  keywords: [
    "construction cleaning Ottawa",
    "post construction cleanup Gatineau",
    "debris removal Ottawa",
    "construction cleaning Carleton",
    "post construction cleanup Hull",
    "construction cleaning Aylmer",
    "debris removal Orleans",
    "construction cleaning Kanata",
    "post construction cleanup Nepean",
    "construction cleaning Gloucester",
    "debris removal Ottawa South",
    "construction cleaning Barrhaven",
    "post construction cleanup Stittsville",
    "demolition services Ottawa",
    "demolition services Gatineau",
    "disaster recovery cleaning",
    "final cleaning construction",
    "deep cleaning construction",
    "construction waste removal",
    "site cleanup services",
    "BALENET",
    "BALE•NET",
    "nettoyage construction Ottawa",
    "enlèvement débris Gatineau",
    "nettoyage construction Hull",
    "nettoyage construction Aylmer"
  ],
  authors: [{ name: "BALE•NET" }],
  creator: "BALE•NET",
  publisher: "BALE•NET",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://balenet.ca"),
  alternates: {
    canonical: "/",
    languages: {
      "en-CA": "/en",
      "fr-CA": "/fr",
    },
  },
  openGraph: {
    title: "BALE•NET - Professional Construction Cleaning Services | Ottawa, Gatineau",
    description: "Professional construction cleaning and debris removal services in Ottawa, Gatineau, Carleton, Hull, Aylmer, Orleans, Kanata, Nepean, Gloucester, Ottawa South, Barrhaven, and Stittsville. Post-construction cleanup, demolition services, and disaster recovery cleaning.",
    url: "https://balenet.ca",
    siteName: "BALE•NET",
    images: [
      {
        url: "/images/balenet-logo.png",
        width: 1200,
        height: 630,
        alt: "BALE•NET - Construction Cleaning Services",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BALE•NET - Professional Construction Cleaning Services",
    description: "Professional construction cleaning and debris removal services in Ottawa, Gatineau, Carleton, Hull, Aylmer, Orleans, Kanata, Nepean, Gloucester, Ottawa South, Barrhaven, and Stittsville.",
    images: ["/images/balenet-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  category: "construction cleaning services",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    "name": "BALE•NET",
    "alternateName": "BALENET",
    "description": "Professional construction cleaning and debris removal services in Ottawa, Gatineau, Carleton, Hull, Aylmer, Orleans, Kanata, Nepean, Gloucester, Ottawa South, Barrhaven, and Stittsville.",
    "url": "https://balenet.ca",
    "telephone": "+1-514-577-8776",
    "email": "info@balenet.com",
    "foundingDate": "2020",
    "logo": {
      "@type": "ImageObject",
      "url": "https://balenet.ca/images/balenet-logo.png",
      "width": 400,
      "height": 60
    },
    "image": "https://balenet.ca/images/balenet-logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ottawa",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "sameAs": [
      "https://balenet.ca",
      "mailto:info@balenet.com"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Ottawa"
      },
      {
        "@type": "City", 
        "name": "Gatineau"
      },
      {
        "@type": "City",
        "name": "Carleton"
      },
      {
        "@type": "City",
        "name": "Hull"
      },
      {
        "@type": "City",
        "name": "Aylmer"
      },
      {
        "@type": "City",
        "name": "Orleans"
      },
      {
        "@type": "City",
        "name": "Kanata"
      },
      {
        "@type": "City",
        "name": "Nepean"
      },
      {
        "@type": "City",
        "name": "Gloucester"
      },
      {
        "@type": "City",
        "name": "Ottawa South"
      },
      {
        "@type": "City",
        "name": "Barrhaven"
      },
      {
        "@type": "City",
        "name": "Stittsville"
      }
    ],
    "serviceType": [
      "Construction Cleaning",
      "Post-Construction Cleanup",
      "Debris Removal",
      "Demolition Services",
      "Disaster Recovery Cleaning",
      "Deep Cleaning",
      "Final Cleaning"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Check", "Credit Card"],
    "currenciesAccepted": "CAD",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "knowsAbout": [
      "Construction Cleaning",
      "Post-Construction Cleanup",
      "Debris Removal",
      "Demolition Services",
      "Disaster Recovery Cleaning",
      "Ottawa Construction Services",
      "Gatineau Cleaning Services"
    ]
  }

  return (
    <html lang="fr">
      <head>
        {/* Accessibility Meta Tags */}
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#ff6b35" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: dark)" />
        
        {/* Search Engine Verification */}
        <meta name="msvalidate.01" content="D3C8DB40A80CDB1CD8392713ECB357B3" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Favicon and App Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="57x57" href="/icons/apple-touch-icon-57x57.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/icons/apple-touch-icon-72x72.png" />
        <link rel="icon" type="image/png" sizes="76x76" href="/icons/apple-touch-icon-76x76.png" />
        <link rel="icon" type="image/png" sizes="114x114" href="/icons/apple-touch-icon-114x114.png" />
        <link rel="icon" type="image/png" sizes="120x120" href="/icons/apple-touch-icon-120x120.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/icons/apple-touch-icon-144x144.png" />
        <link rel="icon" type="image/png" sizes="152x152" href="/icons/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/balenet-logo-512x512.png" />
        <meta name="msapplication-TileColor" content="#ff6b35" />
        <meta name="msapplication-TileImage" content="/icons/apple-touch-icon-144x144.png" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#ff6b35" />
        <meta name="msapplication-navbutton-color" content="#ff6b35" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Apple Web App Meta */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="BALE•NET" />
        
        {/* Performance Optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {/* Skip to main content link */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </LanguageProvider>
        <Analytics />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                      console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
