'use client';

import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Button, Card } from '@heroui/react';
import { MOCK_AI_ITINERARY } from '@/constants/home';
import { FiCheck, FiCoffee, FiCompass, FiCamera, FiSmile, FiTarget, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeUp, staggerChildren, scale } from '@/constants/motion';

const iconMap = {
  food: FiCoffee,
  culture: FiCompass,
  sightseeing: FiCamera,
  leisure: FiSmile,
  dining: FiTarget,
};

export function AITripPlannerCTA() {
  return (
    <Section id="ai-planner" className="relative overflow-hidden w-full">
      {/* Background ambient lighting */}
      <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute left-10 top-1/3 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none z-0" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text / Info Column */}
          <motion.div
            variants={staggerChildren(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-wider text-accent">
              Smart Itineraries
            </motion.span>
            
            <motion.h2 variants={fadeUp} className="font-h1 text-foreground">
              Your Personal AI <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Travel Concierge
              </span>
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-muted leading-relaxed">
              Say goodbye to hours of reading travel blogs and organizing separate schedules. Our AI engine builds optimized, multi-day routes instantly based on your preferences, group dynamic, and environmental footprint.
            </motion.p>
            
            {/* Feature list */}
            <motion.ul variants={fadeUp} className="flex flex-col gap-3">
              {[
                'Tailored multi-day schedules dynamically updated',
                'Eco-friendly travel routing & local recommendations',
                'Integrated map directions and walking optimization',
                'Direct hotel, transit, and experiences cataloging',
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiCheck className="w-3.5 h-3.5" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="mt-4">
              <Button
                className="px-8 h-12 rounded-xl bg-primary text-background hover:opacity-90 font-semibold shadow-lg shadow-primary/20 cursor-pointer flex items-center gap-2 group w-max text-sm"
              >
                Plan Itinerary
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Interactive Mock Column */}
          <motion.div
            variants={scale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-6 flex justify-center w-full"
          >
            <Card className="glass-chat border border-border/80 p-5 md:p-6 rounded-2xl w-full max-w-lg shadow-floating relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
              
              {/* Mock Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border/60 mb-5">
                <div>
                  <span className="text-[10px] uppercase font-bold text-accent tracking-wider block">Generated Plan</span>
                  <h4 className="font-bold text-base text-foreground">Kyoto, Japan — Day 1</h4>
                </div>
                <span className="text-[10px] font-semibold bg-primary/20 text-primary border border-primary/20 px-2 py-0.5 rounded-full">
                  Optimal Eco Route
                </span>
              </div>

              {/* Timeline nodes */}
              <div className="relative border-l-2 border-primary/25 ml-4 pl-6 flex flex-col gap-6 text-left">
                {MOCK_AI_ITINERARY.map((node, index) => {
                  const NodeIcon = iconMap[node.type] || FiCompass;
                  return (
                    <motion.div
                      key={node.id}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + index * 0.1 }}
                      className="relative group"
                    >
                      {/* Node Bullet Icon */}
                      <span className="absolute -left-[35px] top-1 w-6 h-6 rounded-full bg-surface border-2 border-primary/80 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors duration-300 shadow-md">
                        <NodeIcon className="w-3.5 h-3.5" />
                      </span>

                      {/* Content block */}
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-primary">{node.time}</span>
                          <span className="text-[10px] font-medium text-muted bg-background/50 border border-border/40 px-2 py-0.5 rounded">
                            {node.duration}
                          </span>
                        </div>
                        
                        <h5 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-200">
                          {node.activity}
                        </h5>
                        
                        <p className="text-xs text-muted flex items-center gap-1 mt-0.5">
                          <FiCompass className="w-3 h-3 text-muted/60" /> {node.location}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
