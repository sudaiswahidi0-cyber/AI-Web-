'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthModalOpen: boolean;
  openAuthModal: (view?: 'signin' | 'signup' | 'verify') => void;
  closeAuthModal: () => void;
  authView: 'signin' | 'signup' | 'verify';
  setAuthView: (view: 'signin' | 'signup' | 'verify') => void;
  pendingEmail: string | null;
  setPendingEmail: (email: string | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authView, setAuthView] = useState<'signin' | 'signup' | 'verify'>('signin');
  const [pendingEmail, setPendingEmail] = useState<string | null>(null);

  const openAuthModal = (view: 'signin' | 'signup' | 'verify' = 'signin') => {
    setAuthView(view);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user, setUser, 
      isAuthModalOpen, openAuthModal, closeAuthModal,
      authView, setAuthView,
      pendingEmail, setPendingEmail,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
