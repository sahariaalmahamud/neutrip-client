import React from 'react';
import { Container } from '@/components/layout/Container';
import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactInfo } from '@/components/sections/contact/ContactInfo';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { ContactMap } from '@/components/sections/contact/ContactMap';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Neutrip',
  description: 'Get in touch with the Neutrip team. Send us queries about planner settings, custom booking confirmation receipts, or green certifications.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background pb-16">
      <ContactHero />
      <Container className="flex flex-col gap-8 relative z-10">
        <ContactInfo />
        
        {/* Split grid for Form and Map coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          <div className="lg:col-span-7 w-full">
            <ContactForm />
          </div>
          <div className="lg:col-span-5 w-full">
            <ContactMap />
          </div>
        </div>
      </Container>
    </div>
  );
}
