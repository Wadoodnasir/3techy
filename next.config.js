/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
    ],
    unoptimized: false,
  },
  // Disable strict mode to avoid double rendering issues during development
  reactStrictMode: false,
}

module.exports = nextConfig

