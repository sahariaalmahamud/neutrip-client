'use client';

import React, { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/constants/motion';
import { toast } from 'sonner';
import { FiMail } from 'react-icons/fi';

export function NewsletterCTA() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }
    toast.success('Successfully subscribed! Welcome to Neutrip.');
    setEmail('');
  };

  return (
    <Section id="newsletter" className="relative overflow-hidden w-full">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none z-0" />
      
      <Container className="relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="glass-card shadow-modal p-8 md:p-12 border border-border/80 rounded-2xl max-w-3xl mx-auto relative overflow-hidden"
        >
          {/* Decorative ambient bulb */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col items-center text-center max-w-xl mx-auto gap-4">
            {/* Tag */}
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Newsletter
            </span>
            
            {/* Title */}
            <h2 className="font-h2 text-foreground tracking-tight leading-tight">
              Get Curated AI Deals &amp; Travel Guides
            </h2>
            
            {/* Description */}
            <p className="text-sm text-muted leading-relaxed">
              Sign up to receive periodic travel alerts, destination recommendations, and custom deals generated based on your travel habits. No spam, unsubscribe anytime.
            </p>

            {/* Email form */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full mt-4">
              <div className="relative flex items-center w-full">
                <FiMail className="absolute left-3.5 text-muted w-4 h-4 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-background/40 hover:bg-background/60 border border-border/80 focus:border-primary/50 transition-colors h-11 pl-10 pr-4 rounded-xl text-foreground placeholder:text-muted text-sm outline-none focus-ring"
                  aria-label="Email Address"
                />
              </div>
              
              <Button
                type="submit"
                className="px-6 h-11 rounded-xl bg-primary text-background hover:opacity-90 font-semibold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-sm whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
