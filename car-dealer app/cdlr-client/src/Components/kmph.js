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

const Kmph = () => {
    const [carPrice, setCarPrice] = useState([]);
    const [brandName, setBrandName] = useState([]);
    const [url, setUrl] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pending, setPending] = useState(true);
    const[userSignedIn, setUserSignedIn] = useState(false);

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
        if (parseInt(doc.data().topSpeed) > 300) {
          getData.push({
            ...doc.data(), //spread operator
            key: doc.id, 
          });
          console.log(parseInt(doc.data().topSpeed));
        }
        });
        setData(getData);
        setTimeout(() => {
          setPending(false);
        }, 1300);
        setLoading(false);
        console.log(data);   
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
        <h2>Signed in</h2>
        <button onClick={signOut}>Sign Out</button>
        <div className="imageGrid">
    { data && data.map(info => {
       return (
         
        <div className="infoWrap" key={info.key}>
          <div className="loader">
           {pending && <PuffLoader color="red" loading={pending}/> }
           </div>
          <Img width="250px" height="auto" src={info.mainUrl} alt="firebase-img"/>
          <h3>
            {info.brandName}
          </h3>
          <p>
            {info.Price}
          </p>

          <div className="linkWrapDetails">
          <Link className={classes.moreDetailsLink} to={`/vehicles/${info.key}`}>Link</Link>
          </div>
        </div>
       )
      })  
    }
    </div>
      </Container>
      )
    }  

    return ( 
    <Container className="masonryContainer">
    <Masonry breakpointCols = {breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
    { data && data.map(info => {
      
       return (
        <motion.div className="infoWrap" key={info.key}  variants={container}>
          <Link className={classes.moreDetailsLink} to={`/vehicles/${info.key}`}>
          <motion.div className={classes.imageWrap} variants={container}>
          { pending ? (
                 <span className={classes.spinner}>
                 <RingLoader size='50' color='white' css={override} loading speedMultiplier='0.8' />
                 </span>
             ) : (
                  <Img width="250px" height="auto" class="animate__animated animate__backInUp" src={info.mainUrl} alt="firebase-img" cache lazy/>
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
    </Container>
    );
}
 
export default Kmph;