'use client';

import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Card, Button } from '@heroui/react';
import { FEATURED_EXPERIENCES } from '@/constants/home';
import { FiStar, FiClock, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeUp, staggerChildren } from '@/constants/motion';

export function FeaturedExperiences() {
  return (
    <Section
      id="experiences"
      title="Featured Local Experiences"
      subtitle="Curated Adventures"
      description="Handpicked activities, secret tours, and unique tastings organized by verified locals to craft your dream trip."
      motion
      variants={staggerChildren(0.08, 0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_EXPERIENCES.map((exp) => (
            <motion.div key={exp.id} variants={fadeUp}>
              <Card className="group flex flex-col h-full bg-surface border border-border/80 hover:border-primary/45 rounded-2xl overflow-hidden shadow-card transition-all duration-300 hover:shadow-primary/10 hover:-translate-y-2">
                {/* Card Cover Image */}
                <div className="h-56 w-full relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-1" />
                  
                  {/* Category tag */}
                  <span className="absolute top-4 left-4 z-10 text-[10px] font-extrabold uppercase tracking-wider bg-black/50 backdrop-blur-md text-accent border border-accent/30 px-2.5 py-1 rounded-full">
                    {exp.tag}
                  </span>
                </div>

                {/* Card Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left">
                  <div>
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-muted mb-2.5">
                      <FiMapPin className="w-3.5 h-3.5 text-primary" />
                      <span>{exp.location}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-base text-foreground leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
                      {exp.title}
                    </h3>

                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-xs text-muted mb-6">
                      <div className="flex items-center gap-1">
                        <FiClock className="w-3.5 h-3.5 text-muted/80" />
                        <span>{exp.duration}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <FiStar className="w-3.5 h-3.5 text-accent fill-accent stroke-accent" />
                        <span className="font-semibold text-foreground">{exp.rating}</span>
                        <span className="text-[10px] text-muted/80">({exp.reviewsCount} reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions & Pricing */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div>
                      <span className="text-[10px] text-muted block uppercase tracking-wider">Price</span>
                      <span className="text-lg font-bold text-foreground">
                        ${exp.price} <span className="text-xs font-normal text-muted">/ person</span>
                      </span>
                    </div>

                    <Button
                      variant="ghost"
                      className="rounded-xl border border-border bg-background hover:bg-surface hover:border-primary/50 hover:text-primary text-foreground text-xs font-semibold cursor-pointer py-2 px-4 h-9.5 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      Book Tour
                    </Button>
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
