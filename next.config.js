/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  // Ensure we use the latest image optimization for 2026
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
