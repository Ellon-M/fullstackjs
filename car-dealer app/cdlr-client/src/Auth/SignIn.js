import firebase from "firebase";
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';

const SignIn = () => {

    const history = useHistory();

    const handleHistory = () => {
        history.push('/');
    }
   

    return ( 
        <div className="signedInMessage">
           <h3 className="signedHeading">
               Signed In Successfully!
           </h3>
           <button className="backBtnSigned" onClick={handleHistory}>
                Back
           </button>
        </div>
     );
}
 
export default SignIn;