import React from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { NAVIGATION_LINKS, SOCIAL_LINKS, SITE_DESCRIPTION } from '@/constants/site';
import { FiCompass, FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-12 md:py-16 transition-colors duration-300 w-full mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand Info Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 group focus-ring rounded-lg w-max">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-card group-hover:scale-105 transition-transform duration-300">
                <FiCompass className="w-5 h-5 text-background" />
              </div>
              <span className="font-bold tracking-tight text-xl text-foreground">
                Neu<span className="text-primary group-hover:text-accent transition-colors duration-300">Trip</span>
              </span>
            </Link>

            <p className="text-sm text-muted max-w-sm leading-relaxed">
              {SITE_DESCRIPTION} Built for the modern traveler seeking smart, customized, and seamless journey planning experiences.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5 mt-2">
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background border border-border/80 text-muted hover:text-primary hover:border-primary/40 flex items-center justify-center focus-ring transition-all duration-300 cursor-pointer"
                aria-label="Twitter"
              >
                <FiTwitter className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background border border-border/80 text-muted hover:text-primary hover:border-primary/40 flex items-center justify-center focus-ring transition-all duration-300 cursor-pointer"
                aria-label="Facebook"
              >
                <FiFacebook className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background border border-border/80 text-muted hover:text-primary hover:border-primary/40 flex items-center justify-center focus-ring transition-all duration-300 cursor-pointer"
                aria-label="Instagram"
              >
                <FiInstagram className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background border border-border/80 text-muted hover:text-primary hover:border-primary/40 flex items-center justify-center focus-ring transition-all duration-300 cursor-pointer"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Explore
            </span>
            <nav className="flex flex-col gap-2.5">
              {NAVIGATION_LINKS.main.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Support / Legal Column */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Company
            </span>
            <nav className="flex flex-col gap-2.5">
              {NAVIGATION_LINKS.footer.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Copyright Area */}
        <div className="border-t border-border/60 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted/80">
          <span>
            &copy; {new Date().getFullYear()} Neutrip Inc. All rights reserved.
          </span>
          <div className="flex gap-4">
            <Link href="/help" className="hover:text-foreground transition-colors">Help Center</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact Support</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
