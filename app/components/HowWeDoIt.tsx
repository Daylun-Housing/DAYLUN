import Image from "next/image";

import {useIsVisible} from "../JS_Scripts/Visible"
import { useRef } from "react";

export default function HowWeDo() {
  
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative overflow-hidden md:flex h-[450px] sm:h-[550px] md:h-[700px] w-full">
      {/* Left Panel with Image */}
      <div ref={ref_WhatWeDo} className={`relative w-full md:w-1/2 lg:w-2/3 h-[50%] md:h-auto z-0 transition-all ease-in-out duration-1000 ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[5%] scale-[140%] lg:scale-[140%]"}`}>
          <Image
            src="/how-we-do-it-1.jpg"
            alt="How we do it background"
            fill
            className="object-cover"
          />
      </div>

      {/* Right Panel with Text */}
      <div ref={ref_WhatWeDo} className={`w-full md:w-1/2 lg:w-1/3 h-1/2 md:h-full transition-all ease-in-out duration-1000 
                                        ${is_visible_WWD ? "md:translate-x-0 scale-x-100" : "md:translate-x-[30%] scale-x-[150%] md:scale-x-110"}`}>
        <div className="bg-[#0474BC] h-full text-white flex flex-col justify-center px-10 md:px-20 relative z-10">
          <div className="max-w-md mt-4 md:mt-16">
            <h2 className="text-[clamp(1.5rem,2vw,3rem)] font-extrabold mb-8 leading-tight">
              HOW WE DO IT
            </h2>
            <p className="text-[clamp(0.5rem, 1vw, 1.5rem)] leading-relaxed">
              Innovation is core to Daylun. Our focus and investments in construction build has
              resulted in developing/creating premium, passive, net zero, and technically
              advanced pre-engineered homes.
            </p>
          </div>
        </div>
      </div>

      {/*Notch Thingy*/}
      
      <div ref={ref_WhatWeDo} className={`absolute left-[80%] sm:left-3/4 md:left-[55%] lg:left-2/3 top-1/2 w-1/3 transition-all ease-in-out duration-1000 ${is_visible_WWD ? "-translate-x-0 scale-100" : "translate-x-[30%] scale-110"}`}>
        <div className="-translate-x-full -translate-y-1/2 w-36 h-36 scale-0 md:scale-[80%] lg:scale-100 bg-[#0474BC] -z-100" />
      </div>
    </section>
  );
}
