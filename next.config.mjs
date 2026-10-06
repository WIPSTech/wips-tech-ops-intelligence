/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/blog', destination: '/insights', permanent: true },
      { source: '/blog/:slug*', destination: '/insights', permanent: true },
      { source: '/discovery', destination: '/contact', permanent: false },
      { source: '/case-study', destination: '/case-studies', permanent: true },
      {
        source: '/insights/why-admin-hours-are-the-wrong-metric',
        destination: '/insights/what-a-missed-appointment-costs',
        permanent: true,
      },
      {
        source: '/insights/state-of-sme-operations-lebanon-jordan',
        destination: '/insights',
        permanent: true,
      },
      {
        source: '/insights/how-a-3-chair-clinic-recovered-2140-per-month',
        destination: '/insights',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
