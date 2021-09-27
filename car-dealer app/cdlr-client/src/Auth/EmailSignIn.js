import firebase from "firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const EmailSignIn = () => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
    const history = useHistory();

    var SignInWithGoogle = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then((re) => {
            console.log(re);
            history.goBack();
        })
        .catch((err) => {
            console.log(err);
        })
      }


    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((err) => {
            switch (err.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        })
    }

    const handleSignUp = () => {
        clearErrors();
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch((err) => {
            switch (err.code) {
                case "auth/invalid-email":
                case "auth/email-already-in-use":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
            }
        })
        console.log('user created');
    }

    const authListener = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              clearInputs();
              setUser(user);
            }
            else {
                setUser('');
            }
          })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        history.goBack();
    }

    useEffect(() => {
        authListener();
    }, [])

    return ( 
        <div>
         <form onSubmit={handleSubmit}>
             <label>Email</label>
             <input type="email" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
             <p className="errormsg">{emailError}</p>
             <br/>
             <label>Password</label>
             <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} 
             />
             <p className="errmsg">{passwordError}</p>
             <br/>
             <div>
             { hasAccount ? (
                 <>
                 <button onClick={handleLogin}>Sign In</button>
                 <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                 </>
             ) : (
                 <>
                <button onClick={handleSignUp}>Sign Up</button>
                <p>
                    Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
                    
                </p>
                </>
             )
             }
             </div>
         </form>
         <div>
         <button onClick={SignInWithGoogle}>Sign In with Google</button>
         </div>
        </div>
     );
}
 
export default EmailSignIn;