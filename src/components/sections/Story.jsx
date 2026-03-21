"use client";

import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Divider from "@/components/ui/Divider";
import { BorderBeam } from "@/components/ui/border-beam";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Story() {
  return (
    <section id="story" className="px-6 py-14">
      <TracingBeam beamColor="#C4973B">
        <div className="max-w-[760px] mx-auto">
          <div className="text-center">
            <Reveal>
              <SectionLabel>Our Story</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <SectionTitle>
                Turning childhood
                <br />
                desserts into your
                <br />
                morning coffee
              </SectionTitle>
            </Reveal>
            <Reveal delay={0.16}>
              <Divider />
            </Reveal>

            {/* Two-column story text */}
            <Reveal delay={0.22}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 text-left mt-2">
                <p className="font-serif text-xl text-espresso leading-[1.8] font-normal first-letter:float-left first-letter:text-[44px] first-letter:leading-none first-letter:mr-2 first-letter:mt-1 first-letter:text-gold first-letter:font-light">
                  Growing up, the sweetest memories were always tied to mithai
                  &mdash; gulab jamun at celebrations, gajar ka halwa on winter
                  evenings, anjeer halwa from grandmother&apos;s kitchen.
                </p>
                {/* Right column with subtle border beam */}
                <div className="relative rounded-2xl bg-white/50 p-5 border border-gold/[0.05] overflow-hidden">
                  <p className="font-sans text-[15px] text-walnut leading-[1.85] font-light relative z-10">
                    Mithas was born from a simple idea: what if those flavors could
                    be part of your everyday coffee? Each syrup is handcrafted in
                    small batches right here in Austin. No artificial flavors, no
                    shortcuts &mdash; just real ingredients and the flavors of home,
                    one latte at a time.
                  </p>
                  <BorderBeam
                    size={150}
                    duration={8}
                    colorFrom="#C4973B"
                    colorTo="#C9A87C"
                    className="opacity-30"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </TracingBeam>
    </section>
  );
}
