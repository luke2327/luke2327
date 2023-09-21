/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import type { SupportedLanguage } from '@/constants/AppConfig';
import { defaultLanguage, languages } from '@/constants/AppConfig';

import type { Language } from './languages/en';

export const locales: Record<
  SupportedLanguage,
  Record<'translations', Language>
> = Object.assign(
  {},
  ...Object.keys(languages).map((index: unknown) => {
    return {
      [languages[index as number] as string]: {
        translations: require(`./languages/${languages[index as number]}.ts`)
          .default,
      },
    };
  })
);

const detection: Readonly<object> = {
  order: [
    'querystring',
    'cookie',
    'localStorage',
    'sessionStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain',
  ],
  lookupCookie: 'lng',
  lookupLocalStorage: 'lng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'],
  cookieOptions: { path: '/', sameSite: 'strict' },
  defaultLanguage: 'en',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection,
    fallbackLng: defaultLanguage,
    resources: locales,
    ns: ['translations'],
    defaultNS: 'translations',
    returnObjects: true,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
