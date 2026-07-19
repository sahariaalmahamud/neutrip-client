'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, Button } from '@heroui/react';
import { FiUser, FiMail, FiBookOpen, FiMessageSquare, FiLoader, FiSend } from 'react-icons/fi';
import { toast } from 'sonner';

// Contact validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormInput = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmitForm = (data: ContactFormInput) => {
    if (isLoading) return;
    setIsLoading(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsLoading(false);
      console.log('Contact form submitted:', data);
      toast.success('Your message has been sent successfully! Our team will get back to you shortly.');
      
      // Reset only after a successful simulated submission (complying with user refinements)
      reset();
    }, 1800);
  };

  return (
    <Card className="glass-card p-6 md:p-8 border border-border/80 rounded-2xl bg-surface/30 text-left w-full flex flex-col gap-5">
      <h3 className="font-bold text-base md:text-lg text-foreground pb-2 border-b border-border/40">
        Send Us a Message
      </h3>

      <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col gap-4">
        
        {/* Name Input */}
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="contact-name" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
            Your Name
          </label>
          <div className="relative flex items-center w-full bg-background/40 rounded-xl border border-border/80 hover:bg-background/60 hover:border-border transition-colors duration-200 h-10.5">
            <FiUser className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
            <input
              id="contact-name"
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
          <label htmlFor="contact-email" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
            Email Address
          </label>
          <div className="relative flex items-center w-full bg-background/40 rounded-xl border border-border/80 hover:bg-background/60 hover:border-border transition-colors duration-200 h-10.5">
            <FiMail className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
            <input
              id="contact-email"
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

        {/* Subject Input */}
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="contact-subject" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
            Subject
          </label>
          <div className="relative flex items-center w-full bg-background/40 rounded-xl border border-border/80 hover:bg-background/60 hover:border-border transition-colors duration-200 h-10.5">
            <FiBookOpen className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
            <input
              id="contact-subject"
              type="text"
              {...register('subject')}
              disabled={isLoading}
              placeholder="Itinerary help, voucher questions..."
              className="w-full bg-transparent h-full pl-10 pr-4 rounded-xl text-foreground placeholder:text-muted text-sm outline-none disabled:opacity-50"
            />
          </div>
          {errors.subject && (
            <span className="text-[10px] font-semibold text-danger pl-1.5 mt-0.5">
              {errors.subject.message}
            </span>
          )}
        </div>

        {/* Message Input */}
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="contact-message" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
            Message
          </label>
          <div className="relative flex items-start w-full bg-background/40 rounded-xl border border-border/80 hover:bg-background/60 hover:border-border transition-colors duration-200 p-2.5">
            <FiMessageSquare className="text-primary w-4.5 h-4.5 mt-1 mr-2 pointer-events-none" />
            <textarea
              id="contact-message"
              rows={4}
              {...register('message')}
              disabled={isLoading}
              placeholder="Enter your message details..."
              className="w-full bg-transparent text-foreground placeholder:text-muted text-sm outline-none resize-none disabled:opacity-50"
            />
          </div>
          {errors.message && (
            <span className="text-[10px] font-semibold text-danger pl-1.5 mt-0.5">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          isDisabled={isLoading}
          className="w-full h-11 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-sm mt-2 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <FiLoader className="w-4.5 h-4.5 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <FiSend className="w-4 h-4" />
              Send Message
            </>
          )}
        </Button>

      </form>
    </Card>
  );
}
