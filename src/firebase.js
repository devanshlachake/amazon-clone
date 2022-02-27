import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvvm0oRFKNUTMPGV5GCJ5vEe1MWbbR4u4",
  authDomain: "clone-a8a18.firebaseapp.com",
  projectId: "clone-a8a18",
  storageBucket: "clone-a8a18.appspot.com",
  messagingSenderId: "219043349463",
  appId: "1:219043349463:web:713ae41ee4b6beda2fc192",
  measurementId: "G-PWK791M2W8"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };