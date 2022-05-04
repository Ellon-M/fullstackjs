import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  { db }  from '../FB/Firebase';
import firebase from 'firebase';
import { useHistory } from 'react-router';
import { css } from '@emotion/react'
import { ClimbingBoxLoader, BarLoader, BounceLoader, MoonLoader, PuffLoader, RiseLoader, RingLoader, RotateLoader } from 'react-spinners';
import Img from "react-cool-img";
import { Container, makeStyles, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import 'animate.css';
import Masonry from 'react-masonry-css';
import { after } from 'underscore';
import Footer from './footer';

const useStyles = makeStyles((theme) => {
  return {
    spinner: {
      transitionTimingFunction: 'easeOut',
      transition: '4.5s',
    },
    imageWrap: {
      height: '200px',
      alignItems: 'center',
      marginLeft: '20px'
    },
    linkWrapDetails: {
      float:'right',
    },
    moreDetailsLink: {
      textDecoration: 'none',
      color: 'white',
      fontSize: '0.92rem',
      marginRight: '40px',
      "&:hover": {
        opacity: '0.5',
        color: 'lightgrey'
      }
    },
    carName: {
      textTransform: 'uppercase',
      marginLeft: '25px'
    },
    carPrice: {
      marginLeft: '28px',
      paddingRight: '-55px',
      fontWeight: '700',
      color: 'gold',
      opacity: '0.7'
    },
    oldCarPrice: {
      marginLeft: '28px',
      marginTop: '-6px',
      color: 'silver',
      textDecoration: 'line-through',
      whiteSpace: 'nowrap',
      fontWeight: '400',
    },
    moreInfo: {
      marginTop: '-40px',
      textAlign: 'right',
      color: 'silver',
    },
    saveText: {
        fontWeight: '500',
        fontSize: '1.2rem',
        color: 'gold',
        marginLeft: '28px',
        textAlign: 'right',
        marginTop: '-42px',
        marginBottom: '25px'
    }


  }
})

const container = {
  show: {
    transition: {
        staggerChildren: 0.75,
    }
}
}

const Deals = () => {
    const [carPrice, setCarPrice] = useState([]);
    const [brandName, setBrandName] = useState([]);
    const [url, setUrl] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pending, setPending] = useState(true);
    const[userSignedIn, setUserSignedIn] = useState(false);
    const [loadLoader, setLoader] = useState(true);

    const history = useHistory();
    const classes = useStyles();
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        return setUserSignedIn(true);
      }
      setUserSignedIn(false);
    })


    const signOut = () => {
      firebase.auth().signOut();
      history.push('/signedOut');
    }

    const breakpoints = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    }


    useEffect(() => {
      const getData = [];
      const ref = db
      .collection("newVehicle")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        if (parseFloat(doc.data().discountPerc) > 9) {
          getData.push({
            ...doc.data(), //spread operator
            key: doc.id, 
          });
          console.log(parseFloat(doc.data().discountPerc));
        }
        });
        setData(getData);
        setTimeout(() => {
          setPending(false);
        }, 1300);
        setLoading(false);
        // console.log(data);   
      });
     return () => ref();
    }, [loading]);
  
 
  // test purposes
    useEffect(() => {
      data.forEach(vehicle => {
        for (let [key, value] of Object.entries(vehicle)) {
          if (key === 'brandName') {
            setBrandName(`${value}`);
            setLoading(false);
          }
          else if (key === 'price') {
            setCarPrice(`${value}`);
            setLoading(false);
          }
          else if (key === 'mainUrl') {
            setUrl(`${value}`);
            setLoading(false);
          }
        }
      })
    }, [loading])


    const override = css`
    margin-left: 80px;
    justify-self: center;
    transition-timing-function: ease-out;
  `;

    
    if (userSignedIn) {
      return (
        <Container className="masonryContainer">
        <Masonry breakpointCols = {breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
        { data && data.map(info => {
          const onLoad = after(data.length, () => {
            setLoader(false);
          })
           return (
            <motion.div className="infoWrap" key={info.key}  variants={container}>
              <Link className={classes.moreDetailsLink} to={`/vehicles/${info.key}`}>
              <motion.div className={classes.imageWrap} variants={container}>
              { pending ? (
                     <span className={classes.spinner}>
                     <RingLoader size='50' color='white' css={override} loading speedMultiplier='0.8' />
                     </span>
                 ) : (
                      <img width="250px" height="auto" class="animate__animated animate__backInUp" src={info.mainUrl} alt="firebase-img" onLoad={onLoad}/>
                     )
                 }
                </motion.div>
              <div className="wordsWrap">
              <h2 className={classes.carName}>
                {info.brand} {info.brandDesc}
              </h2>
              <h1 className={classes.carPrice}>
                {info.Price}$  
              </h1>
              <p className={classes.saveText}> (SAVE <b>{info.discountPerc}</b> %)</p>
              <h2 className={classes.oldCarPrice}>
                {info.oldPrice}$
              </h2>
              <p className={classes.moreInfo}>
                <b>{info.topSpeed}</b> | {info.year} | {info.bodyType}
              </p>
              </div>
              <motion.div className={classes.linkWrapDetails}>
              </motion.div>
              </Link>
            </motion.div>
           ) 
          })   
        }
        </Masonry>
        <Footer/>
        </Container>
      )
    }  

    return ( 
      <Container className="masonryContainer">
    <Masonry breakpointCols = {breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
    { data && data.map(info => {
      const onLoad = after(data.length, () => {
        setLoader(false);
      })
       return (
        <motion.div className="infoWrap" key={info.key}  variants={container}>
          <Link className={classes.moreDetailsLink} to={`/vehicles/${info.key}`}>
          <motion.div className={classes.imageWrap} variants={container}>
          { pending ? (
                 <span className={classes.spinner}>
                 <RingLoader size='50' color='white' css={override} loading speedMultiplier='0.8' />
                 </span>
             ) : (
                  <img width="250px" height="auto" class="animate__animated animate__backInUp" src={info.mainUrl} alt="firebase-img" onLoad={onLoad}/>
                 )
             }
            </motion.div>
          <div className="wordsWrap">
          <h2 className={classes.carName}>
            {info.brand} {info.brandDesc}
          </h2>
          <h1 className={classes.carPrice}>
            {info.Price}$  
          </h1>
          <p className={classes.saveText}> (SAVE <b>{info.discountPerc}</b> %)</p>
          <h2 className={classes.oldCarPrice}>
            {info.oldPrice}$
          </h2>
          <p className={classes.moreInfo}>
            <b>{info.topSpeed}</b> | {info.year} | {info.bodyType}
          </p>
          </div>
          <motion.div className={classes.linkWrapDetails}>
          </motion.div>
          </Link>
        </motion.div>
       ) 
      })   
    }
    </Masonry>
    <Footer/>
    </Container>
    );
}
 
export default Deals;