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
    </Layout>
    </Switch>
    </Router>
    </ThemeProvider>
  );
  }
}

export default App;
