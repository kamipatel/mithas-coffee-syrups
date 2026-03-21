"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function TracingBeam({ children, className, beamColor = "#C4973B" }) {
  const ref = useRef(null);
  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });

  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    { stiffness: 500, damping: 90 }
  );

  return (
    <motion.div ref={ref} className={cn("relative w-full max-w-4xl mx-auto", className)}>
      <div className="absolute -left-4 md:-left-12 top-3">
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke={`${beamColor}20`}
            strokeWidth="1.25"
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke={`url(#gradient-${beamColor.replace("#", "")})`}
            strokeWidth="1.25"
            className="motion-reduce:hidden"
          />
          <defs>
            <motion.linearGradient
              id={`gradient-${beamColor.replace("#", "")}`}
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor={beamColor} stopOpacity="0" />
              <stop stopColor={beamColor} />
              <stop offset="0.325" stopColor={beamColor} />
              <stop offset="1" stopColor={beamColor} stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>

        {/* Glowing dot */}
        <motion.div
          style={{
            top: y1,
          }}
          className="absolute left-[0.5px] -translate-x-1/2"
        >
          <div
            className="h-4 w-4 rounded-full border border-neutral-200 shadow-sm flex items-center justify-center"
            style={{ borderColor: `${beamColor}40` }}
          >
            <div
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: beamColor,
                boxShadow: `0 0 8px ${beamColor}60`,
              }}
            />
          </div>
        </motion.div>
      </div>

      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
}
