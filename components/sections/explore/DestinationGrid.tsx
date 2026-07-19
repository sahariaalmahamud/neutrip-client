'use client';

import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Card, Button } from '@heroui/react';
import { ExploreDestination } from '@/constants/explore';
import { FiStar, FiMapPin, FiHeart, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeUp, staggerChildren } from '@/constants/motion';
import { toast } from 'sonner';
import { cn } from '@/utils/cn';

interface DestinationGridProps {
  destinations: ExploreDestination[];
  onResetFilters: () => void;
}

export function DestinationGrid({ destinations, onResetFilters }: DestinationGridProps) {
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

  const handleViewDetails = (name: string) => {
    toast.info(`Itinerary generation details for ${name} coming soon!`);
  };

  if (destinations.length === 0) {
    return (
      <section className="py-16 px-4 w-full bg-background flex-grow flex items-center justify-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-10 max-w-md mx-auto border border-border text-center flex flex-col items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
              <FiMapPin className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">No Destinations Found</h3>
            <p className="text-sm text-muted">
              We couldn&apos;t find any destinations matching your current filter settings. Try clearing the filters or search query.
            </p>
            <Button
              onClick={onResetFilters}
              className="mt-2 px-6 h-10 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 cursor-pointer"
            >
              Reset Filters
            </Button>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-10 px-4 w-full bg-background flex-grow">
      <Container>
        <motion.div
          variants={staggerChildren(0.06, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left"
        >
          {destinations.map((dest) => (
            <motion.div key={dest.id} variants={fadeUp}>
              <Card className="group flex flex-col h-full bg-surface border border-border/80 hover:border-primary/45 rounded-2xl overflow-hidden shadow-card transition-all duration-300 hover:shadow-primary/10 hover:-translate-y-1.5">
                
                {/* Image Cover */}
                <div className="h-52 w-full relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-1" />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 z-10 text-[9px] font-extrabold uppercase tracking-wider bg-black/55 backdrop-blur-md text-primary border border-primary/25 px-2.5 py-1 rounded-full">
                    {dest.category}
                  </span>

                  {/* Favorite Heart Button */}
                  <button
                    onClick={(e) => toggleFavorite(dest.id, e)}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/75 border border-white/10 backdrop-blur-md text-white transition-all duration-300 cursor-pointer shadow-sm"
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
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header info */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1 text-primary">
                        <FiMapPin className="w-3.5 h-3.5" />
                        <span className="text-xs text-muted font-medium">{dest.country}</span>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-1 text-accent">
                        <FiStar className="w-3.5 h-3.5 fill-accent stroke-accent" />
                        <span className="text-xs font-bold text-foreground">{dest.rating}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                      {dest.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-muted mb-4 leading-relaxed line-clamp-2">
                      {dest.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {dest.tags.map((tag) => (
                        <span key={tag} className="text-[10px] bg-background border border-border/80 text-muted px-2 py-0.5 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div>
                      <span className="text-[9px] text-muted block uppercase tracking-wider">From</span>
                      <span className="text-base font-extrabold text-foreground">${dest.price}</span>
                    </div>

                    <Button
                      onClick={() => handleViewDetails(dest.name)}
                      variant="ghost"
                      className="rounded-xl border border-border bg-background hover:bg-surface hover:border-primary/50 hover:text-primary text-foreground text-xs font-semibold cursor-pointer py-1.5 px-3 h-8.5 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1 group/btn"
                    >
                      Details
                      <FiArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                    </Button>
                  </div>
                </div>

              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
