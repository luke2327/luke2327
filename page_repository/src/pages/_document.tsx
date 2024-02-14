/* eslint-disable @next/next/google-font-display */
import type { DocumentContext } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { defaultLanguage } from '@/constants/AppConfig';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={defaultLanguage}>
        <Head>
          <title>Liam | Resume</title>
          <link
            rel="canonical"
            href="https://resume.maplew.com"
            key="canonical"
          />
          <meta
            name={'description'}
            content={`en: GM, Im Liam. I enjoy building dynamic, creative products from start to finish. Focused on developing intuitive experiences that constantly grow and improve based on user metrics. Always shipping.`}
          />
          <script
            type={'application/ld+json'}
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://resume.maplew.com',
                '@type': 'WebSite',
                name: 'Liam | Resume',
                alternateName: 'Liam',
                url: 'https://resume.maplew.com',
                headline: 'Analyzing Google Search traffic drops',
                datePublished: '2023-03-20T08:00:00+08:00',
                dateModified: '2023-03-20T09:20:00+08:00',
              }),
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
