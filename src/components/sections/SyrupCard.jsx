"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { INSTAGRAM_URL } from "@/lib/constants";
import { getIcon } from "@/lib/icons";
import { Coffee } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Lens } from "@/components/ui/lens";
import { Sparkles } from "@/components/ui/sparkles";

export default function SyrupCard({ syrup, isActive, onClick }) {
  const s = syrup;
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const imageContent = (
    <div
      className="h-[140px] relative flex items-center justify-center overflow-hidden"
      style={{ background: s.bg }}
    >
      {(() => {
        const Icon = getIcon(s.icon);
        return (
          <span
            className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: isActive ? "scale(1.1)" : "scale(1)", color: s.color }}
          >
            <Icon size={44} strokeWidth={1.2} />
          </span>
        );
      })()}

      {s.tag && (
        s.tag === "Bestseller" ? (
          <Sparkles color="#C4973B" count={3}>
            <span
              className="absolute top-3 right-3 text-white font-sans text-[10px] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full animate-pulse"
              style={{ background: `${s.color}dd` }}
            >
              {s.tag}
            </span>
          </Sparkles>
        ) : (
          <span
            className="absolute top-3 right-3 text-white font-sans text-[10px] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full"
            style={{ background: `${s.color}dd` }}
          >
            {s.tag}
          </span>
        )
      )}
    </div>
  );

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "bg-white rounded-2xl overflow-hidden cursor-pointer relative group",
        "border-2 transition-colors duration-[400ms]",
        isActive
          ? "-translate-y-1.5"
          : "border-transparent shadow-[0_2px_16px_rgba(0,0,0,0.03)]"
      )}
      style={{
        borderColor: isActive ? `${s.color}50` : undefined,
        boxShadow: isActive
          ? `0 20px 60px ${s.color}15, 0 4px 20px rgba(0,0,0,0.04)`
          : undefined,
      }}
    >
      {/* Card spotlight — cursor-following glow (desktop only) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
        style={{
          background: isHovered
            ? `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, ${s.color}12, transparent 60%)`
            : "none",
        }}
      />

      {/* Image container with Lens on desktop */}
      <div className="hidden md:block">
        <Lens zoomFactor={1.4} lensSize={140}>
          {imageContent}
        </Lens>
      </div>
      <div className="md:hidden">
        {imageContent}
      </div>

      <div className="p-[22px_24px_26px] relative z-10">
        <h3 className="font-serif text-2xl text-espresso mb-[3px] font-semibold">
          {s.name}
        </h3>
        <p
          className="font-sans text-[11px] font-semibold tracking-[0.08em] uppercase mb-3"
          style={{ color: s.color }}
        >
          {s.subtitle}
        </p>
        <p className="font-sans text-sm text-walnut leading-[1.7] mb-4 font-light">
          {s.description}
        </p>

        {/* Recipe hint */}
        <div
          className="rounded-[10px] p-2.5 flex gap-2 items-start"
          style={{
            background: `${s.color}08`,
            border: `1px solid ${s.color}12`,
          }}
        >
          <Coffee size={14} strokeWidth={1.5} className="text-walnut/60 mt-px flex-shrink-0" />
          <p className="font-sans text-xs text-walnut leading-[1.55] italic">
            {s.recipe}
          </p>
        </div>

        <div className="flex justify-between items-center mt-[18px]">
          <div className="flex items-baseline gap-1">
            <span className="font-serif text-[28px] text-gold font-semibold">
              $<NumberTicker value={s.displayPrice} className="font-serif text-[28px] text-gold font-semibold" />
            </span>
            <span className="font-sans text-[10px] text-walnut/50 tracking-[0.06em]">
              per bottle
            </span>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs font-semibold px-4 py-2 rounded-full no-underline transition-all duration-300 hover:scale-105"
            style={{
              background: `${s.color}12`,
              color: s.color,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            DM to Order
          </a>
        </div>
      </div>
    </motion.div>
  );
}
