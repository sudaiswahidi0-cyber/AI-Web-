'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth-context';

export function Header() {
  const { user, logout, openAuthModal } = useAuth();

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-6 mx-auto max-w-7xl">
      <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between glow-edge relative">
        <Link href="/" className="flex items-center gap-3 relative z-10">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#B6E5ED] to-[#9ebaff] flex items-center justify-center text-black font-bold font-heading">
            S
          </div>
          <span className="font-heading font-bold text-xl tracking-wider text-white">SINGULARITY</span>
        </Link>
        
        {/* Centered Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80 absolute left-1/2 -translate-x-1/2">
          <Link href="/app" className="hover:text-white transition-colors">Dashboard</Link>
          <Link href="/absorb" className="hover:text-white transition-colors">Absorb</Link>
          <Link href="/models" className="hover:text-white transition-colors">Models</Link>
        </nav>

        {/* Right Auth Buttons */}
        <div className="flex items-center gap-3 relative z-10">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-white/80 text-sm hidden md:block">Welcome, <span className="text-[#B6E5ED] font-medium">{user.name}</span></span>
              <Button size="sm" variant="ghost" onClick={logout}>
                Log Out
              </Button>
            </div>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => openAuthModal('signin')}>
                Sign In
              </Button>
              <Button size="sm" onClick={() => openAuthModal('signup')}>
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
