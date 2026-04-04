import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts'); // ✅ correct

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  experimental: {},
  images: {
    loader: 'default',
    domains: [],
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
