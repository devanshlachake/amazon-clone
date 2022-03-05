import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSaCEunH76X9mQDo-NepPu1kMna3tuimQ",
  authDomain: "clone-20c87.firebaseapp.com",
  projectId: "clone-20c87",
  storageBucket: "clone-20c87.appspot.com",
  messagingSenderId: "320963326976",
  appId: "1:320963326976:web:3d42f74fb02ef56bff54e5"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };