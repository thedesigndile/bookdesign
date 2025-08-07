
import { initializeApp, getApps, getApp, type FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyA_w8MRusF9roXOoPDNJflI-d4P7H7au8I",
  authDomain: "bookdesign-485c7.firebaseapp.com",
  projectId: "bookdesign-485c7",
  storageBucket: "bookdesign-485c7.firebasestorage.app",
  messagingSenderId: "534155987842",
  appId: "1:534155987842:web:e71a2cc0afed52b02add9b",
  measurementId: "G-956CMC2FTN"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
