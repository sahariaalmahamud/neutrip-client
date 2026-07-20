'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiLogOut } from 'react-icons/fi';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ActiveLink } from './ActiveLink';
import { ThemeToggle } from './ThemeToggle';
import { useAuth } from '@/providers/auth-provider';

const GUEST_MOBILE_LINKS = [
  { label: 'Home', href: '/' },
  // { label: 'Explore', href: '/explore' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'AI Planner', href: '/ai-planner' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Login', href: '/login' },
];

const AUTH_MOBILE_LINKS = [
  { label: 'Home', href: '/' },
  // { label: 'Explore', href: '/explore' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'AI Planner', href: '/ai-planner' },
  { label: 'Wishlist', href: '/wishlist' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Profile', href: '/profile' },
  { label: 'Settings', href: '/settings' },
  { label: 'Notifications', href: '/notifications' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Help Center', href: '/help' },
];

export function MobileNav() {
  const { isAuthenticated, logout, user } = useAuth();
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
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 30 },
    open: { opacity: 1, x: 0 },
  };

  const navLinks = isAuthenticated ? AUTH_MOBILE_LINKS : GUEST_MOBILE_LINKS;

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
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-surface border-l border-border/80 z-40 p-6 pt-20 flex flex-col justify-between shadow-modal overflow-y-auto"
            >
              {/* Navigation Links */}
              <div className="flex flex-col gap-4">
                {isAuthenticated && (
                  <div className="flex items-center gap-3 px-3 py-2 border-b border-border/40 pb-4 mb-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={user?.image || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'}
                      alt={user?.name || 'User'}
                      className="w-10 h-10 rounded-full object-cover border border-primary/40"
                    />
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold text-foreground">{user?.name || 'User'}</span>
                      <span className="text-[11px] text-muted">{user?.email || ''}</span>
                    </div>
                  </div>
                )}

                <span className="text-xs font-semibold uppercase tracking-wider text-accent px-3">
                  Navigation
                </span>

                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <motion.div key={link.href} variants={itemVariants}>
                      <ActiveLink
                        href={link.href}
                        className="block py-2.5 px-4 rounded-xl text-sm font-medium text-muted hover:text-foreground hover:bg-background/40 transition-all duration-200 text-left"
                        activeClassName="text-primary bg-primary/10 border-r-4 border-primary"
                      >
                        {link.label}
                      </ActiveLink>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Footer / Logout inside mobile menu */}
              <div className="flex flex-col gap-4 border-t border-border/60 pt-4 mt-6">
                {isAuthenticated && (
                  <motion.button
                    variants={itemVariants}
                    onClick={() => {
                      setIsOpen(false);
                      logout();
                    }}
                    className="flex items-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium text-danger hover:bg-danger/10 transition-colors w-full text-left cursor-pointer"
                  >
                    <FiLogOut className="w-4 h-4" />
                    Logout
                  </motion.button>
                )}

                <motion.div variants={itemVariants} className="text-center text-xs text-muted/60">
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
