import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { useHistory } from 'react-router';

import { makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';

const useStyles = makeStyles(() => {
    return {
        navWrap: {
            // marginTop: '15px',
            position: 'absolute',
            backgroundColor: 'transparent',
            minWidth: '100%!important',
            maxWidth: '100%!important',
            height: '3.3rem',
            backgroundColor: 'transparent',
        },
        nav: {
            color: 'transparent',
            minWidth: '100vw',
            maxWidth: '100vw',
            position: 'fixed',
            zIndex: 2,
            justifyContent: 'center',
            verticalAlign: 'center',
         },
         navListLinks: {
            paddingTop: '0.3rem',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent:'center',

         },
         navLinks: {
             color: 'white',
             textDecoration: 'none',
             padding: '1.5rem',
             position: 'relative',
            //  alignItems: 'center',
            //  justifyContent: 'center',
             verticalAlign: 'center',
             fontWeight: 'lighter',
             letterSpacing: '0.1rem',
             textTransform: 'uppercase',
             fontFamily: '"Didact Gothic", "sans-serif"',
         }
    }
})

const container =  {
    show: {
        transition: {
            staggerChildren: 0.65,
        }
    }
}

const item1 = {
    hidden: {
        opacity: 0,
        y: -200
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [.2, .01, -.05, .85],
            duration: 1,
            delay: 4
        }
    },
}
const item2 = {
    hidden: {
        opacity: 0,
        y: -200
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [.2, .01, -.05, .85],
            duration: 1,
            delay: 4.1
        }
    },
}
const item3 = {
    hidden: {
        opacity: 0,
        y: -200
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [.2, .01, -.05, .85],
            duration: 1,
            delay: 4.2
        }
    },
}
const item4 = {
    hidden: {
        opacity: 0,
        y: -200
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [.2, .01, -.05, .85],
            duration: 1,
            delay: 4.3
        }
    },
}
const item5 = {
    hidden: {
        opacity: 0,
        y: -200
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [.2, .01, -.05, .85],
            duration: 1,
            delay: 4.4
        }
    },
}


const Layout = ({ children }) => {
    const history = useHistory();
    const classes = useStyles();
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
           console.log(user.displayName);
           console.log(user.email);
           console.log(user.photoURL);
        }
      })


    return ( 
     <div>
     <motion.div className={classes.navWrap}>
        <motion.nav className={classes.nav} variants={container} initial="hidden" animate="show">
            <motion.ul className={classes.navListLinks}
             >
                <motion.li className="navLinkWrap" variants={item1}>
                <Link to ="/vehicles" id="nav-buyNow" className={classes.navLinks}>Buy Now</Link>
                </motion.li>
                <motion.li className="navLinkWrap" variants={item2}>
                <Link to ="/deals" id="nav-deals" className={classes.navLinks}>Deals</Link>
                </motion.li>
                <motion.li className="navLinkWrap" variants={item3}>
                <Link to ="" id="nav-support" className={classes.navLinks}>Support</Link>
                </motion.li>
                <motion.li className="navLinkWrap" variants={item4}>
                <Link to ="" id="nav-about" className={classes.navLinks}>About Us</Link>
                </motion.li>
                <motion.li className="navLinkWrap" variants={item5}>
                <Link to ="/signinemail" id="nav-signUp" className={classes.navLinks}>Sign Up</Link>
                </motion.li>
            </motion.ul>
        </motion.nav>
    </motion.div>
    { children }
    </div>
     );
}
 
export default Layout;
