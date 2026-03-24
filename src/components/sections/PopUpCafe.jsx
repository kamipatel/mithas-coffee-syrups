"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Coffee, ShoppingBag, Gift, Users, Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { COLORS, INSTAGRAM_URL } from "@/lib/constants";

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
    <section id="popups" className="px-6 py-14 bg-parchment relative overflow-hidden">
      <div className="max-w-[880px] mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-12">
            <div className="mb-4">
              <SectionLabel>Events</SectionLabel>
            </div>
            <SectionTitle>Pop-Up Caf&eacute;</SectionTitle>
            <p className="font-sans text-base text-walnut max-w-[480px] mx-auto mt-4 leading-[1.75] font-light opacity-80">
              We host pop-up caf&eacute; events around Austin with handcrafted
              lattes, matcha, and syrup tastings. Follow us to catch the next
              one.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
          {/* Image — left 40% */}
          <Reveal delay={0.1} className="md:col-span-2 h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] h-full min-h-[300px]">
              <Image
                src="/images/pop-up-Pic.png"
                alt="Mithas pop-up café event in Austin"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </Reveal>

          {/* Content — right 60% */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <div className="bg-white rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-gold/[0.06] text-center h-full">
                      <div className="w-[44px] h-[44px] rounded-full bg-gold/[0.08] flex items-center justify-center mx-auto mb-2.5">
                        <Icon size={20} className="text-gold" strokeWidth={1.5} />
                      </div>
                      <h4 className="font-serif text-base text-espresso mb-1.5 font-semibold">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs text-walnut leading-[1.65] font-light">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Event Photos Gallery */}
        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] aspect-[4/3]">
              <Image
                src="/images/1E18B0B4-C3F0-4555-B5BF-ABF727E703A7.JPG"
                alt="Mithas bottle lineup with specialty lattes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] aspect-[4/3]">
              <Image
                src="/images/IMG_6274.jpg"
                alt="Mithas pop-up booth setup"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] aspect-[4/3]">
              <Image
                src="/images/IMG_2008.jpg"
                alt="Mithas pop-up event products and syrups"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </Reveal>

        {/* Event Booking Subsection */}
        <Reveal delay={0.2}>
          <div className="mt-14 text-center">
            <h3 className="font-serif text-[clamp(24px,4vw,32px)] text-espresso font-medium mb-3">
              Book Mithas for Your Event
            </h3>
            <p className="font-sans text-[15px] text-walnut leading-[1.75] font-light max-w-[480px] mx-auto mb-8">
              Want Mithas at your next event? We bring the syrups, the lattes,
              and the vibes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:ruhinanji@gmail.com?subject=Event%20Booking%20Inquiry"
                className="inline-block"
              >
                <ShimmerButton
                  shimmerColor="#C4973B"
                  shimmerSize="0.06em"
                  background={`linear-gradient(135deg, ${COLORS.espresso}, ${COLORS.brown})`}
                  borderRadius="100px"
                  className="px-9 py-[16px]"
                >
                  <span className="inline-flex items-center gap-3 font-sans text-base font-semibold text-cream">
                    <Mail size={20} />
                    Book via Email
                  </span>
                </ShimmerButton>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <ShimmerButton
                  shimmerColor="#C4973B"
                  shimmerSize="0.06em"
                  background={`linear-gradient(135deg, ${COLORS.brown}, ${COLORS.caramel})`}
                  borderRadius="100px"
                  className="px-9 py-[16px]"
                >
                  <span className="inline-flex items-center gap-3 font-sans text-base font-semibold text-cream">
                    <InstagramIcon size={20} />
                    DM to Order
                  </span>
                </ShimmerButton>
              </a>
            </div>

            <p className="font-sans text-[13px] text-walnut/50 mt-5 font-light">
              Follow us on Instagram for upcoming event dates:{" "}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline underline-offset-2 hover:text-gold/80 transition-colors"
              >
                @mithas.coffeesyrups
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
