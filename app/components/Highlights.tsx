import {useIsVisible} from "../JS_Scripts/Visible"
import { useRef } from "react";

export default function HighlightsSection() {
  
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className={`bg-[#04012A] text-[#0474BC] text-center py-24 px-6`}>
     

      <div className="text-7xl md:text-8xl font-bold space-y-12">
        <div ref={ref_WhatWeDo} className={`flex flex-wrap justify-center gap-x-24 gap-y-6 transition-all ease-in duration-500 ${is_visible_WWD ? "translate-x-[120px]" : "-translate-x-[100px]"}`}>
          <span>SPEED</span>
          <span>COST EFFICIENCY</span>
        </div>
        <div ref={ref_WhatWeDo} className={`flex flex-wrap justify-center gap-x-24 gap-y-6 transition-all ease-in duration-500 ${is_visible_WWD ? "translate-x-[-70px]" : "translate-x-[50px]"}`}>
          <span>SUSTAINABILITY</span>
          <span>PRECISION</span>
        </div>
      </div>

      <p className="mt-20 text-white text-sm tracking-widest font-light">
        <span className="font-bold">HOUSING</span> OF THE <span className="font-bold">FUTURE</span>
      </p>
    </section>
  );
}
  