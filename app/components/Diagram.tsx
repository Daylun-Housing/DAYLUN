import Image from "next/image";

import { useIsVisible } from "../JS_Scripts/Visible";
import { useRef } from "react";

export default function Diagram() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section
      className={`h-0 md:h-full bg-[#04012A] text-white overflow-hidden w-full`}
    >
      <div className="flex relative w-full justify-center">
        <h2 className="text-[clamp(1.5rem,2vw,3rem)] md:text-[clamp(1.5rem,4vw,3rem)] font-extrabold md:m-4 leading-tight">
          OUR <span className="text-[#0474BC]">PRODUCTS</span>
        </h2>
      </div>
      <div
        ref={ref_WhatWeDo}
        className={` transition-all w-full md:h-[500px] duration-1000 flex md:flex-row text-xs md:text-md
                                            ${is_visible_WWD ? "opacity-100 scale-x-100" : "opacity-0 scale-x-110"} `}
      >
        <div className="relative w-1/5 h-full z-20 text-[#0474BC] ">
          <div className="scale-0 md:scale-100 relative top-[55%]">
            <a
              href="https://daylun.myshopify.com/products/evan-board"
              className="hover:text-white duration-100"
            >
              <div className="md:w-[clamp(55%,15vw,75%)] lg:w-[clamp(65%,18vw,75%)] xl:w-[clamp(75%,17vw,90%)] h-[2px] bg-[#0474BC] mb-2 translate-x-[16vw]" />{" "}
              {/* Line pointing up */}
              <div className="translate-x-[10%] -translate-y-[20px]">
                EVAN BOARD
              </div>
            </a>
          </div>
          <div className="scale-0 md:scale-100 relative top-[35%] lg:top-[30%]">
            <a
              href="https://daylun.myshopify.com/products/waterproof-membrane-1"
              className="hover:text-white duration-100"
            >
              <div className="md:w-[clamp(55%,15vw,75%)] lg:w-[clamp(65%,18vw,75%)] xl:w-[clamp(75%,17vw,90%)] h-[2px] bg-[#0474BC] mb-2 translate-x-[16vw]" />{" "}
              {/* Line pointing up */}
              <div className="translate-x-[10%] -translate-y-[20px] xl:w-full md:w-1/2">
                WATERPROOF MEMBRANE
              </div>
            </a>
          </div>
          <div className="scale-0 md:scale-100 relative md:top-[13%] lg:top-[10%] xl:top-[7%]">
            <a
              href="https://daylun.myshopify.com/products/roof-trusses"
              className="hover:text-white duration-100"
            >
              <div className="md:w-[clamp(40%,16vw,65%)] lg:w-[clamp(85%,22vw,110%)] xl:w-[clamp(75%,25vw,130%)] h-[2px] bg-[#0474BC] mb-2 translate-x-[15vw]" />{" "}
              {/* Line pointing up */}
              <div className="translate-x-[10%] -translate-y-[20px]">
                ROOF HANGER
              </div>
            </a>
          </div>
        </div>
        <div className="relative w-3/5 h-full z-0 flex">
          <Image
            src="/Home_Sketch.jpg"
            alt="Home Sketch"
            fill
            className="object-contain py-2"
          />
          <div className="absolute text-white top-[clamp(10rem,22vw,10rem)] font-bold text-lg left-[15%] bg-[#0474BC] md:scale-0">
            1
          </div>
        </div>
        <div className="relative w-1/5 h-full text-[#0474BC] ">
          <div className="scale-0 md:scale-100 relative top-[25%] lg:top-[20%] xl:top-[14%] z-2 w-full">
            <a
              href="https://daylun.myshopify.com/products/sips-walls-structural-insulated-panels"
              className="block hover:text-white duration-100 w-full"
            >
              <div className="md:w-[clamp(85%,22vw,150%)] h-[2px] bg-[#0474BC] mb-2 -translate-x-[18vw]" />{" "}
              {/* Line pointing up */}
              <div className="translate-x-[45%] -translate-y-[20px] w-full break-words whitespace-normal xl:w-full md:w-1/2">
                <p>SIPs Walls</p>
              </div>
            </a>
          </div>
          <div className="scale-0 md:scale-100 relative top-[35%] lg:top-[30%]">
            <a
              href="https://daylun.myshopify.com/collections/frontpage"
              className="hover:text-white duration-100"
            >
              <div className="md:w-[clamp(85%,23vw,120%)] xl:w-[clamp(75%,25vw,130%)] h-[2px] bg-[#0474BC] mb-2 -translate-x-[22vw]" />{" "}
              {/* Line pointing up */}
              <div className="translate-x-[45%] -translate-y-[20px]">
                SHEATHING
              </div>
            </a>
          </div>
          <div className="scale-0 md:scale-100 relative top-[53%] lg:top-[56%] xl:top-[61%] z-2 w-full">
            <a
              href="https://daylun.myshopify.com/products/vegetable-glue"
              className="block hover:text-white duration-100 w-full"
            >
              <div className="md:w-[clamp(85%,22vw,110%)] xl:w-[clamp(75%,25vw,130%)] h-[2px] bg-[#0474BC] mb-2 -translate-x-[18vw]" />{" "}
              {/* Line pointing up */}
              <div className="translate-x-[45%] -translate-y-[20px] w-full break-words whitespace-normal xl:w-full md:w-1/2">
                <p>VEGETABLE GLUE</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
