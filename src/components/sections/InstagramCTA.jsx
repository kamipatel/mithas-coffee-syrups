"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { INSTAGRAM_URL } from "@/lib/constants";

const BRAND_IMAGES = [
  "/images/aestheticPic.png",
  "/images/gulabJamunLatte.png",
  "/images/matcha.png",
  "/images/pop-up-Pic.png",
  "/images/giftbox.png",
];

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
    <section className="px-6 pt-12 pb-8 text-center relative bg-cream border-t border-gold/[0.05]">
      <Reveal>
        <p className="font-serif text-[clamp(26px,4.5vw,40px)] text-espresso mb-3 font-normal italic">
          Follow the journey
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-[17px] text-gold no-underline font-semibold inline-flex items-center gap-1.5 transition-opacity duration-200 hover:opacity-70 mb-10"
        >
          <TypingText text="@mithas.coffeesyrups" />
          <span className="text-xl ml-1">&rarr;</span>
        </a>
      </Reveal>

      {/* Brand image marquee */}
      <div className="relative mt-2 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
        <Marquee pauseOnHover className="[--duration:40s] [--gap:1rem]">
          {BRAND_IMAGES.map((src, i) => (
            <div key={i} className="relative w-20 h-20 flex-shrink-0">
              <Image
                src={src}
                alt={`Mithas brand image ${i + 1}`}
                fill
                className="object-cover rounded-xl border border-gold/10"
              />
            </div>
          ))}
          {BRAND_IMAGES.map((src, i) => (
            <div key={`dup-${i}`} className="relative w-20 h-20 flex-shrink-0">
              <Image
                src={src}
                alt={`Mithas brand image ${i + 1}`}
                fill
                className="object-cover rounded-xl border border-gold/10"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
