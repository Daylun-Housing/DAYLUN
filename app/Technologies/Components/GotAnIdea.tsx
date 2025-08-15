import Image from "next/image";

import { useIsVisible } from "../../JS_Scripts/Visible";
import { useRef } from "react";

/**
 * GOT AN IDEA?
 * @returns {JSX.Element}
 * Outputs the Got An Idea section, a slide in from the right with text and image on the left
 */
export default function GotAnIdea() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative flex h-[525px] w-full">
      {/* Left Panel */}
      <div
        className={`bg-[var(--dark-blue)] md:bg-[var(--light-blue)] items-center text-[var(--txt-bright)] flex flex-col justify-center px-10 md:px-20 md:w-full relative z-10`}
      >
        <div
          ref={ref_WhatWeDo}
          className={`max-w-4xl mt-16 text-center transition-all ease-in-out duration-1000 ${is_visible_WWD ? "opacity-100" : "opacity-25"}`}
        >
          <h2 className="text-[clamp(2.5rem,4vw,6rem)] font-extrabold mb-8 leading-tight text-[var(--light-blue)] md:text-[var(--dark-blue)]">
            Got an Idea?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Have a technology concept but not ready to research and develop it?
            Contact us!
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Together, we can bring your ideas to life.
          </p>

          <br />

          <a href="mailto:info@daylun.ca">
            <button className="bg-[var(--light-blue)] md:bg-[var(--dark-blue)] text-[var(--txt-bright)] font-bold px-8 py-3 rounded-md hover:text-[var(--txt-faint-grey)] md:hover:bg-[var(--hover-dark-blue)] hover:bg-[var(--hover-med-blue)] transition">
              Contact us
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
