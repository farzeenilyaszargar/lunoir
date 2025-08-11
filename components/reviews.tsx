'use client';

// components/EndlessReviewStrip.tsx

import React from "react";
import Image from "next/image";

type Review = { text: string; author: string; rating: number };

const REVIEWS: Review[] = [
  { text: "Perfect fit. Heavy & soft.", author: "Aditi", rating: 5 },
  { text: "Quality > price. 10/10.", author: "Karan", rating: 4 },
  { text: "After 20 washes: still crisp.", author: "Meera", rating: 5 },
  { text: "Shipping fast, packaging clean.", author: "Arjun", rating: 5 },
  { text: "My everyday tee now.", author: "Rhea", rating: 4 },
];

export default function EndlessReviewStrip() {
  const loop = [...REVIEWS, ...REVIEWS]; // duplicate once for seamless loop

  const mask: React.CSSProperties = {
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
    maskImage:
      "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
  };

  return (
    <div className="w-full space-y-4 pt-5 mb-10">
      <div className="flex flex-row justify-center items-center overflow-hidden h-10 mb-5">
        <Image src={'/REVIEWS.gif'} alt="reviews" width={200} 
        height={100} ></Image>
      </div>
      {/* Row A (left) */}
      <div className="relative overflow-hidden" style={mask}>
        <div className="flex gap-3 animate-scroll-left will-change-transform">
          {loop.map((r, i) => (
            <Card key={`a-${i}`} {...r} />
          ))}
        </div>
      </div>

      {/* Row B (right) */}
      <div className="relative overflow-hidden" style={mask}>
        <div className="flex gap-3 animate-scroll-right will-change-transform">
          {loop.map((r, i) => (
            <Card key={`b-${i}`} {...r} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes kf-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes kf-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-scroll-left  { animation: kf-left 7s linear infinite; }
        .animate-scroll-right { animation: kf-right 7s linear infinite; }
      `}</style>
    </div>
  );
}

function Card({ text, author, rating }: Review) {
  return (
    <div className="shrink-0 min-w-[260px] max-w-[320px] rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <Stars rating={rating} />
        <span className="text-xs text-zinc-500">{rating}.0</span>
      </div>
      <p className="mt-2 text-sm text-zinc-800">{text}</p>
      <div className="mt-1 text-xs text-zinc-500">— {author}</div>
    </div>
  );
}

/** Simple 0–5 star display (full/empty) */
function Stars({ rating = 0 }: { rating?: number }) {
  // clamp + round to nearest integer (change to Math.floor for stricter)
  const full = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div
      className="flex items-center"
      aria-label={`${full} out of 5 stars`}
      title={`${full}/5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < full ? "fill-yellow-400" : "fill-zinc-200"}`}
          aria-hidden
        >
          <path d="M10 1.6l2.4 5 5.5.8-4 3.9.9 5.5L10 14.9 5.2 16.8l.9-5.5-4-3.9 5.5-.8L10 1.6z" />
        </svg>
      ))}
    </div>
  );
}
