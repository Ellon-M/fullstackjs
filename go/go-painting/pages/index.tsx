import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import React, { FunctionComponent, useState } from 'react';
import { client }  from '../utils/prismichelpers';
import { GetStaticProps } from 'next';
import FloatingWhatsApp from 'react-floating-whatsapp'

import Landing from '../components/landing'
import About from '../components/about'

const Layout = dynamic(() =>  import('../components/layout'), { ssr: false })
const FloatingWidget = dynamic(() =>  import('../components/floatingwidget'), { ssr: false })

interface Homeprops {
  aboutContent: any
  whatsappWidget: any
}


const Home: FunctionComponent<Homeprops> = ({aboutContent, whatsappWidget}) => {
  console.log(whatsappWidget.data['repeated-notification']);
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
      <FloatingWhatsApp 
         phoneNumber={`+${whatsappWidget.data['whatsapp-number']}`} 
         accountName={whatsappWidget.data['whatsapp-username'][0].text}
         statusMessage={whatsappWidget.data['status-message'][0].text}
         chatMessage={whatsappWidget.data['chat-message'][0].text}
         placeholder={whatsappWidget.data['chat-placeholder'][0].text}
         avatar={whatsappWidget.data['avatar-image'].url}
         notification={whatsappWidget.data['repeated-notification']}
         darkMode={whatsappWidget.data['darkmode']} 
         allowClickAway={true}
         styles={{zIndex: '12'}}/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const aboutContent = await client.getSingle('aboutus');
  const whatsappWidget = await client.getSingle('whatsapp_widget');

  return {
      props: {
          aboutContent,
          whatsappWidget
      }
  }
}

export default Home
