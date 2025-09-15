/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirects to prevent 404s
  async redirects() {
    return [
      // Redirect HTTP to HTTPS
      {
        source: '/(.*)',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://balenet.ca/:path*',
        permanent: true,
      },
      // Redirect www to non-www
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'www.balenet.ca',
          },
        ],
        destination: 'https://balenet.ca/:path*',
        permanent: true,
      },
      // Redirect old hash-based URLs to new structure
      {
        source: '/#services',
        destination: '/en#services',
        permanent: false,
      },
      {
        source: '/#about',
        destination: '/en#about',
        permanent: false,
      },
      {
        source: '/#contact',
        destination: '/en#contact',
        permanent: false,
      },
      {
        source: '/#home',
        destination: '/en#home',
        permanent: false,
      },
      {
        source: '/#why-choose',
        destination: '/en#about',
        permanent: false,
      },
      {
        source: '/#testimonials',
        destination: '/en#about',
        permanent: false,
      },
    ]
  },
  
  // Headers for better SEO and HTTPS security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // HTTPS Security Headers
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-ancestors 'none';",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
    ]
  },
}

export default nextConfig