import React from 'react';
import { AuthLayout } from '@/components/sections/auth/AuthLayout';
import { ForgotPasswordForm } from '@/components/sections/auth/ForgotPasswordForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forgot Password | Neutrip',
  description: 'Enter your email address and we will send you instructions to safely reset your account password.',
};

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your email address and we will send you instructions to safely reset your account password."
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
