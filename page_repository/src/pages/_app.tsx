import 'src/styles/globals.css';
import 'src/styles/variables.css';

import type { AppProps } from 'next/app';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

import { defaultThemeColor, gaTrackingId } from '@/constants/AppConfig';
import { GlobalStyle } from '@/styles/globals.styled';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme');

    if (!localStorageTheme) {
      localStorage.setItem('theme', defaultThemeColor);
    }
  });

  useEffect(() => {
    const html = document.querySelector(`html`);

    if (html) {
      setLoading(true);
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
      {loading ? (
        <>
          <GlobalStyle />
          <ThemeProvider attribute="class" defaultTheme={defaultThemeColor}>
            <Component {...pageProps} />
          </ThemeProvider>
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

export default MyApp;
