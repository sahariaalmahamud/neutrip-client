'use client';

import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { z } from 'zod';
import { Card } from '@heroui/react';
import { FiUser, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';

// Export Zod schema and type for parent form integration
export const travelerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  phone: z.string().min(6, 'Phone number must be at least 6 characters'),
  specialRequests: z.string().optional(),
});

export type TravelerInput = z.infer<typeof travelerSchema>;

interface TravelerFormProps {
  register: UseFormRegister<TravelerInput>;
  errors: FieldErrors<TravelerInput>;
  isLoading: boolean;
}

export function TravelerForm({ register, errors, isLoading }: TravelerFormProps) {
  return (
    <Card className="glass-card p-5 md:p-6 border border-border/80 rounded-2xl bg-surface/30 text-left flex flex-col gap-5">
      <h3 className="font-bold text-base md:text-lg text-foreground pb-2 border-b border-border/40">
        Traveler Information
      </h3>

      <div className="flex flex-col gap-4">
        {/* Name Input */}
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="traveler-name" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
            Full Name (Lead Traveler)
          </label>
          <div className="relative flex items-center w-full bg-background/40 rounded-xl border border-border/80 hover:bg-background/60 hover:border-border transition-colors duration-200 h-10.5">
            <FiUser className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
            <input
              id="traveler-name"
              type="text"
              {...register('name')}
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

        {/* Email Input */}
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="traveler-email" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
            Email Address
          </label>
          <div className="relative flex items-center w-full bg-background/40 rounded-xl border border-border/80 hover:bg-background/60 hover:border-border transition-colors duration-200 h-10.5">
            <FiMail className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
            <input
              id="traveler-email"
              type="email"
              {...register('email')}
              disabled={isLoading}
              placeholder="alex@example.com"
              className="w-full bg-transparent h-full pl-10 pr-4 rounded-xl text-foreground placeholder:text-muted text-sm outline-none disabled:opacity-50"
            />
          </div>
          {errors.email && (
            <span className="text-[10px] font-semibold text-danger pl-1.5 mt-0.5">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Phone Input */}
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="traveler-phone" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
            Phone Number
          </label>
          <div className="relative flex items-center w-full bg-background/40 rounded-xl border border-border/80 hover:bg-background/60 hover:border-border transition-colors duration-200 h-10.5">
            <FiPhone className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
            <input
              id="traveler-phone"
              type="tel"
              {...register('phone')}
              disabled={isLoading}
              placeholder="+1 (555) 019-2834"
              className="w-full bg-transparent h-full pl-10 pr-4 rounded-xl text-foreground placeholder:text-muted text-sm outline-none disabled:opacity-50"
            />
          </div>
          {errors.phone && (
            <span className="text-[10px] font-semibold text-danger pl-1.5 mt-0.5">
              {errors.phone.message}
            </span>
          )}
        </div>

        {/* Special Requests Input */}
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="traveler-requests" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
            Special Requests (Optional)
          </label>
          <div className="relative flex items-start w-full bg-background/40 rounded-xl border border-border/80 hover:bg-background/60 hover:border-border transition-colors duration-200 p-2.5">
            <FiMessageSquare className="text-primary w-4.5 h-4.5 mt-1 mr-2 pointer-events-none" />
            <textarea
              id="traveler-requests"
              rows={3}
              {...register('specialRequests')}
              disabled={isLoading}
              placeholder="e.g. Dietary requirements, room preferences, airport shuttle coordinates..."
              className="w-full bg-transparent text-foreground placeholder:text-muted text-sm outline-none resize-none disabled:opacity-50"
            />
          </div>
        </div>

      </div>
    </Card>
  );
}
