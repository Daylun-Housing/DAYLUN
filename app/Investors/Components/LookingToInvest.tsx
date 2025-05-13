import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function LookingToInvest() {
  
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative overflow-hidden flex flex-col md:flex-row h-screen w-full">
      {/* Left Panel with Image */}
      <div ref={ref_WhatWeDo} className={`relative md:w-2/3 h-96 md:h-auto z-0 transition-all ease-in-out duration-1000 
                                          ${is_visible_WWD ? "translate-x-0 scale-100" : "translate-x-[100px] scale-125"}`}>
        <Image
          src="/how-we-do-it-1.jpg"
          alt="How we do it background"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Panel with Text */}
      <div ref={ref_WhatWeDo} className={`md:w-1/3 transition-all ease-in-out duration-1000 
                                        ${is_visible_WWD ? "translate-x-0 scale-x-100" : "translate-x-[100px] scale-x-110"}`}>
        <div className="bg-[#0474BC] text-white h-full flex flex-col justify-center px-10 md:px-20 relative z-10">
          <div className="max-w-md mt-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
              LOOKING<br />TO INVEST?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Interesting in our company? Contact us and we can figure something out.
            </p>
          </div>
        </div>
      </div>

      {/*Notch Thingy*/}
      
      <div ref={ref_WhatWeDo} className={`absolute left-2/3 top-1/2  md:w-1/3 transition-all ease-in-out duration-1000 ${is_visible_WWD ? "-translate-x-0 scale-100" : "translate-x-[100px] scale-110"}`}>
        <div className="-translate-x-full -translate-y-1/2 w-36 h-36 bg-[#0474BC] -z-100" />
      </div>
    </section>
  );
}
