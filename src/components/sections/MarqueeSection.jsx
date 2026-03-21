import { Coffee, GlassWater, Gift, Home, Tent, CupSoda, GraduationCap, Heart } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const CUSTOMER_PILLS = [
  { label: "Coffee Lovers", Icon: Coffee },
  { label: "Matcha Addicts", Icon: GlassWater },
  { label: "Gift Givers", Icon: Gift },
  { label: "Home Baristas", Icon: Home },
  { label: "Pop-Up Regulars", Icon: Tent },
  { label: "Chai Enthusiasts", Icon: CupSoda },
  { label: "UT Students", Icon: GraduationCap },
  { label: "Desi Food Fans", Icon: Heart },
];

const FLAVOR_STRING =
  "Gulab Jamun \u2726 Anjeer Halwa \u2726 Salted Date \u2726 Peanut Chikki \u2726 Gajar-e-Ishq \u2726 Mithai ka Dabba";

export default function MarqueeSection() {
  return (
    <section
      className="py-8 border-y border-gold/[0.06] bg-cream overflow-hidden"
      aria-label="Our community and flavors"
    >
      {/* Row 1 — scrolling left: customer type pills */}
      <div className="[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <Marquee
          pauseOnHover
          className="[--duration:35s] [--gap:0.75rem]"
        >
          {CUSTOMER_PILLS.map((pill) => (
            <span
              key={pill.label}
              className="inline-flex items-center gap-1.5 bg-white/60 text-espresso font-sans text-sm font-medium px-4 py-2 rounded-full border border-gold/10 hover:border-gold/30 transition-colors whitespace-nowrap"
            >
              <pill.Icon size={14} strokeWidth={2} className="text-gold" />
              {pill.label}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Row 2 — scrolling right: flavor names */}
      <div className="mt-3 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <Marquee
          reverse
          className="[--duration:50s] [--gap:2rem]"
        >
          <span className="font-serif text-lg text-walnut/40 italic whitespace-nowrap">
            {FLAVOR_STRING}
          </span>
        </Marquee>
      </div>
    </section>
  );
}
