import React from 'react';
import { MOCK_BOOKINGS } from '@/constants/dashboard';
import { Card } from '@heroui/react';
import { FiAward } from 'react-icons/fi';

export function RecentBookings() {
  return (
    <div className="flex flex-col gap-5 text-left w-full">
      <h2 className="text-xl md:text-2xl font-bold text-foreground">Recent Bookings</h2>
      
      <Card className="glass-card p-5 border border-border/80 rounded-2xl bg-surface/30">
        <div className="flex flex-col gap-4">
          {MOCK_BOOKINGS.map((booking) => (
            <div
              key={booking.id}
              className="flex items-center justify-between gap-4 py-3 border-b border-border/40 last:border-0 last:pb-0 first:pt-0"
            >
              {/* Left Item Description */}
              <div className="flex items-center gap-3.5 text-left">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                  <FiAward className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground leading-tight">
                    {booking.serviceName}
                  </h4>
                  <span className="text-[10px] text-muted block mt-1 leading-none">
                    Booked on {booking.bookingDate}
                  </span>
                </div>
              </div>

              {/* Right price and status */}
              <div className="flex items-center gap-4.5">
                <div className="text-right">
                  <span className="text-xs font-extrabold text-foreground">${booking.price}</span>
                  <span className="text-[9px] text-muted block mt-0.5 leading-none">USD</span>
                </div>

                <span
                  className={`text-[9px] font-extrabold uppercase tracking-wider border px-2.5 py-0.5 rounded-full ${
                    booking.status === 'Completed'
                      ? 'bg-success/15 border-success/20 text-success'
                      : 'bg-primary/15 border-primary/20 text-primary'
                  }`}
                >
                  {booking.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
