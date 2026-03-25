"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { COLORS, INSTAGRAM_URL } from "@/lib/constants";
import { MessageCircle, Sparkles as SparklesIcon, MapPin, Package } from "lucide-react";

const pickupSteps = [
  {
    step: "01",
    title: "DM Us",
    desc: "Send a message on Instagram with what you\u2019d like \u2014 syrup flavors and quantity.",
    Icon: MessageCircle,
    color: COLORS.rose,
  },
  {
    step: "02",
    title: "Confirm & Pay",
    desc: "We\u2019ll confirm your order and total. Venmo or cash \u2014 whatever\u2019s easier for you.",
    Icon: SparklesIcon,
    color: COLORS.gold,
  },
  {
    step: "03",
    title: "Pick Up",
    desc: "Grab your syrups at West Campus or in Sugar Land, TX at a time that works for you. That\u2019s it!",
    Icon: MapPin,
    color: COLORS.fig,
  },
];

const shipSteps = [
  {
    step: "01",
    title: "DM Us on Instagram",
    desc: "Send us a message to start your order.",
    Icon: MessageCircle,
    color: COLORS.rose,
  },
  {
    step: "02",
    title: "Share Your Details",
    desc: "Tell us what you want + your shipping address.",
    Icon: MapPin,
    color: COLORS.gold,
  },
  {
    step: "03",
    title: "We Ship It",
    desc: "We\u2019ll ship it right to your door.",
    Icon: Package,
    color: COLORS.fig,
  },
];

const tabs = [
  { id: "pickup", label: "Pickup \u00b7 West Campus & Sugar Land, TX" },
  { id: "ship", label: "Ship Anywhere" },
];

function CountUp({ target, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {isInView ? target : "00"}
    </motion.span>
  );
}

function StepCards({ steps, tabKey }) {
  const containerRef = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const stepRefs = [step1Ref, step2Ref, step3Ref];

  return (
    <motion.div
      key={tabKey}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
    >
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-7 relative"
        style={{ perspective: "1000px" }}
      >
        {/* Animated beams connecting steps (desktop only) */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={step1Ref}
            toRef={step2Ref}
            curvature={0}
            pathColor={`${COLORS.gold}20`}
            gradientStartColor="#C4973B"
            gradientStopColor="#C9A87C"
            pathWidth={1.5}
            duration={4}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={step2Ref}
            toRef={step3Ref}
            curvature={0}
            pathColor={`${COLORS.gold}20`}
            gradientStartColor="#C4973B"
            gradientStopColor="#C9A87C"
            pathWidth={1.5}
            duration={4}
            delay={2}
          />
        </div>

        {steps.map((item, i) => (
          <motion.div
            key={`${tabKey}-${i}`}
            initial={{ opacity: 0, rotateY: -15, x: -30 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 150, damping: 20 }}
            className="h-full"
          >
            <div
              ref={stepRefs[i]}
              className="h-full flex flex-col text-center p-[36px_24px_32px] rounded-2xl bg-white shadow-[0_2px_16px_rgba(0,0,0,0.03)] border border-gold/[0.06] relative"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-[18px]"
                style={{
                  background: `${item.color}10`,
                  border: `1px solid ${item.color}20`,
                  color: item.color,
                }}
              >
                <item.Icon size={28} strokeWidth={1.5} />
              </div>
              <CountUp
                target={item.step}
                className="font-sans text-[10px] text-gold font-bold tracking-[0.18em]"
              />
              <h3 className="font-serif text-2xl text-espresso mt-2 mb-2.5 font-semibold">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-walnut leading-[1.7] font-light">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function HowToOrder() {
  const [activeTab, setActiveTab] = useState("pickup");
  const steps = activeTab === "pickup" ? pickupSteps : shipSteps;

  return (
    <section id="order" className="px-6 pb-12 bg-cream">
      <div className="max-w-[900px] mx-auto">
        <Reveal>
          <div className="text-center mb-10">
            <SectionLabel>Simple & Easy</SectionLabel>
            <SectionTitle>How to Order</SectionTitle>
          </div>
        </Reveal>

        {/* Tab toggle */}
        <Reveal delay={0.1}>
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-full bg-walnut/[0.06] p-1 relative">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative z-10 px-6 py-2.5 rounded-full text-sm font-sans font-medium transition-colors duration-200"
                  style={{
                    color: activeTab === tab.id ? undefined : COLORS.walnut + "99",
                  }}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full bg-espresso"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${activeTab === tab.id ? "text-cream" : ""}`}>
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Step cards */}
        <AnimatePresence mode="wait">
          <StepCards key={activeTab} steps={steps} tabKey={activeTab} />
        </AnimatePresence>

        <Reveal delay={0.2}>
          <div className="text-center mt-14">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <ShimmerButton
                shimmerColor="#C4973B"
                shimmerSize="0.06em"
                background={`linear-gradient(135deg, ${COLORS.espresso}, ${COLORS.brown})`}
                borderRadius="100px"
                className="px-11 py-[18px]"
              >
                <span className="inline-flex items-center gap-3 font-sans text-base font-semibold text-cream">
                  <InstagramIcon size={20} />
                  DM to Order on Instagram
                </span>
              </ShimmerButton>
            </a>
            <p className="font-sans text-[13px] text-walnut/50 mt-3.5 font-light">
              @mithas.coffeesyrups &middot; Venmo accepted &middot; Shipping
              $12&ndash;16
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
