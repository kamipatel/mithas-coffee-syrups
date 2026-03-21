"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import { recipes } from "@/lib/constants";
import { getIcon } from "@/lib/icons";

function TiltCard({ children, className }) {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouse = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Recipes() {
  return (
    <section id="recipes" className="px-6 py-[70px] md:py-[100px] bg-cream">
      <div className="max-w-[900px] mx-auto">
        <Reveal>
          <div className="text-center mb-[52px]">
            <SectionLabel>Make It at Home</SectionLabel>
            <SectionTitle>Three Ways to Enjoy</SectionTitle>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.map((r, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <TiltCard className="h-full hidden md:block">
                <RecipeCardContent recipe={r} />
              </TiltCard>
              {/* No tilt on mobile */}
              <div className="md:hidden h-full">
                <RecipeCardContent recipe={r} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecipeCardContent({ recipe: r }) {
  return (
    <div className="bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.03)] border border-gold/[0.06] h-full flex flex-col overflow-hidden">
      {r.image && (
        <div className="relative w-full h-44">
          <Image src={r.image} alt={r.title} fill className="object-cover" loading="lazy" />
        </div>
      )}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
      <div
        className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-5"
        style={{ background: `${r.color}10`, color: r.color }}
      >
        {(() => { const Icon = getIcon(r.icon); return <Icon size={24} strokeWidth={1.5} />; })()}
      </div>
      <h3 className="font-serif text-[22px] text-espresso mb-3 font-semibold">
        {r.title}
      </h3>
      <p className="font-sans text-sm text-walnut leading-[1.75] mb-6 font-light flex-grow">
        {r.steps}
      </p>
      <span
        className="font-sans text-[11px] font-semibold tracking-[0.08em] uppercase"
        style={{ color: r.color }}
      >
        {r.time}
      </span>
      </div>
    </div>
  );
}
