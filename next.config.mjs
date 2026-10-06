/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  async redirects() {
    return [
      {
        source: '/insights/state-of-sme-operations-lebanon-jordan',
        destination: '/insights',
        permanent: true,
      },
      {
        source: '/insights/how-a-3-chair-clinic-recovered-2140-per-month',
        destination: '/insights',
        permanent: false,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
