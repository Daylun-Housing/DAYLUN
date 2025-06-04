import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function PanelSystem() {
    
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
            src="/DAYLUN_LOGO_blue-2b.svg"
            alt="DAYLUN logo"
            fill
            className="object-contain -translate-x-[15%]"
          />
          </div>
  
          
        </div> 
        {/* Right Panel */}
        <div ref={ref_WhatWeDo} className={`z-20 bg-[#0474BC] w-[60%] items-center flex justify-center
                                              transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "translate-x-0 scale-100" : "translate-x-[30%] scale-110"}`}>
          <div className={`max-w-xl mt-16 text-left text-white px-5`}>
              <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-extrabold md:mb-8 leading-tight text-[#04012A]">
                8x8 Panel System
              </h2>
              <br />
              <p className="text-xs sm:text-s md:text-md lg:text-xl leading-relaxed">
                Our interlocking panel system is the key part for our projects. This system is exceptionally easy to transport - 
                4 people alone can carry it. 
                <br />
                <br />

                Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect 
                nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely 
                queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power 
                pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki 
                excepteur Basset hound. Zürich sleepy perfect consectetur.
              </p>
            </div>
          </div>
  
        {/* Notch Thingy */}
        <div ref={ref_WhatWeDo} className={`absolute left-[50%] sm:left-[45%] md:left-[43%] lg:left-[40%] top-1/2  md:w-1/3 transition-all ease-in-out duration-[1500ms] ${is_visible_WWD ? "translate-x-0 scale-100" : "translate-x-[75%] scale-110"}`}>
          <div className=" -translate-y-1/2 -translate-x-full w-36 h-36 scale-[50%] sm:scale-[60%] md:scale-[80%] lg:scale-100 bg-[#0474BC] z-2" />
        </div>
      </section>
  
  );
}