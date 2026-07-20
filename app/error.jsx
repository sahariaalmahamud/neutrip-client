'use client';

import React, { useEffect } from 'react';
import { ErrorState } from '@/components/sections/system/ErrorState';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log errors for production observability
    console.error('Neutrip Global Error Boundary:', error);
  }, [error]);

  return <ErrorState error={error} reset={reset} />;
}
