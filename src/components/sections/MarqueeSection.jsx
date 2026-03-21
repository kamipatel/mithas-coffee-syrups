import { Marquee } from "@/components/ui/marquee";

const CUSTOMER_PILLS = [
  { emoji: "☕", label: "Coffee Lovers" },
  { emoji: "🍵", label: "Matcha Addicts" },
  { emoji: "🎁", label: "Gift Givers" },
  { emoji: "🏠", label: "Home Baristas" },
  { emoji: "🎪", label: "Pop-Up Regulars" },
  { emoji: "🫖", label: "Chai Enthusiasts" },
  { emoji: "🤘", label: "UT Students" },
  { emoji: "🇮🇳", label: "Desi Food Fans" },
];

const FLAVOR_STRING =
  "Gulab Jamun \u2726 Anjeer Halwa \u2726 Salted Date \u2726 Peanut Chikki \u2726 Gajar-e-Ishq \u2726 Mithai ka Dabba";

export default function MarqueeSection() {
  return (
    <section
      className="py-8 border-y border-gold/10 bg-cream overflow-hidden"
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
              className="inline-flex items-center gap-1.5 bg-cream text-espresso font-sans text-sm font-medium px-4 py-2 rounded-full border border-gold/10 hover:border-gold/30 transition-colors whitespace-nowrap"
            >
              <span className="text-base">{pill.emoji}</span>
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
          <span className="font-serif text-lg text-gold italic whitespace-nowrap">
            {FLAVOR_STRING}
          </span>
        </Marquee>
      </div>
    </section>
  );
}
