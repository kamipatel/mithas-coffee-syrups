"use client";

import { motion } from "framer-motion";
import { Instagram, MessageCircle, ArrowUp, Mail } from "lucide-react";
import Divider from "@/components/ui/Divider";
import { INSTAGRAM_URL } from "@/lib/constants";

function DockIcon({ icon: Icon, label, href, onClick }) {
  const isExternal = href?.startsWith("http");

  const content = (
    <motion.div
      className="w-11 h-11 rounded-xl bg-white/60 backdrop-blur-sm border border-gold/10 flex items-center justify-center cursor-pointer text-walnut hover:text-gold transition-colors"
      whileHover={{ scale: 1.4, y: -8 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      title={label}
    >
      <Icon size={18} strokeWidth={1.5} />
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
    <footer className="px-6 pt-12 pb-9 border-t border-gold/[0.08] text-center bg-cream">
      <Divider width={40} />
      <p className="font-serif text-[22px] text-espresso mt-5 mb-1 font-medium">
        mithas
      </p>
      <p className="font-sans text-xs text-walnut/50 mb-0 font-light">
        Flavors that feel like home &middot; Austin, TX
      </p>

      {/* Dock navigation */}
      <div className="flex items-end justify-center gap-3 mt-8 mb-6 px-5 py-3 mx-auto w-fit rounded-2xl bg-parchment/50 border border-gold/[0.06]">
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

      <p className="font-sans text-[10px] text-walnut/30 mt-5 font-light">
        &copy; 2026 Mithas. Handcrafted with love.
      </p>
    </footer>
  );
}
