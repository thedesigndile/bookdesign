
"use client";

import { useState, useEffect, useCallback } from 'react';
import {
  onAuthStateChanged,
  signInAnonymously,
  type User,
} from 'firebase/auth';
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  where,
  limit,
  Timestamp,
} from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { chat } from '@/ai/flows/chat-flow';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  createdAt: Timestamp;
  uid: string;
}

export const useChat = () => {
  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [isBotTyping, setIsBotTyping] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        try {
          const userCredential = await signInAnonymously(auth);
          setUser(userCredential.user);
        } catch (error) {
          console.error('Error signing in anonymously:', error);
          setLoading(false);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    setLoading(true);
    const messagesRef = collection(db, 'messages');
    const q = query(
      messagesRef,
      where('uid', '==', user.uid),
      orderBy('createdAt', 'asc'),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Message[];
      setMessages(fetchedMessages);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching messages:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const sendMessage = async (text: string) => {
    if (!user || !text.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(), // Temporary ID
      text,
      sender: 'user',
      createdAt: Timestamp.now(),
      uid: user.uid,
    };
    
    // Add user message to state immediately for better UX
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setIsBotTyping(true);

    try {
      // Save user message to Firestore
      await addDoc(collection(db, 'messages'), {
        text,
        sender: 'user',
        createdAt: serverTimestamp(),
        uid: user.uid,
      });

      // Prepare data for AI
      const history = messages.map(m => ({
        role: m.sender as 'user' | 'assistant', // Cast sender to role
        text: m.text
      }));

      // Get AI response
      const response = await chat({
        history: history,
        message: text,
      });

      // Save bot message to Firestore
      await addDoc(collection(db, 'messages'), {
        text: response,
        sender: 'bot',
        createdAt: serverTimestamp(),
        uid: user.uid,
      });

    } catch (error) {
      console.error('Error sending message or getting AI response:', error);
      // Optionally add an error message to the chat
      await addDoc(collection(db, 'messages'), {
        text: "Sorry, I'm having trouble connecting. Please try again later.",
        sender: 'bot',
        createdAt: serverTimestamp(),
        uid: user.uid,
      });
    } finally {
      setIsBotTyping(false);
    }
  };

  return { messages, loading, isBotTyping, sendMessage };
};
