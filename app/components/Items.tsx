import Image from "next/image";

import { useIsVisible } from "../JS_Scripts/Visible";
import { JSX, useRef } from "react";

/**
 * ITEMS
 * @returns {JSX.Element}
 * 
 * Shows products available. 
 */
export default function Items() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section
      ref={ref_WhatWeDo}
      className={`flex flex-col md:flex-row justify-center transition-all duration-[1200ms] ease-in-out ${is_visible_WWD ? "opacity-100" : "opacity-25"}`}
    >

      {/* Left Item - Classic Bamboo OSB */}
      <div className="md:w-1/3 py-2 justify-center items-center flex">
        <div className="overflow-hidden w-4/5 relative">
          <a href="https://daylun.myshopify.com/products/bamboo-osb-board">
            <div className="hover:scale-110 duration-100">
              <div className="z-20 transition-all font-bold text-2xl absolute h-full w-full bg-black/20 flex items-center text-center justify-center opacity-0 hover:opacity-100">
                View in Store
              </div>

              <div className="bg-[var(--dark-blue)] w-full h-[400px] items-center justify-center text-center">
                <div className="relative w-full h-4/5 items-center flex justify-center">
                  <Image
                    src="/Bamboo_Basic.webp"
                    alt="Bamboo Basic"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="m-4 text-[1.25rem] md:text-[clamp(1px,4vw,1rem)]">
                  Classic Bamboo OSB
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Middle Item - Waterproof Bamboo OSB */}
      <div className="md:w-1/3 py-2 justify-center items-center flex">
        <div className="overflow-hidden w-4/5 relative">
          <a href="https://daylun.myshopify.com/products/waterproofed-bamboo-barrier-tech">
            <div className="hover:scale-110 duration-100 ">
              <div className="z-20 transition-all font-bold text-2xl absolute h-full w-full bg-black/20 flex items-center justify-center text-center opacity-0 hover:opacity-100">
                View in Store
              </div>

              <div className="bg-[var(--dark-blue)] w-full h-[400px] items-center justify-center text-center">
                <div className="relative w-full h-4/5 items-center flex justify-center">
                  <Image
                    src="/Waterproofed.webp"
                    alt="Waterproofed Bamboo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="m-4 h-2/5 lg:h-1/5 text-[1.25rem] md:text-[clamp(1px,4vw,1rem)]">
                  Bamboo OSB with Waterproofing
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Right Item - Bamboo OSB */}
      <div className="md:w-1/3 py-2 justify-center items-center flex">
        <div className="overflow-hidden w-4/5 relative">
          <a href="https://daylun.myshopify.com/products/spec-sheet">
            <div className="hover:scale-110 duration-100 ">
              <div className="z-20 transition-all font-bold text-2xl absolute h-full w-full bg-black/20 flex items-center justify-center text-center opacity-0 hover:opacity-100">
                View in Store
              </div>

              <div className="bg-[var(--dark-blue)] w-full h-[400px] items-center justify-center text-center">
                <div className="relative w-full md:h-[70%] xl:h-4/5 h-3/5 items-center flex justify-center">
                  <Image
                    src="/Bamboo.png"
                    alt="Bamboo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="m-4 h-2/5 lg:h-1/5 text-[1.25rem] md:text-[clamp(1px,4vw,1rem)]">
                  Bamboo OSB with Waterproofing and Insulation
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
