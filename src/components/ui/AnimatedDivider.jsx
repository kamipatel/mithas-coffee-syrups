"use client";

import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { Ripple } from "@/components/ui/ripple";
import { cn } from "@/lib/utils";

function BeamDivider() {
  return (
    <div className="relative h-px w-full max-w-[600px] mx-auto overflow-visible bg-gold/[0.12]">
      <BorderBeam
        size={80}
        duration={8}
        colorFrom="#C4973B"
        colorTo="#C9A87C"
        borderWidth={1}
        className="opacity-80"
      />
    </div>
  );
}

function WaveDivider({ className }) {
  return (
    <motion.svg
      width="200"
      height="20"
      viewBox="0 0 200 20"
      className={cn("mx-auto", className)}
    >
      <motion.path
        d="M0 10 Q50 0 100 10 Q150 20 200 10"
        stroke="#C4973B"
        strokeWidth="0.8"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
    </motion.svg>
  );
}

function DotsDivider() {
  return (
    <div className="flex justify-center gap-3">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-gold"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.5 }}
          transition={{ delay: i * 0.15, duration: 0.4 }}
          viewport={{ once: true }}
        />
      ))}
    </div>
  );
}

function RippleDivider() {
  return (
    <div className="relative h-20 overflow-hidden">
      <Ripple
        mainCircleSize={60}
        mainCircleOpacity={0.1}
        numCircles={3}
        className="[--foreground:39_60%_38%]"
      />
    </div>
  );
}

function ExpandDivider() {
  return (
    <div className="flex justify-center">
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        initial={{ width: 0 }}
        whileInView={{ width: "60%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  );
}

const variants = {
  beam: BeamDivider,
  wave: WaveDivider,
  dots: DotsDivider,
  ripple: RippleDivider,
  expand: ExpandDivider,
};

export default function AnimatedDivider({ variant = "dots", className }) {
  const Component = variants[variant];
  if (!Component) return null;

  return (
    <div className={cn(variant === "dots" ? "py-10" : "py-4", className)}>
      <Component className={className} />
    </div>
  );
}
