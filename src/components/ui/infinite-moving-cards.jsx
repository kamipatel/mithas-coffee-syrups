"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
  renderItem,
}) {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      const directionVal = direction === "left" ? "forwards" : "reverse";
      containerRef.current.style.setProperty("--animation-direction", directionVal);

      const speedVal = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "60s";
      containerRef.current.style.setProperty("--animation-duration", speedVal);

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-10 overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_10%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: "var(--animation-duration)",
          animationDirection: "var(--animation-direction)",
        }}
      >
        {items.map((item, idx) => (
          <li key={idx} className="w-[320px] max-w-full flex-shrink-0">
            {renderItem ? renderItem(item, idx) : null}
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 12px)); }
        }
        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) linear infinite;
          animation-direction: var(--animation-direction, forwards);
        }
      `}</style>
    </div>
  );
}
