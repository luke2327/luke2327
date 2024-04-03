/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja', 'ko'],
  },
  localePath: (locale) => `./src/i18n/languages/${locale}.ts`,
  serializeConfig: false,
};
