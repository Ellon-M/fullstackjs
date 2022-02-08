// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDDT_CuKxgIjSdWLdQFZtP-ZuoAkLn3Ds",
  authDomain: "go-painting-app.firebaseapp.com",
  projectId: "go-painting-app",
  storageBucket: "go-painting-app.appspot.com",
  messagingSenderId: "797381457547",
  appId: "1:797381457547:web:cf9f2d88d9fc8c2da9868e",
  measurementId: "G-HN4GJFJ0DQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);