import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Review {
  author: string;
  origin: string;
  stars: number;
  stayed: string;
  text: string;
}

interface TestimonialsCarouselProps {
  reviews: Review[];
}

export default function TestimonialsCarousel({ reviews }: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Swipe gesture tracking
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  // Determine items per page based on browser width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ensure activeIndex is within boundary on resize
  const maxIndex = Math.max(0, reviews.length - itemsPerPage);
  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex);
    }
  }, [itemsPerPage, maxIndex, activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Quick select dots
  const totalDots = reviews.length - itemsPerPage + 1;

  return (
    <div className="relative select-none" id="testimonials-carousel-container">
      {/* Outer wrapper with limited viewpoint */}
      <div 
        className="overflow-hidden py-4 px-1"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div 
          className="flex gap-6"
          animate={{ x: `calc(-${activeIndex * (100 / itemsPerPage)}% - ${activeIndex * (24 * (itemsPerPage - 1) / itemsPerPage)}px)` }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
        >
          {reviews.map((rev, idx) => {
            const isVisible = idx >= activeIndex && idx < activeIndex + itemsPerPage;
            return (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-stone-200/85 shadow-xs flex flex-col justify-between relative shrink-0 relative overflow-hidden group hover:border-amber-500/30 hover:shadow-md transition-all duration-300"
                style={{ 
                  width: `calc((100% - ${(itemsPerPage - 1) * 24}px) / ${itemsPerPage})`
                }}
                animate={{ 
                  opacity: isVisible ? 1 : 0.4,
                  scale: isVisible ? 1 : 0.98
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Accent line on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Quote Icon in the background */}
                <Quote className="absolute right-5 top-5 h-16 w-16 text-stone-100/70 pointer-events-none stroke-1 shrink-0 select-none group-hover:text-amber-50/40 transition-colors duration-300" />

                <div className="space-y-4 relative z-10 flex-grow">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: rev.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  <p className="text-stone-600 text-sm leading-relaxed italic pr-6 group-hover:text-stone-800 transition-colors duration-300">
                    "{rev.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 mt-6 border-t border-stone-100 shrink-0 relative z-10 w-full">
                  <div className="bg-amber-50 h-10 w-10 text-amber-700 font-sans font-extrabold rounded-xl border border-amber-200/60 flex items-center justify-center text-xs tracking-wider shrink-0 break-all select-none group-hover:bg-amber-100/50 transition-colors duration-300">
                    {rev.author.split(" ").map(w => w[0]).join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-stone-900 group-hover:text-amber-700 transition-colors duration-300 truncate">{rev.author}</p>
                    <div className="flex items-center gap-1.5 mt-0.5 min-w-0">
                      <span className="text-[10px] text-stone-400 font-mono truncate">{rev.origin}</span>
                      <span className="text-[14px] text-stone-300 select-none leading-none shrink-0">•</span>
                      <span className="text-[10px] text-amber-600 font-medium truncate select-none">{rev.stayed}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Floating navigation triggers */}
      {activeIndex > 0 && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-stone-200/80 bg-white/90 backdrop-blur-md text-stone-700 hover:text-amber-700 hover:border-amber-400 flex items-center justify-center shadow-md hover:shadow-lg transition-all z-20"
          aria-label="Previous testimonials"
          id="btn-testimonials-prev"
        >
          <ChevronLeft className="h-5 w-5" />
        </motion.button>
      )}

      {activeIndex < maxIndex && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-stone-200/80 bg-white/90 backdrop-blur-md text-stone-700 hover:text-amber-700 hover:border-amber-400 flex items-center justify-center shadow-md hover:shadow-lg transition-all z-20"
          aria-label="Next testimonials"
          id="btn-testimonials-next"
        >
          <ChevronRight className="h-5 w-5" />
        </motion.button>
      )}

      {/* Navigation Dot Indicators */}
      {totalDots > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6" id="testimonials-carousel-dots">
          {Array.from({ length: totalDots }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex 
                  ? "w-7 bg-amber-600 shadow-sm" 
                  : "w-2.5 bg-stone-200 hover:bg-stone-300"
              }`}
              aria-label={`Go to testimonial page ${idx + 1}`}
              id={`btn-testimonial-dot-${idx}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
