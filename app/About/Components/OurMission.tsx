import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function OurMission() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative overflow-hidden flex h-[700px] w-full">
      {/* Left Panel */}
      <div ref={ref_WhatWeDo} className={`w-1/3 transition-all ease-in-out duration-1000 z-20
                                        ${is_visible_WWD ? "translate-x-0 scale-x-100" : "-translate-x-[30%] scale-x-110"}`}>
        <div className="bg-[#04012A] text-white flex flex-col h-full justify-center px-10 md:px-20 w-full relative z-10">
          <div className="max-w-md mt-16">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-extrabold mb-8 leading-tight">
              Our Mission
            </h2>
            <p className="text-s md:text-md lg:text-xl leading-relaxed">
            DAYLUN's mission is to develop innovative construct technologies to revolutionize the construction sector while providing sustainable and 
            affordable housing for all. 
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div ref={ref_WhatWeDo} className={`relative w-2/3 h-full md:h-auto z-0 transition-all ease-in-out 
                                          duration-1000 ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[5%] scale-[120%]"}`}>
        <Image
          src="/toronto-town-home.jpg"
          alt="Town house"
          fill
          className="object-cover"
        />
      </div>

      {/* Notch Thingy */}
      <div ref={ref_WhatWeDo} className={`absolute left-[20%] sm:left-1/4 md:left-[30%] lg:left-1/3 top-1/2  w-1/3 transition-all ease-in-out duration-1000 ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[60%] scale-110"}`}>
        <div className=" -translate-y-1/2 w-36 h-36 scale-[50%] sm:scale-[60%] md:scale-[80%] lg:scale-100 bg-[#04012A] -z-100" />
      </div>

    </section>
  );
}