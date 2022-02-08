import React, { FunctionComponent } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import dynamic from 'next/dynamic'
import Link from 'next/link'
const Layout = dynamic(() =>  import('../components/layout'), { ssr: false })

interface BlogProps {
    
}
 
const Blog: FunctionComponent<BlogProps> = () => {
    return ( 
    <div className='blog-wrapper'>
      <div>
        <Layout/>
      </div>
        <div className='coming-soon-text-wrap'>
            <h1 className='coming-soon-text'>
             Content Unavailable <p>⚠</p>
            {' '}
        <span style={{ color: '#2589FF', fontWeight: '900', fontSize: '2rem', textAlign: 'center' }}>
          <Typewriter
            words={['..Coming soon!', "..We're working on it!"]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={180}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
            </h1>
        </div>
    </div>
     );
}
 
export default Blog;