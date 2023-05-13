/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'kr', 'jp'],
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'resume.malihua.jp',
        defaultLocale: 'en-US',
      },
    ],
  },
};
