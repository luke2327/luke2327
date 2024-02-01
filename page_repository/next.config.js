/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'kr', 'jp'],
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'resume.maplew.com',
        defaultLocale: 'en-US',
      },
    ],
  },
};
