import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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






function App() {

  const [isUserSignedIn, setIsUserSignedIn] = useState(true);
  const [admin, setAdmin] = useState(true);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return setIsUserSignedIn(true);
    }
    setIsUserSignedIn(false);
  })

  // if(admin) {
  //   return (
  //     <Router>
  //     <Switch>
  //     <Route exact path = "/admin">
  //     <AdminPage />
  //     </Route>
  //     </Switch>
  //     </Router>
  //   )
  // }

  if(isUserSignedIn === true) {
    return(
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
      </Switch>
      </Router>
    )
}

else {
  return (
    <Router>
      <Switch>
    <Route exact path = "/signinemail">
    <EmailSignIn />
    </Route>
    <Route exact path = "/signin">
    <SignIn />
    </Route>
        <Layout>
    <Route exact path = "/signedout">
    <SignedOut />
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
  );
  }
}

export default App;
