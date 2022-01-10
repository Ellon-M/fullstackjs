import React, { FunctionComponent } from 'react'
import { Fade, AttentionSeeker,Zoom } from 'react-awesome-reveal'
import Image from 'next/image';
import Link from 'next/link'
import * as prismic from '@prismicio/client';
import { PrismicRichText } from "@prismicio/react";
import Footerlinks from './footerlinks';



interface AboutProps {
    aboutContent?: any;
}
 
const About: FunctionComponent<AboutProps> = ({aboutContent}) => {
    return (
        <>
        <div className='about-wrap'>
            <section className='about-us-details'>
            <AttentionSeeker effect='pulse' triggerOnce>
                <h2 className='about-us-title'>What we do</h2>
            </AttentionSeeker>
            <Fade duration={1400} delay={500}>
                <p className='about-us-text'><PrismicRichText field={aboutContent.data['about-details']}/></p>
            </Fade>
            </section>
            <section className='about-us-image'>
            <Image src={aboutContent.data['about-image'].url} width={2537} height={3800} className='actual-about-image'/>
            </section>

            <svg xmlns="http://www.w3.org/2000/svg" id="sw-js-blob-svg" viewBox="0 0 100 100" version="1.1" className='blob-about'>
                    <defs> 
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stopColor="rgba(37, 137, 255, 1)" offset="0%"/>
                            <stop id="stop2" stopColor="rgba(43, 237, 109, 1)" offset="100%"/>
                        </linearGradient>
                    </defs>
                <path fill="none" d="M21.7,-33.3C28.8,-29.1,35.9,-24.4,39.5,-17.7C43.1,-11,43.3,-2.4,41.6,5.7C40,13.8,36.6,21.3,31.3,26.7C25.9,32,18.6,35.3,10.9,37.7C3.3,40.2,-4.8,41.9,-11.8,39.9C-18.8,38,-24.9,32.4,-30.8,26.3C-36.7,20.2,-42.5,13.6,-44.3,5.9C-46.1,-1.7,-43.9,-10.4,-39.8,-17.7C-35.7,-25.1,-29.8,-31.1,-22.8,-35.4C-15.9,-39.7,-8,-42.3,-0.3,-41.7C7.3,-41.2,14.5,-37.5,21.7,-33.3Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="4" stroke="url(#sw-gradient)"/>
              </svg>
        </div> 
         <Footerlinks/>
         </>
         );
}

export default About;