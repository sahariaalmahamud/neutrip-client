export type Theme = 'light' | 'dark' | 'system';

export interface User {
  id: string;
  email: string;
  name?: string;
  role: 'user' | 'admin' | 'agent';
  avatarUrl?: string;
  createdAt: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

export interface SocialLinks {
  twitter?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
}
