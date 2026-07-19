'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/providers/theme-provider';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    const handle = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(handle);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-border bg-surface/50 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full border border-border bg-surface/50 text-foreground hover:bg-surface hover:border-primary/40 focus-ring cursor-pointer transition-all duration-300 flex items-center justify-center relative overflow-hidden h-10 w-10"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {theme === 'dark' ? (
            <FiMoon className="w-4.5 h-4.5 text-primary" />
          ) : (
            <FiSun className="w-4.5 h-4.5 text-accent" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
