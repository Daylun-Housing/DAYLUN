import Image from "next/image";

import { useIsVisible } from "../../JS_Scripts/Visible";
import { useRef } from "react";

/**
 * PANEL SYSTEM
 * 
 * @returns {JSX.Element}
 * Outputs the 8x8 Panel System section, a slide in from the right with text and image on the left
 */
export default function PanelSystem() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative bg-[var(--light-blue)] flex-col md:flex-row flex overflow-hidden h-[550px] sm:h-[550px] md:h-[700px] w-full">
      {/* Left Panel */}
      <div
        ref={ref_WhatWeDo}
        className={`bg-[var(--light-blue)] md:bg-[var(--dark-blue)] order-2 md:order-1 flex justify-center items-center h-1/3 md:h-full w-full md:w-[40%] relative -z-1000 md:h-full
                                            transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "translate-x-0 scale-100" : "md:translate-x-[5%] scale-[175%]"}`}
      >
        <div
          className={`flex relative w-full md:-translate-x-[10%] 
                         h-[80%] md:h-[40%] lg:h-[60%] object-fill 
                                              `}
        >
          <Image
            src="/8x8_Panel.png"
            alt="8x8 Panel"
            fill
            className="object-contain duration-100 hover:scale-[110%]"
          />
        </div>
      </div>
      {/* Right Panel */}
      <div
        ref={ref_WhatWeDo}
        className={`z-20 order-1 md:order-2 bg-[var(--dark-blue)] md:bg-[var(--light-blue)] h-2/3 md:h-full w-full md:w-[60%] items-center flex justify-center
                                              transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "translate-x-0 scale-100" : "md:translate-x-[30%] scale-110"}`}
      >
        <div className={`max-w-xl mt-16 text-left text-[var(--txt-bright)] px-5`}>
          <h2 className="text-[clamp(1.5rem,2vw,3rem)] md:text-[clamp(1.5rem,4vw,3rem)] font-extrabold md:mb-8 leading-tight text-[var(--light-blue)] md:text-[var(--dark-blue)]">
            8x8 Panel System
          </h2>
          <br />
          <p className="text-[clamp(0.5rem,2vw,1rem)] leading-relaxed">
            Our interlocking panel system is the key part for our projects. This
            system is exceptionally easy to transport - 4 people alone can carry
            it.
            <br />
            <br />
            Daylun’s 8x8 Panel System is the backbone of our modular
            construction approach. Each panel is engineered for strength,
            portability, and seamless integration, enabling rapid deployment and
            scalable configurations. Designed to interlock, the panels eliminate
            traditional framing complexity and allow for efficient, tool-light
            assembly. Whether used as structural walls, floors, or roofing
            elements, this system measurably reduces labor while enhancing
            adaptability.
          </p>
        </div>
      </div>

      {/* Notch Thingy */}
      <div
        ref={ref_WhatWeDo}
        className={`absolute z-20 md:left-[48%] lg:left-[45%] xl:left-[40%] top-1/2 md:w-1/3 transition-all ease-in-out duration-[1500ms] ${is_visible_WWD ? "translate-x-0 scale-100" : "translate-x-[55%] scale-110"}`}
      >
        <div className=" -translate-y-1/2 -translate-x-full w-36 h-36 scale-0 md:scale-[60%] xl:scale-100 bg-[var(--light-blue)] z-100" />
      </div>
    </section>
  );
}
