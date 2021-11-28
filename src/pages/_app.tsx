import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import myTheme from '@/theme';
import { GeneralLayout } from '@layouts';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import '@assets/styles/globals.css';

function getLibrary(provider: any) {
  return new Web3Provider(provider);
}

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
        <Web3ReactProvider getLibrary={getLibrary}>
          <GeneralLayout>
            <Component {...pageProps} />
          </GeneralLayout>
        </Web3ReactProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
