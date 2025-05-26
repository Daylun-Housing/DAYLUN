import Image from "next/image";

import {useIsVisible} from "../JS_Scripts/Visible"
import { useRef } from "react";

export default function WhatWeDo() {
  
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative overflow-hidden flex h-[700px] w-full">
      {/* Left Panel */}
      <div ref={ref_WhatWeDo} className={`w-1/3 transition-all ease-in-out duration-1000 
                                        ${is_visible_WWD ? "translate-x-0 scale-x-100" : "-translate-x-[30%] scale-x-110"}`}>
        <div className="bg-[#0474BC] text-white flex h-full flex-col justify-center px-10 md:px-20 relative z-10">
          <div className="max-w-md mt-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
              WHAT WE<br />DO
            </h2>
            <p className="text-s md:text-md lg:text-xl leading-relaxed mb-4">
              Daylun integrates stylish architectural design with structural engineering quality, 
              technology and sustainable energy efficient homes.
            </p>
            <a href="./About" className="text-s md:text-md lg:text-xl leading-relaxed hover:text-[#04012A]">
              <p>Learn more about DAYLUN</p>
            </a>
          </div>
        </div>
        
      </div>  

      {/* Right Panel */}
      <div ref={ref_WhatWeDo} className={`relative w-2/3 h-full md:h-auto z-0 transition-all ease-in-out duration-1000 ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[5%] scale-[120%]"}`}>
        <Image
          src="/what-we-do.jpg"
          alt="Modern house"
          fill
          className="object-cover"
        />
      </div>

      {/* Notch Thingy */}
      <div ref={ref_WhatWeDo} className={`absolute left-[20%] sm:left-1/4 md:left-[30%] lg:left-1/3 top-1/2  w-1/3 transition-all ease-in-out duration-1000 ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[30%] scale-110"}`}>
        <div className=" -translate-y-1/2 w-36 h-36 scale-[50%] sm:scale-[60%] md:scale-[80%] lg:scale-100 bg-[#0474BC] -z-100" />
      </div>

    </section>
  );
}
