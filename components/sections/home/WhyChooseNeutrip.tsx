'use client';

import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { WHY_CHOOSE_ITEMS } from '@/constants/home';
import { FiCpu, FiCompass, FiUsers, FiShield } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeUp, staggerChildren } from '@/constants/motion';

const iconMap = {
  cpu: FiCpu,
  compass: FiCompass,
  users: FiUsers,
  shield: FiShield,
};

export function WhyChooseNeutrip() {
  return (
    <Section
      id="why-choose"
      title="Why Travel with Neutrip"
      subtitle="Designed for Explorers"
      description="We combine cutting-edge artificial intelligence with verified local insights to engineer custom journeys that are uniquely yours."
      motion
      variants={staggerChildren(0.08, 0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ITEMS.map((item) => {
            const Icon = iconMap[item.iconName] || FiCompass;
            return (
              <motion.div key={item.id} variants={fadeUp}>
                <div className="card-container h-full flex flex-col items-start gap-4 text-left p-6 group hover:-translate-y-1.5 transition-all duration-300">
                  {/* Icon Circle wrapper with hover state rotation/scale */}
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-background group-hover:border-primary group-hover:rotate-6 transition-all duration-500 ease-out">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-semibold text-lg text-foreground mt-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
