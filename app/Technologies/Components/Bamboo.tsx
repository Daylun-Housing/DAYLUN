import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function Bamboo() {
    
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative flex flex-col md:flex-row h-screen w-full">
      {/* Left Panel */}
      <div className="bg-[#04012A] text-white flex flex-col justify-center px-10 md:px-20 w-1/2 relative z-10">
        <div ref={ref_WhatWeDo} className={`max-w-xl mt-16 text-left
                                          transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "opacity-100 scale-100" : "opacity-25 scale-50"}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
          Bamboo OSB
          </h2>
          <br />
          <p className="text-lg md:text-xl leading-relaxed">
          Bamboo, when dried, is as strong and versatile as wood.
          <br />
          <br />

          Daylun Bamboo Oriented Strand Board (OSB) stands out from traditional OSB solutions with its exceptional, 
          blend of enduring strength, moisture resistance and robust nail-holding capabilities. Enhanced by the 
          polyurethane bond of sub floor adhesive, the OSB assembly ensure a panel-to-joist connection so formidable 
          that squeaks are virtually non-existent. Moreover, Daylun achieve sustainability excellence leveraging bamboo 
          as a building material, which is not only durable but also 100% sustainable.

          <br />
          <br />
          <a href="https://daylun.myshopify.com/products/spec-sheet">
          <span className="hover:text-[#0474BC] font-bold">PURCHASE NOW</span>

          </a>
          </p>

        </div>

        
      </div> 
      {/* Right Panel */}
      <div className="bg-[#04012A] w-1/2 items-center flex justify-center">
        <div ref={ref_WhatWeDo} className={`absolute w-[500px] h-[700px] scale-50 hover:scale-75 duration-100 object-fill
                                            transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "opacity-100 scale-50" : "opacity-25 scale-[10%]"}`}>
            <Image
              src="/Bamboo.png"
              alt="Bamboo Breakdown"
              fill
              className="object-cover"
            />
          </div>
      </div>
    </section>
  );
}