import {getFirestore} from 'firebase/firestore'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuVL11i88-aFuwkpxQimLJ6rmqw2gIj48",
  authDomain: "blog-a95e0.firebaseapp.com",
  projectId: "blog-a95e0",
  storageBucket: "blog-a95e0.appspot.com",
  messagingSenderId: "1078371608640",
  appId: "1:1078371608640:web:16737aa4fa9cda837997a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)
