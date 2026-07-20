'use client';

import React from 'react';
import { RouterProvider } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { QueryProvider } from './query-provider';
import { ThemeProvider } from './theme-provider';
import { AuthProvider } from './auth-provider';
import { Toaster } from 'sonner';

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <QueryProvider>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider navigate={router.push}>
            {children}
            <Toaster position="top-right" richColors />
          </RouterProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}
