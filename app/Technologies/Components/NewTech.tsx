import Image from "next/image";

import { useIsVisible } from "../../JS_Scripts/Visible";
import { useRef } from "react";

/**
 * FUTURE TECH
 * @returns {JSX.Element}
 * Basic Hero image for the Future Tech section. 
 */
export default function FutureTech() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <div className="relative w-full h-[700px]">
      <Image
        className="object-cover"
        src="/blurred.jpg"
        alt="Blueprint"
        fill
      />
      <div
        ref={ref_WhatWeDo}
        className={`absolute inset-0 flex items-center justify-center text-center
                                    transition-all duration-1000 ease-in-out ${is_visible_WWD ? "scale-100" : "scale-50"}`}
      >
        <div className="backdrop-blur-sm bg-black/60 text-[var(--txt-bright)] px-6 py-8 rounded-xl shadow-lg max-w-3xl">
          <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight">
            Upcoming Technologies
          </p>
          <p className="mt-2 text-sm md:text-lg xl:text-xl text-[var(--txt-faint-grey)]">
            See our future projects
          </p>
        </div>
      </div>
    </div>
  );
}
