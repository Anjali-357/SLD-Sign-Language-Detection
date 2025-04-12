import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDa8dkE15-yhIho2RZccnBugYT3hPpXvdU",
  authDomain: "sign-language-detection-9febf.firebaseapp.com",
  projectId: "sign-language-detection-9febf",
  storageBucket: "sign-language-detection-9febf.firebasestorage.app",
  messagingSenderId: "30111873599",
  appId: "1:30111873599:web:73cdf436f558755614168a",
  measurementId: "G-PKQNV1888E"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db};

