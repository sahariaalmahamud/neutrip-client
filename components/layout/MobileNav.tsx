'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { NAVIGATION_LINKS } from '@/constants/site';
import { ActiveLink } from './ActiveLink';
import { ThemeToggle } from './ThemeToggle';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu during render if the route changes, avoiding useEffect cascading render
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on window resize if screen becomes larger than md breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring' as const,
        stiffness: 380,
        damping: 35,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 380,
        damping: 35,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 30 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <div className="md:hidden flex items-center gap-4">
      {/* Theme toggle directly next to hamburger for mobile ease of access */}
      <ThemeToggle />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground hover:text-primary transition-colors focus-ring z-50 cursor-pointer"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/40 backdrop-blur-sm z-40"
            />

            {/* Menu Drawer */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-surface border-l border-border/80 z-40 p-6 pt-24 flex flex-col justify-between shadow-modal"
            >
              {/* Navigation Links */}
              <div className="flex flex-col gap-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2 px-3">
                  Navigation
                </span>
                
                <nav className="flex flex-col gap-2">
                  {NAVIGATION_LINKS.main.map((link) => (
                    <motion.div key={link.href} variants={itemVariants}>
                      <ActiveLink
                        href={link.href}
                        className="block py-3 px-4 rounded-xl text-base font-medium text-muted hover:text-foreground hover:bg-background/40 transition-all duration-200"
                        activeClassName="text-primary bg-primary/10 border-r-4 border-primary"
                      >
                        {link.label}
                      </ActiveLink>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Footer inside mobile menu */}
              <div className="flex flex-col gap-6 border-t border-border/60 pt-6">
                <nav className="grid grid-cols-2 gap-2 text-sm text-muted">
                  {NAVIGATION_LINKS.footer.map((link) => (
                    <motion.div key={link.href} variants={itemVariants}>
                      <ActiveLink
                        href={link.href}
                        className="block py-2 hover:text-foreground transition-colors"
                        activeClassName="text-primary font-medium"
                      >
                        {link.label}
                      </ActiveLink>
                    </motion.div>
                  ))}
                </nav>
                
                <motion.div variants={itemVariants} className="text-center text-xs text-muted/60 mt-2">
                  &copy; {new Date().getFullYear()} Neutrip. All rights reserved.
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
