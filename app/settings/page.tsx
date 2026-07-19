import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SettingsForm } from '@/components/sections/settings/SettingsForm';

export const metadata: Metadata = {
  title: 'Settings | Neutrip',
  description: 'Manage your Neutrip account settings, notification preferences, theme, language, currency, and privacy options.',
};

export default function SettingsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background pb-16 pt-28">
      <Container className="flex flex-col gap-6 relative z-10 max-w-3xl">
        <div className="text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Account
          </span>
          <h1 className="font-display text-2xl md:text-3xl font-extrabold text-foreground tracking-tight mt-1">
            Settings
          </h1>
          <p className="text-sm text-muted mt-1.5">
            Manage your profile preferences, notifications, and privacy options.
          </p>
        </div>

        <SettingsForm />
      </Container>
    </div>
  );
}
