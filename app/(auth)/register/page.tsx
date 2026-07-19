import React from 'react';
import { AuthLayout } from '@/components/sections/auth/AuthLayout';
import { RegisterForm } from '@/components/sections/auth/RegisterForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Account | Neutrip',
  description: 'Join Neutrip to plan itineraries, map budgets, and explore the world with our smart travel assistant.',
};

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join Neutrip to plan itineraries, map budgets, and explore the world with our smart travel assistant."
    >
      <RegisterForm />
    </AuthLayout>
  );
}
