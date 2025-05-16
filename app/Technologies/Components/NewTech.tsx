import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function FutureTech() {
  
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
      <div className="relative w-full h-screen">
        <Image
              className="brightness-[0.70] object-cover"
              src="/Apartment.png"
              alt="Apartment"
              fill
              />
          <div ref={ref_WhatWeDo} className={`absolute inset-0 flex items-center justify-center text-center
                                              transition-all duration-1000 ease-in-out ${is_visible_WWD ? "scale-100" : "scale-50"}`}>
            <div className="px-4 py-6 bg-[#0474BC] text-white text-[50px] space-y-2">
              <p className="text-[80px] font-bold">Upcoming Technologies</p>
              <p className="text-[30px]">See our future projects</p>
            </div>
          </div>
      </div>
  )
}