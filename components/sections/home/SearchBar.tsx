'use client';

import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@heroui/react';
import { FiMapPin, FiCalendar, FiSearch, FiUsers } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeUp } from '@/constants/motion';
import { cn } from '@/utils/cn';

export function SearchBar() {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [travelers, setTravelers] = useState('1 Traveler');

  const [destFocused, setDestFocused] = useState(false);
  const [datesFocused, setDatesFocused] = useState(false);
  const [travelersFocused, setTravelersFocused] = useState(false);

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
          className="glass-card shadow-modal p-5 md:p-6 rounded-2xl max-w-5xl mx-auto border border-border backdrop-blur-md transition-colors duration-300"
        >
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            
            {/* Destination Input */}
            <div className="md:col-span-4 flex flex-col gap-2 w-full text-left">
              <label htmlFor="destination" className="text-xs font-semibold text-accent uppercase tracking-wider pl-1.5">
                Where to?
              </label>
              <div
                className={cn(
                  "relative flex items-center w-full bg-background/40 rounded-xl transition-all duration-300 h-12 border",
                  destFocused 
                    ? "border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60" 
                    : "border-border/80 hover:bg-background/60 hover:border-border"
                )}
              >
                <FiMapPin className="absolute left-4 text-primary w-5 h-5 pointer-events-none" />
                <input
                  id="destination"
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  onFocus={() => setDestFocused(true)}
                  onBlur={() => setDestFocused(false)}
                  placeholder="Country, city, or resort..."
                  className="w-full bg-transparent h-full pl-11 pr-4 rounded-xl text-foreground placeholder:text-muted text-sm outline-none"
                />
              </div>
            </div>

            {/* Dates Input */}
            <div className="md:col-span-3 flex flex-col gap-2 w-full text-left">
              <label htmlFor="dates" className="text-xs font-semibold text-accent uppercase tracking-wider pl-1.5">
                When?
              </label>
              <div
                className={cn(
                  "relative flex items-center w-full bg-background/40 rounded-xl transition-all duration-300 h-12 border",
                  datesFocused 
                    ? "border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60" 
                    : "border-border/80 hover:bg-background/60 hover:border-border"
                )}
              >
                <FiCalendar className="absolute left-4 text-primary w-5 h-5 pointer-events-none" />
                <input
                  id="dates"
                  type="text"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  onFocus={() => setDatesFocused(true)}
                  onBlur={() => setDatesFocused(false)}
                  placeholder="Dates (e.g. Oct 12 - 19)"
                  className="w-full bg-transparent h-full pl-11 pr-4 rounded-xl text-foreground placeholder:text-muted text-sm outline-none"
                />
              </div>
            </div>

            {/* Travelers Input */}
            <div className="md:col-span-3 flex flex-col gap-2 w-full text-left">
              <label htmlFor="travelers" className="text-xs font-semibold text-accent uppercase tracking-wider pl-1.5">
                Travelers
              </label>
              <div
                className={cn(
                  "relative flex items-center w-full bg-background/40 rounded-xl transition-all duration-300 h-12 border",
                  travelersFocused 
                    ? "border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60" 
                    : "border-border/80 hover:bg-background/60 hover:border-border"
                )}
              >
                <FiUsers className="absolute left-4 text-primary w-5 h-5 pointer-events-none" />
                <select
                  id="travelers"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  onFocus={() => setTravelersFocused(true)}
                  onBlur={() => setTravelersFocused(false)}
                  className="w-full bg-transparent h-full pl-11 pr-10 rounded-xl text-sm text-foreground appearance-none outline-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                    backgroundSize: '16px',
                  }}
                >
                  <option value="1 Traveler" className="bg-surface text-foreground">1 Traveler</option>
                  <option value="2 Travelers" className="bg-surface text-foreground">2 Travelers</option>
                  <option value="Family (3-5)" className="bg-surface text-foreground">Family (3-5)</option>
                  <option value="Group (6+)" className="bg-surface text-foreground">Group (6+)</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-2 w-full pt-1.5 md:pt-0">
              <Button
                type="submit"
                className="w-full h-12 rounded-xl bg-primary text-background hover:opacity-90 font-semibold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
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
