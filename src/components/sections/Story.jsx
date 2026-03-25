"use client";

import Image from "next/image";
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
        <div className="max-w-[1000px] mx-auto">
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

            {/* Two-column: text left, image right */}
            <Reveal delay={0.22}>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mt-2">
                {/* Text column — 55% */}
                <div className="w-full md:w-[55%] space-y-6 text-left">
                  <p className="font-serif text-xl text-espresso leading-[1.8] font-normal first-letter:float-left first-letter:text-[44px] first-letter:leading-none first-letter:mr-2 first-letter:mt-1 first-letter:text-gold first-letter:font-light">
                    Growing up, the sweetest memories were always tied to mithai
                    &mdash; gulab jamun at celebrations, gajar ka halwa on winter
                    evenings, anjeer halwa from grandmother&apos;s kitchen.
                  </p>
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

                {/* Image column — 45% */}
                <div className="w-full md:w-[45%] relative rounded-2xl overflow-hidden max-h-[250px] md:max-h-[350px]">
                  <Image
                    src="/images/IMG_4039.jpg"
                    alt="Mithas Gulab Jamun syrup bottle with roses"
                    width={500}
                    height={600}
                    className="object-cover w-full h-full max-h-[250px] md:max-h-[350px] rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 45vw"
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
