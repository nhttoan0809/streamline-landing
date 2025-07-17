/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: '/docs/streamline-landing',
  // basePath: 'https://nhttoan0809.github.io/streamline-landing/',
  // basePath: '/streamline-landing/',
}

export default nextConfig
