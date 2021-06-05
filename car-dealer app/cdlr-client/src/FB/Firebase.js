import firebase  from "firebase/app";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC0UEdZu0GEKJNGVSgx6GCtiqLvN7aJ2OE",
  authDomain: "car-dealer-40c1f.firebaseapp.com",
  projectId: "car-dealer-40c1f",
  storageBucket: "car-dealer-40c1f.appspot.com",
  messagingSenderId: "214666739958",
  appId: "1:214666739958:web:d776ffea887fbab8cf6cd7",
  measurementId: "G-X89488EDVJ"
};


firebase.initializeApp(firebaseConfig);


const storage = firebase.storage();
const database = firebase.database();

  export {storage,database, firebase as default};