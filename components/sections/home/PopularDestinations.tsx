'use client';

import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Card } from '@heroui/react';
import { POPULAR_DESTINATIONS } from '@/constants/home';
import { FiStar, FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeUp, staggerChildren } from '@/constants/motion';

export function PopularDestinations() {
  return (
    <Section
      id="destinations"
      title="Top Trending Destinations"
      subtitle="Get Inspired"
      description="Discover highly rated spots recommended by our smart travel algorithm and vetted by real explorers."
      motion
      variants={staggerChildren(0.08, 0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_DESTINATIONS.map((dest) => (
            <motion.div key={dest.id} variants={fadeUp}>
              <Card
                className="group relative h-[360px] w-full overflow-hidden border border-border/60 hover:border-primary/40 bg-surface rounded-2xl transition-all duration-300 shadow-card hover:shadow-primary/5 flex flex-col justify-end p-0 cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent z-1" />
                </div>

                {/* Tag Badge */}
                <span className="absolute top-4 left-4 z-10 text-[10px] font-bold uppercase tracking-wider bg-background/60 backdrop-blur-md text-primary border border-primary/20 px-2.5 py-1 rounded-full">
                  {dest.tag}
                </span>

                {/* Card Info Overlay */}
                <div className="relative z-10 p-5 w-full">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                      {dest.name}
                    </h3>
                    <div className="flex items-center gap-1 text-accent">
                      <FiStar className="w-4 h-4 fill-accent stroke-accent" />
                      <span className="text-xs font-semibold">{dest.rating}</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted mb-4 text-left">
                    {dest.country}
                  </p>

                  <div className="flex items-center justify-between pt-3.5 border-t border-border/40 w-full text-left">
                    <div>
                      <span className="text-[10px] text-muted block uppercase tracking-wider">From</span>
                      <span className="text-base font-bold text-foreground">${dest.price}</span>
                    </div>
                    
                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all duration-300">
                      <FiArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
