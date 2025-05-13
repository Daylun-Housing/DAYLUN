import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function OurStory() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);
  
  return (
    <section className="relative flex flex-col md:flex-row h-[75vh] w-full">
      {/* Left Panel */}
      <div className={`bg-[#0474BC] items-center text-white flex flex-col justify-center px-10 md:px-20 md:w-full relative z-10`}>
        <div ref={ref_WhatWeDo}  className={`max-w-3xl mt-16 text-center transition-all ease-in-out duration-1000 ${is_visible_WWD ? "scale-x-100" : "scale-x-150"}`}>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
            Our Story
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
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