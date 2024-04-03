import 'src/styles/globals.css';
import 'src/styles/variables.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';

import {
  defaultThemeColor,
  gaTrackingId,
} from '@/constants/AppConfig';
import { GlobalStyle } from '@/styles/globals.styled';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme');

    if (!localStorageTheme) {
      localStorage.setItem('theme', defaultThemeColor);
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
        <AnimatePresence>
          <ThemeProvider attribute="class" defaultTheme={defaultThemeColor}>
            <main>
              <Header aria-level={1} />
              <Component {...pageProps} />
              <Footer aria-level={1} />
            </main>
            <Analytics />
          </ThemeProvider>
        </AnimatePresence>
      </>
    </>
  );
}

export default MyApp;