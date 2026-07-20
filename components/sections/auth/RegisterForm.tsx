'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, RegisterInput } from '@/lib/validations/auth';
import { Button } from '@heroui/react';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiLoader } from 'react-icons/fi';
import { SocialLoginButtons } from './SocialLoginButtons';
import { cn } from '@/utils/cn';
import Link from 'next/link';

import { useAuth } from '@/providers/auth-provider';

export function RegisterForm() {
  const { registerWithEmail } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);
  const [confirmFocused, setConfirmFocused] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  });

  const onSubmitForm = async (data: RegisterInput) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await registerWithEmail({ name: data.name, email: data.email, password: data.password });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col gap-3.5 text-left">
        
        {/* Full Name Input */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="reg-name" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
            Full Name
          </label>
          <div
            className={cn(
              "relative flex items-center w-full bg-background/40 rounded-xl transition-all duration-300 h-10.5 border",
              nameFocused 
                ? "border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60" 
                : "border-border/80 hover:bg-background/60 hover:border-border"
            )}
          >
            <FiUser className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
            <input
              id="reg-name"
              type="text"
              {...register('name')}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
              disabled={isLoading}
              placeholder="Alex Mercer"
              className="w-full bg-transparent h-full pl-10 pr-4 rounded-xl text-foreground placeholder:text-muted text-sm outline-none disabled:opacity-50"
            />
          </div>
          {errors.name && (
            <span className="text-[10px] font-semibold text-danger pl-1.5 mt-0.5">
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Email Address Input */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="reg-email" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
            Email Address
          </label>
          <div
            className={cn(
              "relative flex items-center w-full bg-background/40 rounded-xl transition-all duration-300 h-10.5 border",
              emailFocused 
                ? "border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60" 
                : "border-border/80 hover:bg-background/60 hover:border-border"
            )}
          >
            <FiMail className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
            <input
              id="reg-email"
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

        {/* Password Input */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="reg-password" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
            Password
          </label>
          <div
            className={cn(
              "relative flex items-center w-full bg-background/40 rounded-xl transition-all duration-300 h-10.5 border",
              passFocused 
                ? "border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60" 
                : "border-border/80 hover:bg-background/60 hover:border-border"
            )}
          >
            <FiLock className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
            <input
              id="reg-password"
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

        {/* Confirm Password Input */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="reg-confirm" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
            Confirm Password
          </label>
          <div
            className={cn(
              "relative flex items-center w-full bg-background/40 rounded-xl transition-all duration-300 h-10.5 border",
              confirmFocused 
                ? "border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60" 
                : "border-border/80 hover:bg-background/60 hover:border-border"
            )}
          >
            <FiLock className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
            <input
              id="reg-confirm"
              type={showConfirmPassword ? 'text' : 'password'}
              {...register('confirmPassword')}
              onFocus={() => setConfirmFocused(true)}
              onBlur={() => setConfirmFocused(false)}
              disabled={isLoading}
              placeholder="••••••••"
              className="w-full bg-transparent h-full pl-10 pr-11 rounded-xl text-foreground placeholder:text-muted text-sm outline-none disabled:opacity-50"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              disabled={isLoading}
              className="absolute right-3.5 text-muted hover:text-foreground cursor-pointer transition-colors duration-200"
              aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
            >
              {showConfirmPassword ? <FiEyeOff className="w-4.5 h-4.5" /> : <FiEye className="w-4.5 h-4.5" />}
            </button>
          </div>
          {errors.confirmPassword && (
            <span className="text-[10px] font-semibold text-danger pl-1.5 mt-0.5">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        {/* Terms Agreement Checkbox */}
        <div className="flex items-start gap-2 pl-0.5 mt-1">
          <input
            id="auth-terms"
            type="checkbox"
            {...register('terms')}
            disabled={isLoading}
            className="w-4 h-4 rounded border-border text-primary focus:ring-primary bg-background/40 mt-0.5 cursor-pointer disabled:opacity-50"
          />
          <div className="flex flex-col">
            <label htmlFor="auth-terms" className="text-xs text-muted cursor-pointer select-none">
              I agree to the{' '}
              <span className="text-primary hover:underline font-semibold">Terms of Service</span> and{' '}
              <span className="text-primary hover:underline font-semibold">Privacy Policy</span>
            </label>
            {errors.terms && (
              <span className="text-[10px] font-semibold text-danger mt-1">
                {errors.terms.message}
              </span>
            )}
          </div>
        </div>

        {/* Submit Action Button */}
        <Button
          type="submit"
          isDisabled={isLoading}
          className="w-full h-10.5 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-sm mt-2 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <FiLoader className="w-4.5 h-4.5 animate-spin" />
              Registering account...
            </>
          ) : (
            'Create Account'
          )}
        </Button>
      </form>

      {/* Social options */}
      <SocialLoginButtons />

      {/* Redirect Footer links */}
      <div className="text-xs text-muted mt-2">
        Already have an account?{' '}
        <Link
          href="/login"
          className="font-bold text-primary hover:text-accent transition-colors duration-200"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
