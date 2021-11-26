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


const Particularized = () => {
    const [carPrice, setCarPrice] = useState([]);
    const [brandName, setBrandName] = useState([]);
    const [url, setUrl] = useState([]);
    const [BMW, setBMW] = useState([]);
    const [Merc, setMerc] = useState([]);
    const [audi, setAudi] = useState([]);
    const [ferrari, setFerrari] = useState([]);
    const [jeep, setJeep] = useState([]);
    const [kia, setKia] = useState([]);
    const [ford, setFord] = useState([]);
    const [lamborghini, setLamborghini] = useState([]);
    const [lr, setLr] = useState([]);
    const [maserati, setMaserati] = useState([]);
    const [nissan, setNissan] = useState([]);
    const [porsche, setPorsche] = useState([]);
    const [subaru, setSubaru] = useState([]);
    const [vw, setVW] = useState([]);
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
        if (doc.data().brand === "BMW") {
          getData.push({
            ...doc.data(), //spread operator
            // key: doc.data().brand, 
          });
        }
        });
        setBMW(getData);
        setTimeout(() => {
          setPending(false);
        }, 1300);
        setLoading(false);
      });
     return () => ref();
    }, [loading]);

    // merc
    useEffect(() => {
      const getData = [];
      const ref = db
      .collection("newVehicle")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        if (doc.data().brand === "Mercedes") {
          getData.push({
            ...doc.data(), //spread operator
            // key: doc.data().brand, 
          });
        }
        });
        setMerc(getData);
        setTimeout(() => {
          setPending(false);
        }, 1300);
        setLoading(false);
      });
     return () => ref();
    }, [loading]);


    // audi
    useEffect(() => {
      const getData = [];
      const ref = db
      .collection("newVehicle")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        if (doc.data().brand === "Audi") {
          getData.push({
            ...doc.data(), //spread operator
            // key: doc.data().brand, 
          });
        }
        });
        setAudi(getData);
        setTimeout(() => {
          setPending(false);
        }, 1300);
        setLoading(false);
      });
     return () => ref();
    }, [loading]);

    // ferrari
    useEffect(() => {
      const getData = [];
      const ref = db
      .collection("newVehicle")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        if (doc.data().brand === "Ferrari") {
          getData.push({
            ...doc.data(), //spread operator
            // key: doc.data().brand, 
          });
        }
        });
        setFerrari(getData);
        setTimeout(() => {
          setPending(false);
        }, 1300);
        setLoading(false);
      });
     return () => ref();
    }, [loading]);


    // ford
    useEffect(() => {
      const getData = [];
      const ref = db
      .collection("newVehicle")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        if (doc.data().brand === "Ford") {
          getData.push({
            ...doc.data(), //spread operator
            // key: doc.data().brand, 
          });
        }
        });
        setFord(getData);
        setTimeout(() => {
          setPending(false);
        }, 1300);
        setLoading(false);
      });
     return () => ref();
    }, [loading]);


    // jeep
    useEffect(() => {
      const getData = [];
      const ref = db
      .collection("newVehicle")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        if (doc.data().brand === "Jeep") {
          getData.push({
            ...doc.data(), //spread operator
            // key: doc.data().brand, 
          });
        }
        });
        setJeep(getData);
        setTimeout(() => {
          setPending(false);
        }, 1300);
        setLoading(false);
      });
     return () => ref();
    }, [loading]);

    // kia
    useEffect(() => {
      const getData = [];
      const ref = db
      .collection("newVehicle")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        if (doc.data().brand === "KIA") {
          getData.push({
            ...doc.data(), //spread operator
            // key: doc.data().brand, 
          });
        }
        });
        setKia(getData);
        setTimeout(() => {
          setPending(false);
        }, 1300);
        setLoading(false);
      });
     return () => ref();
    }, [loading]);

    // lamborghini
    useEffect(() => {
      const getData = [];
      const ref = db
      .collection("newVehicle")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        if (doc.data().brand === "Lamborghini") {
          getData.push({
            ...doc.data(), //spread operator
            // key: doc.data().brand, 
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


    // lr
    useEffect(() => {
      const getData = [];
      const ref = db
      .collection("newVehicle")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        if (doc.data().brand === "Land Rover") {
          getData.push({
            ...doc.data(), //spread operator
            // key: doc.data().brand, 
          });
        }
        });
        setLr(getData);
        setTimeout(() => {
          setPending(false);
        }, 1300);
        setLoading(false);
      });
     return () => ref();
    }, [loading]);

    // nissan
    useEffect(() => {
      const getData = [];
      const ref = db
      .collection("newVehicle")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        if (doc.data().brand === "Nissan") {
          getData.push({
            ...doc.data(), //spread operator
            // key: doc.data().brand, 
          });
        }
        });
        setNissan(getData);
        setTimeout(() => {
          setPending(false);
        }, 1300);
        setLoading(false);
      });
     return () => ref();
    }, [loading]);


    // porsche
    useEffect(() => {
      const getData = [];
      const ref = db
      .collection("newVehicle")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        if (doc.data().brand === "Porsche") {
          getData.push({
            ...doc.data(), //spread operator
            // key: doc.data().brand, 
          });
        }
        });
        setPorsche(getData);
        setTimeout(() => {
          setPending(false);
        }, 1300);
        setLoading(false);
      });
     return () => ref();
    }, [loading]);

    // maserati
    useEffect(() => {
      const getData = [];
      const ref = db
      .collection("newVehicle")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        if (doc.data().brand === "Maserati") {
          getData.push({
            ...doc.data(), //spread operator
            // key: doc.data().brand, 
          });
        }
        });
        setMaserati(getData);
        setTimeout(() => {
          setPending(false);
        }, 1300);
        setLoading(false);
      });
     return () => ref();
    }, [loading]);


    // subaru
    useEffect(() => {
      const getData = [];
      const ref = db
      .collection("newVehicle")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        if (doc.data().brand === "Subaru") {
          getData.push({
            ...doc.data(), //spread operator
            // key: doc.data().brand, 
          });
        }
        });
        setSubaru(getData);
        setTimeout(() => {
          setPending(false);
        }, 1300);
        setLoading(false);
      });
     return () => ref();
    }, [loading]);

    // vw
    useEffect(() => {
      const getData = [];
      const ref = db
      .collection("newVehicle")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        if (doc.data().brand === "VolksWagen") {
          getData.push({
            ...doc.data(), //spread operator
            // key: doc.data().brand, 
          });
        }
        });
        setVW(getData);
        setTimeout(() => {
          setPending(false);
        }, 1300);
        setLoading(false);
      });
     return () => ref();
    }, [loading]);


  
 
  // test purposes
    useEffect(() => {
      vw.forEach(vehicle => {
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
      <div>
        <h2>Signed in</h2>
        <button onClick={signOut}>Sign Out</button>
        <div className="imageGrid">
    { BMW && BMW.map(info => {
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
    { audi && audi.map(info => {
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
    { Merc && Merc.map(info => {
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
    { jeep && jeep.map(info => {
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
    { kia && kia.map(info => {
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
    { lr && lr.map(info => {
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
    { ferrari && ferrari.map(info => {
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
    { nissan && nissan.map(info => {
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
    { ford && ford.map(info => {
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
    { maserati && maserati.map(info => {
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
    { vw && vw.map(info => {
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
    {subaru && subaru.map(info => {
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
    {porsche && porsche.map(info => {
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
    {lamborghini && lamborghini.map(info => {
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
    
    
// not signed in
    return (
    <Container>
    <Masonry breakpointCols = {breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
    { BMW && BMW.map(info => {
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
    { audi && audi.map(info => {
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
    { porsche && porsche.map(info => {
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
    { Merc && Merc.map(info => {
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
    { jeep && jeep.map(info => {
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
    { kia && kia.map(info => {
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
    { lr && lr.map(info => {
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
    { maserati && maserati.map(info => {
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
    { subaru && subaru.map(info => {
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
    { nissan && nissan.map(info => {
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
    { ferrari && ferrari.map(info => {
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
    { vw && vw.map(info => {
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
    { ford && ford.map(info => {
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


 
export default Particularized;