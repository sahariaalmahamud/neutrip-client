'use client';

import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Card } from '@heroui/react';
import { FiCreditCard, FiDollarSign, FiHome, FiCheck } from 'react-icons/fi';
import { cn } from '@/utils/cn';

interface PaymentSelectorProps {
  paymentMethod: 'card' | 'paypal' | 'bank';
  setPaymentMethod: (method: 'card' | 'paypal' | 'bank') => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: FieldErrors<any>;
  isLoading: boolean;
}

export function PaymentSelector({
  paymentMethod,
  setPaymentMethod,
  register,
  errors,
  isLoading,
}: PaymentSelectorProps) {
  return (
    <Card className="glass-card p-5 md:p-6 border border-border/80 rounded-2xl bg-surface/30 text-left flex flex-col gap-5">
      <h3 className="font-bold text-base md:text-lg text-foreground pb-2 border-b border-border/40">
        Payment Method
      </h3>

      {/* Selectors grid tabs */}
      <div className="grid grid-cols-3 gap-3 w-full">
        {[
          { id: 'card', label: 'Credit Card', icon: FiCreditCard },
          { id: 'paypal', label: 'PayPal', icon: FiDollarSign },
          { id: 'bank', label: 'Bank Transfer', icon: FiHome },
        ].map((item) => {
          const Icon = item.icon;
          const isActive = paymentMethod === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setPaymentMethod(item.id as 'card' | 'paypal' | 'bank')}
              disabled={isLoading}
              className={cn(
                "p-3.5 rounded-xl border flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 relative outline-none text-center disabled:opacity-50",
                isActive
                  ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_-3px_rgba(6,182,212,0.2)]"
                  : "border-border/80 bg-background/30 text-muted hover:bg-surface/50 hover:text-foreground"
              )}
            >
              {isActive && (
                <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-primary text-background flex items-center justify-center">
                  <FiCheck className="w-2.5 h-2.5 stroke-[4]" />
                </span>
              )}
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-[10px] md:text-xs font-bold leading-none">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Display Inputs matching Selected Payment Type */}
      <div className="mt-2 min-h-24">
        {paymentMethod === 'card' && (
          <div className="flex flex-col gap-4">
            {/* Card Name */}
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="card-holder" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
                Cardholder Name
              </label>
              <input
                id="card-holder"
                type="text"
                {...register('cardName')}
                disabled={isLoading}
                placeholder="Alex Mercer"
                className="w-full bg-background/40 border border-border/80 h-10 px-3.5 rounded-xl text-foreground placeholder:text-muted text-sm outline-none hover:bg-background/60 focus:border-primary/60 transition-colors duration-200 disabled:opacity-50"
              />
              {errors.cardName && (
                <span className="text-[10px] font-semibold text-danger pl-1.5 mt-0.5">
                  {errors.cardName.message?.toString()}
                </span>
              )}
            </div>

            {/* Card Number */}
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="card-number" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
                Card Number
              </label>
              <input
                id="card-number"
                type="text"
                {...register('cardNumber')}
                disabled={isLoading}
                placeholder="4111 2222 3333 4444"
                className="w-full bg-background/40 border border-border/80 h-10 px-3.5 rounded-xl text-foreground placeholder:text-muted text-sm outline-none hover:bg-background/60 focus:border-primary/60 transition-colors duration-200 disabled:opacity-50"
              />
              {errors.cardNumber && (
                <span className="text-[10px] font-semibold text-danger pl-1.5 mt-0.5">
                  {errors.cardNumber.message?.toString()}
                </span>
              )}
            </div>

            {/* Grid row CVV and expiry */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1 w-full text-left">
                <label htmlFor="card-expiry" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
                  Expiry Date
                </label>
                <input
                  id="card-expiry"
                  type="text"
                  {...register('cardExpiry')}
                  disabled={isLoading}
                  placeholder="MM/YY"
                  className="w-full bg-background/40 border border-border/80 h-10 px-3.5 rounded-xl text-foreground placeholder:text-muted text-sm outline-none hover:bg-background/60 focus:border-primary/60 transition-colors duration-200 disabled:opacity-50"
                />
                {errors.cardExpiry && (
                  <span className="text-[10px] font-semibold text-danger pl-1.5 mt-0.5">
                    {errors.cardExpiry.message?.toString()}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1 w-full text-left">
                <label htmlFor="card-cvv" className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
                  CVV / CVC
                </label>
                <input
                  id="card-cvv"
                  type="text"
                  {...register('cardCvv')}
                  disabled={isLoading}
                  placeholder="123"
                  className="w-full bg-background/40 border border-border/80 h-10 px-3.5 rounded-xl text-foreground placeholder:text-muted text-sm outline-none hover:bg-background/60 focus:border-primary/60 transition-colors duration-200 disabled:opacity-50"
                />
                {errors.cardCvv && (
                  <span className="text-[10px] font-semibold text-danger pl-1.5 mt-0.5">
                    {errors.cardCvv.message?.toString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {paymentMethod === 'paypal' && (
          <div className="p-4 rounded-xl border border-border/60 bg-surface/40 flex items-center justify-center">
            <p className="text-xs md:text-sm text-muted leading-relaxed text-center">
              You will be securely redirected to PayPal to complete your transaction in the next step.
            </p>
          </div>
        )}

        {paymentMethod === 'bank' && (
          <div className="p-4 rounded-xl border border-border/60 bg-surface/40 flex flex-col gap-2">
            <h4 className="text-xs font-bold text-foreground">Bank Wire Transfer Coordinates</h4>
            <div className="flex flex-col gap-1 text-[11px] text-muted">
              <div><span className="font-semibold text-foreground/80">Beneficiary:</span> Neutrip Travel Inc.</div>
              <div><span className="font-semibold text-foreground/80">Bank Name:</span> Chase Manhattan Bank</div>
              <div><span className="font-semibold text-foreground/80">Routing/Sort Code:</span> 121000248</div>
              <div><span className="font-semibold text-foreground/80">Account Number:</span> 9876-5432-1098</div>
              <div className="mt-1.5 italic text-accent font-semibold">
                * Please attach your booking reference ID to the bank memo field.
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
