
import '../styles/css/globals.css'

const { AnimatePresence } = require('framer-motion')

import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';


function MyApp({ Component, pageProps, router }: AppProps) {
  return( 
  <AnimatePresence exitBeforeEnter>

  <Component {...pageProps} key={router.route}/>

  </AnimatePresence>
   )
}

export default MyApp
