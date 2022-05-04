// modules
import { Container, makeStyles, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import 'animate.css';
import { useState } from 'react';
import { after } from 'underscore';

// images
import centerImage1 from './images/landing/test3tuned.jpg';
import centerImage2b from './images/landing/test2copy.jpg';
import centerImage2X from './images/landing/gclassX.png';
import centerImage3 from './images/landing/test4tuned.jpg';
import centerImage3b from './images/landing/white_lambo.png';
import centerImage3c from './images/landing/lambo_zoom.png';
import rightArrowBtn from './images/landing/ra3.png';

// external components
import Models from './Components/models';
import Zoomed from './Components/zoomed';
import Footer from './Components/footer';

const allImages = [centerImage1,centerImage3, rightArrowBtn, centerImage2b, centerImage3b, centerImage2X, centerImage3c];

// internal styling
const useStyles = makeStyles((theme) => {
    return {
        homeWrap: {
            maxWidth: '100vw',
            minWidth: '100vw',
            maxHeight: '100%',
            minHeight: '100%',
            backgroundColor: 'black',
            margin: 0,
        },
        landingWrap: {
            height: '100vh',
            width: '100%',
            margin: '0',
            display: 'block',
        },
        centerClippedImgs: {
            margin: '0',
            padding: '0',
            display: 'flex',
            maxHeight: '100%',
            width: '100%',
            top: '0',
            bottom: 0,
            height: 'auto'
        },


        // vertical responsiveness -> increase negative margin top for lower window heights

        // clipped
        clipped1: {
            width: '100%',
            clipPath: 'polygon(0% 0%, 0% 100%, 40% 100%, 75% 0%)',
            overflow: 'hidden',
            height: 'auto',
            maxHeight: '100%',
            zIndex: '-2',
            backgroundSize: 'cover',
            [theme.breakpoints.between('xs','sm')]: {
                
             },
             [theme.breakpoints.down(980)]: {
                display: 'none',
              }
        },

        clipped3: {
            width: '100%',
            clipPath: 'polygon(30% 0%, 0% 100%, 100% 100%, 100% 0%)',
            height: 'auto',
            maxHeight: '100%',
            marginLeft: '-750px',
            overflow: 'hidden',
            backgroundSize: 'cover',
            //  [theme.breakpoints.down(1580)]: {
            //     marginLeft: '-800px',
            //   },
              [theme.breakpoints.down(1380)]: {
                marginLeft: '-900px',
              },
             [theme.breakpoints.down(1280)]: {
                marginLeft: '-1000px',
              },
              [theme.breakpoints.down(1180)]: {
                display: 'none',
              },
        },


        // white lambo - large screens
        central3b: {
            marginLeft: '0',
            display: 'none',
            [theme.breakpoints.between(980, 1180)]: {
                display: 'flex',
                maxHeight: '100%',
                minHeight: '100%',
                minWidth: '100%',
                maxWidth: '100%',
                objectFit: 'cover',
                objectPosition: 'center center',
                marginLeft: '0',
                marginRight: '0',
                overflow: 'hidden',
                objectPosition: 'center center',
                backgroundSize: 'contain',
            },
        },
        central3c: {
            marginLeft: '0',
            display: 'none',
            [theme.breakpoints.between(580, 980)]: {
                display: 'flex',
                maxHeight: '100%',
                minHeight: '100%',
                minWidth: '100%',
                maxWidth: '100%',
                objectFit: 'cover',
                objectPosition: 'center center',
                marginLeft: '0',
                marginRight: '0',
                overflow: 'hidden',
                objectPosition: 'center center',
                backgroundSize: 'contain',
            },
            [theme.breakpoints.up(700)]: {
                height: '100vh',
              },
        },

        // g class - small phones
        central2B: {
            display: 'none',
            maxWidth: '100%',
            minWidth: '100%',
            maxHeight: '100%',
            minHeight: '100%',
            overflow: 'hidden',
            backgroundSize: 'contain',
            [theme.breakpoints.between(300, 646)]: {
                display: 'flex',
                objectFit: 'cover',
                objectPosition: 'center center',
            },
            [theme.breakpoints.up(450)]: {
                height: '100vh'
            },
            // "@media (min-height: 800px)": {
            //      display: 'none',
            // }    
        },

        central2X: {
            display: 'none',
            maxWidth: '100%',
            minWidth: '100%',
            maxHeight: '100%',
            minHeight: '100%',
            overflow: 'hidden',
            backgroundSize: 'contain',
            "@media (min-height: 800px) and (max-height: 1000px) and (max-width: 646px)": {
                display: 'flex',
                objectFit: 'cover',
                objectPosition: 'center center',
             },
             "@media (min-width: 250px) and (max-width: 300px)": {
                display: 'flex',
                objectFit: 'cover',
                objectPosition: 'center center',
                height: '95vh',
             }
        },

        homeText: {
            position: 'absolute',
            transform: 'translateY(24vh)',
            zIndex: '1',
            color: 'white',

            "@media (min-width: 250px) and (max-width: 360px)": {
                transform: 'translateY(0vh)',
            }
        },

        mainHomeText: {
            whiteSpace: 'nowrap',
            display: 'inline-block',
            fontSize: '22.5rem',
            position: 'relative',
            marginBottom: '1rem',
            letterSpacing: '0.5rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginLeft: '-170px',
            "@media (min-width: 650px) and (max-width: 980px)": {
                fontSize: '12rem',
                marginTop: '100px',
                marginLeft: '100px'
            },
            "@media (min-width: 250px) and (max-width: 400px)": {
                fontSize: '4rem',
                marginLeft: '330px',
                marginTop: '390px'
            },
            "@media (min-width: 400px) and (max-width: 650px)": {
                fontSize: '7rem',
                marginLeft: '260px',
                marginTop: '150px'
            }
        },

        subHomeText: {
            whiteSpace: 'nowrap',
            fontWeight: 100,
            fontSize: '2rem',
            display: 'block',
            textTransform: 'uppercase',
            marginLeft: '140px',
            letterSpacing: '0.5rem',
            "@media (min-width: 580px) and (max-width: 980px)": {
                marginTop: '100px',
                letterSpacing: '0',
                marginLeft: '20%',
                fontSize: '1.7rem'
            },
            "@media (min-width: 250px) and (max-width: 400px)": {
                fontSize: '1rem',
                letterSpacing: '0',
                marginLeft: '10%',
                marginTop: '155px',
            },
            "@media (min-width: 400px) and (max-width: 650px)": {
                fontSize: '1.2rem',
                letterSpacing: '0',
                marginLeft: '10%',
                marginTop: '125px',
            }
        },

        models: {
          width: '100%',
        },
        zoomed: {
            width: '100%',
        }
    }
})

const str = "Let's help you find your new car";
const chars = str.split('');
console.log(chars);

// banner variants
const container = {
    show: {
        transition: {
            staggerChildren: 0.1,
        }
    }
}

const mainletters = {
    hidden: {
        opacity: 0,
        y: 400,
        x: 0,
        scale: 1,
    },
    show: {
        opacity: 0.75,
        y: -100,
        transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 2,
        delay: 1.2
        },
        scale: 0.35,
        x: -450,
    },
}

