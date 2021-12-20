import React, { FunctionComponent } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import Link from 'next/link'
import { Fade, Slide, Bounce, Zoom } from "react-awesome-reveal"

import landing1 from '../public/golanding1wider.jpg'
import landing1b from '../public/golanding1wide.jpg'
import landing1c from '../public/golanding1narrowish.jpg'
import landing1d from '../public/golanding1narrow.jpg'
import landing2 from '../public/golanding2.jpg'
import landing3 from '../public/golanding3.jpg'
import logo from '../public/gologo2.png'
import logo2 from '../public/gopainting1.png'


interface LandingProps {
    
}
 
const Landing: FunctionComponent<LandingProps> = () => {
    return ( 
        <div className='landing-wrap'>
                <Fade triggerOnce>
                <div className='carousel-inner'>
                  <div className='image-wrap'>
                    <Image src={landing1} className='landing-image'/>
                    </div>
                    <div className='image-wrap-narrow'>
                    <Image src={landing1b} className='landing-image'/>
                    </div>
                    <div className='image-wrap-long'>
                    <Image src={landing1c} className='landing-image'/>
                    </div>
                    <Slide cascade triggerOnce>
                    <div className='logo-legend'>
                    <Image src={logo2} width={300} height={300}></Image>
                    </div> 
                    <p className="legend-main">| 7 years of experience |</p>
                    <Link href=''>
                        <a className='landing-button-1'>Contact Us</a>
                    </Link>
                    <Link href=''>
                        <a className='landing-button-2'>Our Services</a>
                    </Link>
                    </Slide>
                    </div>
                </Fade>
            <div>
                <div className='carousel-inner-2'>
                    <div className='image-wrap'>
                    <Image src={landing2} className='landing-image'/>
                    </div>
                    <Bounce cascade triggerOnce>
                    <p className="legend">Legend 2</p>
                    <Link href=''>
                        <a className='landing-buttons'>Contact Us</a>
                    </Link>
                    <Link href=''>
                        <a className='landing-buttons'>Our Services</a>
                    </Link>
                    </Bounce>
                </div>
            </div>
            <div>
                <img/>
                <div className='carousel-inner-3'>
                  <Image src={landing3} className='landing-image' />
                    <Zoom cascade triggerOnce>
                    <p className="legend">Legend 3</p>
                    <Link href=''>
                        <a className='landing-buttons'>Contact Us</a>
                    </Link>
                    <Link href=''>
                        <a className='landing-buttons'>Our Services</a>
                    </Link>
                    </Zoom>
                </div>
            </div>
     </div>
     );
}
 
export default Landing;