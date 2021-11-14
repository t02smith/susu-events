// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjvYU95Gq0WC9WTUsU92Y4bpa-KiCL57o",
  authDomain: "susu-events.firebaseapp.com",
  projectId: "susu-events",
  storageBucket: "susu-events.appspot.com",
  messagingSenderId: "1057902566332",
  appId: "1:1057902566332:web:a73d5f16053334c345e9b9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;