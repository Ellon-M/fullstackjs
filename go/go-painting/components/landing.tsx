import React, { FunctionComponent, useEffect, useState, useReducer } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Fade, Slide, Bounce, Zoom, AttentionSeeker, JackInTheBox } from "react-awesome-reveal"
import { motion, AnimatePresence, useAnimation, AnimationControls } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

// first image
import landing1b from '../public/newlanding1.jpg'
import landing1c from '../public/newlanding1.jpg'
import landing1d from '../public/newlanding1narrow.jpg'
import landing1e from '../public/newlanding1narrow.jpg'
import landing1f from '../public/newlanding1narrower.jpg'
import landing1g from '../public/newlanding1.jpg'
import landingfull from '../public/newlanding1.jpg'

// second image
import landing2 from '../public/golanding2norm.jpg'
import landing2b from '../public/golanding2narrowish.jpg'
import landing2c from '../public/golanding2narrow.jpg'
import landing2d from '../public/golanding2narrower.jpg'

// third image
import landing3 from '../public/golanding3wide.jpg'
import landing3b from '../public/golanding3.jpg'
import landing3c from '../public/golanding3longish.jpg'
import landing3d from '../public/golanding3long.jpg'
import landing3e from '../public/golanding3longer.jpg'
import landing3f from '../public/golanding3longer.jpg'

// logo images
import logo from '../public/gologo2.png'
import logo2 from '../public/gopainting1.png'


interface LandingProps {
    
}


// framer variant variables
const firstImageOrigin: number = -1900;
const firstImageFinal: number = 0;
const firstImageEntryAnimationDuration: number = 0.75
const firstImageExitAnimationDuration: number = 1

const secondImageOrigin: number = 1900;
const secondImageFinal: number = 0;
const secondImageEntryAnimationDuration: number = 0.85
const secondImageExitAnimationDuration: number = 3.75

const thirdImageOrigin: number = 1900;
const thirdImageFinal: number = 0;
const thirdImageEntryAnimationDuration: number = 1.25

// first image variants
const carouselInnerVariants = {
    initial: {
        x: firstImageOrigin,
        opacity: 1
    },

    show: {
        opacity: 1,
        x: firstImageFinal,
        transition: {
            ease: 'easeIn',
            duration: firstImageEntryAnimationDuration
        },
    },
    exit: {
            opacity: 0,
            x: firstImageOrigin,
            transition: {
                ease: 'backInOut',
                duration:  firstImageExitAnimationDuration
            },
    }
}

// second image variants
const carouselInner2Variants = {
    initial: {
        x: secondImageOrigin,
        y: 0,
        opacity: 1
    },
    show: {
        x: secondImageFinal,
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: secondImageEntryAnimationDuration
        }
    },
    exit: {
        opacity: 0,
        y: secondImageOrigin,
        transition: {
            ease: 'circInOut',
            duration: secondImageExitAnimationDuration
        },
}
}

// third image variants
const carouselInner3Variants = {
    initial: {
        x: 0,
        y: thirdImageOrigin,
        opacity: 1
    },
    show: {
        opacity: 1,
        x: 0,
        y: thirdImageFinal,
        transition: {
            type: 'tween',
            duration: thirdImageEntryAnimationDuration
        }
    },
}

// container variants
const landingVariants = {
    initial: {
        y: 0,
        scale: 1,
    },
    exit: {
        y: -200,
        scale: 0.9,
        transition: {
            ease: 'easeInOut',
            duration: 0.7
        }
    }
}


