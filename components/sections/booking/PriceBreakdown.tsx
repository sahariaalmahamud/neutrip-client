'use client';

import React, { useState } from 'react';
import { PromoCode, MOCK_PROMO_CODES, SERVICE_FEE, TAX_RATE } from '@/constants/booking';
import { Card, Button } from '@heroui/react';
import { FiTag, FiTrash2, FiPercent } from 'react-icons/fi';
import { toast } from 'sonner';

interface PriceBreakdownProps {
  basePrice: number;
  appliedPromo: PromoCode | null;
  setAppliedPromo: (promo: PromoCode | null) => void;
  isLoading: boolean;
}

export function PriceBreakdown({ basePrice, appliedPromo, setAppliedPromo, isLoading }: PriceBreakdownProps) {
  const [promoInput, setPromoInput] = useState('');

  // Calculations
  const subtotal = basePrice;
  
  let discountAmount = 0;
  if (appliedPromo) {
    if (appliedPromo.discountType === 'percent') {
      discountAmount = (subtotal * appliedPromo.value) / 100;
    } else {
      discountAmount = appliedPromo.value;
    }
  }

  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const taxAmount = taxableAmount * TAX_RATE;
  const grandTotal = taxableAmount + taxAmount + SERVICE_FEE;

  const handleApplyPromoDirect = () => {
    if (!promoInput.trim()) return;

    // Case-insensitive verification check
    const matched = MOCK_PROMO_CODES.find(
      (p) => p.code.toLowerCase() === promoInput.trim().toLowerCase()
    );

    if (matched) {
      setAppliedPromo(matched);
      setPromoInput('');
      toast.success(`Promo code "${matched.code}" applied successfully!`);
    } else {
      toast.error('Invalid promo code. Please check and try again.');
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    toast.info('Promo code removed.');
  };

  return (
    <Card className="glass-card p-5 border border-border/80 rounded-2xl bg-surface/30 text-left flex flex-col gap-4">
      <h3 className="font-bold text-base text-foreground pb-2 border-b border-border/40">
        Price Summary
      </h3>

      {/* Itemized Price Details */}
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex justify-between items-center text-muted">
          <span>Base Price</span>
          <span className="font-semibold text-foreground">${subtotal.toFixed(2)}</span>
        </div>

        {appliedPromo && (
          <div className="flex justify-between items-center text-success font-semibold">
            <span className="flex items-center gap-1.5 text-xs">
              <FiPercent className="w-3.5 h-3.5" />
              Promo Code ({appliedPromo.code})
            </span>
            <span>-${discountAmount.toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between items-center text-muted">
          <span>Service Fee</span>
          <span className="font-semibold text-foreground">${SERVICE_FEE.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center text-muted font-normal">
          <span>Estimated Taxes (8%)</span>
          <span className="font-semibold text-foreground">${taxAmount.toFixed(2)}</span>
        </div>

        <div className="border-t border-border/40 pt-3 flex justify-between items-center font-black text-base text-foreground">
          <span>Total Price</span>
          <span className="text-lg text-primary">${grandTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Promo Code Input Block */}
      <div className="flex flex-col gap-2 mt-2 pt-3 border-t border-border/40">
        <label htmlFor="promo-input" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
          Promo Code
        </label>
        
        {appliedPromo ? (
          <div className="flex items-center justify-between p-2.5 rounded-xl border border-success/30 bg-success/5 text-xs text-success">
            <span className="flex items-center gap-2 font-semibold">
              <FiTag className="w-4 h-4" />
              {appliedPromo.code} Applied
            </span>
            <button
              type="button"
              onClick={handleRemovePromo}
              disabled={isLoading}
              className="text-danger hover:text-danger-soft transition-colors duration-200 cursor-pointer disabled:opacity-50"
              aria-label="Remove promo code"
            >
              <FiTrash2 className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="flex gap-2 w-full">
            <div className="relative flex items-center flex-grow bg-background/40 rounded-xl border border-border/80 h-10">
              <FiTag className="absolute left-3 text-muted w-4 h-4 pointer-events-none" />
              <input
                id="promo-input"
                type="text"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleApplyPromoDirect();
                  }
                }}
                disabled={isLoading}
                placeholder="e.g. WELCOME10"
                className="w-full bg-transparent h-full pl-9 pr-3 rounded-xl text-foreground placeholder:text-muted text-xs outline-none uppercase disabled:opacity-50"
              />
            </div>
            <Button
              type="button"
              onClick={handleApplyPromoDirect}
              isDisabled={isLoading || !promoInput.trim()}
              className="h-10 px-4 rounded-xl bg-primary text-background font-semibold hover:opacity-90 cursor-pointer text-xs transition-colors duration-200"
            >
              Apply
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}
