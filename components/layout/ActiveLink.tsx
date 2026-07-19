'use client';

import React from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
}

export function ActiveLink({
  children,
  className,
  activeClassName,
  exact = false,
  href,
  ...props
}: ActiveLinkProps) {
  const pathname = usePathname() || '';
  const hrefString = typeof href === 'string' ? href : href.pathname || '';

  const isActive = exact || hrefString === '/'
    ? pathname === hrefString
    : pathname.startsWith(hrefString);

  return (
    <Link
      href={href}
      className={cn(className, isActive && activeClassName)}
      {...props}
    >
      {children}
    </Link>
  );
}
