import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowOnHover?: boolean;
}

export function GlassCard({ className, children, glowOnHover = false, ...props }: GlassCardProps) {
  return (
    <div 
      className={cn(
        "glass-panel rounded-2xl p-6 transition-all duration-300",
        glowOnHover && "hover:glow-edge",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
