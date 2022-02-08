/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  /* config options here */
  presets: ['next/babel'],
  swcMinify: false,
}
module.exports = {
  pageExtensions: ['page.tsx'],
}

module.exports = nextConfig
