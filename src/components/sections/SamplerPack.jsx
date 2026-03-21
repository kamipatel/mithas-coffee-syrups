import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { BorderBeam } from "@/components/ui/border-beam";
import { Meteors } from "@/components/ui/meteors";
import { COLORS, samplerPack, INSTAGRAM_URL } from "@/lib/constants";

export default function SamplerPack() {
  return (
    <Reveal delay={0.15}>
      <div
        className="mt-12 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 relative"
        style={{
          background: `linear-gradient(135deg, ${COLORS.espresso}, ${COLORS.brown} 40%, ${COLORS.walnut})`,
        }}
      >
        {/* Subtle radial highlights */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 15% 30%, ${COLORS.gold}12, transparent 50%), radial-gradient(circle at 85% 70%, ${COLORS.rose}08, transparent 40%)`,
          }}
        />

        {/* Meteors */}
        <Meteors number={3} />

        {/* Border beam */}
        <BorderBeam
          size={250}
          duration={12}
          colorFrom="#C4973B"
          colorTo="#C9A87C"
          className="opacity-40"
        />

        {/* Text side */}
        <div className="p-[clamp(32px,5vw,56px)] relative z-10">
          <span className="inline-block bg-gold text-espresso font-sans text-[10px] font-bold tracking-[0.1em] uppercase px-3.5 py-[5px] rounded-full mb-5">
            {samplerPack.tag}
          </span>
          <h3 className="font-serif text-[clamp(28px,4vw,38px)] text-cream mb-1 font-medium">
            {samplerPack.name}
          </h3>
          <p className="font-sans text-xs text-roseGold tracking-[0.1em] uppercase mb-[18px] font-medium">
            {samplerPack.subtitle}
          </p>
          <p className="font-sans text-[15px] text-cream/[0.73] leading-[1.75] mb-7 font-light max-w-[380px]">
            {samplerPack.description}
          </p>
          <div className="flex items-baseline gap-1.5 mb-6">
            <span className="font-serif text-5xl text-cream font-medium">
              ${samplerPack.displayPrice}
            </span>
            <span className="font-sans text-[13px] text-cream/40 font-light">
              sampler
            </span>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-espresso font-sans text-sm font-semibold px-7 py-3 rounded-full no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(196,151,59,0.3)]"
          >
            DM to Order
          </a>
        </div>

        {/* Visual side */}
        <div className="relative overflow-hidden min-h-[300px] md:min-h-full">
          <Image
            src="/images/aestheticPic.png"
            alt="Mithas syrup collection lineup"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${COLORS.espresso}40, transparent 60%)`,
            }}
          />
        </div>
      </div>
    </Reveal>
  );
}
