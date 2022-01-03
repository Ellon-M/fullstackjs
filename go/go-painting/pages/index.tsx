import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import React, {FunctionComponent} from 'react';
import { client }  from '../utils/prismichelpers';
import { GetStaticProps } from 'next';

import Landing from '../components/landing'
import About from '../components/about'


const Layout = dynamic(() =>  import('../components/layout'), { ssr: false })

interface Homeprops {
  aboutContent: any
}


const Home: FunctionComponent<Homeprops> = ({aboutContent}) => {
  return (
    <>
      <Head>
        <title>Go Painting..</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='home-nav'>
      <Layout/>
      </div>
      <div className='home-landing'>
      <Landing/>
      </div>
      <div className='home-about'>
        <About aboutContent={aboutContent}/>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const aboutContent = await client.getSingle('aboutus');
  return {
      props: {
          aboutContent
      }
  }
}

export default Home
