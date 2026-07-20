'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { ActiveLink } from './ActiveLink';
import { ThemeToggle } from './ThemeToggle';
import { MobileNav } from './MobileNav';
import { useAuth } from '@/providers/auth-provider';
import {
  FiCompass,
  FiUser,
  FiGrid,
  FiSettings,
  FiBell,
  FiStar,
  FiHelpCircle,
  FiLogOut,
  FiChevronDown,
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const GUEST_LINKS = [
  { label: 'Home', href: '/' },
  // { label: 'Explore', href: '/explore' },
  { label: 'Explore Destinations', href: '/destinations' },
  { label: 'AI Planner', href: '/ai-planner' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const AUTH_LINKS = [
  { label: 'Home', href: '/' },
  // { label: 'Explore', href: '/explore' },
  { label: 'Explore Destinations', href: '/destinations' },
  { label: 'AI Planner', href: '/ai-planner' },
  { label: 'Wishlist', href: '/wishlist' },
];

export function Header() {
  const { isAuthenticated, logout, user } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = isAuthenticated ? AUTH_LINKS : GUEST_LINKS;

  return (
    <header className="sticky top-0 z-50 glass-nav w-full transition-all duration-300">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group focus-ring rounded-lg">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-card group-hover:scale-105 transition-transform duration-300">
              <FiCompass className="w-5 h-5 text-background" />
            </div>
            <span className="font-bold tracking-tight text-xl text-foreground">
              Neu<span className="text-primary group-hover:text-accent transition-colors duration-300">trip</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <ActiveLink
                key={link.href}
                href={link.href}
                className="text-muted hover:text-foreground transition-colors duration-200 relative py-1.5 px-0.5 group/link"
                activeClassName="text-primary font-semibold"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
              </ActiveLink>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex">
              <ThemeToggle />
            </div>

            {isAuthenticated ? (
              /* User Avatar & Dropdown */
              <div className="relative hidden md:block" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 p-1.5 rounded-full border border-border/80 bg-surface/50 hover:border-primary/50 transition-all duration-200 cursor-pointer focus-ring"
                  aria-label="User account menu"
                  aria-expanded={dropdownOpen}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={user?.image || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'}
                    alt={user?.name || 'User'}
                    className="w-8 h-8 rounded-full object-cover border border-primary/30"
                  />
                  <FiChevronDown className={`w-3.5 h-3.5 text-muted transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-56 glass-card p-2 rounded-2xl border border-border shadow-modal bg-surface/95 backdrop-blur-md z-50 flex flex-col gap-1 text-left"
                    >
                      {/* User Info Header */}
                      <div className="px-3 py-2 border-b border-border/40">
                        <p className="text-xs font-bold text-foreground truncate">{user?.name || 'User'}</p>
                        <p className="text-[11px] text-muted truncate">{user?.email || ''}</p>
                      </div>

                      {/* Dropdown Menu Items */}
                      <Link
                        href="/dashboard"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-muted hover:text-foreground hover:bg-background/60 rounded-xl transition-colors"
                      >
                        <FiGrid className="w-4 h-4 text-primary" />
                        Dashboard
                      </Link>

                      <Link
                        href="/profile"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-muted hover:text-foreground hover:bg-background/60 rounded-xl transition-colors"
                      >
                        <FiUser className="w-4 h-4 text-primary" />
                        Profile
                      </Link>

                      <Link
                        href="/settings"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-muted hover:text-foreground hover:bg-background/60 rounded-xl transition-colors"
                      >
                        <FiSettings className="w-4 h-4 text-primary" />
                        Settings
                      </Link>

                      <Link
                        href="/notifications"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-muted hover:text-foreground hover:bg-background/60 rounded-xl transition-colors"
                      >
                        <FiBell className="w-4 h-4 text-primary" />
                        Notifications
                      </Link>

                      <Link
                        href="/reviews"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-muted hover:text-foreground hover:bg-background/60 rounded-xl transition-colors"
                      >
                        <FiStar className="w-4 h-4 text-primary" />
                        Reviews
                      </Link>

                      <Link
                        href="/help"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-muted hover:text-foreground hover:bg-background/60 rounded-xl transition-colors"
                      >
                        <FiHelpCircle className="w-4 h-4 text-primary" />
                        Help Center
                      </Link>

                      <button
                        onClick={() => {
                          setDropdownOpen(false);
                          logout();
                        }}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-danger hover:bg-danger/10 rounded-xl transition-colors border-t border-border/40 mt-1 cursor-pointer w-full text-left"
                      >
                        <FiLogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              /* Guest Login Button */
              <Link href="/login" className="hidden md:block">
                <button className="px-4 py-2 rounded-xl bg-primary text-background font-semibold text-xs hover:opacity-90 transition-all shadow-md shadow-primary/20 cursor-pointer">
                  Login
                </button>
              </Link>
            )}

            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
