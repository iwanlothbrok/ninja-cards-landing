import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts'); // ✅ correct

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {},
  images: {
    loader: 'default',
    domains: [],
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
