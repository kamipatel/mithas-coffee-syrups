"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { BlurFade } from "@/components/ui/blur-fade";
import SectionLabel from "@/components/ui/SectionLabel";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { COLORS } from "@/lib/constants";

const BULLETS = [
  {
    id: "handmade",
    text: "Handmade in Austin, TX — every batch crafted by hand",
    delay: 0.1,
  },
  {
    id: "real-ingredients",
    text: "Real ingredients — no artificial flavors or preservatives",
    delay: 0.2,
  },
  {
    id: "heritage",
    text: "Desi heritage — recipes inspired by generations of family tradition",
    delay: 0.3,
  },
];

function GoldCheckmark() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="w-5 h-5 shrink-0"
    >
      <circle cx="10" cy="10" r="10" fill={COLORS.gold} opacity={0.15} />
      <path
        d="M6 10.5l2.5 2.5 5.5-5.5"
        stroke={COLORS.gold}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AnimatedCheckmark() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
    >
      <GoldCheckmark />
    </motion.div>
  );
}

export default function TheCraft() {
  return (
    <section className="px-6 py-14 bg-cream" id="craft">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">

          {/* Left column — Image */}
          <div className="md:col-span-2 relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-walnut/5">
            <Image
              src="/images/IMG_6508.jpg"
              alt="Mithas syrup bottles with tulips"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Right column — text content */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col gap-6 pt-4 md:pt-0">
            <SectionLabel>The Craft</SectionLabel>

            <TextGenerateEffect
              words="Small batch. Big flavor."
              className="font-serif text-[clamp(28px,4vw,38px)] text-espresso font-medium leading-tight"
            />

            <ul className="flex flex-col gap-4 mt-2" role="list">
              {BULLETS.map(({ id, text, delay }) => (
                <BlurFade key={id} delay={delay} inView>
                  <li className="flex items-start gap-3 text-walnut/80 font-sans text-[15px] leading-relaxed">
                    <AnimatedCheckmark />
                    <span>{text}</span>
                  </li>
                </BlurFade>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
