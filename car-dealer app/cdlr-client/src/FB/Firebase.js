import Firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC0UEdZu0GEKJNGVSgx6GCtiqLvN7aJ2OE",
  authDomain: "car-dealer-40c1f.firebaseapp.com",
  projectId: "car-dealer-40c1f",
  storageBucket: "car-dealer-40c1f.appspot.com",
  messagingSenderId: "214666739958",
  appId: "1:214666739958:web:d776ffea887fbab8cf6cd7",
  measurementId: "G-X89488EDVJ"
};


const firebase = Firebase.initializeApp(firebaseConfig);



const storage = Firebase.storage();
const db = firebase.firestore();



  export { storage, db, firebase as default};