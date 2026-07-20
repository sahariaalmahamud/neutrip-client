'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSession, signOut, signIn, signUp, authClient } from '@/lib/auth-client';
import { toast } from 'sonner';

interface AuthContextType {
  isAuthenticated: boolean;
  isPending: boolean;
  user: {
    id: string;
    name: string;
    email: string;
    image?: string;
    role?: string;
  } | null;
  loginWithEmail: (data: { email: string; password: string }) => Promise<boolean>;
  registerWithEmail: (data: { name: string; email: string; password: string }) => Promise<boolean>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const PROTECTED_ROUTES = [
  '/dashboard',
  '/booking',
  '/wishlist',
  '/ai-planner',
  '/reviews',
  '/profile',
  '/settings',
  '/notifications',
];

const GUEST_ONLY_ROUTES = ['/login', '/register'];

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isPending: true,
  user: null,
  loginWithEmail: async () => false,
  registerWithEmail: async () => false,
  loginWithGoogle: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const user = session?.user
    ? {
        id: session.user.id,
        name: session.user.name || 'User',
        email: session.user.email || '',
        image: session.user.image || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
        role: (session.user as Record<string, unknown>).role as string || 'user',
      }
    : null;

  const isAuthenticated = !!session?.user;

  // Protect routes and redirect guests/authenticated users
  useEffect(() => {
    if (isPending) return;

    if (!isAuthenticated && PROTECTED_ROUTES.some((route) => pathname.startsWith(route))) {
      toast.error('Please log in to access this page.');
      router.push('/login');
    } else if (isAuthenticated && GUEST_ONLY_ROUTES.includes(pathname)) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, isPending, pathname, router]);

  const loginWithEmail = async ({ email, password }: { email: string; password: string }) => {
    try {
      const res = await signIn.email({ email, password });
      if (res.error) {
        toast.error(res.error.message || 'Login failed. Please check your credentials.');
        return false;
      }
      toast.success('Welcome back to Neutrip!');
      router.push('/dashboard');
      return true;
    } catch {
      toast.error('An unexpected error occurred during login.');
      return false;
    }
  };

  const registerWithEmail = async ({ name, email, password }: { name: string; email: string; password: string }) => {
    try {
      const res = await signUp.email({ name, email, password });
      if (res.error) {
        toast.error(res.error.message || 'Registration failed. Please try again.');
        return false;
      }
      toast.success('Account created successfully!');
      router.push('/dashboard');
      return true;
    } catch {
      toast.error('An unexpected error occurred during registration.');
      return false;
    }
  };

  const loginWithGoogle = async () => {
    try {
      await authClient.signIn.social({
        provider: 'google',
        callbackURL: `${window.location.origin}/dashboard`,
      });
    } catch {
      toast.error('Google OAuth sign in failed.');
    }
  };

  const logout = async () => {
    try {
      await signOut();
      toast.info('Logged out successfully.');
      router.push('/login');
    } catch {
      toast.error('Error logging out.');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isPending,
        user,
        loginWithEmail,
        registerWithEmail,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
