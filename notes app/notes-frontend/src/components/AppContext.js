import axios from "axios";
import { createContext, useState } from "react";
import { useHistory } from "react-router";



// export const AppContext = createContext();

// export const AppProvider = props => {
//    const [isAuth, setIsAuth] = useState(false);
//   return <AppContext.Provider value=  {[isAuth, setIsAuth]}>
//     { props.children }
//     </AppContext.Provider>
// }

export const AuthContext = createContext();
export const AuthProvider = props => { 
   return <AuthContext.Provider value =  {{
    isLoggedIn: false,
    onAuth(){
        axios({
            method: 'GET',
            url:"http://localhost:5500/checkauth/",
        }).then(
            res => {
                if (res.data.user) {
                    console.log(res.data.user);
                    sessionStorage.setItem('user',JSON.stringify(res.data.user))
                 }
                 else {
                     console.log('error');
                 }
            }
        )
    },
    authStatus(){
        return this.isLoggedIn;
    }
}}>
     { props.children }
     </AuthContext.Provider>
 }