"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { INSTAGRAM_URL } from "@/lib/constants";

function TypingText({ text, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: i * 0.04, duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function InstagramCTA() {
  return (
    <HeroHighlight
      containerClassName="px-6 py-20 text-center relative bg-gradient-to-b from-cream to-parchment/[0.03]"
    >
      <Reveal>
        <p className="font-serif text-[clamp(26px,4.5vw,40px)] text-espresso mb-3 font-normal italic">
          Follow the journey
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-[17px] text-gold no-underline font-semibold inline-flex items-center gap-1.5 transition-opacity duration-200 hover:opacity-70"
        >
          <TypingText text="@mithas.coffeesyrups" />
          <span className="text-xl ml-1">&rarr;</span>
        </a>
      </Reveal>
    </HeroHighlight>
  );
}
