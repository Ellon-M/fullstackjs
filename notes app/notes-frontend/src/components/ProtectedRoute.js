import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import {Route, Redirect, useLocation, useHistory} from 'react-router-dom';
import { AuthContext } from './AppContext';


const ProtectedRoute
 = ({ component: Component, ...rest }) => {
    const authentication = useContext(AuthContext);
    const history = useHistory();
    const data = sessionStorage.getItem('user');
    console.log(data);
    return ( 
       <Route {...rest} render={({location}) => {
        if (data !== null) {
        return <Component />  
       }
        else {
            return <Redirect to = {{pathname: '/login', state: {from: location}}}/>
        }
       }
       }
       />
     );
}
export default ProtectedRoute
;