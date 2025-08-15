import { useIsVisible } from "../JS_Scripts/Visible";
import { useRef } from "react";

/**
 * HIGHLIGHTS
 * @returns {JSX.Element}
 * Moving text section that shows some qualities of Daylun.
 */
export default function HighlightsSection() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section
      className={`bg-[var(--dark-blue)] text-[var(--light-blue)] text-center w-full py-5 sm:py-12 md:py-24 px-6 overflow-hidden`}
    >
      <div className="text-[clamp(1rem,4vw,5rem)] font-bold space-y-6 md:space-y-12">
        <div
          ref={ref_WhatWeDo}
          className={`flex flex-wrap justify-center gap-x-12 md:gap-x-24 gap-y-6 transition-all ease-in duration-500 ${is_visible_WWD ? "translate-x-[12%]" : "-translate-x-[12%]"}`}
        >
          <span>SPEED</span>
          <span>COST EFFICIENCY</span>
        </div>
        <div
          ref={ref_WhatWeDo}
          className={`flex flex-wrap justify-center gap-x-12 md:gap-x-24 gap-y-6 transition-all ease-in duration-500 ${is_visible_WWD ? "-translate-x-[12%]" : "translate-x-[12%]"}`}
        >
          <span>SUSTAINABILITY</span>
          <span>PRECISION</span>
        </div>
      </div>

      <p className="mt-5 md:mt-20 text-[var(--txt-bright)] text-[10px] sm:text-xs md:text-sm tracking-widest font-light">
        <span className="font-bold">HOUSING</span> OF THE{" "}
        <span className="font-bold">FUTURE</span>
      </p>
    </section>
  );
}
