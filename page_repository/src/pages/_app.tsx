import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider
    attribute="class"
    storageKey="nightwind-mode"
    defaultTheme="system" // default "light"
  >
    <Component {...pageProps} />
  </ThemeProvider>;
}

export default MyApp;
