import 'src/styles/globals.css';
import 'src/styles/variables.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { GlobalStyle } from '@/styles/globals.styled';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
