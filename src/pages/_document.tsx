import emotionCache from '@/emotionCache';
import { ServerStyles, createStylesServer } from '@mantine/next';
import type { DocumentContext } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const stylesServer = createStylesServer(emotionCache);

export default class _Document extends Document {
  static getInitialProps = async (ctx: DocumentContext) => {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <ServerStyles
            html={initialProps.html}
            server={stylesServer}
          />
        </>
      ),
    };
  };

  render = () => (
    <Html lang="zh-Hans">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
