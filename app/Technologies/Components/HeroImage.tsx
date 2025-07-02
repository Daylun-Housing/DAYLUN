import Image from "next/image";

import { useIsVisible } from "../../JS_Scripts/Visible";
import { useRef } from "react";

export default function HeroImage() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <div className="relative w-full h-[700px]">
      <Image
        className="object-cover"
        src="/blurred.jpg"
        alt="Blueprint"
        fill
        unoptimized
      />
      <div
        ref={ref_WhatWeDo}
        className={`absolute inset-0 flex items-center justify-center text-center
                                    transition-all duration-1000 ease-in-out ${is_visible_WWD ? "scale-100" : "scale-50"}`}
      >
        <div className="backdrop-blur-sm bg-black/50 text-white px-6 py-8 rounded-xl shadow-lg max-w-3xl">
          <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight">
            Technologies
          </p>
          <p className="mt-2 text-sm md:text-lg xl:text-xl text-gray-200">
            See the innovative technologies our company uses
          </p>
        </div>
      </div>
    </div>
  );
}
