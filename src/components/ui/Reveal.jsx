"use client";

import { useInView } from "@/hooks/useInView";

export default function Reveal({
  children,
  delay = 0,
  y = 50,
  className = "",
}) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
