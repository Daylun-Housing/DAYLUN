import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function OurValues() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative flex flex-col md:flex-row h-[75vh] w-full">
      {/* Left Panel */}
      <div className={`bg-[#0474BC] items-center text-white flex flex-col justify-center px-10 md:px-20 md:w-full relative z-10`}>
        <div ref={ref_WhatWeDo} className={`max-w-3xl mt-16 text-center
                                            transition-all ease-in-out duration-1000 ${is_visible_WWD ? "scale-x-100" : "scale-x-150"}`}>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
            Our Values
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            DAYLUN is dedicated to four qualities:
          </p>
          <ul className="text-lg md:text-xl leading-relaxed mt-4 text-center font-bold text-[#04012A]">
            <li>SPEED</li>
            <li>COST EFFICIENCY</li>
            <li>SUSTAINABILITY</li>
            <li>PRECISION</li>
          </ul>
        </div>
      </div>


    </section>
  );
}