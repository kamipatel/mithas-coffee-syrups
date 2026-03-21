"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
  staggerDelay = 0.03,
}) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split("");

  useEffect(() => {
    animate(
      "span",
      { opacity: 1, filter: filter ? "blur(0px)" : "none" },
      { duration, delay: stagger(staggerDelay) }
    );
  }, [scope, animate, duration, filter, staggerDelay]);

  return (
    <motion.div ref={scope} className={cn("inline-block", className)}>
      {wordsArray.map((char, idx) => (
        <motion.span
          key={idx}
          className="inline-block"
          style={{
            filter: filter ? "blur(10px)" : "none",
            opacity: 0,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
