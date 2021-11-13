// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi3nNSEYrBlA4u56LAbQeIVCQ6CGGa7RM",
  authDomain: "susu-9b568.firebaseapp.com",
  projectId: "susu-9b568",
  storageBucket: "susu-9b568.appspot.com",
  messagingSenderId: "272073962389",
  appId: "1:272073962389:web:59c5da613bc6db4adffc9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;