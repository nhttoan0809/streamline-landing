const isProd = process.env.NODE_ENV === 'production';

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
  // distDir: '/build',
  assetPrefix: isProd ? '/streamline-landing/' : '',
  basePath: isProd ? '/streamline-landing' : '',
  output: 'export'
}

export default nextConfig
