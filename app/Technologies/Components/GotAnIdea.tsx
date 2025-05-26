import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function GotAnIdea() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);
  
  return (
    <section className="relative flex h-[525px] w-full">
      {/* Left Panel */}
      <div className={`bg-[#0474BC] items-center text-white flex flex-col justify-center px-10 md:px-20 md:w-full relative z-10`}>
        <div ref={ref_WhatWeDo}  className={`max-w-4xl mt-16 text-center transition-all ease-in-out duration-1000 ${is_visible_WWD ? "opacity-100" : "opacity-25"}`}>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-[#04012A]">
            Got an Idea?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
          Have a technology concept but don't have the technologies to research and develop it? 
          Contact us about your idea and we can partner with you bring that concept into reality.
          </p>

           <br />

          <a href="mailto:info@daylun.ca">
              <button className="bg-[#04012A] text-white font-bold px-8 py-3 rounded-md hover:text-[#a7b7cf] hover:bg-[#080354] transition">
                Contact us
              </button>

            </a>
        </div>

       
      </div>


    </section>
  );
}