"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function MovingBorder({
  children,
  duration = 6000,
  rx = "20",
  ry = "20",
  className,
  containerClassName,
  borderClassName,
  as: Component = "div",
  ...props
}) {
  return (
    <Component
      className={cn(
        "relative overflow-hidden rounded-[20px] p-[1.5px]",
        "bg-transparent",
        containerClassName
      )}
      {...props}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `${rx}px` }}
      >
        <MovingBorderSVG duration={duration} rx={rx} ry={ry} borderClassName={borderClassName} />
      </div>
      <div
        className={cn(
          "relative z-10 rounded-[calc(20px-1.5px)] bg-white",
          className
        )}
      >
        {children}
      </div>
    </Component>
  );
}

function MovingBorderSVG({ duration, rx, ry, borderClassName }) {
  const pathRef = useRef(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMs = length / duration;
      progress.set((time * pxPerMs) % length);
    }
  });

  const x = useTransform(progress, (val) => {
    const point = pathRef.current?.getPointAtLength(val);
    return point?.x ?? 0;
  });
  const y = useTransform(progress, (val) => {
    const point = pathRef.current?.getPointAtLength(val);
    return point?.y ?? 0;
  });

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="absolute h-full w-full"
      width="100%"
      height="100%"
    >
      <rect
        fill="none"
        width="100%"
        height="100%"
        rx={rx}
        ry={ry}
        ref={pathRef}
      />
      <motion.rect
        className={cn("fill-none", borderClassName)}
        width="20%"
        height="20%"
        x="0"
        y="0"
        rx={rx}
        ry={ry}
        style={{
          transform,
          filter: "blur(0px)",
        }}
        stroke="url(#movingBorderGradient)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient id="movingBorderGradient">
          <stop stopColor="#C4973B" stopOpacity="0" />
          <stop stopColor="#C4973B" />
          <stop offset="0.5" stopColor="#C9A87C" />
          <stop offset="1" stopColor="#C4973B" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
