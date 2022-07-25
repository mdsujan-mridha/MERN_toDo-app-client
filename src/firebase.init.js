// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvgnM3yhbxe0bF42hhwW7BO7H2WcO31sM",
  authDomain: "addyourtask.firebaseapp.com",
  projectId: "addyourtask",
  storageBucket: "addyourtask.appspot.com",
  messagingSenderId: "336620883700",
  appId: "1:336620883700:web:af0e2fbe9fca924e9f18a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;