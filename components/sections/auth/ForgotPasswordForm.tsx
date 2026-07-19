'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema, ForgotPasswordInput } from '@/lib/validations/auth';
import { Button } from '@heroui/react';
import { FiMail, FiLoader, FiArrowLeft } from 'react-icons/fi';
import { toast } from 'sonner';
import { cn } from '@/utils/cn';
import Link from 'next/link';

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmitForm = (data: ForgotPasswordInput) => {
    if (isLoading) return;
    setIsLoading(true);

    // Simulate recovery email delivery delay
    setTimeout(() => {
      setIsLoading(false);
      console.log('Recovery submitted:', data);
      toast.success('Password recovery instructions sent to your email address!');
      reset();
    }, 1500);
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col gap-4 text-left">
        
        {/* Email Input Field */}
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="recover-email" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
            Email Address
          </label>
          <div
            className={cn(
              "relative flex items-center w-full bg-background/40 rounded-xl transition-all duration-300 h-11 border",
              emailFocused 
                ? "border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60" 
                : "border-border/80 hover:bg-background/60 hover:border-border"
            )}
          >
            <FiMail className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
            <input
              id="recover-email"
              type="email"
              {...register('email')}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              disabled={isLoading}
              placeholder="name@example.com"
              className="w-full bg-transparent h-full pl-10 pr-4 rounded-xl text-foreground placeholder:text-muted text-sm outline-none disabled:opacity-50"
            />
          </div>
          {errors.email && (
            <span className="text-[10px] font-semibold text-danger pl-1.5 mt-0.5">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Submit Action Button */}
        <Button
          type="submit"
          isDisabled={isLoading}
          className="w-full h-11 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-sm mt-2 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <FiLoader className="w-4.5 h-4.5 animate-spin" />
              Delivering reset link...
            </>
          ) : (
            'Send Reset Instructions'
          )}
        </Button>
      </form>

      {/* Redirect back to Login link */}
      <div className="flex justify-center mt-2.5">
        <Link
          href="/login"
          className="text-xs font-semibold text-muted hover:text-primary flex items-center gap-1.5 transition-colors duration-200"
        >
          <FiArrowLeft className="w-4.5 h-4.5" />
          Back to Sign In
        </Link>
      </div>
    </div>
  );
}
