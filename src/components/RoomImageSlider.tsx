import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { Room } from "../types";

interface RoomImageSliderProps {
  room: Room;
  className?: string;
  imgHeightClass?: string;
}

export default function RoomImageSlider({ room, className = "", imgHeightClass = "h-56" }: RoomImageSliderProps) {
  const images = room.images && room.images.length > 0 ? room.images : [room.image];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const selectSlide = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  const currentImage = images[currentIndex];

  return (
    <div id={`slider-${room.id}`} className={`relative flex flex-col ${className}`}>
      {/* Main image container */}
      <div className={`relative ${imgHeightClass} w-full overflow-hidden bg-stone-100 group`}>
        <img
          id={`slider-img-${room.id}`}
          src={currentImage}
          alt={`${room.name} view ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-300"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://lh3.googleusercontent.com/d/1nzv-eTHlA4-x2WcXCF-FoiJ03PgF3fpu";
          }}
        />

        {/* Dark bottom gradient overlay for overlay text readability */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none z-5" />

        {/* Gray overlay for arrows contrast */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              id={`slider-prev-btn-${room.id}`}
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-stone-800 p-1.5 rounded-full shadow-md backdrop-blur-xs transition-all active:scale-90 opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer border border-stone-200/50 z-10"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              id={`slider-next-btn-${room.id}`}
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-stone-800 p-1.5 rounded-full shadow-md backdrop-blur-xs transition-all active:scale-90 opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer border border-stone-200/50 z-10"
              aria-label="Next Slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Slide Counter Overlay */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-stone-900/70 backdrop-blur-md text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded-md shadow-xs pointer-events-none tracking-widest flex items-center gap-1 z-10">
            <ImageIcon className="h-2.5 w-2.5 text-amber-400" />
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Horizontal thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-1.5 p-2 bg-stone-50 border-t border-stone-100 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {images.map((img, idx) => (
            <button
              id={`slider-thumbnail-${room.id}-${idx}`}
              key={idx}
              onClick={(e) => selectSlide(idx, e)}
              className={`relative h-10 w-14 shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                currentIndex === idx
                  ? "border-amber-600 scale-95 shadow-sm opacity-100 animate-pulse-subtle"
                  : "border-transparent opacity-60 hover:opacity-100 hover:border-stone-300"
              } cursor-pointer`}
            >
              <img
                src={img}
                alt={`${room.name} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://lh3.googleusercontent.com/d/1nzv-eTHlA4-x2WcXCF-FoiJ03PgF3fpu";
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
