import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import myTheme from '@/theme';
import '@assets/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
