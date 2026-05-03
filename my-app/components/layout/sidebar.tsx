import React from 'react';
import Link from 'next/link';
import { MessageSquare, Download, Cpu, Settings, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Sidebar({ className }: { className?: string }) {
  return (
    <aside className={cn("w-64 h-screen border-r border-white/5 glass-panel flex flex-col p-4", className)}>
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#B6E5ED] to-[#9ebaff] flex items-center justify-center text-black font-bold font-heading">
          S
        </div>
        <h1 className="font-heading font-bold text-xl tracking-wider gradient-text">SINGULARITY</h1>
      </div>

      <nav className="flex-1 space-y-2">
        <NavItem href="/app" icon={<MessageSquare size={18} />} label="AI Chat" />
        <NavItem href="/absorb" icon={<Download size={18} />} label="Absorb" />
        <NavItem href="/models" icon={<Cpu size={18} />} label="Models" />
      </nav>

      <div className="mt-auto space-y-2">
        <div className="glass-panel p-4 rounded-xl mb-4 text-sm">
          <div className="flex items-center gap-2 text-[#B6E5ED] mb-1">
            <Zap size={14} />
            <span className="font-medium">Active Model</span>
          </div>
          <div className="text-white/60">GPT-4 Turbo</div>
        </div>
        <NavItem href="/settings" icon={<Settings size={18} />} label="Settings" />
      </div>
    </aside>
  );
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors group">
      <span className="group-hover:text-[#B6E5ED] transition-colors">{icon}</span>
      <span className="font-medium">{label}</span>
    </Link>
  );
}
