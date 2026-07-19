'use client';

import React, { useState } from 'react';
import { ExploreDestination } from '@/constants/explore';
import { Button } from '@heroui/react';
import { FiCalendar, FiUsers } from 'react-icons/fi';
import { toast } from 'sonner';
import { cn } from '@/utils/cn';

interface BookingCardProps {
  destination: ExploreDestination;
}

export function BookingCard({ destination }: BookingCardProps) {
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [dateFocused, setDateFocused] = useState(false);
  const [guestsFocused, setGuestsFocused] = useState(false);

  // Pricing math multipliers
  const basePrice = destination.price * guests;
  const serviceFee = Math.round(basePrice * 0.12);
  const totalPrice = basePrice + serviceFee;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
      toast.error('Please select a preferred departure date.');
      return;
    }
    toast.success(`Booking request received! Dynamic itinerary for ${guests} guests on ${date} has been sent to your email.`);
  };

  return (
    <div className="glass-card shadow-modal border border-border p-6 rounded-2xl w-full text-left bg-surface/90 backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:border-primary/30">
      
      {/* Dynamic glow overlay */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10 pointer-events-none" />

      {/* Pricing Header */}
      <div className="flex items-end justify-between mb-6 pb-4 border-b border-border/50">
        <div>
          <span className="text-[10px] text-muted block uppercase tracking-wider mb-0.5">Price Per Person</span>
          <span className="text-2xl font-extrabold text-foreground">${destination.price}</span>
        </div>
        <span className="text-[10px] font-semibold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
          Guaranteed Rate
        </span>
      </div>

      <form onSubmit={handleBooking} className="flex flex-col gap-4">
        {/* Departure Date */}
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="booking-date" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
            Departure Date
          </label>
          <div
            className={cn(
              "relative flex items-center w-full bg-background/40 rounded-xl transition-all duration-300 h-11 border",
              dateFocused 
                ? "border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60" 
                : "border-border/80 hover:bg-background/60 hover:border-border"
            )}
          >
            <FiCalendar className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
            <input
              id="booking-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              onFocus={() => setDateFocused(true)}
              onBlur={() => setDateFocused(false)}
              className="w-full bg-transparent h-full pl-10 pr-4 rounded-xl text-foreground placeholder:text-muted text-sm outline-none cursor-pointer"
            />
          </div>
        </div>

        {/* Guests Count Selector */}
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="booking-guests" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
            Travelers
          </label>
          <div
            className={cn(
              "relative flex items-center w-full bg-background/40 rounded-xl transition-all duration-300 h-11 border",
              guestsFocused 
                ? "border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60" 
                : "border-border/80 hover:bg-background/60 hover:border-border"
            )}
          >
            <FiUsers className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
            <select
              id="booking-guests"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              onFocus={() => setGuestsFocused(true)}
              onBlur={() => setGuestsFocused(false)}
              className="w-full bg-transparent h-full pl-10 pr-10 rounded-xl text-sm text-foreground appearance-none outline-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                backgroundSize: '16px',
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num} className="bg-surface text-foreground">
                  {num} {num === 1 ? 'Traveler' : 'Travelers'}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Pricing calculations details */}
        <div className="flex flex-col gap-2.5 mt-4 pt-4 border-t border-border/50 text-xs">
          <div className="flex items-center justify-between text-muted">
            <span>${destination.price} x {guests} guests</span>
            <span className="font-semibold text-foreground">${basePrice}</span>
          </div>
          <div className="flex items-center justify-between text-muted">
            <span>Service &amp; Carbon Tax (12%)</span>
            <span className="font-semibold text-foreground">${serviceFee}</span>
          </div>
          <div className="flex items-center justify-between text-sm pt-2.5 border-t border-border/30 font-bold text-foreground">
            <span>Total Cost</span>
            <span className="text-base text-primary">${totalPrice}</span>
          </div>
        </div>

        {/* Submit Booking Button */}
        <Button
          type="submit"
          className="w-full h-11 rounded-xl bg-primary text-background hover:opacity-90 font-semibold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-sm mt-4 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-primary/30"
        >
          Reserve Tour
        </Button>
      </form>
    </div>
  );
}
