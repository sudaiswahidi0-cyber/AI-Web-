import React from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { User, Bell, Shield, Key } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="flex flex-col h-full p-6 max-w-4xl mx-auto">
      
      <header className="mb-10 mt-8">
        <h2 className="font-heading text-4xl font-bold text-white mb-4">System <span className="gradient-text">Settings</span></h2>
        <p className="text-white/60">Manage your Singularity profile, preferences, and InsForge connections.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Settings Navigation */}
        <div className="md:col-span-1 space-y-2">
          <button className="w-full text-left px-4 py-3 rounded-xl bg-white/10 text-white font-medium flex items-center gap-3">
            <User size={18} className="text-[#B6E5ED]" />
            Profile
          </button>
          <button className="w-full text-left px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 font-medium flex items-center gap-3 transition-colors">
            <Key size={18} />
            API Keys
          </button>
          <button className="w-full text-left px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 font-medium flex items-center gap-3 transition-colors">
            <Bell size={18} />
            Notifications
          </button>
          <button className="w-full text-left px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 font-medium flex items-center gap-3 transition-colors">
            <Shield size={18} />
            Security
          </button>
        </div>

        {/* Settings Content */}
        <div className="md:col-span-3 space-y-6">
          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-white mb-6">Profile Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#B6E5ED] to-[#9ebaff] flex items-center justify-center text-black font-bold text-3xl font-heading">
                  A
                </div>
                <div>
                  <Button variant="outline" size="sm">Change Avatar</Button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">Display Name</label>
                  <input 
                    type="text" 
                    defaultValue="Admin User" 
                    className="w-full glass-panel border-none rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B6E5ED]/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    defaultValue="admin@singularity.ai" 
                    disabled
                    className="w-full glass-panel border-none rounded-xl px-4 py-3 text-white/50 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-white mb-6">Appearance</h3>
            
            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <div>
                <h4 className="text-white font-medium">Cinematic Glow</h4>
                <p className="text-sm text-white/50">Enable dynamic background glows and micro-animations.</p>
              </div>
              <div className="w-12 h-6 rounded-full bg-[#B6E5ED]/20 relative cursor-pointer glow-edge">
                <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-[#B6E5ED] shadow-[0_0_10px_#B6E5ED]"></div>
              </div>
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <h4 className="text-white font-medium">Stream AI Responses</h4>
                <p className="text-sm text-white/50">Show text generation character by character.</p>
              </div>
              <div className="w-12 h-6 rounded-full bg-[#B6E5ED]/20 relative cursor-pointer glow-edge">
                <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-[#B6E5ED] shadow-[0_0_10px_#B6E5ED]"></div>
              </div>
            </div>
          </GlassCard>
        </div>
        
      </div>
    </div>
  );
}
