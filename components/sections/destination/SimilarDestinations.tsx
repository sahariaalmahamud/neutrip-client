'use client';

import React from 'react';
import { EXPLORE_DESTINATIONS } from '@/constants/explore';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Card } from '@heroui/react';
import { FiStar, FiMapPin, FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeUp, staggerChildren } from '@/constants/motion';
import Link from 'next/link';

interface SimilarDestinationsProps {
  currentId: string;
  category: string;
}

export function SimilarDestinations({ currentId, category }: SimilarDestinationsProps) {
  // Query destinations excluding the active details target, prioritized by matching category
  const list = EXPLORE_DESTINATIONS.filter((dest) => dest.id !== currentId)
    .sort((a, b) => {
      if (a.category === category && b.category !== category) return -1;
      if (b.category === category && a.category !== category) return 1;
      return b.rating - a.rating;
    })
    .slice(0, 4);

  if (list.length === 0) return null;

  return (
    <Section
      id="similar-destinations"
      title="You May Also Like"
      subtitle="Similar Escapes"
      description="Expand your travel horizons with these top-rated alternative spots curated just for you."
      motion
      className="border-t border-border/40 mt-16 bg-surface/10"
      variants={staggerChildren(0.06, 0.05)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((dest) => (
            <motion.div key={dest.id} variants={fadeUp}>
              <Link href={`/destinations/${dest.id}`} className="block">
                <Card
                  className="group relative h-[360px] w-full overflow-hidden border border-border/60 hover:border-primary/45 bg-surface rounded-2xl transition-all duration-300 shadow-card hover:shadow-primary/10 flex flex-col justify-end p-0 cursor-pointer text-left"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Contrast Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-1" />
                  </div>

                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 z-10 text-[9px] font-extrabold uppercase tracking-wider bg-black/50 backdrop-blur-md text-primary border border-primary/30 px-2 py-0.5 rounded-full">
                    {dest.category}
                  </span>

                  {/* Rating star pill badge */}
                  <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/50 border border-white/10 backdrop-blur-md text-[9px] font-bold text-accent">
                    <FiStar className="w-3 h-3 fill-accent stroke-accent" />
                    {dest.rating}
                  </span>

                  {/* Card Info Overlay */}
                  <div className="relative z-10 p-5 w-full text-white">
                    <div className="flex items-center gap-1 text-white/50 text-[10px] uppercase font-bold tracking-wider mb-1.5">
                      <FiMapPin className="w-3 h-3 text-primary" />
                      <span>{dest.country}</span>
                    </div>

                    <h3 className="font-semibold text-base text-white group-hover:text-primary transition-colors duration-300 leading-tight mb-4">
                      {dest.name}
                    </h3>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10 w-full">
                      <div>
                        <span className="text-[9px] text-white/40 block uppercase tracking-wider">From</span>
                        <span className="text-sm font-extrabold text-white">${dest.price}</span>
                      </div>
                      
                      <div className="w-7.5 h-7.5 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center group-hover:bg-primary group-hover:text-background group-hover:border-primary transition-all duration-300">
                        <FiArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
