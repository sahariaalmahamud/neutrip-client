'use client';

import React, { useState } from 'react';
import { Button } from '@heroui/react';
import { FiMapPin, FiCompass, FiClock, FiDollarSign, FiUsers, FiCpu } from 'react-icons/fi';
import {
  PLANNER_DESTINATIONS,
  PLANNER_BUDGETS,
  PLANNER_DURATIONS,
  PLANNER_STYLES,
  PLANNER_TRAVELERS,
} from '@/constants/aiPlanner';
import { cn } from '@/utils/cn';

interface PlannerFormProps {
  destination: string;
  setDestination: (val: string) => void;
  budget: string;
  setBudget: (val: string) => void;
  duration: string;
  setDuration: (val: string) => void;
  style: string;
  setStyle: (val: string) => void;
  travelers: string;
  setTravelers: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export function PlannerForm({
  destination,
  setDestination,
  budget,
  setBudget,
  duration,
  setDuration,
  style,
  setStyle,
  travelers,
  setTravelers,
  onSubmit,
  isLoading,
}: PlannerFormProps) {
  const [destFocused, setDestFocused] = useState(false);
  const [budgetFocused, setBudgetFocused] = useState(false);
  const [durationFocused, setDurationFocused] = useState(false);
  const [styleFocused, setStyleFocused] = useState(false);
  const [travelersFocused, setTravelersFocused] = useState(false);

  return (
    <div className="glass-card shadow-card p-6 rounded-2xl max-w-4xl mx-auto border border-border/80 backdrop-blur-md">
      <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end text-left">
        
        {/* Destination Select */}
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="planner-dest" className="text-xs font-semibold text-accent uppercase tracking-wider pl-1">
            Destination
          </label>
          <div
            className={cn(
              "relative flex items-center w-full bg-background/40 rounded-xl transition-all duration-300 h-11 border",
              destFocused 
                ? "border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60" 
                : "border-border/80 hover:bg-background/60 hover:border-border"
            )}
          >
            <FiMapPin className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
            <select
              id="planner-dest"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onFocus={() => setDestFocused(true)}
              onBlur={() => setDestFocused(false)}
              disabled={isLoading}
              className="w-full bg-transparent h-full pl-10 pr-10 rounded-xl text-sm text-foreground appearance-none outline-none cursor-pointer disabled:opacity-50"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                backgroundSize: '16px',
              }}
            >
              {PLANNER_DESTINATIONS.map((d) => (
                <option key={d.value} value={d.value} className="bg-surface text-foreground">
                  {d.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Travel Style Select */}
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="planner-style" className="text-xs font-semibold text-accent uppercase tracking-wider pl-1">
            Travel Style
          </label>
          <div
            className={cn(
              "relative flex items-center w-full bg-background/40 rounded-xl transition-all duration-300 h-11 border",
              styleFocused 
                ? "border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60" 
                : "border-border/80 hover:bg-background/60 hover:border-border"
            )}
          >
            <FiCompass className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
            <select
              id="planner-style"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              onFocus={() => setStyleFocused(true)}
              onBlur={() => setStyleFocused(false)}
              disabled={isLoading}
              className="w-full bg-transparent h-full pl-10 pr-10 rounded-xl text-sm text-foreground appearance-none outline-none cursor-pointer disabled:opacity-50"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                backgroundSize: '16px',
              }}
            >
              {PLANNER_STYLES.map((s) => (
                <option key={s.value} value={s.value} className="bg-surface text-foreground">
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Budget Select */}
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="planner-budget" className="text-xs font-semibold text-accent uppercase tracking-wider pl-1">
            Budget
          </label>
          <div
            className={cn(
              "relative flex items-center w-full bg-background/40 rounded-xl transition-all duration-300 h-11 border",
              budgetFocused 
                ? "border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60" 
                : "border-border/80 hover:bg-background/60 hover:border-border"
            )}
          >
            <FiDollarSign className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
            <select
              id="planner-budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              onFocus={() => setBudgetFocused(true)}
              onBlur={() => setBudgetFocused(false)}
              disabled={isLoading}
              className="w-full bg-transparent h-full pl-10 pr-10 rounded-xl text-sm text-foreground appearance-none outline-none cursor-pointer disabled:opacity-50"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                backgroundSize: '16px',
              }}
            >
              {PLANNER_BUDGETS.map((b) => (
                <option key={b.value} value={b.value} className="bg-surface text-foreground">
                  {b.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Duration Select */}
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="planner-duration" className="text-xs font-semibold text-accent uppercase tracking-wider pl-1">
            Duration
          </label>
          <div
            className={cn(
              "relative flex items-center w-full bg-background/40 rounded-xl transition-all duration-300 h-11 border",
              durationFocused 
                ? "border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60" 
                : "border-border/80 hover:bg-background/60 hover:border-border"
            )}
          >
            <FiClock className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
            <select
              id="planner-duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              onFocus={() => setDurationFocused(true)}
              onBlur={() => setDurationFocused(false)}
              disabled={isLoading}
              className="w-full bg-transparent h-full pl-10 pr-10 rounded-xl text-sm text-foreground appearance-none outline-none cursor-pointer disabled:opacity-50"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                backgroundSize: '16px',
              }}
            >
              {PLANNER_DURATIONS.map((d) => (
                <option key={d.value} value={d.value} className="bg-surface text-foreground">
                  {d.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Travelers Select */}
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="planner-travelers" className="text-xs font-semibold text-accent uppercase tracking-wider pl-1">
            Travelers
          </label>
          <div
            className={cn(
              "relative flex items-center w-full bg-background/40 rounded-xl transition-all duration-300 h-11 border",
              travelersFocused 
                ? "border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60" 
                : "border-border/80 hover:bg-background/60 hover:border-border"
            )}
          >
            <FiUsers className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
            <select
              id="planner-travelers"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              onFocus={() => setTravelersFocused(true)}
              onBlur={() => setTravelersFocused(false)}
              disabled={isLoading}
              className="w-full bg-transparent h-full pl-10 pr-10 rounded-xl text-sm text-foreground appearance-none outline-none cursor-pointer disabled:opacity-50"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                backgroundSize: '16px',
              }}
            >
              {PLANNER_TRAVELERS.map((t) => (
                <option key={t.value} value={t.value} className="bg-surface text-foreground">
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>

      </form>

      {/* Action Button Row */}
      <div className="flex justify-center mt-6">
        <Button
          onClick={onSubmit}
          isDisabled={isLoading}
          className="px-10 h-12 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FiCpu className={cn("w-4.5 h-4.5", isLoading && "animate-spin")} />
          {isLoading ? 'Crafting Itinerary...' : 'Generate Plan'}
        </Button>
      </div>

    </div>
  );
}
