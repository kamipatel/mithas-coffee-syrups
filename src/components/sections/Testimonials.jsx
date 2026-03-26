"use client";

import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section
      className="py-12 bg-parchment overflow-hidden"
      role="region"
      aria-label="Customer testimonials"
    >
      <div className="max-w-[900px] mx-auto text-center px-6 mb-12">
        <Reveal>
          <SectionLabel>Kind Words</SectionLabel>
        </Reveal>
      </div>

      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
        pauseOnHover
        renderItem={(item) => (
          <div className="bg-white rounded-2xl p-8 shadow-[0_2px_16px_rgba(0,0,0,0.03)] border border-gold/[0.06] h-full relative flex flex-col min-h-[200px]">
            {/* Stars */}
            <div className="flex gap-1 mb-4 relative z-10">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill="#C4973B"
                  className="text-gold"
                />
              ))}
            </div>
            
            {/* Decorative quotation mark */}
            <span className="absolute top-4 left-6 font-serif text-[64px] text-gold/[0.15] leading-none select-none">
              &ldquo;
            </span>
            <p className="font-serif text-[clamp(18px,2.5vw,22px)] text-espresso leading-[1.6] mb-6 italic font-normal relative z-10 flex-1">
              &ldquo;{item.text}&rdquo;
            </p>
            <div>
              <p className="font-sans text-[13px] text-walnut font-semibold mb-0.5">
                {item.name}
              </p>
            </div>
          </div>
        )}
      />
    </section>

  );
}
