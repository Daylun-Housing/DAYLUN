import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function PastReports() {
  
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative overflow-hidden flex h-[700px] w-full">
      {/* Left Panel */}
      <div ref={ref_WhatWeDo} className={`w-1/3 transition-all ease-in-out duration-1000 
                                        ${is_visible_WWD ? "translate-x-0 scale-x-100" : "-translate-x-[30%] scale-x-110"}`}>
        <div className="bg-[#04012A] h-full text-white flex flex-col justify-center px-10 md:px-20  relative z-10">
          <div className="max-w-md mt-16">
            <h2 className="text-[#0474BC] text-2xl sm:text-4xl lg:text-4xl xl:text-6xl font-extrabold mr-4 mb-8 leading-tight">
              Past Financial Reports
            </h2>
            <p className="text-sm md:text-md lg:text-xl leading-relaxed">
            See our past financial reports.
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div ref={ref_WhatWeDo} className={`relative w-2/3 h-full md:h-auto z-0 transition-all ease-in-out duration-1000 ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[5%] scale-[120%]"}`}>
        <Image
          src="/241-waterloo.jpg"
          alt="Modern house"
          fill
          className="object-cover"
        />
      </div>

      {/* Notch Thingy */}
      <div ref={ref_WhatWeDo} className={`absolute left-[25%] md:left-[30%] lg:left-1/3 top-1/2  w-1/3 transition-all ease-in-out duration-1000 ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[30%] scale-110"}`}>
        <div className=" -translate-y-1/2 w-36 h-36 scale-[50%] sm:scale-[60%] md:scale-[80%] lg:scale-100 bg-[#04012A] -z-100" />
      </div>
    </section>
  );
}