import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible";
import { useRef } from "react";

export default function Bamboo() {
    
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative overflow-hidden flex h-[700px] w-full">
          {/* Left Panel */}
          <div ref={ref_WhatWeDo} className={`bg-[#04012A] text-white flex flex-col justify-center px-10 md:px-20 w-[60%] relative z-10 
                                              transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[30%] scale-110"}`}>
            <div  className={`mt-16 text-left `}>
              <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-extrabold mb-4 md:mb-8 leading-tight text-[#0474BC]">
                Bamboo OSB
              </h2>
              <p className="text-xs sm:text-s md:text-md lg:text-xl leading-relaxed">
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
                  <button className="bg-[#0474BC] text-white font-bold px-8 py-3 rounded-md scale-[70%] sm:scale-[75%] md:scale-[80%] lg:scale-100 hover:text-[#d4d5d6] hover:bg-[#015185] transition">
                    PURCHASE NOW
                  </button>

                </a>
              </p>
            </div>
    
            
          </div> 
          {/* Right Panel */}
          <div ref={ref_WhatWeDo}  className={`bg-[#0474BC] w-[40%] items-center flex justify-center
                                            transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[5%] scale-[175%]"}`}>
            <div className={`absolute w-[500px] scale-[40%] hover:scale-[45%] sm:scale-[50%] sm:hover:scale-[55%] 
                        md:scale-[55%] md:hover:scale-[60%] lg:scale-[60%] lg:hover:scale-[70%] xl:scale-[80%] xl:hover:scale-[90%] duration-100 h-full object-fill`}>
              <Image
              src="/Bamboo.png"
              alt="Bamboo Breakdown"
              fill
              className="object-contain translate-x-[5%]"
            />
            </div>
          </div>
    
          {/* Notch Thingy */}
          <div ref={ref_WhatWeDo} className={`absolute left-[50%] sm:left-50 md:left-[57%] lg:left-[60%] top-1/2  md:w-1/3 transition-all ease-in-out duration-[1500ms] ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[40%] scale-110"}`}>
            <div className=" -translate-y-1/2 w-36 h-36 scale-[50%] sm:scale-[60%] md:scale-[80%] lg:scale-100 bg-[#04012A] z-20" />
          </div>
        </section>
  );
}