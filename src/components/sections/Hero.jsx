"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Divider from "@/components/ui/Divider";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { TreePalm, Flame, Coffee as CoffeeIcon } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { MovingBorder } from "@/components/ui/moving-border";
import { BorderBeam } from "@/components/ui/border-beam";
import { COLORS, INSTAGRAM_URL } from "@/lib/constants";

const Particles = dynamic(
  () => import("@/components/ui/particles").then((mod) => mod.Particles),
  { ssr: false }
);

const TAGLINE_WORDS = [
  "Flavors that feel like home",
  "Childhood desserts in your coffee",
  "Handcrafted with love in Austin",
  "Desi heritage, modern sip",
];

const floatingIcons = [
  { Icon: TreePalm, bottom: "18%", right: "8%", size: 32, speed: -0.06, opacity: 0.08 },
  { Icon: Flame, top: "22%", right: "12%", size: 28, speed: 0.05, opacity: 0.07 },
  { Icon: CoffeeIcon, bottom: "28%", left: "12%", size: 26, speed: -0.04, opacity: 0.06 },
];

const gradientOrbs = [
  {
    // TODO: Replace with <Spline scene="URL" />
    size: "w-48 h-48",
    color: COLORS.gold,
    top: "15%",
    left: "10%",
    animate: {
      x: [0, 18, -10, 0],
      y: [0, -22, 12, 0],
      scale: [1, 1.08, 0.96, 1],
    },
    duration: 12,
  },
  {
    // TODO: Replace with <Spline scene="URL" />
    size: "w-64 h-64",
    color: COLORS.rose,
    top: "55%",
    right: "8%",
    animate: {
      x: [0, -20, 14, 0],
      y: [0, 16, -18, 0],
      scale: [1, 0.94, 1.06, 1],
    },
    duration: 16,
  },
  {
    // TODO: Replace with <Spline scene="URL" />
    size: "w-80 h-80",
    color: COLORS.roseGold,
    bottom: "10%",
    left: "30%",
    animate: {
      x: [0, 24, -16, 0],
      y: [0, -14, 20, 0],
      scale: [1, 1.05, 0.97, 1],
    },
    duration: 20,
  },
];

function GrainOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999] mix-blend-multiply opacity-[0.028]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-[120px] pb-[120px] relative overflow-hidden">
      <GrainOverlay />

      {/* Spotlight */}
      <Spotlight
        fill="#C4973B"
        className="absolute -top-40 left-0 md:left-60 md:-top-20"
      />

      {/* Particles */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={30}
        color="#C4973B"
        ease={120}
        size={0.4}
        staticity={60}
      />

      {/* Animated gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 700px 500px at 25% 35%, ${COLORS.rose}06, transparent),
            radial-gradient(ellipse 600px 600px at 75% 65%, ${COLORS.gold}08, transparent),
            radial-gradient(ellipse 400px 300px at 50% 80%, ${COLORS.roseGold}06, transparent)
          `,
        }}
      />

      {/* Animated gradient orbs */}
      {gradientOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full pointer-events-none ${orb.size} blur-[80px]`}
          style={{
            backgroundColor: orb.color,
            opacity: 0.1,
            top: orb.top,
            bottom: orb.bottom,
            left: orb.left,
            right: orb.right,
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

      {/* Parallax floating icons */}
      {floatingIcons.map((f, i) => (
        <div
          key={i}
          className="absolute text-walnut"
          style={{
            opacity: f.opacity,
            top: f.top,
            bottom: f.bottom,
            left: f.left,
            right: f.right,
            transform: `translateY(${scrollY * f.speed}px)`,
            transition: "transform 0.1s linear",
          }}
        >
          <f.Icon size={f.size} strokeWidth={1} />
        </div>
      ))}

      {/* Availability badge */}
      <Reveal delay={0} y={20}>
        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-gold/10">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-sans text-xs text-walnut font-medium tracking-wide">
            Accepting orders &middot; West Campus pickup
          </span>
        </div>
      </Reveal>

      {/* Background mandala watermark */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none origin-center"
        style={{ opacity: 0.15 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <svg width="700" height="700" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="3" fill={COLORS.gold} opacity="0.5" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <circle
              key={a}
              cx={16 + 9 * Math.cos((a * Math.PI) / 180)}
              cy={16 + 9 * Math.sin((a * Math.PI) / 180)}
              r="1.2"
              fill={COLORS.gold}
              opacity="0.6"
            />
          ))}
        </svg>
      </motion.div>

      {/* Title */}
      <Reveal delay={0.25} y={40}>
        <h1 className="font-serif text-[clamp(56px,12vw,110px)] font-normal text-espresso tracking-[-0.03em] leading-none m-0">
          <TextGenerateEffect
            words="mithas"
            className="font-serif text-[clamp(56px,12vw,110px)] font-normal text-espresso tracking-[-0.03em] leading-none"
            duration={1.5}
            staggerDelay={0.08}
          />
        </h1>
      </Reveal>

      {/* Subtitle */}
      <Reveal delay={0.4} y={25}>
        <p className="font-sans text-[clamp(11px,1.8vw,14px)] tracking-[0.35em] uppercase text-gold mt-[18px] font-semibold">
          Handcrafted Coffee Syrups
        </p>
      </Reveal>

      {/* Divider */}
      <Reveal delay={0.5} y={20}>
        <Divider width={70} />
      </Reveal>

      {/* Tagline */}
      <Reveal delay={0.6} y={30}>
        <p className="font-serif text-[clamp(22px,4vw,36px)] italic text-espresso max-w-[520px] leading-[1.45] mx-auto font-light">
          <FlipWords
            words={TAGLINE_WORDS}
            duration={3000}
          />
        </p>
      </Reveal>

      {/* Body text */}
      <Reveal delay={0.7} y={25}>
        <p className="font-sans text-[clamp(14px,2vw,17px)] text-walnut max-w-[420px] leading-[1.75] mt-[18px] mx-auto font-light opacity-80">
          Inspired by desi childhood desserts. Handmade in small batches in Austin, TX.
        </p>
      </Reveal>

      {/* CTA buttons */}
      <Reveal delay={0.85} y={20}>
        <div className="flex gap-3.5 mt-10 flex-wrap justify-center">
          <ShimmerButton
            shimmerColor="#C4973B"
            shimmerSize="0.08em"
            background="#2A1810"
            borderRadius="100px"
            className="px-[38px] py-[15px]"
            onClick={() => scrollTo("syrups")}
          >
            <span className="font-sans text-[15px] font-semibold text-cream">
              Explore Syrups
            </span>
          </ShimmerButton>
          <MovingBorder
            duration={8000}
            rx="100"
            ry="100"
            containerClassName="cursor-pointer"
            className="bg-transparent text-espresso font-sans text-[15px] font-semibold px-[38px] py-4 rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] active:scale-[0.98] border-[1.5px] border-espresso/80 hover:shadow-[0_12px_36px_rgba(42,24,16,0.19)]"
            as="a"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2 justify-center">
              <InstagramIcon size={18} />
              DM to Order
            </div>
          </MovingBorder>
        </div>
      </Reveal>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500"
        style={{ opacity: scrollY > 100 ? 0 : 0.4 }}
      >
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-walnut">
          Scroll
        </span>
        <div
          className="w-px h-8 animate-scroll-pulse"
          style={{
            background: `linear-gradient(to bottom, ${COLORS.walnut}, transparent)`,
          }}
        />
      </div>

      {/* BorderBeam — subtle animated border at section edge */}
      <div className="absolute inset-x-0 bottom-0 h-px pointer-events-none overflow-hidden rounded-none">
        <BorderBeam
          size={300}
          duration={10}
          colorFrom="#C4973B"
          colorTo="#C9A87C"
          className="opacity-30"
        />
      </div>
    </section>
  );
}
