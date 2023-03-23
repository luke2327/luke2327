import 'src/styles/globals.css';
import 'src/styles/variables.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';

import { defaultThemeColor } from '@/constants/AppConfig';
import { GlobalStyle } from '@/styles/globals.styled';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme');

    if (!localStorageTheme) {
      localStorage.setItem('theme', defaultThemeColor);
    }
  });

  return (
    <>
      <GlobalStyle />
      <ThemeProvider attribute="class" defaultTheme={defaultThemeColor}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
