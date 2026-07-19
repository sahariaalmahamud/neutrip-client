'use client';

import React, { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Card } from '@heroui/react';
import { POPULAR_DESTINATIONS } from '@/constants/home';
import { FiStar, FiArrowUpRight, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeUp, staggerChildren } from '@/constants/motion';
import { cn } from '@/utils/cn';

export function PopularDestinations() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

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
                className="group relative h-[380px] w-full overflow-hidden border border-border/60 hover:border-primary/45 bg-surface rounded-2xl transition-all duration-300 shadow-card hover:shadow-primary/10 flex flex-col justify-end p-0 cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* High contrast gradient to ensure white text is readable regardless of background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5 z-1 transition-opacity duration-300 group-hover:opacity-95" />
                </div>

                {/* Tag Badge */}
                <span className="absolute top-4 left-4 z-10 text-[10px] font-extrabold uppercase tracking-wider bg-black/50 backdrop-blur-md text-primary border border-primary/30 px-2.5 py-1 rounded-full">
                  {dest.tag}
                </span>

                {/* Favorite Heart Icon Button */}
                <button
                  onClick={(e) => toggleFavorite(dest.id, e)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/75 border border-white/10 backdrop-blur-md text-white transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                  aria-label="Add to favorites"
                >
                  <FiHeart
                    className={cn(
                      "w-4 h-4 transition-all duration-300",
                      favorites.has(dest.id) 
                        ? "fill-danger text-danger stroke-danger scale-110" 
                        : "text-white/80 hover:text-white"
                    )}
                  />
                </button>

                {/* Card Info Overlay */}
                <div className="relative z-10 p-5 w-full text-white">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-lg text-white group-hover:text-primary transition-colors duration-300">
                      {dest.name}
                    </h3>
                    <div className="flex items-center gap-1 text-accent">
                      <FiStar className="w-3.5 h-3.5 fill-accent stroke-accent" />
                      <span className="text-xs font-bold text-white/90">{dest.rating}</span>
                    </div>
                  </div>

                  <p className="text-xs text-white/70 mb-4 text-left">
                    {dest.country}
                  </p>

                  <div className="flex items-center justify-between pt-3.5 border-t border-white/10 w-full text-left">
                    <div>
                      <span className="text-[10px] text-white/50 block uppercase tracking-wider">From</span>
                      <span className="text-base font-extrabold text-white">${dest.price}</span>
                    </div>
                    
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center group-hover:bg-primary group-hover:text-background group-hover:border-primary transition-all duration-300">
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
