import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  { db }  from '../FB/Firebase';
import firebase from 'firebase';
import { useHistory, useParams } from 'react-router';
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


const Lamborghini = () => {
    const [lamborghini, setLamborghini] = useState([]);

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
          if (doc.data().brand === "Lamborghini") {
            getData.push({
              ...doc.data(), //spread operator
              key: doc.id
            });
          }
          });
          setLamborghini(getData);
          setTimeout(() => {
            setPending(false);
          }, 1300);
          setLoading(false);
        });
       return () => ref();
      }, [loading]);


      const override = css`
      margin-left: 80px;
      justify-self: center;
      transition-timing-function: ease-out;
    `;

    if (userSignedIn) {
        return (
        <div>
          <h2>Signed in</h2>
          <button onClick={signOut}>Sign Out</button>
          <div className="imageGrid">
      { lamborghini && lamborghini.map(info => {
         return (
           
          <div className="infoWrap" key={info.brand}>
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
      </div>
      )
    }
    return (
        <Container>
        <Masonry breakpointCols = {breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
        { lamborghini && lamborghini.map(info => {
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
          </div>
          <motion.div className={classes.linkWrapDetails}>
          </motion.div>
          </Link>
        </motion.div>
       )
      })  
    }
     </Masonry>
    </Container>);
}

export default Lamborghini;