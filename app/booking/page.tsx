'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Container } from '@/components/layout/Container';
import { MOCK_PACKAGES, BookingPackage, PromoCode, SERVICE_FEE, TAX_RATE } from '@/constants/booking';
import { TravelerForm, travelerSchema } from '@/components/sections/booking/TravelerForm';
import { PaymentSelector } from '@/components/sections/booking/PaymentSelector';
import { PackageSummary } from '@/components/sections/booking/PackageSummary';
import { PriceBreakdown } from '@/components/sections/booking/PriceBreakdown';
import { BookingConfirmationModal } from '@/components/sections/booking/BookingConfirmationModal';
import { Button } from '@heroui/react';
import { FiLoader, FiCpu } from 'react-icons/fi';
import { toast } from 'sonner';

// Define complete booking schema combining traveler and optional payment details
const bookingSchema = travelerSchema.extend({
  cardName: z.string().optional(),
  cardNumber: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCvv: z.string().optional(),
});

type BookingFormInput = z.infer<typeof bookingSchema>;

export default function BookingPage() {
  const [selectedPackage, setSelectedPackage] = useState<BookingPackage>(MOCK_PACKAGES[0]);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'bank'>('card');
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);
  
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  
  // RHF hook instanced in parent to preserve values when changing packages/tabs
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    getValues,
  } = useForm<BookingFormInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      specialRequests: '',
      cardName: '',
      cardNumber: '',
      cardExpiry: '',
      cardCvv: '',
    },
  });

  // Calculate final checkout pricing
  const subtotal = selectedPackage.basePrice;
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

  const handleCheckoutSubmit = (data: BookingFormInput) => {
    if (isLoading) return;

    // Perform manual inline validation on Card details if 'card' payment is active
    if (paymentMethod === 'card') {
      let hasError = false;
      if (!data.cardName?.trim()) {
        setError('cardName', { message: 'Cardholder name is required' });
        hasError = true;
      }
      if (!data.cardNumber?.trim() || data.cardNumber.replace(/\s/g, '').length !== 16) {
        setError('cardNumber', { message: 'Card number must be 16 digits' });
        hasError = true;
      }
      if (!data.cardExpiry?.trim() || !/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(data.cardExpiry)) {
        setError('cardExpiry', { message: 'Expiry date must be MM/YY' });
        hasError = true;
      }
      if (!data.cardCvv?.trim() || !/^\d{3,4}$/.test(data.cardCvv)) {
        setError('cardCvv', { message: 'CVV must be 3 or 4 digits' });
        hasError = true;
      }
      if (hasError) {
        toast.error('Please resolve the credit card validation errors.');
        return;
      }
    }

    // Lock actions and trigger loader spinner
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsConfirmationOpen(true);
      toast.success('Booking processed successfully!');
    }, 2200);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-background pb-16 pt-28">
      {/* Background glowing radial blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-0" />

      <Container className="relative z-10 text-left">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Checkout Process
          </span>
          <h1 className="font-display text-foreground text-3xl font-extrabold tracking-tight mt-1">
            Complete Your Booking
          </h1>
          <p className="text-sm text-muted mt-1.5 max-w-xl">
            Confirm traveler credentials and select secure payment options.
          </p>
        </div>

        {/* Dynamic Package Selection Selector */}
        <div className="flex justify-between items-center bg-surface/20 border border-border p-4.5 rounded-2xl mb-8">
          <div>
            <h4 className="font-bold text-sm text-foreground">Select Travel Destination</h4>
            <span className="text-[10px] text-muted">Toggle packages without losing entered traveler details</span>
          </div>
          <select
            value={selectedPackage.id}
            onChange={(e) => {
              const matched = MOCK_PACKAGES.find((p) => p.id === e.target.value);
              if (matched) setSelectedPackage(matched);
            }}
            disabled={isLoading}
            className="bg-background text-foreground border border-border/80 rounded-xl px-3 py-1.5 text-xs font-semibold outline-none cursor-pointer hover:border-primary/40 transition-colors duration-200"
          >
            {MOCK_PACKAGES.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            ))}
          </select>
        </div>

        {/* Grid Split Content columns */}
        <form onSubmit={handleSubmit(handleCheckoutSubmit)} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          
          {/* Left Inputs column */}
          <div className="lg:col-span-7 flex flex-col gap-8 w-full">
            <TravelerForm register={register} errors={errors} isLoading={isLoading} />
            
            <PaymentSelector
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              register={register}
              errors={errors}
              isLoading={isLoading}
            />
          </div>

          {/* Right Summary column */}
          <div className="lg:col-span-5 relative w-full">
            <div className="lg:sticky lg:top-24 z-10 w-full flex flex-col gap-6">
              <PackageSummary pkg={selectedPackage} />
              
              <PriceBreakdown
                basePrice={selectedPackage.basePrice}
                appliedPromo={appliedPromo}
                setAppliedPromo={setAppliedPromo}
                isLoading={isLoading}
              />

              {/* Complete Booking confirmation button */}
              <Button
                type="submit"
                isDisabled={isLoading}
                className="w-full h-12 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <FiLoader className="w-4.5 h-4.5 animate-spin" />
                    Processing Payment...
                  </>
                ) : (
                  <>
                    <FiCpu className="w-4.5 h-4.5" />
                    Complete Booking
                  </>
                )}
              </Button>
            </div>
          </div>

        </form>
      </Container>

      {/* Confirmation receipt modal */}
      <BookingConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        pkg={selectedPackage}
        travelerName={getValues('name')}
        travelerEmail={getValues('email')}
        totalPrice={grandTotal}
      />
    </div>
  );
}
