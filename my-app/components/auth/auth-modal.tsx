'use client';

import React, { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { insforge } from '@/lib/insforge';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { X, Mail, Lock, User as UserIcon, ShieldCheck } from 'lucide-react';

export function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, authView, setAuthView, setUser, pendingEmail, setPendingEmail } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isAuthModalOpen) return null;

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await insforge.signUp(name, email, password);
      setPendingEmail(email);
      setAuthView('verify');
    } catch (err: any) {
      setError(err.message || 'An error occurred during sign up.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const user = await insforge.signIn(email, password);
      setUser(user);
      closeAuthModal();
    } catch (err: any) {
      setError(err.message || 'Invalid email or password.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pendingEmail) return;
    setIsLoading(true);
    setError('');
    try {
      const user = await insforge.verifyEmail(pendingEmail, code);
      setUser(user);
      closeAuthModal();
    } catch (err: any) {
      setError(err.message || 'Invalid verification code.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <GlassCard className="w-full max-w-md relative p-8 animate-in zoom-in-95 duration-300 border-[#B6E5ED]/20 shadow-[0_0_50px_rgba(182,229,237,0.1)]">
        
        <button 
          onClick={closeAuthModal}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {authView === 'signin' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl font-bold text-white mb-2">Welcome Back</h2>
              <p className="text-white/60 text-sm">Enter your credentials to access the workspace.</p>
            </div>
            
            <form onSubmit={handleSignIn} className="space-y-4">
              {error && <p className="text-red-400 text-sm text-center">{error}</p>}
              
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B6E5ED]/50 transition-all placeholder:text-white/30"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input 
                  type="password" 
                  placeholder="Password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B6E5ED]/50 transition-all placeholder:text-white/30"
                />
              </div>
              
              <Button className="w-full mt-6" type="submit" disabled={isLoading}>
                {isLoading ? 'Authenticating...' : 'Sign In'}
              </Button>
            </form>

            <p className="text-center text-sm text-white/50 mt-6">
              Don't have an account?{' '}
              <button onClick={() => setAuthView('signup')} className="text-[#B6E5ED] hover:text-[#9ebaff] transition-colors font-medium">
                Sign Up
              </button>
            </p>
          </div>
        )}

        {authView === 'signup' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl font-bold text-white mb-2">Initialize Account</h2>
              <p className="text-white/60 text-sm">Join the Singularity network.</p>
            </div>
            
            <form onSubmit={handleSignUp} className="space-y-4">
              {error && <p className="text-red-400 text-sm text-center">{error}</p>}

              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B6E5ED]/50 transition-all placeholder:text-white/30"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B6E5ED]/50 transition-all placeholder:text-white/30"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input 
                  type="password" 
                  placeholder="Password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B6E5ED]/50 transition-all placeholder:text-white/30"
                />
              </div>
              
              <Button className="w-full mt-6" type="submit" disabled={isLoading}>
                {isLoading ? 'Processing...' : 'Create Account'}
              </Button>
            </form>

            <p className="text-center text-sm text-white/50 mt-6">
              Already have an account?{' '}
              <button onClick={() => setAuthView('signin')} className="text-[#B6E5ED] hover:text-[#9ebaff] transition-colors font-medium">
                Sign In
              </button>
            </p>
          </div>
        )}

        {authView === 'verify' && (
          <div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#B6E5ED] to-[#9ebaff] flex items-center justify-center mx-auto mb-4 text-black shadow-[0_0_20px_#B6E5ED]">
                <ShieldCheck size={32} />
              </div>
              <h2 className="font-heading text-3xl font-bold text-white mb-2">Verify Identity</h2>
              <p className="text-white/60 text-sm">We've sent a secure 6-digit code to <br/><span className="text-white font-medium">{pendingEmail}</span></p>
            </div>
            
            <form onSubmit={handleVerify} className="space-y-4">
              {error && <p className="text-red-400 text-sm text-center">{error}</p>}
              
              <div className="relative">
                <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input 
                  type="text" 
                  placeholder="Enter 6-digit code" 
                  required
                  maxLength={6}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-4 text-center text-2xl tracking-widest text-white focus:outline-none focus:ring-2 focus:ring-[#B6E5ED]/50 transition-all placeholder:text-white/30 placeholder:tracking-normal placeholder:text-base font-mono"
                />
              </div>
              
              <Button className="w-full mt-6" type="submit" disabled={isLoading || code.length < 6}>
                {isLoading ? 'Verifying...' : 'Authenticate'}
              </Button>
            </form>
            
            <p className="text-center text-xs text-white/40 mt-6">
              Check your spam folder if you don't see the code.
              For this simulation, any 6-digit code will work.
            </p>
          </div>
        )}

      </GlassCard>
    </div>
  );
}
