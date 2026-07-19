'use client';

import React from 'react';
import { motion as framerMotion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';

interface SectionProps extends Omit<HTMLMotionProps<'section'>, 'title' | 'subtitle'> {
  children: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  spacing?: 'sm' | 'md' | 'lg';
  motion?: boolean;
}

export function Section({
  children,
  title,
  subtitle,
  description,
  spacing = 'md',
  className,
  motion = false,
  ...props
}: SectionProps) {
  const spacingClasses = {
    sm: 'py-8 md:py-12',
    md: 'py-16 md:py-24',
    lg: 'py-24 md:py-36',
  };

  const combinedClassName = cn('space-section', spacingClasses[spacing], className);

  if (motion) {
    return (
      <framerMotion.section className={combinedClassName} {...props}>
        {(title || subtitle || description) && (
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4">
            {subtitle && (
              <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="font-h2 text-text mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="font-caption text-muted max-w-2xl">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </framerMotion.section>
    );
  }

  // Filter out Framer Motion properties to prevent HTML console validation warnings
  const standardProps = { ...props } as Record<string, unknown>;
  const motionKeys = [
    'variants', 'initial', 'animate', 'exit', 'transition',
    'whileHover', 'whileTap', 'whileInView', 'viewport',
    'onAnimationStart', 'onAnimationComplete', 'onUpdate', 'onPan',
    'onPanStart', 'onPanSessionStart', 'onPanEnd', 'onTap', 'onTapStart',
    'onTapCancel', 'onHoverStart', 'onHoverEnd', 'layout', 'layoutId'
  ];

  motionKeys.forEach((key) => {
    delete standardProps[key];
  });

  return (
    <section
      className={combinedClassName}
      {...(standardProps as React.HTMLAttributes<HTMLElement>)}
    >
      {(title || subtitle || description) && (
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4">
          {subtitle && (
            <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="font-h2 text-text mb-4">
              {title}
            </h2>
          )}
          {description && (
            <p className="font-caption text-muted max-w-2xl">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
