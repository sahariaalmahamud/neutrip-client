'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { PlannerHero } from '@/components/sections/ai-planner/PlannerHero';
import { PlannerForm } from '@/components/sections/ai-planner/PlannerForm';
import { TripSummary } from '@/components/sections/ai-planner/TripSummary';
import { ItineraryTimeline } from '@/components/sections/ai-planner/ItineraryTimeline';
import { BudgetBreakdown } from '@/components/sections/ai-planner/BudgetBreakdown';
import { PlannerTips } from '@/components/sections/ai-planner/PlannerTips';
import { MOCK_ITINERARIES, PlannerTripPlan } from '@/constants/aiPlanner';
import { FiCpu } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp } from '@/constants/motion';
import { toast } from 'sonner';

const LOADING_PHASES = [
  'Analyzing climate conditions & local guides availability...',
  'Curating optimal routes and local experience coordinates...',
  'Calculating cost estimates and budget breakdowns...',
];

export default function AIPlannerPage() {
  // Input fields selectors states
  const [destination, setDestination] = useState('Kyoto');
  const [budget, setBudget] = useState('standard');
  const [duration, setDuration] = useState('3');
  const [style, setStyle] = useState('Cultural');
  const [travelers, setTravelers] = useState('2');

  // Simulated AI loading sequence states
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  // Preserve the generated plan in separate state so it doesn't change when inputs change
  const [generatedPlan, setGeneratedPlan] = useState<PlannerTripPlan | null>(null);

  // Simulated loading phase text updates
  useEffect(() => {
    if (!isLoading) return;

    const timer1 = setTimeout(() => setLoadingStep(1), 900);
    const timer2 = setTimeout(() => setLoadingStep(2), 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isLoading]);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return; // Form button locked during active compilation

    setIsLoading(true);
    setLoadingStep(0);

    // Simulate AI generation delay
    setTimeout(() => {
      // Look up target base itinerary from constants database
      const baseMap = MOCK_ITINERARIES[destination] || MOCK_ITINERARIES.Kyoto;
      const finalItinerary = baseMap[duration] || baseMap['3'];

      const constructedPlan: PlannerTripPlan = {
        destination,
        title: finalItinerary.title,
        description: finalItinerary.description,
        style: style,
        duration: `${duration} Days`,
        estimatedTotal: finalItinerary.estimatedTotal,
        budgetBreakdown: finalItinerary.budgetBreakdown,
        itinerary: finalItinerary.itinerary,
        tips: finalItinerary.tips,
      };

      setGeneratedPlan(constructedPlan);
      setIsLoading(false);
      toast.success(`Successfully generated your custom AI itinerary for ${destination}!`);
    }, 2700);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-background pb-16">
      <PlannerHero />

      <Container className="py-8 relative z-10">
        {/* Planner Settings Form */}
        <PlannerForm
          destination={destination}
          setDestination={setDestination}
          budget={budget}
          setBudget={setBudget}
          duration={duration}
          setDuration={setDuration}
          style={style}
          setStyle={setStyle}
          travelers={travelers}
          setTravelers={setTravelers}
          onSubmit={handleGenerate}
          isLoading={isLoading}
        />

        {/* Display Loader Loop or Final Itinerary */}
        <div className="mt-12 w-full">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loader"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="glass-card shadow-modal p-8 border border-border rounded-2xl max-w-lg mx-auto flex flex-col items-center gap-6"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center animate-pulse">
                  <FiCpu className="w-7 h-7 animate-spin-[spin_3s_linear_infinite]" />
                </div>
                
                <div className="w-full text-center">
                  <h4 className="font-semibold text-base text-foreground mb-1.5">AI Engine Processing</h4>
                  <p className="text-xs text-muted h-8 leading-relaxed max-w-xs mx-auto transition-all duration-300">
                    {LOADING_PHASES[loadingStep]}
                  </p>
                </div>

                {/* Progress bar line */}
                <div className="w-full bg-background rounded-full h-1.5 overflow-hidden border border-border/40">
                  <motion.div
                    className="bg-primary h-full rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ 
                      width: loadingStep === 0 ? '33%' : loadingStep === 1 ? '66%' : '95%' 
                    }}
                    transition={{ duration: 0.9, ease: 'easeInOut' }}
                  />
                </div>
              </motion.div>
            ) : (
              generatedPlan && (
                <motion.div
                  key="results"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-left items-start"
                >
                  {/* Left Schedule Column */}
                  <div className="lg:col-span-8 flex flex-col gap-10">
                    <TripSummary plan={generatedPlan} />
                    <ItineraryTimeline plan={generatedPlan} />
                    <PlannerTips plan={generatedPlan} />
                  </div>

                  {/* Right Sticky Budget Sidebar */}
                  <div className="lg:col-span-4 relative">
                    <div className="lg:sticky lg:top-24 z-10 w-full">
                      <BudgetBreakdown plan={generatedPlan} />
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
}
