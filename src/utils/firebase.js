// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSxE1VCkmX6PI0JLkIOW8PuTgPL6_2jXA",
  authDomain: "netflix-gpt-1c7f7.firebaseapp.com",
  projectId: "netflix-gpt-1c7f7",
  storageBucket: "netflix-gpt-1c7f7.appspot.com",
  messagingSenderId: "467466399609",
  appId: "1:467466399609:web:0f9b21c8d7bb5051a549a8",
  measurementId: "G-CKGSM777K0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
