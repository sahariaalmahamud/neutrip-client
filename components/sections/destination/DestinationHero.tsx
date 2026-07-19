'use client';

import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { ExploreDestination } from '@/constants/explore';
import { FiStar, FiMapPin, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeUp } from '@/constants/motion';
import { cn } from '@/utils/cn';

interface DestinationHeroProps {
  destination: ExploreDestination;
}

export function DestinationHero({ destination }: DestinationHeroProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <section className="relative h-[45vh] md:h-[55vh] w-full overflow-hidden flex items-end pb-8 bg-surface">
      {/* Cover Image Background */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Deep overlay mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/30 z-1" />
      </div>

      <Container className="relative z-10 w-full text-left">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          {/* Left Title details */}
          <div className="flex flex-col gap-2.5 text-white">
            {/* Country and Rating */}
            <div className="flex flex-wrap items-center gap-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-primary">
                <FiMapPin className="w-3.5 h-3.5" />
                {destination.country}
              </span>
              
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-accent">
                <FiStar className="w-3.5 h-3.5 fill-accent stroke-accent" />
                {destination.rating} Rating
              </span>
            </div>

            {/* Title Name */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-md">
              {destination.name}
            </h1>
          </div>

          {/* Right Action buttons and pricing */}
          <div className="flex items-center gap-4.5 bg-black/40 border border-white/10 backdrop-blur-md p-4 rounded-2xl w-max self-start md:self-end">
            <div className="text-left text-white">
              <span className="text-[10px] text-white/60 block uppercase tracking-wider leading-none mb-1">Starting From</span>
              <span className="text-2xl font-extrabold text-white leading-none">${destination.price}</span>
            </div>

            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
              aria-label="Add to favorites"
            >
              <FiHeart
                className={cn(
                  "w-5 h-5 transition-all duration-300",
                  isFavorite ? "fill-danger text-danger stroke-danger scale-110" : "text-white"
                )}
              />
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
