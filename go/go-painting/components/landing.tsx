import React, { FunctionComponent, useEffect, useState, useReducer } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Fade, Slide, Bounce, Zoom, AttentionSeeker, JackInTheBox } from "react-awesome-reveal"
import { motion, AnimatePresence, useAnimation, AnimationControls } from 'framer-motion'
import { useInView } from 'react-intersection-observer';



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
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855424/newlanding1_alja9r.jpg' className='landing-image'/>
                    </div>
                    </Fade>
                    <Fade triggerOnce>
                    <div className='image-wrap-narrow'>
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855424/newlanding1_alja9r.jpg' className='landing-image'/>
                    </div>
                    </Fade>
                    <Fade triggerOnce>
                    <div className='image-wrap-longish'>
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855424/newlanding1_alja9r.jpg'
                    className='landing-image'/>
                    </div>
                    </Fade>
                    <Fade triggerOnce>
                    <div className='image-wrap-long'>
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855425/newlanding1narrow_jhmqiz.jpg' className='landing-image'/>
                    </div>
                    </Fade>
                    <Fade triggerOnce>
                    <div className='image-wrap-longer'>
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855425/newlanding1narrow_jhmqiz.jpg' className='landing-image'/>
                    </div>
                    </Fade>
                    <Fade triggerOnce>
                    <div className='image-wrap-longest'>
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855425/newlanding1narrow_jhmqiz.jpg' className='landing-image'/>
                    </div>
                    </Fade>
                    <Fade triggerOnce>
                    <div className='image-wrap-inv'>
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855424/newlanding1_alja9r.jpg' className='landing-image'/>
                    </div>
                    </Fade>
                    <Fade triggerOnce>
                    <div className='image-wrap-full'>
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855424/newlanding1_alja9r.jpg' className='landing-image'/>
                    </div>
                    </Fade>
                    <div className='over-image'>
                    <Slide cascade triggerOnce delay={300}>
                    <div className='logo-legend'>
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855424/gopainting1_mdmzlr.png' width={300} height={300}></Image>
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
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641858349/golanding2norm_fgfsts.jpg' className='landing-image'/>
                    </div>
                    <div className='image-wrap-inv-2'>
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855422/golanding2narrow_lbom06.jpg' className='landing-image'/>
                    </div>
                    <div className='image-wrap-full'>
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641858349/golanding2norm_fgfsts.jpg' className='landing-image'/>
                    </div>
                    <div className='image-wrap-long'>
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855422/golanding2narrow_lbom06.jpg' className='landing-image'/>
                    </div>
                    <div className='image-wrap-longish'>
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855423/golanding2narrowish_lwenk2.jpg' className='landing-image'/>
                    </div>
                    <div className='image-wrap-longer'>
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855422/golanding2narrow_lbom06.jpg' className='landing-image'/>
                    </div>
                    <div className='image-wrap-longest'>
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855423/golanding2narrower_cgrxxn.jpg' className='landing-image'/>
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
                     <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855424/golanding3wide_grpoax.jpg' className='landing-image'/>
                    </div>
                    <div className='image-wrap-inv'>
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855423/golanding3_golen4.jpg' className='landing-image'/>
                    </div>
                    <div className='image-wrap-full'>
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855423/golanding3_golen4.jpg' className='landing-image'/>
                    </div>
                    <div className='image-wrap-long'>
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855423/golanding3longish_na8dlm.jpg' className='landing-image'/>
                    </div>
                    <div className='image-wrap-longish'>
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855422/golanding3long_xely4r.jpg' className='landing-image'/>
                    </div>
                    <div className='image-wrap-longer'>
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855423/golanding3longer_uhmz5y.jpg' className='landing-image'/>
                    </div>
                    <div className='image-wrap-longest'>
                    <Image unoptimized src='https://res.cloudinary.com/denphvygd/image/upload/v1641855423/golanding3longer_uhmz5y.jpg' className='landing-image'/>
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