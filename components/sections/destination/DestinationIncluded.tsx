import React from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

interface DestinationIncludedProps {
  included: string[];
  notIncluded: string[];
}

export function DestinationIncluded({ included, notIncluded }: DestinationIncludedProps) {
  return (
    <div className="flex flex-col gap-5 text-left w-full">
      <h2 className="text-xl md:text-2xl font-bold text-foreground">Package Inclusions &amp; Exclusions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Included Card */}
        <div className="p-6 rounded-2xl border border-border bg-surface/40 flex flex-col gap-4">
          <h3 className="font-semibold text-base text-foreground flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-success/15 text-success flex items-center justify-center text-sm">
              <FiCheck className="w-4 h-4" />
            </span>
            What&apos;s Included
          </h3>
          <ul className="flex flex-col gap-3">
            {included.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                <FiCheck className="w-4.5 h-4.5 text-success flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not Included Card */}
        <div className="p-6 rounded-2xl border border-border bg-surface/40 flex flex-col gap-4">
          <h3 className="font-semibold text-base text-foreground flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-danger/15 text-danger flex items-center justify-center text-sm">
              <FiX className="w-4 h-4" />
            </span>
            What&apos;s Not Included
          </h3>
          <ul className="flex flex-col gap-3">
            {notIncluded.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                <FiX className="w-4.5 h-4.5 text-danger flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
