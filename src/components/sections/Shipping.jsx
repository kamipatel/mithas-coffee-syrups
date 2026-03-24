"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { COLORS, INSTAGRAM_URL } from "@/lib/constants";
import { MessageCircle, MapPin, Package } from "lucide-react";

const steps = [
  {
    Icon: MessageCircle,
    title: "DM Us on Instagram",
    desc: "Send us a message on Instagram to start your order.",
    color: COLORS.rose,
  },
  {
    Icon: MapPin,
    title: "Share Your Details",
    desc: "Tell us what you want + your shipping address.",
    color: COLORS.gold,
  },
  {
    Icon: Package,
    title: "We Ship It",
    desc: "We\u2019ll ship it right to your door.",
    color: COLORS.fig,
  },
];

export default function Shipping() {
  return (
    <section id="shipping" className="px-6 py-14 bg-parchment">
      <div className="max-w-[900px] mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <SectionLabel>Nationwide</SectionLabel>
            <SectionTitle>We Ship Everywhere</SectionTitle>
            <p className="font-sans text-[15px] text-walnut/65 mt-3.5 font-light max-w-[480px] mx-auto leading-[1.75]">
              Mithas ships anywhere in the US. Shipping runs $12&ndash;16
              depending on how many bottles you order.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.2,
                type: "spring",
                stiffness: 150,
                damping: 20,
              }}
              className="h-full"
            >
              <div className="h-full flex flex-col text-center p-[36px_24px_32px] rounded-2xl bg-white shadow-[0_2px_16px_rgba(0,0,0,0.03)] border border-gold/[0.06]">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-[18px]"
                  style={{
                    background: `${item.color}10`,
                    border: `1px solid ${item.color}20`,
                    color: item.color,
                  }}
                >
                  <item.Icon size={28} strokeWidth={1.5} />
                </div>
                <span className="font-sans text-[10px] text-gold font-bold tracking-[0.18em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl text-espresso mt-2 mb-2.5 font-semibold">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-walnut leading-[1.7] font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="text-center mt-14">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <ShimmerButton
                shimmerColor="#C4973B"
                shimmerSize="0.06em"
                background={`linear-gradient(135deg, ${COLORS.espresso}, ${COLORS.brown})`}
                borderRadius="100px"
                className="px-11 py-[18px]"
              >
                <span className="inline-flex items-center gap-3 font-sans text-base font-semibold text-cream">
                  <InstagramIcon size={20} />
                  DM to Order on Instagram
                </span>
              </ShimmerButton>
            </a>
            <p className="font-sans text-[13px] text-walnut/50 mt-3.5 font-light">
              Pickup still available &middot; West Campus, Austin
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
