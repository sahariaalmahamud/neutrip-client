'use client';

import React from 'react';
import { Button } from '@heroui/react';
import { FaGoogle } from 'react-icons/fa';

import { useAuth } from '@/providers/auth-provider';

export function SocialLoginButtons() {
  const { loginWithGoogle } = useAuth();

  return (
    <div className="flex flex-col gap-3.5 w-full">
      {/* Divider */}
      <div className="flex items-center gap-3 w-full my-1.5">
        <span className="h-[1px] bg-border/50 flex-grow" />
        <span className="text-[10px] text-muted uppercase font-bold tracking-wider whitespace-nowrap">
          or continue with
        </span>
        <span className="h-[1px] bg-border/50 flex-grow" />
      </div>

      {/* Google Button */}
      <Button
        onClick={loginWithGoogle}
        variant="outline"
        className="w-full h-10.5 rounded-xl border border-border/80 bg-background/50 hover:bg-surface text-foreground font-semibold flex items-center justify-center gap-2 cursor-pointer text-xs transition-colors duration-200"
      >
        <FaGoogle className="w-4 h-4 text-primary" />
        Continue with Google
      </Button>
    </div>
  );
}
