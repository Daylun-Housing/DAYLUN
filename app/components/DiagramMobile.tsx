import Image from "next/image";

import { useIsVisible } from "../JS_Scripts/Visible";
import { useRef } from "react";

export default function DiagramMobile() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section
      className={`h-full md:h-0 bg-[#04012A] text-white overflow-hidden w-full`}
    >
      <div className="flex relative w-full justify-center">
        <h2 className="text-[clamp(1.5rem,2vw,3rem)] md:text-[clamp(1.5rem,4vw,3rem)] font-extrabold m-4 leading-tight">
          OUR <span className="text-[#0474BC]">PRODUCTS</span>
        </h2>
      </div>
      <div className="relative w-full h-[400px] z-0 flex">
        <Image
          src="/Home_Sketch.jpg"
          alt="Home Sketch"
          fill
          className="object-contain py-2"
        />
        <div className="absolute text-white top-[clamp(4rem,7vh,5rem)] font-bold text-lg left-[21%] bg-[#0474BC] md:scale-0">
          1
        </div>
        <div className="absolute text-white top-[clamp(10rem,10vh,12rem)] font-bold text-lg left-[21%] bg-[#0474BC] md:scale-0">
          2
        </div>
        <div className="absolute text-white top-[clamp(14rem,12vh,15rem)] font-bold text-lg left-[21%] bg-[#0474BC] md:scale-0">
          3
        </div>
        <div className="absolute text-white top-[clamp(10rem,10vh,12rem)] font-bold text-lg left-[55%] bg-[#0474BC] md:scale-0">
          4
        </div>
        <div className="absolute text-white top-[clamp(16rem,15vh,20rem)] font-bold text-lg left-[72%] bg-[#0474BC] md:scale-0">
          5
        </div>
        <div className="absolute text-white top-[clamp(2rem,10vh,6rem)] font-bold text-lg left-[65%] bg-[#0474BC] md:scale-0">
          6
        </div>
      </div>
      <div
        ref={ref_WhatWeDo}
        className={` transition-all w-full h-[200px] md:h-0 duration-1000 flex md:flex-row text-xs md:text-md
                                            ${is_visible_WWD ? "opacity-100 scale-x-100" : "opacity-0 scale-x-110"} `}
      >
        <div className="relative w-full h-full z-20 text-[#0474BC] text-[clamp(1rem,2vw,2rem)]">
          <div className="absolute md:scale-0 px-4 flex justify-center w-full py-2">
            <li className="list-none grid grid-cols-2">
              <ul>
                <a
                  href="https://daylun.myshopify.com/products/roof-trusses"
                  className="hover:text-white"
                >
                  1. Roof Hanger
                </a>
              </ul>
              <ul>
                <a
                  href="https://daylun.myshopify.com/products/waterproof-membrane-1"
                  className="hover:text-white"
                >
                  2. Waterproof Membrane
                </a>
              </ul>
              <ul>
                <a
                  href="https://daylun.myshopify.com/products/evan-board"
                  className="hover:text-white"
                >
                  3. EVAN Board
                </a>
              </ul>
              <ul>
                <a
                  href="https://daylun.myshopify.com/collections/frontpage"
                  className="hover:text-white"
                >
                  4. Sheathing
                </a>
              </ul>
              <ul>
                <a
                  href="https://daylun.myshopify.com/products/vegetable-glue"
                  className="hover:text-white"
                >
                  5. Vegetable Glue
                </a>
              </ul>
              <ul>
                <a
                  href="https://daylun.myshopify.com/products/sips-walls-structural-insulated-panels"
                  className="hover:text-white"
                >
                  6. SIPs Panels
                </a>
              </ul>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
}
