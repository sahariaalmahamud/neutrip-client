'use client';

import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { TESTIMONIALS } from '@/constants/home';
import { FiStar, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeUp, staggerChildren } from '@/constants/motion';

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      title="What Our Explorers Say"
      subtitle="Client Testimonials"
      description="Read stories from fellow travelers who mapped and experienced their customized dream vacations using our AI tools."
      motion
      variants={staggerChildren(0.08, 0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <motion.div key={test.id} variants={fadeUp} className="h-full">
              <div className="relative glass-card shadow-card p-6 border border-border/80 hover:border-primary/30 rounded-2xl flex flex-col justify-between text-left h-full transition-all duration-300 hover:shadow-primary/5 hover:-translate-y-1.5 overflow-hidden">
                
                {/* Background Large Quote Mark */}
                <span className="absolute right-6 top-4 text-7xl select-none font-serif text-primary/10 leading-none pointer-events-none">
                  &ldquo;
                </span>

                {/* Review Content */}
                <div className="relative z-10">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5 text-accent mb-4">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 fill-accent stroke-accent" />
                    ))}
                  </div>
                  
                  {/* Quote text */}
                  <blockquote className="text-sm md:text-base text-foreground/90 italic leading-relaxed mb-6">
                    &ldquo;{test.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Reviewer Details Footer */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-border/50 relative z-10">
                  {/* Avatar */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-10 h-10 rounded-full object-cover border border-primary/20 flex-shrink-0"
                    loading="lazy"
                  />
                  
                  {/* Profile texts */}
                  <div>
                    <span className="font-semibold text-sm text-foreground block leading-tight">{test.name}</span>
                    <span className="text-[10px] text-muted block mb-0.5">{test.role}</span>
                    <span className="text-[10px] text-primary flex items-center gap-1 font-medium">
                      <FiMapPin className="w-3 h-3 flex-shrink-0" />
                      {test.destinationTag}
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
