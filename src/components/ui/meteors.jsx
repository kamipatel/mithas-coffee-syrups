"use client";

import { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";

export function Meteors({ number = 3, className }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const meteors = useMemo(
    () =>
      Array.from({ length: number }, () => ({
        left: `${Math.floor(Math.random() * 80 + 10)}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${Math.floor(Math.random() * 4 + 4)}s`,
      })),
    [number]
  );

  if (!mounted) return null;

  return (
    <>
      {meteors.map((m, idx) => (
        <span
          key={idx}
          className={cn(
            "animate-meteor absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-full shadow-[0_0_0_1px_#C4973B10]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%]",
            "before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-gold before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: m.left,
            animationDelay: m.delay,
            animationDuration: m.duration,
          }}
        />
      ))}
    </>
  );
}
