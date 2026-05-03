import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { Cpu, Database, Sparkles } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/video/back-video.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlay gradient to ensure text readability while keeping it borderless */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#02000a]/50 to-[#02000a] pointer-events-none"></div>
      </div>

      <Header />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-32 pb-20">
        
        {/* Content Container positioned ~5% from bottom conceptually, but centered overall with push down */}
        <div className="flex-1 flex flex-col items-center justify-end w-full max-w-5xl mx-auto pb-12">
          
          <div className="text-center w-full max-w-4xl space-y-8 mb-20 mt-auto">
            <h1 className="font-heading text-6xl md:text-8xl font-black tracking-tight text-white drop-shadow-2xl">
              <span className="gradient-text">SINGULARITY</span>
              <br />
              WORKSPACE
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto drop-shadow-lg">
              The production-ready, multi-model AI operating interface designed for ultimate clarity and power.
            </p>

            {/* CTA positioned ~20% from top conceptually within the flow */}
            <div className="pt-8" style={{ transform: 'translate(-2vw, -3vh)' }}>
              <Link href="/app">
                <Button size="lg" className="text-lg font-bold px-10 py-6 glow-edge hover:scale-105 transition-transform">
                  INITIALIZE WORKSPACE
                </Button>
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full" id="features">
            <GlassCard glowOnHover className="flex flex-col items-center text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-[#B6E5ED]">
                <Cpu size={32} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-white">Multi-Model AI</h3>
              <p className="text-white/60">Switch seamlessly between top-tier AI models contextually without losing chat history.</p>
            </GlassCard>

            <GlassCard glowOnHover className="flex flex-col items-center text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-[#9ebaff]">
                <Database size={32} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-white">Knowledge Absorption</h3>
              <p className="text-white/60">Drag and drop files or input URLs to instantly extract, summarize, and integrate data.</p>
            </GlassCard>

            <GlassCard glowOnHover className="flex flex-col items-center text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-[#B6E5ED]">
                <Sparkles size={32} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-white">Content Generation</h3>
              <p className="text-white/60">Generate high-quality cinematic assets and content instantly through intelligent routing.</p>
            </GlassCard>
          </div>
          
        </div>
      </main>
    </div>
  );
}
