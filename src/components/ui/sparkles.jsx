"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

function generateSparkle(color) {
  return {
    id: String(Math.random()),
    createdAt: Date.now(),
    color,
    size: Math.random() * 6 + 4,
    style: {
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
    },
  };
}

function SparkleInstance({ color, size, style }) {
  return (
    <motion.svg
      className="absolute pointer-events-none z-20"
      initial={{ scale: 0, rotate: 0, opacity: 0 }}
      animate={{
        scale: [0, 1, 0],
        rotate: [0, 90, 180],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
    >
      <path
        d="M80 0C80 0 84.2846 41.2925 97.496 62.504C110.707 83.7154 152 88 152 88C152 88 110.707 92.2846 97.496 113.496C84.2846 134.707 80 176 80 176C80 176 75.7154 134.707 62.504 113.496C49.2926 92.2846 8 88 8 88C8 88 49.2926 83.7154 62.504 62.504C75.7154 41.2925 80 0 80 0Z"
        fill={color}
      />
    </motion.svg>
  );
}

export function Sparkles({
  children,
  className,
  color = "#C4973B",
  count = 3,
  minDelay = 300,
  maxDelay = 1200,
}) {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const sparkle = generateSparkle(color);
      setSparkles((prev) => {
        const filtered = prev.filter((s) => now - s.createdAt < 900);
        if (filtered.length >= count) return filtered;
        return [...filtered, sparkle];
      });
    }, minDelay + Math.random() * (maxDelay - minDelay));

    return () => clearInterval(interval);
  }, [color, count, minDelay, maxDelay]);

  return (
    <span className={cn("relative inline-block", className)}>
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <SparkleInstance
            key={sparkle.id}
            color={sparkle.color}
            size={sparkle.size}
            style={sparkle.style}
          />
        ))}
      </AnimatePresence>
      <span className="relative z-10">{children}</span>
    </span>
  );
}
