import React from 'react';

interface DestinationGalleryProps {
  images: string[];
}

export function DestinationGallery({ images }: DestinationGalleryProps) {
  if (!images || images.length < 4) return null;

  return (
    <div className="flex flex-col gap-5 text-left w-full">
      <h2 className="text-xl md:text-2xl font-bold text-foreground">Photo Gallery</h2>
      
      {/* Asymmetric Premium Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto">
        {/* Main large image (Cols 1-2, Rows 1-2) */}
        <div className="md:col-span-2 md:row-span-2 h-64 md:h-[352px] rounded-2xl overflow-hidden border border-border group relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[0]}
            alt="Gallery view 1"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Top-right medium image (Cols 3-4, Row 1) */}
        <div className="md:col-span-2 h-44 md:h-[168px] rounded-2xl overflow-hidden border border-border group relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[1]}
            alt="Gallery view 2"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Bottom-right small image 1 (Col 3, Row 2) */}
        <div className="md:col-span-1 h-44 md:h-[168px] rounded-2xl overflow-hidden border border-border group relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[2]}
            alt="Gallery view 3"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Bottom-right small image 2 (Col 4, Row 2) */}
        <div className="md:col-span-1 h-44 md:h-[168px] rounded-2xl overflow-hidden border border-border group relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[3]}
            alt="Gallery view 4"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
