// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOl2K9KQ2veJ2dEkQGkWiSAJwYGuvhUGM",
  authDomain: "freelancer-dae13.firebaseapp.com",
  projectId: "freelancer-dae13",
  storageBucket: "freelancer-dae13.appspot.com",
  messagingSenderId: "935828435766",
  appId: "1:935828435766:web:daa930e0247dce01ee7997",
  measurementId: "G-X72C9VBXBM",
  databaseURL: "https://freelancer-dae13-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
