"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";

export default function AboutFounder() {
  return (
    <section id="founder" className="px-6 py-20 bg-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-64 h-64 bg-walnut/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <SectionLabel>Meet the Maker</SectionLabel>
            <SectionTitle>Hi, I&apos;m Ruhi</SectionTitle>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left column — Photos with overlapping effect */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={0.1}>
              <div className="relative z-20 w-[85%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-walnut/10 transform rotate-[-2deg]">
                <Image
                  src="/images/pop-up-Pic.png"
                  alt="Ruhi, founder of Mithas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="absolute -bottom-10 -right-4 lg:-right-8 z-30 w-[60%] aspect-[1] rounded-2xl overflow-hidden shadow-xl border-4 border-cream transform rotate-[4deg]">
                <Image
                  src="/images/IMG_2282.JPG"
                  alt="Mithas drink with traditional bangles"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </Reveal>

            {/* Subtle decorative SVG motif */}
            <div className="absolute -top-8 -left-8 text-gold/20 pointer-events-none hidden md:block">
              <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 0C50 27.6 27.6 50 0 50C27.6 50 50 72.4 50 100C50 72.4 72.4 50 100 50C72.4 50 50 27.6 50 0Z" />
              </svg>
            </div>
          </div>

          {/* Right column — Bio */}
          <div className="lg:col-span-7 flex flex-col gap-8 pt-10 lg:pt-4">
            <div className="space-y-6">
              <BlurFade delay={0.2} inView>
                <p className="font-serif text-2xl text-espresso leading-relaxed italic">
                  &ldquo;I grew up in Mumbai, where chai breaks, family gatherings, and everyday moments were always tied to flavor, warmth, and tradition.&rdquo;
                </p>
              </BlurFade>

              <div className="h-px w-20 bg-gold/30" />

              <BlurFade delay={0.3} inView>
                <div className="space-y-6 text-walnut leading-loose font-light">
                  <p className="font-sans text-base">
                    After moving to Houston as a teenager, I found myself wanting to
                    recreate those familiar tastes in new ways &mdash; especially
                    through coffee. Mithas began from that idea: bringing South
                    Asian-inspired flavors into everyday coffee experiences in a way
                    that feels both nostalgic and elevated.
                  </p>
                  <p className="font-sans text-base">
                    What started as experimenting with homemade syrups became a way
                    for me to blend culture, creativity, and entrepreneurship into
                    something I genuinely love sharing with others.
                  </p>
                </div>
              </BlurFade>
            </div>

            <BlurFade delay={0.5} inView>
              <div className="mt-4 flex flex-col items-start translate-x-[-10px]">
                <span className="font-signature text-4xl text-gold pb-1">Ruhi</span>
                <span className="text-xs uppercase tracking-[0.2em] text-walnut/60 font-medium">Founder, Mithas</span>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
