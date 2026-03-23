"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { COLORS, INSTAGRAM_URL } from "@/lib/constants";
import { MessageCircle, Sparkles as SparklesIcon, MapPin } from "lucide-react";

const steps = [
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
    desc: "Grab your syrups on West Campus at a time that works for you. That\u2019s it!",
    Icon: MapPin,
    color: COLORS.fig,
  },
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

export default function HowToOrder() {
  const containerRef = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const stepRefs = [step1Ref, step2Ref, step3Ref];

  return (
    <section id="order" className="px-6 pb-12 bg-cream">
      <div className="max-w-[900px] mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <SectionLabel>Simple & Easy</SectionLabel>
            <SectionTitle>How to Order</SectionTitle>
          </div>
        </Reveal>

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
              key={i}
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
              @mithas.coffeesyrups &middot; West Campus pickup &middot; Venmo
              accepted
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
