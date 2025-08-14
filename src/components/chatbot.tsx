
"use client";

import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, User, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnimatePresence, motion } from 'framer-motion';
import { useChat } from '@/hooks/use-chat';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { Skeleton } from './ui/skeleton';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, loading, isBotTyping, sendMessage } = useChat();
  const [input, setInput] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isBotTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;
    const messageToSend = input;
    setInput('');
    await sendMessage(messageToSend);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-4 md:right-8 w-[calc(100%-2rem)] max-w-sm h-[70vh] max-h-[600px] z-50"
          >
            <div className="flex flex-col h-full bg-card border border-border/50 rounded-xl shadow-2xl shadow-primary/20">
              <header className="flex items-center justify-between p-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <Bot className="h-7 w-7 text-primary" />
                  <h3 className="text-lg font-semibold">Design Dile Assistant</h3>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
                  <X className="h-5 w-5" />
                </Button>
              </header>
              <ScrollArea className="flex-1" ref={scrollAreaRef}>
                <div className="p-4 space-y-6">
                   {loading && (
                      <div className="space-y-4">
                        <Skeleton className="h-10 w-3/4" />
                        <Skeleton className="h-10 w-1/2 ml-auto" />
                      </div>
                   )}
                   {!loading && messages.length === 0 && (
                     <div className="text-center py-10">
                        <Bot className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">Ask me anything about our services!</p>
                     </div>
                   )}
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        'flex items-end gap-2',
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                      )}
                    >
                      {message.sender === 'bot' && (
                        <Avatar className="h-8 w-8">
                          <AvatarFallback><Bot size={20}/></AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={cn(
                          'max-w-[80%] rounded-2xl px-4 py-2.5 text-sm',
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground rounded-br-none'
                            : 'bg-muted rounded-bl-none'
                        )}
                      >
                        {message.text}
                      </div>
                       {message.sender === 'user' && (
                        <Avatar className="h-8 w-8">
                          <AvatarFallback><User size={18}/></AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                  {isBotTyping && (
                    <div className="flex items-end gap-2 justify-start">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback><Bot size={20}/></AvatarFallback>
                        </Avatar>
                        <div className="max-w-[80%] rounded-2xl px-4 py-2.5 text-sm bg-muted rounded-bl-none">
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 bg-foreground/50 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="h-2 w-2 bg-foreground/50 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="h-2 w-2 bg-foreground/50 rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
              <form onSubmit={handleSendMessage} className="p-4 border-t border-border/50 flex items-center gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-muted border-none focus-visible:ring-primary"
                  autoComplete="off"
                  disabled={isBotTyping}
                />
                <Button type="submit" size="icon" disabled={!input.trim() || isBotTyping}>
                  {isBotTyping ? <Loader className="h-5 w-5 animate-spin"/> : <Send className="h-5 w-5" />}
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:right-8 h-16 w-16 rounded-full shadow-lg flex items-center justify-center z-50 animate-pulse-gold"
      >
        <AnimatePresence mode="wait">
            <motion.div
                key={isOpen ? 'x' : 'bot'}
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.2 }}
            >
                {isOpen ? <X className="h-8 w-8" /> : <Bot className="h-8 w-8" />}
            </motion.div>
        </AnimatePresence>
      </Button>
    </>
  );
}
