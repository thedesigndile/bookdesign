
"use client";

import { useState, useEffect, useCallback } from 'react';
import {
  getAuth,
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

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  createdAt: Timestamp;
  uid: string;
}

const BOT_RESPONSES: { keywords: string[]; response: string }[] = [
    { keywords: ['hello', 'hi', 'hey'], response: "Hello! How can I help you with your book design needs today?" },
    { keywords: ['services', 'offer'], response: "We offer Cover Design, Typography & Layout, Illustration & Art, and Full Jacket Design. Which service are you interested in?" },
    { keywords: ['pricing', 'cost', 'price'], response: "Our pricing varies depending on the project scope. The best way to get a quote is to fill out our contact form with your project details!" },
    { keywords: ['contact', 'talk', 'email'], response: "You can reach us by filling out the contact form on our website. We typically respond within 24 hours." },
    { keywords: ['portfolio', 'work', 'examples'], response: "You can see our work on the portfolio page. We've designed for many happy authors!" },
    { keywords: ['help', 'support'], response: "I'm here to help. What do you need assistance with?" },
    { keywords: ['bye', 'thanks', 'thank you'], response: "You're welcome! Feel free to reach out if you have more questions. Have a great day!" },
];

export const useChat = () => {
  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

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
    if (!user) return;

    try {
      await addDoc(collection(db, 'messages'), {
        text,
        sender: 'user',
        createdAt: serverTimestamp(),
        uid: user.uid,
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  
  const sendBotMessage = useCallback(async (text: string) => {
    if (!user) return;
    try {
      await addDoc(collection(db, 'messages'), {
        text,
        sender: 'bot',
        createdAt: serverTimestamp(),
        uid: user.uid,
      });
    } catch (error) {
      console.error('Error sending bot message:', error);
    }
  }, [user]);


  const getBotResponse = useCallback((userMessage: string) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    for (const rule of BOT_RESPONSES) {
        if (rule.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
            sendBotMessage(rule.response);
            return;
        }
    }
    
    // Default response
    sendBotMessage("I'm not sure how to answer that. Can you try rephrasing? You can ask me about our services, pricing, or portfolio.");
  }, [sendBotMessage]);

  return { messages, loading, sendMessage, getBotResponse };
};
