import Image from "next/image";

import {useIsVisible} from "../JS_Scripts/Visible"
import { useRef } from "react";

export default function WallSystem() {
  
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative bg-[#04012A] text-white py-24 md:px-4 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold">TECHNOLOGY</h2>
        <p className="text-[#0474BC] text-2xl md:text-3xl font-semibold mt-2">WALL SYSTEM</p>
        <p className="text-sm mt-4 text-white/70 max-w-xl ">
          We have patents for our innovations and sustainable solutions offerings. <br />
          <a href="./Technologies">
            <span className="text-sm mt-4 text-white/70 max-w-xl">
              See all of our <span className="text-[#0474BC] hover:text-[#0b8fd6]">Technologies</span>.
            </span>
          </a>
        </p>
        
      </div>

      {/* Wall Assembly */}
      <div className="relative flex justify-center scale-[55%] sm:scale-[60%] md:scale-[75%] lg:scale-100 items-end h-[700px] md:space-x-3 lg:space-x-4">
        {/* Wall 1 */}
        <div ref={ref_WhatWeDo} className={`relative w-[160px] h-full transition-all ease-in-out duration-[1200ms] ${is_visible_WWD ? "translate-x-0" : "-translate-x-[300%]"}`}>
          <Image src="/wall1.svg" alt="Wall 1" fill className="object-contain" />
        </div>

        {/* Wall 2 with bottom label */}
        <div className="relative w-[160px] h-full -ml-16">
          <div ref={ref_WhatWeDo} className={`relative w-[160px] h-full transition-all ease-in-out duration-[1400ms] ${is_visible_WWD ? "translate-x-0" : "-translate-x-[400%]"}`}>
            <Image src="/wall2.svg" alt="Wall 2" fill className="object-contain" />
          </div>
          <div ref={ref_WhatWeDo} className={`absolute bottom-0 left-1/2 -translate-x-1/2 text-white text-center leading-tight mb-2
                                                transition-all ease-in-out duration-[1600ms] ${is_visible_WWD ? "opacity-100" : "opacity-0"}`}>
            <div className="text-l w-px h-6 bg-white mx-auto mb-1" /> {/* Line pointing up */}
            OSB SHEET<br />WITH<br />MEMBRANE AND ISOTOP
            </div>
        </div>

        {/* Wall 3 with label and line */}
        <div className="relative w-[200px] h-full -ml-16 -mr-16 z-10">
          <div ref={ref_WhatWeDo} className={`relative w-[160px] h-full transition-all ease-in-out duration-[1600ms] ${is_visible_WWD ? "translate-x-0" : "-translate-x-[500%]"}`}>
            <Image src="/wall3.svg" alt="Wall 3" fill className="object-contain" />
          </div>
          <div ref={ref_WhatWeDo} className={`absolute top-10 left-1/2 -translate-x-1/2 text-l text-white text-center
                                              transition-all ease-in-out duration-[1800ms] ${is_visible_WWD ? "opacity-100" : "opacity-0"}`}>
            STEEL STRUCTURE
            <div className="w-px h-10 bg-white mx-auto mt-1" />
          </div>
        </div>

        {/* Wall 4 */}
        <div className="relative w-[160px] h-full -mr-16">
          <div ref={ref_WhatWeDo} className={`relative w-[160px] h-full transition-all ease-in-out duration-[1800ms] ${is_visible_WWD ? "translate-x-0" : "-translate-x-[600%]"}`}>
            <Image src="/wall4.svg" alt="Wall 4" fill className="object-contain" />
          </div>
        </div>

        {/* Wall 5 with label and line */}
        <div className="relative w-[160px] h-full">
          <div ref={ref_WhatWeDo} className={`relative w-[160px] h-full transition-all ease-in-out duration-[2000ms] ${is_visible_WWD ? "translate-x-0" : "-translate-x-[700%]"}`}>
            <Image src="/wall5.svg" alt="Wall 5" fill className="object-contain" />
          </div>
          <div ref={ref_WhatWeDo} className={`absolute -top-5 left-1/2 -translate-x-1/2 text-l text-white text-center leading-tight
                                            transition-all ease-in-out duration-[2000ms] ${is_visible_WWD ? "opacity-100" : "opacity-0"}`}>
            CLOSED SPRAY FOAM<br />ON THE OUTSIDE
            <div className="w-px h-12 bg-white mx-auto mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
