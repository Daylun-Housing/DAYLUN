import Image from "next/image";

import { useIsVisible } from "../JS_Scripts/Visible"
import { useRef } from "react";

export default function WhatWeDo() {

  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative overflow-hidden md:flex h-[450px] sm:h-[550px] md:h-[700px] w-full">
      {/* Left Panel */}
      <div ref={ref_WhatWeDo} className={`w-full md:w-1/2 lg:w-1/3 transition-all ease-in-out duration-1000 z-10
                                        ${is_visible_WWD ? "md:translate-x-0 scale-x-100" : "md:-translate-x-[30%] scale-x-110"}`}>
        <div className="bg-[#0474BC] text-white flex h-full flex-col justify-center px-3 md:px-20 relative ">
          <div className="max-w-md mt-4 md:mt-16">
            <h2 className="text-[clamp(1.5rem,2vw,3rem)] md:text-[clamp(1.5rem,4vw,3rem)] font-extrabold mb-8 leading-tight">
              WHAT WE DO
            </h2>
            <p className="text-[clamp(0.5rem, 1vw, 1.5rem)] md:text-[clamp(0.5rem,3vw,1.5rem)] leading-relaxed mb-4">
              Daylun integrates stylish architectural design with structural engineering quality,
              technology and sustainable energy efficient homes.
            </p>
            <a href="./About" className="text-[clamp(0.5rem, 0.5vw, 1.5rem)] md:text-[clamp(0.5rem,3vw,1.5rem)] mb-4 leading-relaxed hover:text-[#04012A]">
              <p>Learn more about DAYLUN</p>
            </a>
          </div>
        </div>

      </div>

      {/* Right Panel */}
      <div ref={ref_WhatWeDo} className={`relative w-full md:w-1/2 lg:w-2/3 h-full bg-[#04012A] md:h-auto z-0 transition-all ease-in-out duration-1000 ${is_visible_WWD ? "translate-x-0 scale-[102%]" : "-translate-x-[5%] scale-[140%] lg:scale-[125%]"}`}>
        <Image
          src="/what-we-do.jpg"
          alt="Modern house"
          fill
          className="object-contain md:object-cover object-top absolute"
        />
      </div>

      {/* Notch Thingy */}
      <div ref={ref_WhatWeDo} className={`absolute md:left-[40%] lg:left-[30%] top-1/2  w-1/3 transition-all ease-in-out duration-1000 ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[40%] scale-110"}`}>
        <div className=" -translate-y-1/2 w-36 h-36 scale-0 md:scale-[80%] lg:scale-100 bg-[#0474BC] -z-100" />
      </div>

    </section>
  );
}
