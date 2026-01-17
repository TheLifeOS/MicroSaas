/** @type {import('next').NextConfig} */
const nextConfig = {
  // In Next.js 16, this moved out of "experimental"
  reactCompiler: true,
  
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
