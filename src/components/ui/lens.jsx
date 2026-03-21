"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Lens({
  children,
  zoomFactor = 1.5,
  lensSize = 170,
  className,
}) {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Disable on touch devices
  const isTouch = typeof window !== "undefined" && "ontouchstart" in window;

  const handleMouseMove = (e) => {
    if (isTouch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  if (isTouch) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0.58 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute pointer-events-none z-50"
            style={{
              width: lensSize,
              height: lensSize,
              left: mousePosition.x - lensSize / 2,
              top: mousePosition.y - lensSize / 2,
              borderRadius: "50%",
              border: "2px solid rgba(196, 151, 59, 0.3)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12), inset 0 0 20px rgba(196, 151, 59, 0.08)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: containerRef.current?.offsetWidth || 0,
                height: containerRef.current?.offsetHeight || 0,
                transform: `scale(${zoomFactor})`,
                transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
                position: "absolute",
                left: -(mousePosition.x - lensSize / 2),
                top: -(mousePosition.y - lensSize / 2),
              }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
