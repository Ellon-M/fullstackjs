import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// an apollo client library that catches errors
import { onError } from '@apollo/client/link/error';
import NewVehicle from './Components/NewVehicle';
import AdminPage from './Components/Admin';
import NewVehicleDetails from './Components/newVehicleDetails';






function App() {
  return (
    <Router>
      <Switch>
    <Route exact path = "/admin">
       <AdminPage />
    </Route>
    <Route exact path = "/vehicles">
    <NewVehicle /> 
    </Route>
    <Route exact path = "/vehicles/:id">
       <NewVehicleDetails/>
    </Route>
    </Switch>
    </Router>
  );
}

export default App;
