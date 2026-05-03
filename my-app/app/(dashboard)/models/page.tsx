import React from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { Zap, BrainCircuit, Code, ShieldCheck } from 'lucide-react';

export default function ModelsPage() {
  const models = [
    {
      id: "gpt-4-turbo",
      name: "GPT-4 Turbo",
      provider: "OpenAI",
      description: "Highest capability model for complex reasoning and coding tasks.",
      icon: <BrainCircuit size={24} />,
      color: "text-[#B6E5ED]",
      bgColor: "bg-[#B6E5ED]/10",
      speed: 85,
      cost: "$10 / 1M tokens",
      active: true
    },
    {
      id: "claude-3-opus",
      name: "Claude 3 Opus",
      provider: "Anthropic",
      description: "Exceptional at writing, analysis, and processing large context windows.",
      icon: <Code size={24} />,
      color: "text-[#9ebaff]",
      bgColor: "bg-[#9ebaff]/10",
      speed: 75,
      cost: "$15 / 1M tokens",
      active: false
    },
    {
      id: "llama-3-70b",
      name: "Llama 3 70B",
      provider: "Meta",
      description: "Blazing fast open-source model perfect for general tasks and chatting.",
      icon: <Zap size={24} />,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      speed: 98,
      cost: "$0.90 / 1M tokens",
      active: false
    }
  ];

  return (
    <div className="flex flex-col h-full p-6 max-w-5xl mx-auto">
      
      <header className="mb-10 mt-8">
        <h2 className="font-heading text-4xl font-bold text-white mb-4">Neural <span className="gradient-text">Models</span></h2>
        <p className="text-white/60">
          Select the cognitive engine driving your workspace. Routed securely through InsForge.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {models.map((model) => (
          <GlassCard 
            key={model.id} 
            glowOnHover 
            className={`relative cursor-pointer transition-all ${model.active ? 'border-[#B6E5ED]/50 glow-edge active' : ''}`}
          >
            {model.active && (
              <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-bold text-[#B6E5ED]">
                <span className="w-2 h-2 rounded-full bg-[#B6E5ED] animate-pulse"></span>
                ACTIVE
              </div>
            )}
            
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${model.bgColor} ${model.color}`}>
              {model.icon}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-1">{model.name}</h3>
            <p className="text-xs text-white/40 mb-4 uppercase tracking-wider">{model.provider}</p>
            
            <p className="text-sm text-white/70 mb-8 min-h-[60px]">
              {model.description}
            </p>
            
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/50">Speed</span>
                <div className="flex-1 ml-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#B6E5ED] to-[#9ebaff]" style={{ width: `${model.speed}%` }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/50">Est. Cost</span>
                <span className="text-white font-medium">{model.cost}</span>
              </div>
            </div>
            
          </GlassCard>
        ))}
      </div>

      <div className="mt-12 glass-panel p-6 rounded-2xl flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
          <ShieldCheck size={24} className="text-green-400" />
        </div>
        <div>
          <h4 className="text-white font-bold mb-1">Enterprise Grade Security</h4>
          <p className="text-sm text-white/60">All model interactions are routed through InsForge MCP, ensuring zero data retention and SOC2 compliance.</p>
        </div>
      </div>

    </div>
  );
}
