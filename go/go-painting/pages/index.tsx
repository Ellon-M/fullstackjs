import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import React, {FunctionComponent, useState} from 'react';
import { client }  from '../utils/prismichelpers';
import { GetStaticProps } from 'next';
import FloatingWhatsApp from 'react-floating-whatsapp'

import Landing from '../components/landing'
import About from '../components/about'
import { ChildButton, MainButton, FloatingMenu, Directions
 } from '../utils/react-floating-button/src';

const Layout = dynamic(() =>  import('../components/layout'), { ssr: false })
const FloatingWidget = dynamic(() =>  import('../components/floatingwidget'), { ssr: false })

interface Homeprops {
  aboutContent: any
}


const Home: FunctionComponent<Homeprops> = ({aboutContent}) => {
  const [isOpen, setIsOpen] = useState(false);

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
      <FloatingWidget/>
      <FloatingWhatsApp phoneNumber='+254706528027' accountName='Ellon' />
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
