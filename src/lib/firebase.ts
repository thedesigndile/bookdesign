
import { initializeApp, getApps, getApp, type FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
 getFirestore,
 collection,
 addDoc,
 serverTimestamp,
 onSnapshot,
 query,
 orderBy,
 limit,
 type Firestore
} from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
 apiKey: "AIzaSyAi24WtFMZdyVl0X9gbYNF_0556q86lNqs", authDomain: "dile-book-design.firebaseapp.com", projectId: "dile-book-design", storageBucket: "dile-book-design.appspot.com", messagingSenderId: "420952182955", appId: "1:420952182955:web:a9bda10b641618a556cf8f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app as any); // Type assertion needed for now

// Chat schema: chats/{chatId}/messages/{messageId}
type ChatMessage = {
 role: "user" | "bot";
 text: string;
 createdAt: ReturnType<typeof serverTimestamp> | Date;
 uid?: string;
};

// Write a message to a chat
export async function addMessage(chatId: string, data: Omit<ChatMessage, "createdAt">) {
 const ref = collection(db, "chats", chatId, "messages");
 await addDoc(ref, { ...data, createdAt: serverTimestamp() });
}

export { app, auth, db, type ChatMessage };
