"use client";

import { motion } from "framer-motion";

import { BlurFade } from "@/components/ui/blur-fade";
import { Ripple } from "@/components/ui/ripple";
import { getIcon } from "@/lib/icons";
import { BorderBeam } from "@/components/ui/border-beam";
import { Particles } from "@/components/ui/particles";
import { Meteors } from "@/components/ui/meteors";
import SectionLabel from "@/components/ui/SectionLabel";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { COLORS } from "@/lib/constants";

// TODO: Replace entire div with <Spline scene="URL" />

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

const FLOATING_ICONS = [
  { icon: "droplets", top: "15%", left: "12%", duration: 20 },
  { icon: "flower2", top: "60%", left: "78%", duration: 26 },
  { icon: "coffee", top: "75%", left: "20%", duration: 22 },
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
    <section className="px-6 py-[100px] bg-cream" id="craft">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">

          {/* Left column — interactive visual */}
          <div className="md:col-span-2">
            <div
              className="bg-gradient-to-br from-parchment via-cream to-linen rounded-3xl overflow-hidden relative z-10"
              style={{ minHeight: "350px" }}
            >
              <BorderBeam size={200} duration={12} delay={9} borderWidth={1.5} colorFrom={COLORS.gold} colorTo={COLORS.roseGold} />
              <Particles className="absolute inset-0 z-0" quantity={80} ease={80} color={COLORS.gold} refresh />
              <Meteors number={15} />

              {/* Floating icon orbs */}
              {FLOATING_ICONS.map(({ icon, top, left, duration }) => {
                const Icon = getIcon(icon);
                return (
                  <motion.span
                    key={icon}
                    className="absolute select-none pointer-events-none text-walnut/20"
                    style={{ top, left }}
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration,
                      ease: "linear",
                    }}
                  >
                    <Icon size={28} strokeWidth={1} />
                  </motion.span>
                );
              })}

              {/* Ripple centered in container */}
              <Ripple
                mainCircleSize={160}
                mainCircleOpacity={0.18}
                numCircles={6}
              />
            </div>
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
