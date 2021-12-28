import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Landing from '../components/landing'
import Layout from '../components/layout'

const Home: NextPage = () => {
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
    </>
  )
}

export default Home
