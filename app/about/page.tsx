import React from 'react';
import { Container } from '@/components/layout/Container';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { AboutMission } from '@/components/sections/about/AboutMission';
import { AboutValues } from '@/components/sections/about/AboutValues';
import { AboutTeam } from '@/components/sections/about/AboutTeam';
import { AboutCTA } from '@/components/sections/about/AboutCTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Neutrip',
  description: 'Learn about Neutrip, our mission to democratize custom eco-conscious itineraries, our values, and meet our engineering team.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background pb-16">
      <AboutHero />
      <Container className="flex flex-col gap-6 relative z-10">
        <AboutMission />
        <AboutValues />
        <AboutTeam />
        <AboutCTA />
      </Container>
    </div>
  );
}
