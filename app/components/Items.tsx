import Image from "next/image";

import { useIsVisible } from "../JS_Scripts/Visible";
import { useRef } from "react";

/**
 * ITEMS
 * @returns {JSX.Element}
 * 
 * Shows products available. 
 */
export default function Items() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);
  const inventoryItems = [
    {
      title: "Bamboo OSB",
      image: "/blue-bamboo-osb.webp",
      alt: "Bamboo OSB board",
      href: "/TechnologyPages?section=bamboo_osb",
    },
    {
      title: "EVAN Board",
      image: "/fabric_foam.webp",
      alt: "EVAN Board",
      href: "/TechnologyPages?section=evan_board",
    },
    {
      title: "Vegetable Glue",
      image: "/VegetableGlue.png",
      alt: "Vegetable Glue",
      href: "/TechnologyPages?section=vegetable_glue",
    },
  ];

  return (
    <section
      ref={ref_WhatWeDo}
      className={`flex flex-col md:flex-row justify-center transition-all duration-[1200ms] ease-in-out ${is_visible_WWD ? "opacity-100" : "opacity-25"}`}
    >

      {inventoryItems.map((item) => (
        <div key={item.title} className="md:w-1/3 py-2 justify-center items-center flex">
          <div className="overflow-hidden w-4/5 relative">
            <a href={item.href}>
              <div className="hover:scale-110 duration-100">
                <div className="z-20 transition-all font-bold text-2xl text-[var(--txt-bright)] drop-shadow absolute h-full w-full bg-black/30 flex items-center text-center justify-center opacity-0 hover:opacity-100">
                  View details
                </div>

                <div className="bg-[var(--dark-blue)] w-full h-[400px] items-center justify-center text-center">
                  <div className="relative w-full h-4/5 items-center flex justify-center">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="m-4 text-[1.25rem] md:text-[clamp(1px,4vw,1rem)] text-[var(--txt-bright)]">
                    {item.title}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
