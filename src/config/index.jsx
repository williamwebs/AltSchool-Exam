// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  onAuthStateChanged,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyfEiNP5rsX68cpDw9IFUshK-i1vmkRA4",
  authDomain: "randy-users.firebaseapp.com",
  projectId: "randy-users",
  storageBucket: "randy-users.appspot.com",
  messagingSenderId: "840630571958",
  appId: "1:840630571958:web:cb6089a5a473d51d8aa717",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Setup auth provder
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {
  app,
  provider,
  auth,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged
};
