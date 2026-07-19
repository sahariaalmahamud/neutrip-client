'use client';

import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@heroui/react';
import { FiMapPin, FiCalendar, FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeUp } from '@/constants/motion';

export function SearchBar() {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [travelers, setTravelers] = useState('1 Traveler');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ destination, dates, travelers });
  };

  return (
    <section className="relative z-20 -mt-8 md:-mt-12 px-4 w-full">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="glass-card shadow-modal p-5 md:p-6 rounded-2xl max-w-5xl mx-auto border border-border"
        >
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            {/* Destination Input */}
            <div className="md:col-span-4 flex flex-col gap-1.5 w-full">
              <label htmlFor="destination" className="text-xs font-semibold text-accent uppercase tracking-wider pl-1">
                Where to?
              </label>
              <div className="relative flex items-center w-full">
                <FiMapPin className="absolute left-3.5 text-primary w-5 h-5 pointer-events-none" />
                <input
                  id="destination"
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Country, city, or resort..."
                  className="w-full bg-background/40 hover:bg-background/60 border border-border/80 focus:border-primary/50 transition-colors h-12 pl-10 pr-4 rounded-xl text-foreground placeholder:text-muted text-sm outline-none focus-ring"
                />
              </div>
            </div>

            {/* Dates Input */}
            <div className="md:col-span-3 flex flex-col gap-1.5 w-full">
              <label htmlFor="dates" className="text-xs font-semibold text-accent uppercase tracking-wider pl-1">
                When?
              </label>
              <div className="relative flex items-center w-full">
                <FiCalendar className="absolute left-3.5 text-primary w-5 h-5 pointer-events-none" />
                <input
                  id="dates"
                  type="text"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  placeholder="Dates (e.g. Oct 12 - 19)"
                  className="w-full bg-background/40 hover:bg-background/60 border border-border/80 focus:border-primary/50 transition-colors h-12 pl-10 pr-4 rounded-xl text-foreground placeholder:text-muted text-sm outline-none focus-ring"
                />
              </div>
            </div>

            {/* Travelers Input */}
            <div className="md:col-span-3 flex flex-col gap-1.5">
              <label htmlFor="travelers" className="text-xs font-semibold text-accent uppercase tracking-wider pl-1">
                Travelers
              </label>
              <select
                id="travelers"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="w-full bg-background/40 hover:bg-background/60 border border-border/80 focus-within:border-primary/50 transition-colors rounded-xl h-12 px-3.5 text-sm text-foreground focus-ring appearance-none outline-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  backgroundSize: '16px',
                }}
              >
                <option value="1 Traveler" className="bg-surface text-foreground">1 Traveler</option>
                <option value="2 Travelers" className="bg-surface text-foreground">2 Travelers</option>
                <option value="Family (3-5)" className="bg-surface text-foreground">Family (3-5)</option>
                <option value="Group (6+)" className="bg-surface text-foreground">Group (6+)</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="md:col-span-2 w-full">
              <Button
                type="submit"
                className="w-full h-12 rounded-xl bg-primary text-background hover:opacity-90 font-semibold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <FiSearch className="w-4.5 h-4.5" />
                Find Trips
              </Button>
            </div>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}
