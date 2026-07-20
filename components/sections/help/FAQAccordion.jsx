'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import { Card } from '@heroui/react';
import { toast } from 'sonner';
import { cn } from '@/utils/cn';

export function FAQAccordion({ faqs }) {
  const [expandedId, setExpandedId] = useState(faqs[0]?.id || null);
  const [votedIds, setVotedIds] = useState({});

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleVote = (id, helpful) => {
    if (votedIds[id]) {
      toast.info('You have already submitted feedback for this answer.');
      return;
    }
    setVotedIds((prev) => ({ ...prev, [id]: true }));
    toast.success(
      helpful ? 'Thank you! We are glad this helped.' : 'Thanks for your feedback. We will improve this answer.'
    );
  };

  return (
    <div className="flex flex-col gap-4 text-left w-full">
      {faqs.map((item) => {
        const isExpanded = expandedId === item.id;

        return (
          <Card
            key={item.id}
            className={cn(
              'glass-card rounded-2xl border transition-all duration-300 overflow-hidden shadow-card',
              isExpanded
                ? 'bg-surface/80 border-primary/50 shadow-primary/5'
                : 'bg-surface/40 border-border/80 hover:border-border hover:bg-surface/60'
            )}
          >
            {/* Question Bar */}
            <button
              onClick={() => toggleExpand(item.id)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
            >
              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                {item.popular && (
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded-md flex-shrink-0">
                    Popular
                  </span>
                )}
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-md flex-shrink-0">
                  {item.category}
                </span>
                <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors duration-200 truncate md:whitespace-normal">
                  {item.question}
                </h3>
              </div>

              <div
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center border transition-transform duration-300 flex-shrink-0',
                  isExpanded
                    ? 'bg-primary text-background border-primary rotate-180'
                    : 'bg-background/50 border-border/80 text-muted'
                )}
              >
                <FiChevronDown className="w-4 h-4" />
              </div>
            </button>

            {/* Collapsible Answer Content */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-5 pb-5 pt-1 border-t border-border/40 text-xs md:text-sm text-muted leading-relaxed flex flex-col gap-4">
                    <p>{item.answer}</p>

                    {/* Was this helpful? row */}
                    <div className="flex items-center justify-between pt-3 border-t border-border/30 text-xs">
                      <span className="text-[11px] text-muted/70 font-medium">
                        Was this answer helpful?
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleVote(item.id, true)}
                          className="p-1.5 rounded-lg border border-border bg-background/50 hover:bg-primary/10 hover:border-primary/40 hover:text-primary text-muted transition-all duration-200 cursor-pointer flex items-center gap-1 text-[11px]"
                        >
                          <FiThumbsUp className="w-3.5 h-3.5" />
                          Yes
                        </button>
                        <button
                          onClick={() => handleVote(item.id, false)}
                          className="p-1.5 rounded-lg border border-border bg-background/50 hover:bg-danger/10 hover:border-danger/40 hover:text-danger text-muted transition-all duration-200 cursor-pointer flex items-center gap-1 text-[11px]"
                        >
                          <FiThumbsDown className="w-3.5 h-3.5" />
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        );
      })}
    </div>
  );
}
