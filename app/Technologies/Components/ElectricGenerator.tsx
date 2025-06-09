import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function Generator() {
    
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
      <section className="relative overflow-hidden flex h-[700px] w-full">
        {/* Left Panel */}
        <div ref={ref_WhatWeDo}  className={`bg-[#04012A] flex flex-col justify-center w-[40%] relative -z-1000
                                            transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "translate-x-0 scale-100" : "translate-x-[5%] scale-[175%]"}`}>
          <div className={`absolute scale-[40%] hover:scale-[45%] sm:scale-[50%] sm:hover:scale-[55%] 
                         duration-100 w-full h-full object-fill
                                              `}>
            <Image
            src="/Generator.webp"
            alt="Electric Generator"
            fill
            className="object-contain -translate-x-[15%]"
          />
          </div>
  
          
        </div> 
        {/* Right Panel */}
        <div ref={ref_WhatWeDo} className={`z-20 bg-[#0474BC] w-[60%] items-center flex justify-center
                                              transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "translate-x-0 scale-100" : "translate-x-[30%] scale-110"}`}>
          <div className={`max-w-xl mt-16 text-left text-white px-5`}>
              <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-extrabold md:mb-3 leading-tight text-[#04012A]">
                The Electric Generator 
              </h2>
              <br />
              <p className="text-xs sm:text-s md:text-md lg:text-lg leading-relaxed">
                Reliable Power, Anywhere – Without the Noise
                <br />
                <br />

                Say goodbye to gas fumes and engine noise. Daylun’s all-new 3600W Electric Generator offers silent, sustainable energy wherever you need 
                it. With a peak output of 7200W and a 3600Wh battery (expandable for longer use), this generator is built for modern off-grid living and 
                emergency preparedness.
              </p>

            <a href="./Investors">
              <button className="bg-[#04012A] text-white font-bold px-8 py-3 mt-4 rounded-md hover:text-[#d4d5d6] scale-[70%] sm:scale-[75%] md:scale-[80%] lg:scale-100 hover:bg-[#080354] transition">
                MAKE IT REALITY
              </button>
            </a>
            </div>

          </div>
  
        {/* Notch Thingy */}
        <div ref={ref_WhatWeDo} className={`absolute left-[50%] sm:left-[45%] md:left-[43%] lg:left-[40%] top-1/2  md:w-1/3 transition-all ease-in-out duration-[1500ms] ${is_visible_WWD ? "translate-x-0 scale-100" : "translate-x-[75%] scale-110"}`}>
          <div className=" -translate-y-1/2 -translate-x-full w-36 h-36 scale-[50%] sm:scale-[60%] md:scale-[80%] lg:scale-100 bg-[#0474BC] z-2" />
        </div>
      </section>
  
  );
}