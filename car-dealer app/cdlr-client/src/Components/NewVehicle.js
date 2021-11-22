import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  { db }  from '../FB/Firebase';
import firebase from 'firebase';
import { useHistory } from 'react-router';
import { css } from '@emotion/react'
import { ClimbingBoxLoader, BarLoader, BounceLoader, MoonLoader, PuffLoader } from 'react-spinners';
import Img from "react-cool-img";
import { makeStyles, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import 'animate.css';

const useStyles = makeStyles((theme) => {
  return {
    spinner: {
      transitionTimingFunction: 'easeOut',
      transition: '3.5s',
    },
    imageWrap: {
      height: '200px'
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

const item = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2,
      y: 250,
    },
  },
  
}
const spinItem = {
  show: {
    opacity: 1,
    transition: {
      delay: 0.5
    }
  },
  exit: {
    opacity: 0,
    y: -200,
        transition: {
            ease: 'easeInOut',
            duration: 1.8,
            delay: 1
        }
  }
}


const NewVehicle = () => {
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



    useEffect(() => {
      const getData = [];
      const ref = db
      .collection("newVehicle")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getData.push({
            ...doc.data(), //spread operator
            key: doc.id, 
          });
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
    float:right;
    margin-top: 60px;
    transition-timing-function: ease-out;
  `;

    
    if (userSignedIn) {
      return (
      <div>
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
          <Link to={`/vehicles/${info.key}`}>Link</Link>
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
    <motion.div className="imageGrid"  variants={container}>
    { data && data.map(info => {
       return (
        <motion.div className="infoWrap" key={info.key}  variants={container}>
          <motion.div className={classes.imageWrap} variants={container}>
          { pending ? (
                 <motion.span className={classes.spinner} variants={spinItem} animate="show" exit="exit">
                 <MoonLoader size='40' color='white' css={override} loading speedMultiplier='0.8' />
                 </motion.span>
             ) : (
                  <Img width="250px" height="auto" class="animate__animated animate__fadeInDownBig" src={info.mainUrl} alt="firebase-img" cache lazy/>
                 )
             }
            </motion.div>
          <div className="wordsWrap">
          <h3>
            {info.brandName}
          </h3>
          <p>
            {info.Price}
          </p>
          </div>
          <div className="linkWrapDetails">
          <Link to={`/vehicles/${info.key}`}>Link</Link>
          </div>
        </motion.div>
       )
      })  
    }
    </motion.div>);
}

 
export default NewVehicle;
