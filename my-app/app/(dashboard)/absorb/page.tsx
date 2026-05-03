import React from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { UploadCloud, Link as LinkIcon, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AbsorbPage() {
  return (
    <div className="flex flex-col h-full p-6 max-w-5xl mx-auto">
      
      <header className="mb-10 text-center mt-8">
        <h2 className="font-heading text-4xl font-bold text-white mb-4">Knowledge <span className="gradient-text">Absorption</span></h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Feed Singularity with external data. Upload documents or provide URLs to instantly extract, summarize, and persist knowledge to your InsForge database.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* File Upload Area */}
        <GlassCard className="flex flex-col items-center justify-center p-12 border-dashed border-white/20 hover:border-[#B6E5ED]/50 transition-colors cursor-pointer group">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#B6E5ED]/10 transition-colors">
            <UploadCloud size={32} className="text-white/60 group-hover:text-[#B6E5ED] transition-colors" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Drag & Drop Files</h3>
          <p className="text-white/50 text-center text-sm mb-6">Supports PDF, TXT, CSV, and Markdown up to 50MB</p>
          <Button variant="outline" size="sm">Browse Files</Button>
        </GlassCard>

        {/* URL Input Area */}
        <GlassCard className="flex flex-col justify-center p-8">
          <div className="flex items-center gap-3 mb-6">
            <LinkIcon className="text-[#9ebaff]" size={24} />
            <h3 className="text-lg font-bold text-white">Absorb from URL</h3>
          </div>
          <p className="text-white/50 text-sm mb-6">Provide a link to an article, documentation, or repository.</p>
          
          <div className="space-y-4">
            <div className="glass-panel rounded-xl flex items-center px-4 py-3 focus-within:glow-edge transition-all">
              <input 
                type="url" 
                placeholder="https://..." 
                className="flex-1 bg-transparent border-none text-white focus:outline-none placeholder:text-white/40"
              />
            </div>
            <Button className="w-full">Absorb URL</Button>
          </div>
        </GlassCard>
      </div>

      {/* Results / History */}
      <div>
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <FileText size={20} className="text-[#B6E5ED]" />
          Recent Absorptions
        </h3>
        
        <div className="space-y-4">
          <GlassCard glowOnHover className="p-5 flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#9ebaff]/10 flex items-center justify-center">
                <LinkIcon size={18} className="text-[#9ebaff]" />
              </div>
              <div>
                <h4 className="text-white font-medium">InsForge API Documentation</h4>
                <p className="text-xs text-white/50">Absorbed 2 hours ago • 45 pages parsed</p>
              </div>
            </div>
            <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
              Ready
            </div>
          </GlassCard>

          <GlassCard glowOnHover className="p-5 flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#B6E5ED]/10 flex items-center justify-center">
                <FileText size={18} className="text-[#B6E5ED]" />
              </div>
              <div>
                <h4 className="text-white font-medium">Q3_Financial_Report.pdf</h4>
                <p className="text-xs text-white/50">Absorbed yesterday • 12 pages parsed</p>
              </div>
            </div>
            <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
              Ready
            </div>
          </GlassCard>
        </div>
      </div>

    </div>
  );
}
