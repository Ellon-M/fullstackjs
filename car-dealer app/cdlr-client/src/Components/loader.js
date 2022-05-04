import loaderImage1 from '../images/loaderimgs/loader-img8.jpg';
import loaderImage2 from '../images/loaderimgs/loader-img-2.jpg';
import loaderImage3 from '../images/loaderimgs/loader-img10.jpg';
import loaderImage4 from '../images/loaderimgs/loader-img4.jpg';

import centerImage1 from '../images/landing/test3tuned.jpg';
import centerImage3 from '../images/landing/test4tuned.jpg';
import centerImage2X from '../images/landing/gclassX.png';

import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import { after } from 'underscore';
import { motion } from 'framer-motion';

const allImages = [loaderImage1, loaderImage2, loaderImage3, loaderImage4, centerImage1, centerImage3, centerImage2X];


const useStyles = makeStyles(() => {
    return {
    image1loader: {
        left: '5%',
        width: '400px',
        top: '15%',
        position: 'absolute',
        transformOrigin: 'center',
        "@media (max-width: 860px)": {
            width: '330px' 
          },
    },
    image2loader: {
        right: '10%',
        width: '500px',
        top: '15%',
        position: 'absolute',
        transformOrigin: 'center',
        "@media (max-width: 860px)": {
            width: '330px' 
          },
    },
    image3loader: {
        left: '5%',
        width: '600px',
        bottom: '10%',
        position: 'absolute',
        transformOrigin: 'center',
        "@media (max-width: 860px)": {
            width: '330px' 
          },
    },
    image4loader: {
        right: '10%',
        width: '800px',
        bottom: '10%',
        position: 'absolute',
        transformOrigin: 'center',
        "@media (max-width: 860px)": {
            width: '300px' 
          },
    },
    innerLoader: {
        display: 'block',
        overflow: 'hidden',
        height: '100%',
    },
    loader: {
        overflowY: 'hidden',
        height: '-100vh',
        scrollbarWidth: 'none',
        backgroundColor: 'black',
    },
    clippedA: {
        top: '25%',
        width: '400px',
        left: '31%',
        position: 'absolute',
        clipPath: 'polygon(0% 0%, 0% 100%, 40% 100%, 73% 0%)',
        "@media (max-width: 860px)": {
            display: 'none'
        }
    },
    clippedB: {
        clipPath: 'polygon(30% 0%, 0% 100%, 100% 100%, 100% 0%)',
        top: '25%',
        width: '430px',
        right: '30%',
        position: 'absolute', 
        "@media (max-width: 860px)": {
          clipPath: 'none',
          width: '300px' 
        },
        "@media (max-width: 575px)": {
            display: 'none'
        }
    },
    clippedGL: {
        top: '25%',
        width: '270px',
        marginLeft: '120px',
        position: 'absolute',
        display: 'none', 
        "@media (max-width: 575px)": {
            display: 'flex'
        }
    }
} 
})

// variants
const container = {
    show: {
        transition: {
            staggerChildren: 0.55,
        }
    }
}

const item = {
    hidden: {
        opacity: 0,
        y: 200,
    },
    show: {
        opacity: 0.7,
        y: 0,
        transition: {
            ease: [.2, .01, -.05, .85],
            duration: 1.6,
        },
    },
    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: 'easeInOut',
            duration: 0.8
        }

    }
}

const itemMain = {
    hidden: {
        opacity: 0,
        y: 200,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [.2, .01, -.05, .85],
            duration: 1.4,
        },
        scale: 1.6
    },
}


const Loader = ({ setLoading }) => {
    const [loadLoader, setLoadLoader] = useState(true);
    
    const onLoad = after(allImages.length, () => {
        setLoadLoader(false);
    })

    const classes = useStyles();

    return ( 
        <>
        <motion.div className = {classes.loader}>
            <motion.div className = {classes.innerLoader}
             variants={container}
             initial="hidden"
             animate="show"
             exit="exit"
             onAnimationComplete={() => {setLoading(false)}}>


                    <motion.img className={classes.image2loader} src={loaderImage2} alt="" variants = { item }onLoad={onLoad}/>

                    <motion.img className={classes.image1loader} src={loaderImage1} alt="" variants = { item } onLoad={onLoad} />


                    <motion.img className={classes.image4loader} src={loaderImage4} alt="" variants = { item }onLoad={onLoad} />

                    <motion.img className={classes.image3loader} src={loaderImage3} alt="" variants = { item }onLoad={onLoad} />
                    

                    <motion.img src={centerImage2X} alt="" className={classes.clippedGL} layoutId="main-img-1" variants={itemMain} onLoad={onLoad}/> 

                    <motion.img src={centerImage1} alt="" className={classes.clippedA} layoutId="main-img-1" variants={itemMain} onLoad={onLoad}/> 

                    <motion.img src={centerImage3} alt="" className={classes.clippedB} layoutId="main-img-2" variants={itemMain} onLoad={onLoad}/>
            </motion.div>
        </motion.div>
        </>
     );
}
 
export default Loader;