"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function PageIntro({ children }) {
  const [loading, setLoading] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const visited = sessionStorage.getItem("mithas-visited");
      if (visited) {
        setLoading(false);
        setHasVisited(true);
      } else {
        const timer = setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem("mithas-visited", "true");
        }, 2200);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  if (hasVisited) return children;

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-espresso"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <TextGenerateEffect
              words="mithas"
              className="font-serif text-[clamp(48px,10vw,80px)] font-normal text-gold tracking-[-0.03em]"
              duration={0.6}
              staggerDelay={0.06}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="font-sans text-[clamp(10px,1.5vw,13px)] tracking-[0.35em] uppercase text-roseGold mt-4 font-medium"
            >
              Handcrafted Coffee Syrups
            </motion.p>

            {/* Gold line trace */}
            <motion.div
              className="absolute left-0 right-0 top-1/2 h-px"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.6, ease: "easeInOut" }}
              style={{
                background: "linear-gradient(to right, transparent, #C4973B40, transparent)",
                transformOrigin: "center",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
}
