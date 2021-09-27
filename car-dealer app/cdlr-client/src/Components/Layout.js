import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { useHistory } from 'react-router';

const Layout = ({ children }) => {
    const history = useHistory();
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
           console.log(user.displayName);
           console.log(user.email);
           console.log(user.photoURL);
        }
      })


    return ( 
        <div>
            <nav>
                <Link to ="/signinemail">Sign In</Link>
            </nav>
            { children }
        </div>
     );
}
 
export default Layout;
