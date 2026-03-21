"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { INSTAGRAM_URL } from "@/lib/constants";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="fixed bottom-5 left-4 right-4 z-[90] md:hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 20,
      }}
      transition={{ duration: 0.35 }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <ShimmerButton
          shimmerColor="#C4973B"
          shimmerSize="0.05em"
          background="#2A1810"
          borderRadius="100px"
          className="w-full py-4 shadow-[0_8px_32px_rgba(42,24,16,0.31)]"
        >
          <span className="inline-flex items-center gap-2.5 font-sans text-[15px] font-semibold text-cream">
            <InstagramIcon size={18} />
            DM to Order
          </span>
        </ShimmerButton>
      </a>
    </motion.div>
  );
}
