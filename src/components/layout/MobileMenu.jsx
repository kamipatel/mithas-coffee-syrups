"use client";

import { navLinks, INSTAGRAM_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import InstagramIcon from "@/components/ui/InstagramIcon";

export default function MobileMenu({ isOpen, onClose, scrollTo }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-40 flex flex-col items-center justify-center gap-7",
        "bg-cream/[0.98] backdrop-blur-[30px]",
        "transition-opacity duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      {navLinks.map((l, i) => (
        <button
          key={l.id}
          onClick={() => scrollTo(l.id)}
          className="bg-transparent border-none cursor-pointer font-serif text-[32px] font-medium text-espresso transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "none" : "translateY(20px)",
            transitionDelay: `${0.1 + i * 0.06}s`,
          }}
        >
          {l.label}
        </button>
      ))}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        className="inline-flex items-center gap-2.5 bg-espresso text-cream border-none font-sans text-base font-semibold px-11 py-4 rounded-full cursor-pointer mt-2 no-underline"
        style={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "none" : "translateY(20px)",
          transitionDelay: `${0.1 + navLinks.length * 0.06}s`,
          transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <InstagramIcon size={18} />
        DM to Order
      </a>
    </div>
  );
}
