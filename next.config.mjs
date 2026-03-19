/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization with automatic format detection
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Enable SWR (Stale-While-Revalidate) for better caching
  onDemandEntries: {
    maxInactiveAge: 60000,
    pagesBufferLength: 5,
  },

  // Compress responses
  compress: true,

  // Enable production source maps for debugging (but not on preview)
  productionBrowserSourceMaps: false,

  // Enable strict mode for React
  reactStrictMode: true,

  // Optimize webpack
  webpack: (config, { isServer }) => {
    config.optimization = {
      ...config.optimization,
      usedExports: true,
      sideEffects: false,
    };
    return config;
  },
};

export default nextConfig;
