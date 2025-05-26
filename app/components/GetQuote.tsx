import {useIsVisible} from "../JS_Scripts/Visible"
import { useRef } from "react";

export default function GetQuote() {

  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

    return (
      <section className="bg-[#0474BC] text-white py-20 px-6 text-center">
        <div ref={ref_WhatWeDo} className={`max-w-3xl mx-auto
                                            transition-all ease-in-out duration-[1500ms] ${is_visible_WWD ? "opacity-100" : "opacity-[25%]"}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            HAVE A <span className="text-[#04012A]">PROJECT</span> IN <br className="md:hidden" />
            MIND?
          </h2>
          <p className="text-lg mb-4">
            Daylun has made it quite simple to bring your project to life. Weather it be your dream home or sub division
            to build. Our process is very efficient. Our Daylun software allows us to calculate.
          </p>
          <p className="text-lg mb-8">
            All materials right down to how many screws to give you or your customer instant quotes.
          </p>
          <a href="mailto:info@daylun.ca">
            <button className="bg-[#04012A] text-white font-semibold px-8 py-3 rounded-md hover:text-[#a7b7cf] hover:bg-[#080354] transition">
              GET A QUOTE TODAY
            </button>

          </a>
        </div>
      </section>
    );
  }
  