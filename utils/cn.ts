import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names and merges conflicting Tailwind classes.
 * @param inputs - Class names or conditional class objects
 * @returns Standardized space-separated class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
