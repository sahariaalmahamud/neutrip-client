'use client';

import React from 'react';
import { Button } from '@heroui/react';
import { FaGoogle, FaApple } from 'react-icons/fa';
import { toast } from 'sonner';

export function SocialLoginButtons() {
  const handleSocialClick = (provider: string) => {
    toast.info(`${provider} OAuth integration is coming soon in the next update!`);
  };

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

      <div className="grid grid-cols-2 gap-3 w-full">
        {/* Google Button */}
        <Button
          onClick={() => handleSocialClick('Google')}
          variant="outline"
          className="h-10.5 rounded-xl border border-border/80 bg-background/50 hover:bg-surface text-foreground font-semibold flex items-center justify-center gap-2 cursor-pointer text-xs transition-colors duration-200"
        >
          <FaGoogle className="w-4 h-4 text-primary" />
          Google
        </Button>

        {/* Apple Button */}
        <Button
          onClick={() => handleSocialClick('Apple')}
          variant="outline"
          className="h-10.5 rounded-xl border border-border/80 bg-background/50 hover:bg-surface text-foreground font-semibold flex items-center justify-center gap-2 cursor-pointer text-xs transition-colors duration-200"
        >
          <FaApple className="w-4.5 h-4.5" />
          Apple
        </Button>
      </div>
    </div>
  );
}
