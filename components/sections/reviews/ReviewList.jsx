'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { Container } from '@/components/layout/Container';
import { ReviewsHero } from '@/components/sections/reviews/ReviewsHero';
import { RatingSummary } from '@/components/sections/reviews/RatingSummary';
import { ReviewFilters } from '@/components/sections/reviews/ReviewFilters';
import { ReviewCard } from '@/components/sections/reviews/ReviewCard';
import { EmptyReviews } from '@/components/sections/reviews/EmptyReviews';
import { WriteReviewModal } from '@/components/sections/reviews/WriteReviewModal';
import {
  REVIEWS_STORAGE_KEY,
  MOCK_REVIEWS,
} from '@/constants/reviews';

function saveToStorage(items) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore parse errors
  }
}

export function ReviewList() {
  const [reviews, setReviews] = useState(MOCK_REVIEWS);
  const [search, setSearch] = useState('');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingReview, setEditingReview] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(REVIEWS_STORAGE_KEY);
      if (raw) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setReviews(JSON.parse(raw));
      } else {
        localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(MOCK_REVIEWS));
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  const total = reviews.length;
  const averageRating =
    total > 0
      ? (reviews.reduce((acc, r) => acc + r.rating, 0) / total).toFixed(1)
      : '0.0';

  const handleOpenWriteModal = () => {
    setEditingReview(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (review) => {
    setEditingReview(review);
    setIsModalOpen(true);
  };

  const handleSaveReview = (reviewData) => {
    setReviews((prev) => {
      const exists = prev.some((r) => r.id === reviewData.id);
      let updated;
      if (exists) {
        updated = prev.map((r) => (r.id === reviewData.id ? reviewData : r));
        toast.success('Review updated successfully!');
      } else {
        updated = [reviewData, ...prev];
        toast.success('Thank you! Your review has been published.');
      }
      saveToStorage(updated);
      return updated;
    });
  };

  const handleDeleteReview = (id) => {
    setReviews((prev) => {
      const updated = prev.filter((r) => r.id !== id);
      saveToStorage(updated);
      toast.success('Review deleted');
      return updated;
    });
  };

  const handleReset = () => {
    setSearch('');
    setRatingFilter('all');
    setSortBy('newest');
  };

  // Derived filtered & sorted array
  const filtered = reviews
    .filter((r) => {
      const query = search.toLowerCase();
      const matchesSearch =
        r.destinationName.toLowerCase().includes(query) ||
        r.title.toLowerCase().includes(query) ||
        r.comment.toLowerCase().includes(query);

      let matchesRating = true;
      if (ratingFilter === '5') {
        matchesRating = r.rating === 5;
      } else if (ratingFilter === '4') {
        matchesRating = r.rating === 4;
      } else if (ratingFilter === '3') {
        matchesRating = r.rating <= 3;
      }

      return matchesSearch && matchesRating;
    })
    .sort((a, b) => {
      if (sortBy === 'oldest') {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
      if (sortBy === 'highest') {
        return b.rating - a.rating;
      }
      if (sortBy === 'lowest') {
        return a.rating - b.rating;
      }
      // default: newest first
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  const hasActiveFilter = search !== '' || ratingFilter !== 'all' || sortBy !== 'newest';

  return (
    <>
      <ReviewsHero totalReviews={total} averageRating={averageRating} />

      <RatingSummary reviews={reviews} onOpenWriteModal={handleOpenWriteModal} />

      <ReviewFilters
        search={search}
        setSearch={setSearch}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onReset={handleReset}
        hasActiveFilter={hasActiveFilter}
      />

      <section className="py-10 px-4 w-full bg-background flex-grow">
        <Container>
          {filtered.length === 0 ? (
            <EmptyReviews
              hasActiveFilter={hasActiveFilter}
              onReset={handleReset}
              onOpenWriteModal={handleOpenWriteModal}
            />
          ) : (
            <AnimatePresence mode="popLayout">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {filtered.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ReviewCard
                      review={item}
                      onEdit={handleOpenEditModal}
                      onDelete={handleDeleteReview}
                    />
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          )}
        </Container>
      </section>

      <WriteReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSaveReview}
        initialData={editingReview}
      />
    </>
  );
}
