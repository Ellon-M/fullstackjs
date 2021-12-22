import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Fade, Slide, Bounce, Zoom } from "react-awesome-reveal"

import landing1 from '../public/golanding1wider.jpg'
import landing1b from '../public/golanding1wide.jpg'
import landing1c from '../public/golanding1longish.jpg'
import landing1d from '../public/golanding1narrowish.jpg'
import landing1e from '../public/golanding1narrowmid.jpg'
import landing1f from '../public/golanding1narrowwer.jpg'
import landing1g from '../public/golanding1inv.jpg'
import landingfull from '../public/golanding1full.jpg'
import landing2 from '../public/golanding2norm.jpg'
import landing2b from '../public/golanding2narrowish.jpg'
import landing2c from '../public/golanding2narrow.jpg'
import landing2d from '../public/golanding2narrower.jpg'
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
                    <div className='image-wrap-longish'>
                    <Image src={landing1c} className='landing-image'/>
                    </div>
                    <div className='image-wrap-long'>
                    <Image src={landing1d} className='landing-image'/>
                    </div>
                    <div className='image-wrap-longer'>
                    <Image src={landing1e} className='landing-image'/>
                    </div>
                    <div className='image-wrap-longest'>
                    <Image src={landing1f} className='landing-image'/>
                    </div>
                    <div className='image-wrap-inv'>
                    <Image src={landing1g} className='landing-image'/>
                    </div>
                    <div className='image-wrap-full'>
                    <Image src={landingfull} className='landing-image'/>
                    </div>
                    <div className='over-image'>
                    <Slide cascade triggerOnce>
                    <div className='logo-legend'>
                    <Image src={logo2} width={300} height={300}></Image>
                    </div> 
                    <p className="legend-main">| 7 years of experience |</p>
                    </Slide>
                    <div className='button-group'>
                    <Link href=''>
                        <a className='landing-button-1'>Contact Us</a>
                    </Link>
                    <Link href=''>
                        <a className='landing-button-2'>Our Services</a>
                    </Link>
                    </div>
                    </div>
                    </div>
                </Fade>
            <div>
                <div className='carousel-inner-2'>
                    <div className='image-wrap'>
                    <Image src={landing2} className='landing-image'/>
                    </div>
                    <div className='image-wrap-inv-2'>
                    <Image src={landing2c} className='landing-image'/>
                    </div>
                    <div className='image-wrap-full'>
                    <Image src={landing2} className='landing-image'/>
                    </div>
                    <div className='image-wrap-long'>
                    <Image src={landing2c} className='landing-image'/>
                    </div>
                    <div className='image-wrap-longish'>
                    <Image src={landing2b} className='landing-image'/>
                    </div>
                    <div className='image-wrap-longer'>
                    <Image src={landing2c} className='landing-image'/>
                    </div>
                    <div className='image-wrap-longest'>
                    <Image src={landing2d} className='landing-image'/>
                    </div>
                    <div className='over-image-2'>
                    <Bounce cascade triggerOnce>
                    <p className="legend-main-2">Guaranteed of Quality workmanship and Durability</p>
                    <div className='button-group-2'>
                    <Link href=''>
                        <a id='landing-2-button-1'>Contact Us</a>
                    </Link>
                    <Link href=''>
                        <a id='landing-2-button-2'>Our Services</a>
                    </Link>
                    </div>
                    </Bounce>
                    </div>
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