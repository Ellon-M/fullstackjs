import firebase from "firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const EmailSignIn = () => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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
        .then((user) => {
            history.push('/signedin');
        })
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
        if (confirmPassword === password) {
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
        }
        else {
            setPasswordError('Passwords do not match');
        }
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
        // history.goBack();
    }

    useEffect(() => {
        authListener();
    }, [])

    return ( 
        <div className="signUpContainer">
            <div className="sideSignUp">

            </div>
            <div className="signUpInner">
            <h3 className="signUpHeading">
            { hasAccount ? (
                <span>
                Sign In
                </span>
            ) : (
                <span>Sign Up</span>
                )}</h3>
         <form className="signUpForm" onSubmit={handleSubmit}>
             <label className="signUpLabels">Email</label>
             <input className="inputSignUp" type="email" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
             <p className="errormsg">{emailError}</p>
             <br/>
             <label className="signUpLabels">Password</label>
             <input className="inputSignUp" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} 
             />
             <p className="errormsg">{passwordError}</p>
             <br/>
             <div>
             { hasAccount ? (
                 <>
                 <button className="inputSignUpBtn" onClick={handleLogin}>Sign In</button>

                 <p>Don't have an account? <span className="switchLink" onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                 </>
             ) : (
                 <>
                 <label>Confirm Password</label>
             <input className="inputSignUp" type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} 
             />
             <p className="errmsg">{passwordError}</p>
             <br/>
                <button className="inputSignUpBtn" onClick={handleSignUp}>Sign Up</button>
                <p>
                    Have an account? <span className="switchLink" onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
                    
                </p>
                </>
             )
             }
             </div>
         </form>
         <button className="bottomBtn" onClick={SignInWithGoogle}>Sign In with Google</button>
         </div>
         <div>
         </div>
        </div>
     );
}
 
export default EmailSignIn;