"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HeroHighlight({ children, className, containerClassName }) {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("relative overflow-hidden", containerClassName)}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        animate={{
          background: isHovered
            ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(196,151,59,0.12), transparent 60%)`
            : "radial-gradient(400px circle at 50% 50%, rgba(196,151,59,0), transparent 60%)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}

export function Highlight({ children, className }) {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      whileInView={{ backgroundSize: "100% 100%" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block rounded-md bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 px-1 pb-1",
        className
      )}
    >
      {children}
    </motion.span>
  );
}
