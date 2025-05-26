import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function OurStory() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);
  
  return (
    <section className="relative flex h-[525px] w-full">
      {/* Left Panel */}
      <div className={`bg-[#0474BC] items-center text-white w-full flex flex-col justify-center px-10 md:px-20 relative z-10`}>
        <div ref={ref_WhatWeDo}  className={`max-w-3xl mt-16 text-center transition-all ease-in-out duration-1000 ${is_visible_WWD ? "opacity-100" : "opacity-25"}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
            Our Story
          </h2>
          <p className="text-s md:text-md lg:text-xl leading-relaxed">
          Our CEO, Arthur, launched Daylun in 2021 to leverage his insight and experience. The company is set to become a 
            market-changing leader in the passive home industry with an array of proprietary green building materials and technologies. 
            With Arthur at the helm, Daylun has all of the trailblazing qualities of a leading disruptor, combining sustainability and
             technology to deliver passive net-zero homes with greater efficiency and speed.
          </p>
        </div>
      </div>


    </section>
  );
}