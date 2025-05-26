import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function GantryCrane() {
    
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative overflow-hidden flex h-[700px] w-full">
              {/* Left Panel */}
              <div ref={ref_WhatWeDo} className={`bg-[#04012A] text-white flex flex-col justify-center px-10 md:px-20 w-[60%] relative z-10 
                                                  transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[30%] scale-110"}`}>
                <div  className={`mt-16 text-left `}>
                  <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-extrabold mb-4 md:mb-8 leading-tight text-[#0474BC]">
                    Gantry Crane
                  </h2>
                  <p className="text-xs sm:text-s md:text-md lg:text-xl leading-relaxed">
                  lightweight crane, reduce time and labour.
                  <br />
                  <br />
    
                    Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect 
                    nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely 
                    queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power 
                    pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki 
                    excepteur Basset hound. Zürich sleepy perfect consectetur.
    
                    <br />
                    <br />
                    <a href="./Investors">
                      <button className="bg-[#0474BC] text-white font-bold px-8 py-3 rounded-md hover:text-[#d4d5d6] scale-[70%] sm:scale-[75%] md:scale-[80%] lg:scale-100 hover:bg-[#015185] transition">
                        MAKE IT REALITY
                      </button>

                    </a>
                  </p>
                </div>
        
                
              </div> 
              {/* Right Panel */}
              <div ref={ref_WhatWeDo}  className={`bg-[#0474BC] w-[40%] items-center flex justify-center
                                                transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[5%] scale-[175%]"}`}>
                <div className={`absolute w-full scale-[40%] hover:scale-[45%] sm:scale-[50%] sm:hover:scale-[55%] duration-100 h-full object-fill`}>
                  <Image
                    src="/DAYLUN_LOGO_blue-2b.svg"
                    alt="DAYLUN LOGO"
                    fill
                    className="object-contain translate-x-[10%]"
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