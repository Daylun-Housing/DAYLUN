import Image from "next/image";

import { useIsVisible } from "../../JS_Scripts/Visible";
import { useRef } from "react";

export default function Video() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="bg-[#04012A] relative flex h-[525px] w-full">
      <div
        ref={ref_WhatWeDo}
        className={`text-white flex items-center justify-center px-10 md:px-20 w-full relative z-10
                                                transition-all ease-in-out duration-[1800ms] ${is_visible_WWD ? "opacity-100" : "opacity-25"}`}
      >
        <div className="w-1/2 mt-16 text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            House Builder
          </h2>
          <br />
          <p className="text-sm sm:text-lg md:text-xl leading-relaxed">
            The Daylun House Builder tool lets you enter your project
            specification to generate a complete house plan. This plan includes
            a detailed list of materials and fasteners required, and you’ll also
            have the option to download the corresponding files.
          </p>
        </div>
        <div className="w-1/2 h-full">
          <div className="absolute w-1/2 scale-75 h-full object-fill">
            <Image
              src="/House.gif"
              alt="House Coming Together"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