const subletters = {
    hidden: {
        opacity: 0,
        y: -300,
        x: 0,
        scale: 1,
    },
    show: {
        opacity: 1,
        y: -260,
        transition: {
        duration: 2,
        delay: 2.0,
        },
        scale: 0.8,
        x: -100
    },
}



const Home = () => {
    const [loader, setLoader] = useState(true);
    
    const onLoad = after(allImages.length, () => {
        
        setTimeout(() => {
            setLoader(false);
        }, 3000)
    })

    const classes = useStyles();

    return ( 
         <motion.Container id="homeWrap" className={classes.homeWrap} variants={container}>
         <div className={classes.landingWrap}>
            <motion.div className={classes.homeText} variants={container} initial='hidden'
             animate='show'>
                <motion.span layout className={classes.mainHomeText}   variants={mainletters}>
                    Car Dealers
                </motion.span>
                <motion.span className={classes.subHomeText} variants={subletters} initial='hidden'
             animate='show'>
                {chars.map((letter) => (
                        <motion.span>{letter}</motion.span>
                    ))}
                </motion.span>
                <div id="mainHomeBtn" class="animate__animated animate__fadeInLeft animate__delay-3s">
                    <svg height="110" width="100">
                        <polygon class="hexaBtn" points="50 3, 100 28, 100 75, 50 100, 3 75, 3 25" stroke="white" strokeWidth="2">
                        </polygon>
                    </svg> 
                    <div class="right-icon">
                    <img class="animate__animated animate__lightSpeedInLeft animate__delay-4s" src={rightArrowBtn} alt="" />
                    </div>
                </div>
            </motion.div>       
            <motion.div className={classes.centerClippedImgs}
            >   
                {/* main desktop left */}
                <motion.img src={centerImage1} alt="" className={classes.clipped1} layoutId="main-img-1" transition={{ease: [.2, .01, -.05, .95], duration: 1.6, }} onLoad={onLoad} />    

                {/* small devices  */}
                <img src={centerImage2X} alt="" className={classes.central2B} onLoad={onLoad}/>

                {/* main desktop right */}
                <motion.img src={centerImage3} alt="" className={classes.clipped3} layoutId="main-img-2" transition={{ease: [.2, .01, -.05, .95], duration: 1.6,}}  onLoad={onLoad}/>
                <img src={centerImage3b} alt="" className={classes.central3b} onLoad={onLoad}/>
                <img src={centerImage3c} alt="" className={classes.central3c} onLoad={onLoad}/>
            </motion.div>
            </div>
            <motion.div className={classes.models}>
              <Models/>
            </motion.div>
            {/* <div className={classes.zoomed}>
            <Zoomed/>
            </div> */}
            <Footer/>
        </motion.Container>
     );
}
 
export default Home;