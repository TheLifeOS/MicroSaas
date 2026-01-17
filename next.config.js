// next.config.ts (Next.js 16)
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    cacheComponents: true, // New 2026 feature for Partial Prerendering
    reactCompiler: true,   // Automatic memoization for smooth UI
  },
  images: {
    dangerouslyAllowLocalIP: false, // Security: Blocks local IP optimization by default
    minimumCacheTTL: 14400,         // Optimized for 4-hour edge caching
  }
};

export default nextConfig;
