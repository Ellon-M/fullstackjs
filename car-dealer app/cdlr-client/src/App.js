import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core'
import { useEffect } from 'react';

import NewVehicle from './Components/NewVehicle';
import AdminPage from './Components/Admin';
import NewVehicleDetails from './Components/newVehicleDetails';
import Order from './Components/order';
import SignIn from './Auth/SignIn';
import { useState } from 'react';
import firebase from 'firebase';
import SignedOut from './Auth/signedOut';
import Layout from './Components/Layout';
import EmailSignIn from './Auth/EmailSignIn';
import Home from './home';
import Loader from './Components/loader';
import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion';
import Models from './Components/models';
import Tests from './tests';
import Particularized from './Components/particularized';
import Audi from './Particularized/audi';
import BMW from './Particularized/bmw';
import Merc from './Particularized/merc';
import Ford from './Particularized/ford';
import Ferrari from './Particularized/ferrari';
import Jeep from './Particularized/jeep';
import Lamborghini from './Particularized/lamborghini';
import Lr from './Particularized/lr';
import Maserati from './Particularized/maserati';
import Nissan from './Particularized/nissan';
import Porsche from './Particularized/porsche';
import VW from './Particularized/vw';
import Subaru from './Particularized/subaru';
import Mileage from './Components/mileage';
import Kmph from './Components/kmph';
import Deals from './Components/deals';

const theme = createTheme({
    breakpoints: {
      values: {
        xs:  0,
        sm: 500,
        md: 700,
        lg: 1500,
        xl: 1920,
      }
    },
    typography: {
      fontFamily: "Poppins", 
    }
})

function App() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
       ? document.querySelector("body").classList.add("loading")
       : document.querySelector("body").classList.remove("loading");
  }, [loading]);


  const [isUserSignedIn, setIsUserSignedIn] = useState(true);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return setIsUserSignedIn(true);
    }
    setIsUserSignedIn(false);
  })



  if(isUserSignedIn) {
    return(
      <ThemeProvider theme= { theme }>
      <Router>
      <Switch>
      <Route exact path = "/vehicles/:id/order">
      <Order />
      </Route>
      <Route exact path = "/vehicles">
    <NewVehicle /> 
    </Route>
    <Route exact path = "/vehicles/:id">
       <NewVehicleDetails/>
    </Route>
    <Route exact path = "/">
      <Home setLoading={setLoading} />
    </Route>
      </Switch>
      </Router>
      </ThemeProvider>
    )
}

else {
  return (
    <ThemeProvider theme= { theme }>
    <Router>
      <Switch>
    <Route exact path = "/signinemail">
    <EmailSignIn />
    </Route>
    <Route exact path = "/signin">
    <SignIn />
    </Route>
    <Route exact path = "/admin">
    <AdminPage />
    </Route>
    <Route exact path = "/">
    <AnimateSharedLayout type="crossfade">
    <AnimatePresence>
      {loading ? (
        <motion.div key='loader'>
           <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
        <Layout>
        <Home/>
        </Layout>
        </>
      )
      }
      </AnimatePresence>
      </AnimateSharedLayout>
    </Route>
    <Layout>
    <Route exact path = "/signedout">
    <SignedOut />
    </Route>

    <Route exact path = "/tests">
    <Tests/>
    </Route>
    <Route exact path = "/vehicles">
    <NewVehicle /> 
    </Route>
    <Route exact path = "/vehicles/:id">
       <NewVehicleDetails/>
    </Route>
    <Route exact path = "/vehicles/particular/BMW">
       <BMW/>
    </Route>
    <Route exact path = "/vehicles/particular/Mercedes">
       <Merc/>
    </Route>
    <Route exact path = "/vehicles/particular/Audi">
       <Audi/>
    </Route>
    <Route exact path = "/vehicles/particular/Ferrari">
       <Ferrari/>
    </Route>
    <Route exact path = "/vehicles/particular/Ford">
       <Ford/>
    </Route>
    <Route exact path = "/vehicles/particular/Nissan">
       <Nissan/>
    </Route>
    <Route exact path = "/vehicles/particular/LandRover">
       <Lr/>
    </Route>
    <Route exact path = "/vehicles/particular/Jeep">
       <Jeep/>
    </Route>
    <Route exact path = "/vehicles/particular/Subaru">
       <Subaru/>
    </Route>
    <Route exact path = "/vehicles/particular/Lamborghini">
       <Lamborghini/>
    </Route>
    <Route exact path = "/vehicles/particular/Porsche">
       <Porsche/>
    </Route>
    <Route exact path = "/vehicles/particular/Maserati">
       <Maserati/>
    </Route>
    <Route exact path = "/vehicles/particular/VolksWagen">
       <VW/>
    </Route>
    <Route exact path = "/speed">
       <Kmph/>
    </Route>
    <Route exact path = "/mileage">
       <Mileage/>
    </Route>
    <Route exact path = "/deals">
       <Deals/>
    </Route>

    </Layout>
    </Switch>
    </Router>
    </ThemeProvider>
  );
  }
}

export default App;

