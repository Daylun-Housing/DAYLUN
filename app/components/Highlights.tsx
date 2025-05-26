import {useIsVisible} from "../JS_Scripts/Visible"
import { useRef } from "react";

export default function HighlightsSection() {
  
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className={`bg-[#04012A] text-[#0474BC] text-center w-full py-12 md:py-24 px-6 overflow-hidden`}>
     

      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold space-y-6 md:space-y-12">
        <div ref={ref_WhatWeDo} className={`flex flex-wrap justify-center gap-x-12 md:gap-x-24 gap-y-6 transition-all ease-in duration-500 ${is_visible_WWD ? "translate-x-[12%]" : "-translate-x-[12%]"}`}>
          <span>SPEED</span>
          <span>COST EFFICIENCY</span>
        </div>
        <div ref={ref_WhatWeDo} className={`flex flex-wrap justify-center gap-x-12 md:gap-x-24 gap-y-6 transition-all ease-in duration-500 ${is_visible_WWD ? "-translate-x-[12%]" : "translate-x-[12%]"}`}>
          <span>SUSTAINABILITY</span>
          <span>PRECISION</span>
        </div>
      </div>

      <p className="mt-20 text-white text-[10px] sm:text-xs md:text-sm tracking-widest font-light">
        <span className="font-bold">HOUSING</span> OF THE <span className="font-bold">FUTURE</span>
      </p>
    </section>
  );
}
  