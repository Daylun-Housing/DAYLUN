"use client";

import Image from "next/image";
import StdLayout from "../Common/StdLayout";
import Footer from "../Common/Footer";

const pillars = [
  {
    title: "Bio-based Materials",
    copy:
      "We replace petro-heavy inputs with renewable feedstocks. Our bamboo OSB uses rapidly renewable fiber, while our vegetable glue delivers structural strength without harsh fumes or solvents.",
    items: [
      "Bamboo OSB: high strength-to-weight, moisture resistance, robust nail-holding",
      "Vegetable Glue: organic two-part adhesive with epoxy-like performance",
      "EVAN Board: recyclable, lightweight interior panel with flame-retardant performance",
    ],
    image: "/Bamboo.png",
  },
  {
    title: "Circular Design",
    copy:
      "Products are built to be recycled, upcycled, and re-used. We prioritize disassembly, recyclable inputs, and minimized waste across production and end-of-life.",
    items: [
      "Recyclable and upcyclable material choices where possible",
      "Durable assemblies to extend service life and reduce replacements",
      "Spec sheets that emphasize reuse pathways and material recovery",
    ],
    image: "/Recyclable.webp",
  },
  {
    title: "Low-Impact Construction",
    copy:
      "Systems are engineered to lower environmental impact on site. From permeable driveways to insulated panels, we focus on reducing water runoff, energy use, and embodied carbon.",
    items: [
      "Permeable roadway concepts for water harvesting and flood mitigation",
      "Insulated bamboo panels to reduce operational energy",
      "Lightweight EVAN boards to cut transport emissions and onsite waste",
    ],
    image: "/CitySolutions.png",
  },
];

/**
 * SUSTAINABILITY PAGE
 * A template outlining Daylun's sustainability vision and technologies.
 */
export default function Sustainability() {
  return (
    <StdLayout>
      <section className="bg-[var(--light-blue)] text-[var(--txt-bright)] py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col gap-4">
          <p className="uppercase tracking-[0.2em] text-sm font-semibold">Daylun Sustainability</p>
          <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold leading-tight">
            Building resilient, low-impact homes and infrastructure.
          </h1>
          <p className="text-[clamp(1rem,2vw,1.25rem)] max-w-3xl">
            Our vision is to replace high-emission construction inputs with renewable materials, circular design, and
            systems that reduce water, waste, and energy use. The technologies below are core to that mission.
          </p>
        </div>
      </section>

      <section className="bg-[var(--dark-blue)] text-[var(--txt-bright)] py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid gap-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-[rgba(255,255,255,0.05)] border border-[var(--light-blue)] rounded-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-6 md:p-10 space-y-4">
                  <p className="uppercase text-xs tracking-[0.2em] text-[var(--txt-faint-grey)]">{pillar.title}</p>
                  <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold text-[var(--light-blue)]">
                    {pillar.title}
                  </h2>
                  <p className="text-[clamp(1rem,1.8vw,1.1rem)] leading-relaxed">{pillar.copy}</p>
                  <ul className="list-disc list-inside space-y-2 text-[clamp(0.95rem,1.6vw,1.05rem)]">
                    {pillar.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="relative min-h-[260px] bg-[rgba(255,255,255,0.04)] flex items-center justify-center">
                  <div className="relative w-full h-[260px] md:h-full">
                    <Image src={pillar.image} alt={pillar.title} fill className="object-contain p-8" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--light-blue)] text-[var(--txt-bright)] py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-[rgba(255,255,255,0.08)] rounded-xl">
            <h3 className="font-bold text-xl mb-2">Materials</h3>
            <p>
              Bamboo OSB and EVA panels prioritize renewability, recyclability, and strength to cut replacements and
              reduce waste.
            </p>
          </div>
          <div className="p-6 bg-[rgba(255,255,255,0.08)] rounded-xl">
            <h3 className="font-bold text-xl mb-2">Adhesives</h3>
            <p>
              Vegetable glue provides structural bonding without harmful fumes, lowering indoor air quality impacts and
              chemical emissions.
            </p>
          </div>
          <div className="p-6 bg-[rgba(255,255,255,0.08)] rounded-xl">
            <h3 className="font-bold text-xl mb-2">Water & Energy</h3>
            <p>
              Permeable roadway concepts harvest rainwater while insulated panels and lightweight boards reduce
              operational energy and transport emissions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </StdLayout>
  );
}
