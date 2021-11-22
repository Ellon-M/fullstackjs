import { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import  { db }  from '../FB/Firebase';
import emailjs from 'emailjs-com';
import order from './order';
import firebase from 'firebase';
import { useHistory } from 'react-router';
import { BarLoader, BounceLoader, BeatLoader, PuffLoader } from 'react-spinners';

const NewVehicleDetails = () => {

    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [pending, setPending] = useState(true);
    const [details, setDetails] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
    const { id } = useParams();
    const [signedInUser, setSignedInUser] = useState(false);


    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
           // user.displayName
           // user.email
           // user.photoURL
          return setSignedInUser(true);
        }
         setSignedInUser(false);
      })

      const signOut = () => {
        firebase.auth().signOut();
        history.push('/signedOut');
      }

    useEffect(() => {
        const ref = db
        .collection("newVehicle").get()
        .then((detail) => {
            
            const details = detail.docs.forEach(
                (doc) => {
                    if (doc.id === id) {
                        setDetails(doc.data());
                        setImageUrls(doc.data().url);
                        // setLoading(false);
                        setTimeout(() => {
                          setPending(false);
                        }, 1000)
                        // setPending(false);
                    }
                }
            )
            
        });
        // setPending(false);
        setLoading(false);
      }, [loading]);

      const form = useRef();


      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9ty834f', 'template_vcz77sz', form.current, 'user_oGF8GSFMGTubjg4SICu9n')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

        var orderCheckout = () => {
          if(signedInUser === true) {
            history.push('/vehicles/:id/order');
          }
          else {
          alert('Sign in to proceed with the order');
          }
      }

      if (signedInUser) {
        return ( 
            <div>
                 <h2>Signed in</h2>
                 <button onClick={signOut}>Sign Out</button>
                 <br/>
                
                 {imageUrls && imageUrls.map(path => {
                 return (  
                    <>
                     <img className="detailImgs" width="250px" height="auto" src={path} alt="firebase-img" />
                    </>
                 )
                 })
                }
                 
                 
                 <p>
                 {details.brandDesc} 
                 </p>
                 <p>
                 {details.color}
                 </p>
                 <p>
                 {details.topSpeed}
                 </p>
                 <p>
                 {details.transmission}
                 </p>
                 <p>
                 {details.fuel}
                 </p>
                 <p>
                 {details.year}   
                 </p>
                 <div className="formContainer">
                 <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="Name" name="name" required />
                    <input type="email" placeholder="Email Address" name="email" required/>
                    <input type="phone" placeholder="phone" name="phone"/>
                    <textarea cols="30" rows="2" placeholder="Your Message" name="message" required></textarea>
                    <br/>
                    <input type="submit" className="btnSubmitForm" value="Send Inquiry" required/>
                 </form>
                 <br/>
                  <button onClick = {orderCheckout}> Order Now </button>
                 </div>
            </div>
        )
      }

    return ( 
        <div>
          <div className="imageContainer" height="50%">
            {/* {pending && <PuffLoader loading/> } */}
             {imageUrls && imageUrls.map(path => {
             return (  
              <>
               {pending && <PuffLoader loading/> }
               <img className="detailImgs" width="250px" height="auto" src={path} alt="firebase-img" />
              </>
             )
             })}
             </div>
             <p>
             {details.brandDesc} 
             </p>
             <p>
             {details.color}
             </p>
             <p>
             {details.topSpeed}
             </p>
             <p>
             {details.transmission}
             </p>
             <p>
             {details.fuel}
             </p>
             <p>
             {details.year}   
             </p>
             <div className="formContainer">
             <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Name" name="name" required />
                <input type="email" placeholder="Email Address" name="email" required/>
                <input type="phone" placeholder="phone" name="phone"/>
                <textarea cols="30" rows="2" placeholder="Your Message" name="message" required></textarea>
                <br/>
                <input type="submit" className="btnSubmitForm" value="Send Inquiry" required/>
             </form>
             <br/>
              <button onClick = {orderCheckout}> Order Now </button>
             </div>
        </div>
     );
}
 
export default NewVehicleDetails;