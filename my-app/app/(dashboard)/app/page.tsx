'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User as UserIcon } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { useAuth } from '@/lib/auth-context';
import { insforge } from '@/lib/insforge';

export default function AppDashboard() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: `Environment initialized. Singularity protocols active. Welcome back, ${user?.name || 'User'}.` },
    { role: 'assistant', content: 'InsForge connection established. Awaiting directives.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await insforge.chatCompletion('gpt-4-turbo', [...messages, userMessage]);
      const assistantMessage = { 
        role: 'assistant' as const, 
        content: response.choices[0].message.content 
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error: Failed to route request via InsForge.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full p-6">
      
      <header className="mb-8">
        <h2 className="font-heading text-3xl font-bold text-white mb-2">AI Workspace</h2>
        <p className="text-white/60">Currently connected to <span className="text-[#B6E5ED] font-medium">GPT-4 Turbo</span> via InsForge</p>
      </header>

      <div ref={scrollRef} className="flex-1 overflow-y-auto mb-6 space-y-6 pr-4">
        
        {messages.map((msg, i) => (
          <div key={i} className="flex gap-4">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
              msg.role === 'user' ? "bg-white/10" : "bg-gradient-to-tr from-[#B6E5ED] to-[#9ebaff]"
            )}>
              {msg.role === 'user' ? (
                <UserIcon size={20} className="text-white/80" />
              ) : (
                <Bot size={20} className="text-black" />
              )}
            </div>
            <div className="flex-1">
              {msg.role === 'assistant' ? (
                <GlassCard className="p-4 inline-block max-w-[85%] relative overflow-hidden">
                  {isLoading && i === messages.length - 1 && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                  )}
                  <div className="text-white/90 leading-relaxed">
                    {msg.content}
                  </div>
                </GlassCard>
              ) : (
                <div className="pt-2">
                  <div className="text-white/90 leading-relaxed font-medium">
                    {user?.name || 'User'}
                  </div>
                  <div className="text-white/70 leading-relaxed mt-1">
                    {msg.content}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {isLoading && messages[messages.length - 1].role === 'user' && (
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#B6E5ED] to-[#9ebaff] flex items-center justify-center shrink-0">
              <Bot size={20} className="text-black" />
            </div>
            <div className="flex-1">
              <GlassCard className="p-4 inline-block max-w-[85%] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                <div className="flex gap-1 items-center h-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </GlassCard>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSend} className="relative mt-auto pt-4">
        <div className="glass-panel rounded-2xl flex items-center px-4 py-3 focus-within:glow-edge transition-all">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Send a message to Singularity..." 
            className="flex-1 bg-transparent border-none text-white focus:outline-none placeholder:text-white/40"
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="w-10 h-10 rounded-xl bg-[#B6E5ED]/10 text-[#B6E5ED] hover:bg-[#B6E5ED]/20 flex items-center justify-center transition-colors disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-center text-xs text-white/40 mt-3">Singularity may generate inaccurate info. Powered by InsForge.</p>
      </form>

    </div>
  );
}

// Helper for class names since I used 'cn' but didn't import it in previous context, 
// though it should be available via @/lib/utils if I import it.
import { cn } from '@/lib/utils';
