import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
