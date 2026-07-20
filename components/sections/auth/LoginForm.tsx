'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginInput } from '@/lib/validations/auth';
import { Button } from '@heroui/react';
import { FiMail, FiLock, FiEye, FiEyeOff, FiLoader } from 'react-icons/fi';
import { SocialLoginButtons } from './SocialLoginButtons';
import { cn } from '@/utils/cn';
import Link from 'next/link';

import { useAuth } from '@/providers/auth-provider';

export function LoginForm() {
  const { loginWithEmail } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmitForm = async (data: LoginInput) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await loginWithEmail({ email: data.email, password: data.password });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col gap-4 text-left">
        
        {/* Email Input Field */}
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="login-email" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
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
              id="login-email"
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

        {/* Password Input Field */}
        <div className="flex flex-col gap-1.5 w-full">
          <div className="flex items-center justify-between pl-0.5 pr-0.5">
            <label htmlFor="login-password" className="text-xs font-semibold text-accent uppercase tracking-wider">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-xs font-semibold text-primary hover:text-accent transition-colors duration-200"
            >
              Forgot?
            </Link>
          </div>
          
          <div
            className={cn(
              "relative flex items-center w-full bg-background/40 rounded-xl transition-all duration-300 h-11 border",
              passFocused 
                ? "border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60" 
                : "border-border/80 hover:bg-background/60 hover:border-border"
            )}
          >
            <FiLock className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              onFocus={() => setPassFocused(true)}
              onBlur={() => setPassFocused(false)}
              disabled={isLoading}
              placeholder="••••••••"
              className="w-full bg-transparent h-full pl-10 pr-11 rounded-xl text-foreground placeholder:text-muted text-sm outline-none disabled:opacity-50"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              disabled={isLoading}
              className="absolute right-3.5 text-muted hover:text-foreground cursor-pointer transition-colors duration-200"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <FiEyeOff className="w-4.5 h-4.5" /> : <FiEye className="w-4.5 h-4.5" />}
            </button>
          </div>
          {errors.password && (
            <span className="text-[10px] font-semibold text-danger pl-1.5 mt-0.5">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex items-center gap-2 pl-0.5 mt-1">
          <input
            id="remember-me"
            type="checkbox"
            {...register('rememberMe')}
            disabled={isLoading}
            className="w-4 h-4 rounded border-border text-primary focus:ring-primary bg-background/40 cursor-pointer disabled:opacity-50"
          />
          <label htmlFor="remember-me" className="text-xs text-muted cursor-pointer select-none">
            Remember my account session
          </label>
        </div>

        {/* Submit Action Button */}
        <Button
          type="submit"
          isDisabled={isLoading}
          className="w-full h-11 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-sm mt-3.5 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <FiLoader className="w-4.5 h-4.5 animate-spin" />
              Verifying credentials...
            </>
          ) : (
            'Sign In to Account'
          )}
        </Button>
      </form>

      {/* Social options */}
      <SocialLoginButtons />

      {/* Footer Redirect link */}
      <div className="text-xs text-muted mt-2">
        Don&apos;t have an account?{' '}
        <Link
          href="/register"
          className="font-bold text-primary hover:text-accent transition-colors duration-200"
        >
          Create Free Account
        </Link>
      </div>
    </div>
  );
}
