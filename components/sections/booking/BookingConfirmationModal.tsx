'use client';

import React from 'react';
import { BookingPackage } from '@/constants/booking';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@heroui/react';
import { FiCheckCircle, FiCopy, FiCalendar, FiUser } from 'react-icons/fi';
import { toast } from 'sonner';
import Link from 'next/link';

interface BookingConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  pkg: BookingPackage;
  travelerName: string;
  travelerEmail: string;
  totalPrice: number;
}

export function BookingConfirmationModal({
  isOpen,
  onClose,
  pkg,
  travelerName,
  travelerEmail,
  totalPrice,
}: BookingConfirmationModalProps) {
  const referenceCode = 'NT-8392-748';

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referenceCode);
    toast.success('Confirmation code copied to clipboard!');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-md glass-card p-6 md:p-8 rounded-2xl border border-border shadow-modal text-center z-10 flex flex-col items-center gap-5"
          >
            {/* Success icon */}
            <div className="w-14 h-14 rounded-full bg-success/15 border border-success/20 text-success flex items-center justify-center animate-bounce mt-1">
              <FiCheckCircle className="w-8 h-8" />
            </div>

            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-black text-foreground tracking-tight leading-tight">
                Booking Confirmed!
              </h2>
              <p className="text-xs text-muted mt-1 max-w-xs mx-auto leading-relaxed">
                Your travel itinerary coordinates and vouchers have been compiled successfully.
              </p>
            </div>

            {/* Reference Receipt */}
            <div className="w-full bg-background/50 border border-border/80 rounded-xl p-4.5 text-left flex flex-col gap-3.5 mt-1.5">
              <div className="flex items-center justify-between border-b border-border/40 pb-2.5">
                <div>
                  <span className="text-[10px] text-muted/80 uppercase font-bold tracking-wider block">Booking Reference</span>
                  <span className="text-sm font-extrabold text-foreground tracking-wide">{referenceCode}</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="text-primary hover:text-accent p-1.5 rounded-lg border border-border bg-background/60 hover:bg-surface/50 cursor-pointer transition-colors duration-200"
                  aria-label="Copy confirmation code"
                >
                  <FiCopy className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex flex-col gap-2.5 text-xs text-muted">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    Trip Package:
                  </span>
                  <span className="font-semibold text-foreground truncate max-w-[170px]">{pkg.title}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5">
                    <FiUser className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    Lead Traveler:
                  </span>
                  <span className="font-semibold text-foreground truncate max-w-[190px]">
                    {travelerName} ({travelerEmail})
                  </span>
                </div>

                <div className="flex justify-between items-center border-t border-border/40 pt-2.5 font-bold text-sm text-foreground">
                  <span>Amount Paid</span>
                  <span className="text-primary">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Redirection Links Row */}
            <div className="grid grid-cols-2 gap-3 w-full mt-3">
              <Link href="/dashboard" className="w-full">
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="w-full h-10.5 rounded-xl border border-border bg-background/50 hover:bg-surface text-foreground font-semibold flex items-center justify-center cursor-pointer text-xs"
                >
                  Go to Dashboard
                </Button>
              </Link>
              
              <Button
                onClick={onClose}
                className="h-10.5 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 flex items-center justify-center cursor-pointer text-xs transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                Close Receipt
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
