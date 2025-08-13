import { useEffect, useState } from "react";
import { auth, addMessage, subscribeMessages, type ChatMessage } from "../lib/firebase";
import { signInAnonymously } from "firebase/auth";

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    signInAnonymously(auth);
    const unsub = subscribeMessages("demo-chat", setMessages);
    return () => unsub();
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;
    await addMessage("demo-chat", { role: "user", text: input });
    setInput("");
  };

  return (
    <main style={{ maxWidth: 600, margin: "0 auto", padding: 20, fontFamily: "sans-serif" }}>
      <h1>Chatbot</h1>
      <div style={{ border: "1px solid #ccc", padding: 10, minHeight: 200 }}>
        {messages.map((m, i) => (
          <div key={i}><b>{m.role}:</b> {m.text}</div>
        ))}
      </div>
      <div style={{ marginTop: 10 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "80%" }}
        />
        <button onClick={sendMessage} style={{ width: "18%" }}>Send</button>
      </div>
    </main>
  );
}