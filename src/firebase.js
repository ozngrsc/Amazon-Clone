import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtZJKnDRT-Oe4Q2HKLQfjcq9XJTLGrHpM",
  authDomain: "amzn-clone-ozngrsc.firebaseapp.com",
  projectId: "amzn-clone-ozngrsc",
  storageBucket: "amzn-clone-ozngrsc.appspot.com",
  messagingSenderId: "464643870848",
  appId: "1:464643870848:web:ffb03b680efc77b356d665",
  measurementId: "G-390ZVGBXZP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
