"use client";

import { motion } from "framer-motion";
import { Instagram, MessageCircle, ArrowUp, Mail } from "lucide-react";
import Divider from "@/components/ui/Divider";
import { INSTAGRAM_URL } from "@/lib/constants";

function DockIcon({ icon: Icon, label, href, onClick }) {
  const isExternal = href?.startsWith("http");

  const content = (
    <motion.div
      className="w-10 h-10 rounded-lg bg-white/40 backdrop-blur-sm border border-gold/5 flex items-center justify-center cursor-pointer text-walnut/70 hover:text-gold transition-colors"
      whileHover={{ scale: 1.25, y: -4 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      title={label}
    >
      <Icon size={16} strokeWidth={1.5} />
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="no-underline"
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="bg-transparent border-none p-0">
      {content}
    </button>
  );
}

export default function Footer() {
  return (
    <footer className="px-6 pt-8 pb-6 text-center bg-cream">
      <Divider width={40} />
      <p className="font-serif text-[22px] text-espresso mt-5 mb-1 font-medium">
        mithas
      </p>
      <p className="font-sans text-xs text-walnut/50 mb-0 font-light">
        Flavors that feel like home &middot; Austin, TX
      </p>

      {/* Dock navigation */}
      <div className="flex items-end justify-center gap-2 mt-7 mb-5 px-3 py-2 mx-auto w-fit rounded-xl bg-parchment/30 border border-gold/[0.04]">
        <DockIcon icon={Instagram} label="Instagram" href={INSTAGRAM_URL} />
        <DockIcon
          icon={MessageCircle}
          label="DM to Order"
          href={INSTAGRAM_URL}
        />
        <DockIcon
          icon={ArrowUp}
          label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
        <DockIcon
          icon={Mail}
          label="Email"
          href="mailto:hello@mithas.co"
        />
      </div>

      <div className="mt-5 opacity-30">
        <p className="font-sans text-[10px] text-walnut mb-0.5 font-light">
          &copy; 2026 Mithas. Handcrafted with love.
        </p>
        <a 
          href="#" 
          className="font-sans text-[10px] text-walnut hover:underline transition-all block opacity-[0.25]"
        >
          Built by Foundry
        </a>
      </div>
    </footer>
  );
}
