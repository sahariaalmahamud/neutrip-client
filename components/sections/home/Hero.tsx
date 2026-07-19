'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { fadeUp, staggerChildren } from '@/constants/motion';
import { FiChevronRight, FiCompass, FiUsers, FiAward } from 'react-icons/fi';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Floating animations for travel badges - disable if reduced motion preferred
  const floatTransition = (delay = 0) => shouldReduceMotion
    ? {}
    : {
        y: [0, -12, 0],
        transition: {
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse' as const,
          ease: 'easeInOut' as const,
          delay,
        }
      };

  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-44 md:pb-32 flex items-center justify-center min-h-[85vh] md:min-h-[90vh]">
      
      {/* Technical Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0" />

      {/* Floating Animated Ambient Blobs */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'reverse' as const,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-primary/10 blur-[130px] pointer-events-none z-0"
      />
      
      <motion.div
        animate={shouldReduceMotion ? {} : {
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse' as const,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-accent/5 blur-[100px] pointer-events-none z-0"
      />

      {/* Floating Decorative Elements (Hidden on mobile) */}
      <motion.div
        animate={floatTransition(0)}
        className="absolute left-8 lg:left-16 top-1/4 hidden xl:flex items-center gap-3.5 p-3 rounded-2xl glass-card border border-border shadow-floating max-w-[190px] z-20 hover:border-primary/30 transition-colors cursor-default"
      >
        <div className="w-9.5 h-9.5 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent">
          <FiCompass className="w-5 h-5 animate-spin-[spin_10s_linear_infinite]" />
        </div>
        <div className="text-left">
          <span className="text-[9px] font-bold text-accent uppercase tracking-wider block">AI TOP RATED</span>
          <span className="text-xs font-bold text-foreground">Kyoto, Japan</span>
        </div>
      </motion.div>

      <motion.div
        animate={floatTransition(2.5)}
        className="absolute right-8 lg:right-16 bottom-1/3 hidden xl:flex items-center gap-3.5 p-3 rounded-2xl glass-card border border-border shadow-floating max-w-[190px] z-20 hover:border-primary/30 transition-colors cursor-default"
      >
        <div className="w-9.5 h-9.5 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-primary">
          <FiUsers className="w-5 h-5" />
        </div>
        <div className="text-left">
          <span className="text-[9px] font-bold text-primary uppercase tracking-wider block">ACTIVE NOW</span>
          <span className="text-xs font-bold text-foreground">50k+ Travelers</span>
        </div>
      </motion.div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerChildren(0.12, 0.1)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <FiAward className="w-4 h-4 text-accent" />
            AI-POWERED TRAVEL FOR THE NEXT GENERATION
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-foreground leading-[1.1] mb-6 tracking-tight font-extrabold"
          >
            AI-Powered Journeys,<br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tailored Just For You
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-muted font-body text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            NeuTrip makes planning your next escape seamless, intelligent, and completely personalized. Tell our AI where you want to go and watch your perfect itinerary write itself.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-20"
          >
            <a
              href="#ai-planner"
              className="px-8 py-4.5 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/25 cursor-pointer flex items-center justify-center gap-2 group text-base transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Start Planning
              <FiChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#destinations"
              className="px-8 py-4.5 rounded-xl border border-border bg-surface/50 text-foreground font-semibold hover:bg-surface hover:border-primary/40 cursor-pointer text-base flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
            >
              Explore Trends
            </a>
          </motion.div>

          {/* Trust statistics stats badges row */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-3 gap-6 md:gap-12 mt-16 pt-8 border-t border-border/40 w-full max-w-lg mx-auto"
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">50k+</span>
              <span className="text-[10px] font-bold text-muted uppercase tracking-wider mt-1">Explorers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">120+</span>
              <span className="text-[10px] font-bold text-muted uppercase tracking-wider mt-1">Countries</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">4.9★</span>
              <span className="text-[10px] font-bold text-muted uppercase tracking-wider mt-1">Review Score</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
