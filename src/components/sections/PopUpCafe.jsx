"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Coffee, ShoppingBag, Gift, Users } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";

const iconMap = {
  coffee: Coffee,
  "shopping-bag": ShoppingBag,
  gift: Gift,
  users: Users,
};

const features = [
  {
    icon: "coffee",
    title: "Specialty Lattes",
    desc: "Handcrafted drinks made with Mithas syrups \u2014 flavors you can\u2019t get anywhere else.",
  },
  {
    icon: "shopping-bag",
    title: "Shop Bottles",
    desc: "Full-size bottles and sampler packs available at every pop-up event.",
  },
  {
    icon: "gift",
    title: "Exclusive Drops",
    desc: "Limited seasonal flavors and collaborations only available at our events.",
  },
  {
    icon: "users",
    title: "Community",
    desc: "Meet the maker. Taste test. Connect with Austin\u2019s desi food community.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function PopUpCafe() {
  return (
    <section id="popups" className="px-6 py-[70px] md:py-[100px] bg-parchment relative overflow-hidden">
      <div className="max-w-[880px] mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <SectionLabel>Events</SectionLabel>
              {/* Pulsing location dot */}
              <motion.div
                className="w-2.5 h-2.5 rounded-full bg-gold"
                animate={{ scale: [1, 1.8, 1], opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
            </div>
            <SectionTitle>Pop-Up Caf&eacute;</SectionTitle>
            <p className="font-sans text-base text-walnut max-w-[480px] mx-auto mt-4 leading-[1.75] font-light opacity-80">
              We host pop-up caf&eacute; events around Austin with handcrafted
              lattes, matcha, and syrup tastings. Follow us to catch the next
              one.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-10 rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            <Image
              src="/images/pop-up-Pic.png"
              alt="Mithas pop-up café event in Austin"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-gold/[0.06] text-center h-full">
                  <div className="w-[52px] h-[52px] rounded-full bg-gold/[0.08] flex items-center justify-center mx-auto mb-3">
                    <Icon size={24} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif text-lg text-espresso mb-2 font-semibold">
                    {item.title}
                  </h4>
                  <p className="font-sans text-[13px] text-walnut leading-[1.65] font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
