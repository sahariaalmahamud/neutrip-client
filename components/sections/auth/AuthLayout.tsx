'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp } from '@/constants/motion';
import { FiCompass } from 'react-icons/fi';
import Link from 'next/link';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  const shouldReduceMotion = useReducedMotion();

  // Floating decoration card animation
  const floatTransition = shouldReduceMotion
    ? {}
    : {
        y: [0, -10, 0],
        transition: {
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse' as const,
          ease: 'easeInOut' as const,
        }
      };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-background w-full">
      {/* Technical Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_75%,transparent_100%)] opacity-20 pointer-events-none z-0" />

      {/* Floating background glowing orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-0" />

      {/* Decorative Floating travel badge (Hidden on mobile) */}
      <motion.div
        animate={floatTransition}
        className="absolute left-10 lg:left-24 top-1/3 hidden xl:flex items-center gap-3.5 p-3 rounded-2xl glass-card border border-border/80 shadow-floating max-w-[190px] z-20 cursor-default"
      >
        <div className="w-9 h-9 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent">
          <FiCompass className="w-5 h-5 animate-spin-[spin_12s_linear_infinite]" />
        </div>
        <div className="text-left">
          <span className="text-[9px] font-bold text-accent uppercase tracking-wider block">EXPLORE NOW</span>
          <span className="text-xs font-bold text-foreground">Bali, Indonesia</span>
        </div>
      </motion.div>

      <Container className="relative z-10 flex flex-col items-center">
        {/* Centered Logo heading */}
        <Link href="/" className="flex items-center gap-2 mb-8 z-20 group">
          <FiCompass className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-display text-xl font-black tracking-wider text-foreground">
            NEU<span className="text-primary">TRIP</span>
          </span>
        </Link>

        {/* Auth form Glass Card wrapper */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[440px] glass-card p-6 md:p-8 rounded-2xl border border-border shadow-modal text-center relative"
        >
          {/* Header titles */}
          <div className="flex flex-col gap-1.5 mb-6 text-left">
            <h2 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-xs text-muted leading-relaxed">
              {subtitle}
            </p>
          </div>

          {children}
        </motion.div>
      </Container>
    </section>
  );
}
