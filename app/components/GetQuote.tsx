import { useIsVisible } from "../JS_Scripts/Visible";
import { useRef } from "react";

/**
 * PROJECT IN MIND?
 * 
 * @returns {JSX.Element}
 * Section of the website asking customers to buy; get quote by emailing us. 
 */
export default function GetQuote() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="bg-[var(--light-blue)] text-[var(--txt-bright)] py-20 px-6 text-center">
      <div
        ref={ref_WhatWeDo}
        className={`max-w-3xl mx-auto
                                            transition-all ease-in-out duration-[1500ms] ${is_visible_WWD ? "opacity-100" : "opacity-[25%]"}`}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          HAVE A <span className="text-[var(--dark-blue)]">PROJECT</span> IN{" "}
          <br className="md:hidden" />
          MIND?
        </h2>
        <p className="text-lg mb-4">
          Daylun has made it quite simple to bring your project to life. Weather
          it be your dream home or sub division to build. Our process is very
          efficient. Our Daylun software allows us to calculate.
        </p>
        <p className="text-lg mb-8">
          All materials right down to how many screws to give you or your
          customer instant quotes.
        </p>
        <a href="mailto:info@daylun.ca">
          <button className="bg-[var(--dark-blue)] text-[var(--txt-bright)] font-semibold px-8 py-3 rounded-md hover:text-[var(--txt-faint-grey)] hover:bg-[var(--hover-dark-blue)] transition">
            GET A QUOTE TODAY
          </button>
        </a>
      </div>
    </section>
  );
}
