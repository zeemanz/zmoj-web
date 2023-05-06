import emotionCache from '@/emotionCache';
import '@/styles/globals.css';
import { MantineProvider } from '@mantine/core';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<
  Props = unknown,
  InitialProps = Props,
> = NextPage<Props, InitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Next App</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <MantineProvider
        theme={{
          colorScheme: 'light',
        }}
        emotionCache={emotionCache}
        withNormalizeCSS
        withGlobalStyles
      >
        {getLayout(<Component {...pageProps} />)}
      </MantineProvider>
    </>
  );
};

export default App;
