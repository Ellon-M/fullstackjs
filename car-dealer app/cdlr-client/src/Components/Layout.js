import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import icon from '../images/others/cd-logo.png';

const useStyles = makeStyles(() => {
    return {
        navWrap: {
            position: 'absolute',
            backgroundColor: 'transparent',
            minWidth: '100vw!important',
            maxWidth: '100vw!important',
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
            transition: '.8s',
            animation: 'easeIn',
         },
         navChange: {
            backgroundColor: 'black',
            color: 'transparent',
            minWidth: '100vw',
            maxWidth: '100vw',
            position: 'fixed',
            zIndex: 180,
            justifyContent: 'center',
            verticalAlign: 'center',
            transition: '.8s',
            animation: 'easeIn',
            filter: 'drop-shadow(.4rem .1rem .4rem #949494)'
         },
         navListLinks: {
            paddingTop: '0.3rem',
            position: 'relative',
            display: 'flex',
            textAlign: 'center',
            justifyContent:'center',
            "@media (min-width: 200px) and (max-width: 746px)": {
                display: 'none',
            }
         },
         navListLinksSigned: {
            paddingTop: '0.3rem',
            position: 'relative',
            display: 'flex',
            textAlign: 'center',
            justifyContent:'center',
            "@media (min-width: 200px) and (max-width: 1026px)": {
                display: 'none',
            }
         },
         navLinks: {
             color: 'white',
             textDecoration: 'none',
             padding: '1.5rem',
             position: 'relative',
             verticalAlign: 'center',
             fontWeight: 'lighter',
             letterSpacing: '0.1rem',
             textTransform: 'uppercase',
             fontFamily: '"Didact Gothic", "sans-serif"',

             "@media (min-width: 200px) and (max-width: 470px)": {
                paddingRight: '0.1rem',
                fontSize: '0.7rem',
                marginLeft: '0',
            }
         },
         hamburgerBtn: {
             margin: '0',
             padding: '15px',
             width: '100%',
         },
         displayEmail: {
             color: '#dbdbdb',
             fontWeight: 'bolder'
         },
         navSignOut: {
             opacity: '.7',
             color: 'gold',
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
    const [colorChange, setColorChange] = useState(false);
    const [mail, setMail] = useState('');
    const [signedInUser, setSignedInUser] = useState(false);
    const [checked, setChecked] = useState(false);

    const signOut = () => {
        firebase.auth().signOut();
        history.push('/signedOut');
    }

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
           setMail(user.email);
          return setSignedInUser(true);
        }
         setSignedInUser(false);
      })

    const changeNavbarColor = () =>{
        if (window.scrollY >= 80){
          setColorChange(true);
        }
        else {
          setColorChange(false);
        }
     };

    window.addEventListener('scroll', changeNavbarColor);
    const history = useHistory();
    const classes = useStyles();
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
           console.log(user.displayName);
           console.log(user.email);
           console.log(user.photoURL);
        }
      })

    if (signedInUser) {
        return (
            <div>
            <motion.div className={classes.navWrap}>
        <motion.nav className={colorChange ? classes.navChange : classes.nav} variants={container} initial="hidden" animate="show">
            {/* <div className={classes.hamburgerBtn}>
                <img src={hamburger}></img>
            </div> */}
            <div className="navbarSigned">
            <div className="containerSigned nav-containerSigned">
            <input class="checkbox" type="checkbox" name="" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
            <div class="hamburger-linesSigned">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
             <div class="menu-itemsSigned">
             <li><Link onClick={() => setChecked((c) => !c)} to="/" href="">Home</Link></li>
            <li><Link onClick={() => setChecked((c) => !c)} to="/vehicles">Buy Now</Link></li>
            <li><Link onClick={() => setChecked((c) => !c)} to="/deals">Deals</Link></li>
            <li><Link onClick={() => setChecked((c) => !c)} to="" href="#">Support</Link></li>
            <li><Link onClick={() => setChecked((c) => !c)} to="" href="#">About Us</Link></li>
            <li><Link onClick={() => setChecked((c) => !c)} to="" href="#">{mail}</Link></li>
            <li><Link to="" onClick={signOut} href="#">Sign Out</Link></li>
             </div>
            </div>            
            </div>
            <motion.ul className={classes.navListLinksSigned}
             >
                 <motion.div className="iconWrap" variants={item1}>
                     <Link to="/">
                    <img src={icon} className="iconImg"/>
                    </Link>
                 </motion.div>
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
                <span className={classes.navLinks}>Signed In as <span className={classes.displayEmail}><i>{mail}</i></span></span>
                </motion.li>
                <motion.li className="navLinkWrap" variants={item4}>
                <Link to ="" id="nav-about" onClick={signOut} className={classes.navLinks}><span className={classes.navSignOut}>Sign Out</span></Link>
                </motion.li>
            </motion.ul>
        </motion.nav>
    </motion.div>
    { children }
    </div>
        )
    }

    else {
    return ( 
     <div>
     <motion.div className={classes.navWrap}>
        <motion.nav className={colorChange ? classes.navChange : classes.nav} variants={container} initial="hidden" animate="show">
            {/* <div className={classes.hamburgerBtn}>
                <img src={hamburger}></img>
            </div> */}
            <div className="navbar">
            <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
             <div className={'menu-items'}>
             <li><Link onClick={() => setChecked((c) => !c)} to="/" href="">Home</Link></li>
            <li><Link onClick={() => setChecked((c) => !c)} to="/vehicles" href="">Buy Now</Link></li>
            <li><Link onClick={() => setChecked((c) => !c)} to="/deals" href="">Deals</Link></li>
            <li><Link onClick={() => setChecked((c) => !c)} to="" href="">Support</Link></li>
            <li><Link onClick={() => setChecked((c) => !c)} to="" href="#">About Us</Link></li>
            <li><Link onClick={() => setChecked((c) => !c)} to="/signinemail">Sign Up</Link></li>
             </div>
            </div>            
            </div>
            <motion.ul className={classes.navListLinks}
             >
                <motion.div className="iconWrap" variants={item1}>
                <Link to="/">
                <img src={icon} className="iconImg"/>
                </Link>
                </motion.div>
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
}
 
export default Layout;
