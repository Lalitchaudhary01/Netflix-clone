// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjOosYf-Y4p8KXj0NLOWgB1Jk79QxoS6I",
  authDomain: "netflixgpt-84e76.firebaseapp.com",
  projectId: "netflixgpt-84e76",
  storageBucket: "netflixgpt-84e76.appspot.com",
  messagingSenderId: "794467047125",
  appId: "1:794467047125:web:375f926e4285951d95b45c",
  measurementId: "G-XK72T777LB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
