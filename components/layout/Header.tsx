import React from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { NAVIGATION_LINKS } from '@/constants/site';
import { ActiveLink } from './ActiveLink';
import { ThemeToggle } from './ThemeToggle';
import { MobileNav } from './MobileNav';
import { FiCompass } from 'react-icons/fi';

export function Header() {
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
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {NAVIGATION_LINKS.main.map((link) => (
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
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
