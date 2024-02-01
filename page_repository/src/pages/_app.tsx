import 'src/styles/globals.css';
import 'src/styles/variables.css';
import '@/i18n/i18n';

import i18next from 'i18next';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

import Header from '@/components/layout/Header';
import {
  defaultLanguage,
  defaultThemeColor,
  gaTrackingId,
} from '@/constants/AppConfig';
import { GlobalStyle } from '@/styles/globals.styled';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme');

    if (!localStorageTheme) {
      localStorage.setItem('theme', defaultThemeColor);
    }
  });

  useEffect(() => {
    i18next.on('languageChanged', (lng) => {
      document.documentElement.setAttribute('lang', lng);
    });

    const lng = localStorage.getItem('lng') || defaultLanguage;
    if (lng) {
      document.documentElement.setAttribute('lang', lng);
    }
  });

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaTrackingId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <>
        <GlobalStyle />
        <ThemeProvider attribute="class" defaultTheme={defaultThemeColor}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    </>
  );
}

export default MyApp;
