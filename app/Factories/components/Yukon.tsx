import Image from "next/image";
import Newsletter from "../../Common/Newsletter";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function Yukon() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative bg-[#04012A] overflow-hidden md:flex h-[550px] md:h-[700px] w-full">
      {/* Left Panel */}
      <div ref={ref_WhatWeDo} className={`bg-[#04012A] py-3 w-full md:w-1/2 xl:w-1/3 transition-all ease-in-out duration-1000 z-20
                                        ${is_visible_WWD ? "translate-x-0 scale-x-100" : "md:-translate-x-[30%] scale-x-110"}`}>
        <div className="text-white flex flex-col justify-center px-10 md:px-20 w-full h-full relative">
          <div className="max-w-md">
            <h2 className="z-20 text-[clamp(1.5rem,2vw,3rem)] md:text-[clamp(1.5rem,4vw,3rem)] font-extrabold mb-8 leading-tight">
              Yukon Factory
            </h2>
            <p className="text-[clamp(0.5rem, 1vw, 1.5rem)] md:text-[clamp(0.5rem,3vw,1.5rem)] leading-relaxed">
              The Yukon Factory will be our first operation factory. Sign up to our Yukon newsletter to follow our development. 
              <br />
              <a href="/All_Articles/241_Waterloo" className="py-[50px]">Read More</a>
            </p>
          </div>
          <div className="md:-translate-x-[20%] lg:-translate-x-[10%]">
            <Newsletter />

          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div ref={ref_WhatWeDo} className={`relative w-full md:w-2/3 h-full md:h-auto z-2 transition-all ease-in-out 
                                          duration-1000 ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[5%] scale-[120%]"}`}>
        <Image
          src="/toronto-town-home.jpg"
          alt="Town house"
          fill
          className="object-contain md:object-cover object-top absolute md:p-0 "
        />
      </div>

      {/* Notch Thingy */}
      <div ref={ref_WhatWeDo} className={`absolute md:left-[40%] xl:left-1/3 top-1/2  w-1/3 transition-all ease-in-out duration-1000 ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[30%] scale-110"}`}>
        <div className=" -translate-y-1/2 w-36 h-36 scale-0 md:scale-[80%] lg:scale-100 bg-[#04012A] -z-100" />
      </div>

    </section>
  );
}