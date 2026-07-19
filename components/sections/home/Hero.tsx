'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { fadeUp, staggerChildren } from '@/constants/motion';
import { FiChevronRight, FiCompass } from 'react-icons/fi';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-24 flex items-center justify-center min-h-[75vh]">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px] pointer-events-none z-0" />

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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <FiCompass className="w-3.5 h-3.5 animate-spin-[spin_8s_linear_infinite]" />
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
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#ai-planner"
              className="px-8 py-4.5 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 cursor-pointer flex items-center justify-center gap-2 group text-base transition-all duration-300"
            >
              Start Planning
              <FiChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#destinations"
              className="px-8 py-4.5 rounded-xl border border-border bg-surface/50 text-foreground font-semibold hover:bg-surface cursor-pointer text-base flex items-center justify-center transition-all duration-300"
            >
              Explore Trends
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
