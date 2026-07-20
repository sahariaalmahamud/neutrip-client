import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Providers } from '@/providers/providers';
import { DEFAULT_METADATA } from '@/constants/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground font-sans flex flex-col">
        <Providers>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </Providers>
        <Script
          src="https://aics-sdcf.onrender.com/js/chat-widget.js?v=1784547618242"
          data-business-id="aec9497ae8a820c3b53b318c6dbba29d"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

