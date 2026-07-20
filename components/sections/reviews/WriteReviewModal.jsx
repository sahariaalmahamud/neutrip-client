'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@heroui/react';
import { FiStar, FiX, FiCheck } from 'react-icons/fi';
import { toast } from 'sonner';

export function WriteReviewModal({ isOpen, onClose, onSubmit, initialData }) {
  const [userName, setUserName] = useState('');
  const [destinationName, setDestinationName] = useState('');
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (initialData) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUserName(initialData.userName || '');
      setDestinationName(initialData.destinationName || '');
      setRating(initialData.rating || 5);
      setTitle(initialData.title || '');
      setComment(initialData.comment || '');
    } else {
      setUserName('Sarah Jenkins');
      setDestinationName('Santorini, Greece');
      setRating(5);
      setTitle('');
      setComment('');
    }
  }, [initialData, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!destinationName.trim() || !title.trim() || !comment.trim()) {
      toast.error('Please fill in all required review fields');
      return;
    }

    onSubmit({
      id: initialData?.id || `user-rev-${Date.now()}`,
      userName: userName.trim() || 'Anonymous Traveler',
      userAvatar:
        initialData?.userAvatar ||
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      destinationId: initialData?.destinationId || 'exp-custom',
      destinationName: destinationName.trim(),
      rating,
      title: title.trim(),
      comment: comment.trim(),
      createdAt: initialData?.createdAt || new Date().toISOString(),
      verified: true,
      isUserOwned: true,
    });

    onClose();
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

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-lg glass-card p-6 md:p-8 rounded-3xl border border-border shadow-modal text-left z-10 flex flex-col gap-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border/40 pb-4">
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  {initialData ? 'Edit Review' : 'Write a Review'}
                </h2>
                <p className="text-xs text-muted mt-0.5">
                  Share your experience with the Neutrip community.
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-surface text-muted hover:text-foreground cursor-pointer transition-colors duration-200"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Reviewer Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
                  Your Name
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your name..."
                  className="w-full h-11 px-4 rounded-xl bg-background/50 border border-border/80 text-foreground placeholder:text-muted text-sm outline-none focus:border-primary/60"
                  required
                />
              </div>

              {/* Destination */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
                  Destination
                </label>
                <input
                  type="text"
                  value={destinationName}
                  onChange={(e) => setDestinationName(e.target.value)}
                  placeholder="e.g. Kyoto, Japan or Santorini, Greece..."
                  className="w-full h-11 px-4 rounded-xl bg-background/50 border border-border/80 text-foreground placeholder:text-muted text-sm outline-none focus:border-primary/60"
                  required
                />
              </div>

              {/* Star Rating Picker */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
                  Rating Score
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 cursor-pointer transition-transform duration-150 hover:scale-110"
                    >
                      <FiStar
                        className={`w-6 h-6 ${
                          star <= rating ? 'fill-accent text-accent' : 'text-border'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-foreground ml-2">
                    {rating} / 5 Stars
                  </span>
                </div>
              </div>

              {/* Review Title */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
                  Review Headline
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Summarize your travel experience..."
                  className="w-full h-11 px-4 rounded-xl bg-background/50 border border-border/80 text-foreground placeholder:text-muted text-sm outline-none focus:border-primary/60"
                  required
                />
              </div>

              {/* Comment Body */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-accent uppercase tracking-wider pl-0.5">
                  Detailed Review
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={4}
                  placeholder="Tell us what made this journey special..."
                  className="w-full p-4 rounded-xl bg-background/50 border border-border/80 text-foreground placeholder:text-muted text-sm outline-none focus:border-primary/60 resize-none"
                  required
                />
              </div>

              {/* Submit / Cancel row */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-border/40 mt-2">
                <Button
                  type="button"
                  onClick={onClose}
                  className="h-10 rounded-xl border border-border bg-background/50 hover:bg-surface text-foreground font-semibold px-4 text-xs cursor-pointer"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="h-10 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 px-5 text-xs cursor-pointer flex items-center gap-1.5"
                >
                  <FiCheck className="w-4 h-4" />
                  {initialData ? 'Save Changes' : 'Submit Review'}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
