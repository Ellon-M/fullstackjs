
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import Layout from './components/Layout';
import SignUp from './authpages/SignUp';
import Login from './authpages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { Children, createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthProvider } from './components/AppContext';

const [loading, setLoading] = useState(true);



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#eeeeee'
    },
    secondary: {
      main: '#7b1fa2'
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 12
  },
  breakpoints: {
    values: {
      xs:  0,
      sm: 500,
      md: 700,
      lg: 1000,
      xl: 1920,
    }
  }
})


function App() {

  return (
    <ThemeProvider theme={ theme }>
      <AuthProvider>
    <Router>
      <Switch>
      <Route exact path="/signup">
        <SignUp/>
      </Route>
      <Route exact path="/login">
        <Login/>
      </Route>
      <Layout>
       <ProtectedRoute exact path="/">
         <Notes/>
        </ProtectedRoute>

       {/* <Route exact path="/">
          <Notes />
        </Route> */}
        <Route exact path="/create">
          <Create />
        </Route>
      </Layout>
      </Switch>
    </Router>
    </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
