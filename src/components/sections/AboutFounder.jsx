"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import { BlurFade } from "@/components/ui/blur-fade";

export default function AboutFounder() {
  return (
    <section id="founder" className="px-6 py-20 bg-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-64 h-64 bg-walnut/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Left column — Single photo (40%) */}
          <div className="lg:col-span-2 order-1">
            <Reveal delay={0.1}>
              <div className="relative w-full rounded-2xl overflow-hidden max-h-[300px] lg:max-h-[400px]">
                <Image
                  src="/images/pop-up-Pic.png"
                  alt="Ruhi, founder of Mithas"
                  width={600}
                  height={800}
                  className="object-cover w-full h-full max-h-[300px] lg:max-h-[400px] rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </Reveal>
          </div>

          {/* Right column — Heading + Bio + Name (60%) */}
          <div className="lg:col-span-3 order-2 flex flex-col gap-6">
            <Reveal>
              <div className="text-center lg:text-left">
                <SectionLabel>Meet the Maker</SectionLabel>
                <SectionTitle>Hi, I&apos;m Ruhi</SectionTitle>
              </div>
            </Reveal>

            <BlurFade delay={0.2} inView>
              <div className="text-espresso leading-loose font-normal">
                <p className="font-serif text-xl">
                  I grew up in Mumbai, where chai breaks, family gatherings, and
                  everyday moments were always tied to flavor, warmth, and
                  tradition. After moving to Houston as a teenager, I found
                  myself wanting to recreate those familiar tastes in new ways
                  &mdash; especially through coffee. Mithas began from that
                  idea: bringing South Asian-inspired flavors into everyday
                  coffee experiences in a way that feels both nostalgic and
                  elevated. What started as experimenting with homemade syrups
                  became a way for me to blend culture, creativity, and
                  entrepreneurship into something I genuinely love sharing
                  with others.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.5} inView>
              <div className="flex flex-col items-start">
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
