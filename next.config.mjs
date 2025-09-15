/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirects to prevent 404s
  async redirects() {
    return [
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
  
  // Headers for better SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
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
        ],
      },
    ]
  },
}

export default nextConfig