/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'beetechy.com',
        pathname: '/**',
      },
    ],
    unoptimized: false,
  },
  // Disable strict mode to avoid double rendering issues during development
  reactStrictMode: false,
}

module.exports = nextConfig

