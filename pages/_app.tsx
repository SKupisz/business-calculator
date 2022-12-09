import type { AppProps } from 'next/app'
import Head from 'next/head';
import {ThemeProvider} from "styled-components";
import { GlobalStyle, Styles } from 'styled/main';

import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Softway business calculator</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow"/>
      <meta name="lang" content="en-GB"/>
      <meta name="charset" content="UTF-8"/>
    </Head>
    <ThemeProvider theme={Styles}>
      <GlobalStyle/>
      <Component {...pageProps} />
    </ThemeProvider>
  </>;
}

export default MyApp
