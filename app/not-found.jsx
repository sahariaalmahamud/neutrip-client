import React from 'react';
import { NotFoundState } from '@/components/sections/system/NotFoundState';

export const metadata = {
  title: 'Page Not Found | Neutrip',
  description: 'The requested page or travel route could not be found.',
};

export default function NotFound() {
  return <NotFoundState />;
}
