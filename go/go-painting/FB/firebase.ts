// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBDDT_CuKxgIjSdWLdQFZtP-ZuoAkLn3Ds",
  authDomain: "go-painting-app.firebaseapp.com",
  projectId: "go-painting-app",
  storageBucket: "go-painting-app.appspot.com",
  messagingSenderId: "797381457547",
  appId: "1:797381457547:web:40a1a276984a6c2ba9868e",
  measurementId: "G-3XK1380P9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);