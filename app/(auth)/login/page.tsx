import React from 'react';
import { AuthLayout } from '@/components/sections/auth/AuthLayout';
import { LoginForm } from '@/components/sections/auth/LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In | Neutrip',
  description: 'Sign in to access your personal AI travel dashboard, saved routes, and custom itineraries.',
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to access your personal AI travel dashboard, saved routes, and custom itineraries."
    >
      <LoginForm />
    </AuthLayout>
  );
}
