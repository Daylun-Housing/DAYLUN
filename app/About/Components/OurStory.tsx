import Image from "next/image";

import { useIsVisible } from "../../JS_Scripts/Visible";
import { useRef } from "react";

/**
 * OUR STORY
 * 
 * @returns {JSX.Element}
 * This is the our story section. Just has simple centered text.
 */
export default function OurStory() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative flex h-[525px] w-full">
      {/* Left Panel */}
      <div
        className={`bg-[var(--light-blue)] items-center text-[var(--txt-bright)] w-full flex flex-col justify-center px-10 md:px-20 relative z-10`}
      >
        <div
          ref={ref_WhatWeDo}
          className={`max-w-3xl mt-16 text-center transition-all ease-in-out duration-1000 ${is_visible_WWD ? "opacity-100" : "opacity-25"}`}
        >
          <h2 className="text-[clamp(1.5rem,2vw,3rem)] md:text-[clamp(1.5rem,4vw,3rem)] font-extrabold mb-8 leading-tight">
            Our <span className="text-[var(--dark-blue)]">Story</span>
          </h2>
          <p className="text-[clamp(0.5rem, 1vw, 1.5rem)] md:text-[clamp(0.5rem,3vw,1.5rem)] leading-relaxed">
            Arthur Zankowicz launched Daylun in 2021 to leverage his insight and
            experience in sustainable construction. The company is set to become
            a market-changing leader in the passive home industry with an array
            of proprietary green building materials and technologies. Daylun
            sets out to combine technology and sustainable practices to deliver
            passive net-zero homes with greater efficiency and speed.
          </p>
        </div>
      </div>
    </section>
  );
}
