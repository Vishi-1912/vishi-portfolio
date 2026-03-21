'use client';

import React, { useState, useEffect, useRef } from 'react';
import { BotIcon, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from "@/styles/chatbot.module.css";

interface Message {
  role: 'user' | 'bot';
  content: string;
  sources?: string[];
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Hi! I\'m Vishi\'s AI assistant. Ask me anything about my experience, skills, or projects!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // Initial bot message for streaming
    setMessages(prev => [...prev, { role: 'bot', content: '' }]);

    try {
      const response = await fetch(`http://localhost:5000/chat?message=${encodeURIComponent(userMessage)}`);
      
      if (!response.body) throw new Error('No response body');
      
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let finished = false;

      let currentEvent = 'token'; // Default to token
      while (!finished) {
        const { value, done } = await reader.read();
        finished = done;
        if (value) {
          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');
          
          lines.forEach(line => {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith('event: ')) {
              currentEvent = trimmedLine.slice(7).trim();
            } else if (trimmedLine.startsWith('data: ')) {
              try {
                const dataStr = trimmedLine.slice(6);
                const data = JSON.parse(dataStr);
                
                if (currentEvent === 'token') {
                  setMessages(prev => {
                    const last = prev[prev.length - 1];
                    if (last && last.role === 'bot') {
                      return [
                        ...prev.slice(0, -1),
                        { ...last, content: last.content + data }
                      ];
                    }
                    return prev;
                  });
                } else if (currentEvent === 'sources') {
                  setMessages(prev => {
                    const last = prev[prev.length - 1];
                    if (last && last.role === 'bot') {
                      return [
                        ...prev.slice(0, -1),
                        { ...last, sources: data }
                      ];
                    }
                    return prev;
                  });
                }
              } catch (e) {
                // Ignore parse errors for incomplete JSON
              }
            }
          });
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [
        ...prev.slice(0, -1),
        { role: 'bot', content: 'Sorry, I encountered an error. Please try again later.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={styles.fabIcon}
      >
        <BotIcon size={28} />
      </motion.button>

      {/* Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className={styles.backdrop}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={styles.drawer}
            >
              {/* Header */}
              <div className={styles.drawerHeader}>
                <div className={styles.headerInfo}>
                  <div className={styles.botIconWrapper}>
                    <Bot size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-tight">Vishi's AI Assistant</h3>
                    <p className="text-xs text-white/80">Online & Ready to help</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className={styles.closeButton}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Messages Area */}
              <div className={styles.messagesArea}>
                {messages.map((msg, idx) => {
                  const isUser = msg.role === 'user';
                  return (
                    <div
                      key={idx}
                      className={`${styles.messageRow} ${isUser ? styles.messageRowUser : styles.messageRowBot}`}
                    >
                      <div className={`${styles.messageContainer} ${isUser ? styles.messageContainerUser : ''}`}>
                        <div className={`${styles.avatar} ${isUser ? styles.avatarUser : styles.avatarBot}`}>
                          {isUser ? <User size={14} /> : <Bot size={14} />}
                        </div>
                        <div className={`${styles.messageContent} ${isUser ? styles.messageContentUser : styles.messageContentBot}`}>
                          {msg.content === '' && isLoading ? (
                            <div className="flex gap-1 py-1">
                              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                            </div>
                          ) : (
                            <div>{msg.content}</div>
                          )}
                          
                          {msg.sources && msg.sources.length > 0 && (
                            <div className={styles.sources}>
                              {msg.sources.map((s, i) => (
                                <span key={i} className={styles.source}>
                                  {s}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className={styles.inputArea}>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className={styles.inputField}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className={styles.submitButton}
                  >
                    {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                  </button>
                </div>
                <p className={styles.footerText}>
                  Powered by Vishi's Project Memory & Ollama
                </p>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
