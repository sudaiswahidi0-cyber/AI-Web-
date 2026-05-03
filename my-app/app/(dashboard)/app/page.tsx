import React from 'react';
import { Send, Bot, User } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';

export default function AppDashboard() {
  return (
    <div className="flex flex-col h-full p-6">
      
      <header className="mb-8">
        <h2 className="font-heading text-3xl font-bold text-white mb-2">AI Workspace</h2>
        <p className="text-white/60">Currently connected to <span className="text-[#B6E5ED] font-medium">GPT-4 Turbo</span> via InsForge</p>
      </header>

      <div className="flex-1 overflow-y-auto mb-6 space-y-6 pr-4">
        
        {/* Mock Chat Messages */}
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <User size={20} className="text-white/80" />
          </div>
          <div className="flex-1 pt-2">
            <div className="text-white/90 leading-relaxed">
              Initialize the Singularity environment.
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#B6E5ED] to-[#9ebaff] flex items-center justify-center shrink-0">
            <Bot size={20} className="text-black" />
          </div>
          <div className="flex-1">
            <GlassCard className="p-4 inline-block max-w-[85%] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
              <div className="text-white/90 leading-relaxed space-y-3">
                <p>Environment initialized. Singularity protocols active.</p>
                <p>InsForge connection established. Awaiting directives.</p>
              </div>
            </GlassCard>
          </div>
        </div>

      </div>

      <div className="relative mt-auto pt-4">
        <div className="glass-panel rounded-2xl flex items-center px-4 py-3 focus-within:glow-edge transition-all">
          <input 
            type="text" 
            placeholder="Send a message to Singularity..." 
            className="flex-1 bg-transparent border-none text-white focus:outline-none placeholder:text-white/40"
          />
          <button className="w-10 h-10 rounded-xl bg-[#B6E5ED]/10 text-[#B6E5ED] hover:bg-[#B6E5ED]/20 flex items-center justify-center transition-colors">
            <Send size={18} />
          </button>
        </div>
        <p className="text-center text-xs text-white/40 mt-3">Singularity may generate inaccurate info. Powered by InsForge.</p>
      </div>

    </div>
  );
}
