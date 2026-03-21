"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SyrupCard from "./SyrupCard";
import SamplerPack from "./SamplerPack";
import { syrups, COLORS } from "@/lib/constants";

export default function SyrupGrid() {
  const [activeSyrup, setActiveSyrup] = useState(0);

  return (
    <section
      id="syrups"
      className="px-6 py-[90px] pb-[110px]"
      style={{
        background: `linear-gradient(180deg, ${COLORS.cream} 0%, ${COLORS.parchment} 30%, ${COLORS.parchment} 70%, ${COLORS.cream} 100%)`,
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div className="text-center mb-[52px]">
            <SectionLabel>The Collection</SectionLabel>
            <SectionTitle>Five Syrups, Five Stories</SectionTitle>
            <p className="font-sans text-[15px] text-walnut/65 mt-3.5 font-light">
              Each inspired by a beloved desi sweet &middot; All $15 per bottle
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {syrups.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08}>
              <SyrupCard
                syrup={s}
                isActive={activeSyrup === i}
                onClick={() => setActiveSyrup(i)}
              />
            </Reveal>
          ))}
        </div>

        <SamplerPack />
      </div>
    </section>
  );
}
