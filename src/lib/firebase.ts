
import { initializeApp, getApps, getApp, type FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyAi24WtFMZdyVl0X9gbYNF_0556q86lNqs",
  authDomain: "dile-book-design.firebaseapp.com",
  projectId: "dile-book-design",
  storageBucket: "dile-book-design.appspot.com",
  messagingSenderId: "420952182955",
  appId: "1:420952182955:web:a9bda10b641618a556cf8f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