const Landing: FunctionComponent<LandingProps> = () => {

    const controls: AnimationControls = useAnimation();
    const [unmountFirstImage, setUnmountFirstImage] = useState(false);
    const [unmountSecondImage, setUnmountSecondImage] = useState(true);
    const [unmountFinalImage, setUnmountFinalImage] = useState(true);
    const [unmountRef, inView] = useInView();
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [isMounted, setIsMounted] = useState(true);

    // animation duration variables (seconds)
    const finishFirst: number = 4000;
    const fireSecond: number = 4400;
    const fireThird: number = 8800;
    const reFireFirst: number = 13800;

    // toggler function for the mounting/unmounting
    const toggle = () => {setIsMounted(!isMounted)};

    // time cycle of the carousel
    useEffect(() => {
            setTimeout(() => {
            setUnmountFirstImage(true);
        }, finishFirst);

            setTimeout(() => {
            setUnmountSecondImage(false);
        }, fireSecond);

        setTimeout(() => {
            setUnmountSecondImage(true);
            setUnmountFinalImage(false);
        }, fireThird);

        setTimeout(() => {
            setUnmountFinalImage(true);
            setUnmountFirstImage(false);
        }, reFireFirst);

    return () => console.log("unmounting");
    }, [isMounted]);


    // unmount after full cycle
    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                toggle();
            }, 5000);
        }
    }, [inView])

    return ( 
        <motion.div className='landing-wrap' variants={landingVariants} initial={landingVariants.initial} exit={landingVariants.exit}>
            <AnimatePresence>
             {!unmountFirstImage && 
                <motion.div className='carousel-inner' variants={carouselInnerVariants} animate=    {controls} exit={carouselInnerVariants.exit}>
                    <Fade triggerOnce>
                  <div className='image-wrap'>
                    <Image src={landingfull} className='landing-image'/>
                    </div>
                    </Fade>
                    <Fade triggerOnce>
                    <div className='image-wrap-narrow'>
                    <Image src={landing1b} className='landing-image'/>
                    </div>
                    </Fade>
                    <Fade triggerOnce>
                    <div className='image-wrap-longish'>
                    <Image src={landing1c} className='landing-image'/>
                    </div>
                    </Fade>
                    <Fade triggerOnce>
                    <div className='image-wrap-long'>
                    <Image src={landing1d} className='landing-image'/>
                    </div>
                    </Fade>
                    <Fade triggerOnce>
                    <div className='image-wrap-longer'>
                    <Image src={landing1e} className='landing-image'/>
                    </div>
                    </Fade>
                    <Fade triggerOnce>
                    <div className='image-wrap-longest'>
                    <Image src={landing1f} className='landing-image'/>
                    </div>
                    </Fade>
                    <Fade triggerOnce>
                    <div className='image-wrap-inv'>
                    <Image src={landing1g} className='landing-image'/>
                    </div>
                    </Fade>
                    <Fade triggerOnce>
                    <div className='image-wrap-full'>
                    <Image src={landingfull} className='landing-image'/>
                    </div>
                    </Fade>
                    <div className='over-image'>
                    <Slide cascade triggerOnce delay={300}>
                    <div className='logo-legend'>
                    <Image src={logo2} width={300} height={300}></Image>
                    </div> 
                    </Slide>
                    <Zoom triggerOnce delay={900}>
                    <p className="legend-main">| 7 years of experience |</p>
                    </Zoom>
                    <div className='button-group'>
                    <Zoom cascade triggerOnce delay={1200} duration={600}>
                    <Link href='/contactus'>
                        <a className='landing-button-1' onClick={toggle}>Contact Us</a>
                    </Link>
                    <Link href='/ourservices'>
                        <a className='landing-button-2'>Our Services</a>
                    </Link>
                    </Zoom>
                    </div>
                    </div>
                </motion.div>
                }
                {!unmountSecondImage && 
                <motion.div className='carousel-inner-2' variants={carouselInner2Variants} initial={carouselInner2Variants.initial} animate={carouselInner2Variants.show} exit={carouselInner2Variants.exit}>
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
                    <Bounce cascade triggerOnce duration={1000}>
                    <p className="legend-main-2">Guaranteed of Quality workmanship and Durability</p>
                    <div className='button-group-2'>
                    <Link href='/contactus'>
                        <a id='landing-2-button-1' onClick={toggle}>Contact Us</a>
                    </Link>
                    <Link href='/ourservices'>
                        <a id='landing-2-button-2'>Our Services</a>
                    </Link>
                    </div>
                    </Bounce>
                    </div>
                </motion.div>
                }
                {!unmountFinalImage && 
                <motion.div className='carousel-inner-3'  variants={carouselInner3Variants} initial={carouselInner3Variants.initial} animate={carouselInner2Variants.show}>
                    <div className='image-wrap'>
                     <Image src={landing3} className='landing-image'/>
                    </div>
                    <div className='image-wrap-inv'>
                    <Image src={landing3b} className='landing-image'/>
                    </div>
                    <div className='image-wrap-full'>
                    <Image src={landing3b} className='landing-image'/>
                    </div>
                    <div className='image-wrap-long'>
                    <Image src={landing3c} className='landing-image'/>
                    </div>
                    <div className='image-wrap-longish'>
                    <Image src={landing3d} className='landing-image'/>
                    </div>
                    <div className='image-wrap-longer'>
                    <Image src={landing3e} className='landing-image'/>
                    </div>
                    <div className='image-wrap-longest'>
                    <Image src={landing3f} className='landing-image'/>
                    </div>
                    <div className='over-image-2'>
                    <AttentionSeeker effect='jello' triggerOnce delay={1000}>
                    <p className='legend-main-3'>Proffesional service in painting, gypsum ceilings and wainscoting</p>
                    </AttentionSeeker>
                    <div className='button-group-2'>
                    <JackInTheBox cascade triggerOnce>
                    <Link href='/contactus'>
                        <a id='landing-2-button-1' onClick={toggle}>Contact Us</a>
                    </Link>
                    <Link href='/ourservices'>
                        <a id='landing-2-button-2' ref={unmountRef}>Our Services</a>
                    </Link>
                    </JackInTheBox>
                    </div>
                    </div>
                </motion.div>
                }
        </AnimatePresence>
        </motion.div>
     );
}
 
export default Landing;