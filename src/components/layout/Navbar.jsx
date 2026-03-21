"use client";

import { useState, useEffect } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navLinks, navIds, INSTAGRAM_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import InstagramIcon from "@/components/ui/InstagramIcon";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(navIds);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navShowing = scrollY > 80;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-[clamp(16px,4vw,40px)]",
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          navShowing
            ? "bg-cream/[0.93] backdrop-blur-[24px] backdrop-saturate-[1.2] border-b border-gold/[0.09]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-transparent border-none cursor-pointer p-0 font-serif text-2xl font-semibold text-espresso tracking-[0.02em]"
        >
          mithas
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-1.5 items-center">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={cn(
                "border-none cursor-pointer px-3.5 py-1.5 rounded-full font-sans text-[13px] font-medium tracking-[0.02em] transition-all duration-300",
                activeSection === l.id
                  ? "bg-gold/[0.08] text-espresso"
                  : "bg-transparent text-walnut hover:text-espresso"
              )}
            >
              {l.label}
            </button>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-espresso text-cream border-none font-sans text-[13px] font-semibold px-[22px] py-[9px] rounded-full cursor-pointer ml-2 tracking-[0.02em] no-underline transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_4px_20px_rgba(42,24,16,0.25)]"
          >
            <InstagramIcon size={16} />
            DM to Order
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer p-2 z-[101]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="w-[22px] flex flex-col gap-[5px]">
            <span
              className="block h-0.5 bg-espresso rounded-sm transition-all duration-300"
              style={{
                transform: menuOpen
                  ? "rotate(45deg) translate(5px, 5px)"
                  : "none",
              }}
            />
            <span
              className={cn(
                "block h-0.5 bg-espresso rounded-sm transition-opacity duration-200",
                menuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className="block h-0.5 bg-espresso rounded-sm transition-all duration-300"
              style={{
                transform: menuOpen
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "none",
              }}
            />
          </div>
        </button>
      </nav>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        scrollTo={scrollTo}
      />
    </>
  );
}
