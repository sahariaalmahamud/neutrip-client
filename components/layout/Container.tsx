import React from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export function Container({
  children,
  className,
  as: Component = 'div',
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
