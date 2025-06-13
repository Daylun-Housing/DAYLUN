import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function GotAnIdea() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);
  
  return (
    <section className="relative flex h-[525px] w-full">
      {/* Left Panel */}
      <div className={`bg-[#04012A] md:bg-[#0474BC] items-center text-white flex flex-col justify-center px-10 md:px-20 md:w-full relative z-10`}>
        <div ref={ref_WhatWeDo}  className={`max-w-4xl mt-16 text-center transition-all ease-in-out duration-1000 ${is_visible_WWD ? "opacity-100" : "opacity-25"}`}>
          <h2 className="text-[clamp(2.5rem,4vw,6rem)] font-extrabold mb-8 leading-tight text-[#0474BC] md:text-[#04012A]">
            Got an Idea?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
          Have a technology concept but not ready to research and develop it? 
          Contact us about your ideas. Together we shall bring them to life.
          </p>

           <br />

          <a href="mailto:info@daylun.ca">
              <button className="bg-[#0474BC] md:bg-[#04012A] text-white font-bold px-8 py-3 rounded-md hover:text-[#a7b7cf] md:hover:bg-[#080354] hover:bg-[#015185] transition">
                Contact us
              </button>

            </a>
        </div>

       
      </div>


    </section>
  );
}