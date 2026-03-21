"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import { BlurFade } from "@/components/ui/blur-fade";
import SectionLabel from "@/components/ui/SectionLabel";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { COLORS } from "@/lib/constants";

const WavyBackground = dynamic(
  () => import("@/components/ui/wavy-background").then((mod) => mod.WavyBackground),
  { ssr: false }
);

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

const GRADIENT_ORBS = [
  {
    size: "w-[200px] h-[200px]",
    color: COLORS.gold,
    blur: "blur-[80px]",
    position: { top: "10%", left: "15%" },
    animate: { x: [0, 30, -10, 0], y: [0, -25, 15, 0], scale: [1, 1.1, 0.95, 1] },
    duration: 8,
  },
  {
    size: "w-[140px] h-[140px]",
    color: COLORS.rose,
    blur: "blur-[60px]",
    position: { bottom: "15%", right: "10%" },
    animate: { x: [0, -20, 15, 0], y: [0, 18, -12, 0], scale: [1, 0.92, 1.08, 1] },
    duration: 6,
  },
  {
    size: "w-[100px] h-[100px]",
    color: "#D4A843",
    blur: "blur-[50px]",
    position: { top: "50%", left: "60%" },
    animate: { x: [0, 25, -18, 0], y: [0, -15, 22, 0], scale: [1, 1.06, 0.94, 1] },
    duration: 10,
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
    <section className="px-6 pt-[60px] pb-[40px] bg-cream" id="craft">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">

          {/* Left column — WavyBackground with orbs and rotating emoji */}
          <div className="md:col-span-2">
            <WavyBackground
              containerClassName="rounded-3xl overflow-hidden"
              className="flex items-center justify-center"
              speed="slow"
              waveOpacity={0.4}
              blur={12}
              colors={[
                "rgba(196, 151, 59, 0.25)",
                "rgba(201, 168, 124, 0.2)",
                "rgba(196, 114, 127, 0.15)",
                "rgba(237, 231, 219, 0.3)",
                "rgba(212, 168, 67, 0.18)",
              ]}
            >
              <div className="relative w-full" style={{ minHeight: "280px" }}>
                {/* Animated gradient orbs */}
                {GRADIENT_ORBS.map((orb, i) => (
                  <motion.div
                    key={i}
                    className={`absolute rounded-full pointer-events-none ${orb.size} ${orb.blur}`}
                    style={{
                      backgroundColor: orb.color,
                      opacity: 0.35,
                      ...orb.position,
                    }}
                    animate={orb.animate}
                    transition={{
                      duration: orb.duration,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Rotating honey emoji */}
                <motion.span
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl select-none pointer-events-none"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  🍯
                </motion.span>
              </div>
            </WavyBackground>
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
