import Image from "next/image";

import { useIsVisible } from "../../JS_Scripts/Visible";
import { useRef } from "react";

/**
 * GANTRY CRANE
 * @returns {JSX.Element}
 * 
 * Outputs the Gantry Crane section, a slide in from the right with text and image on the left
 */
export default function GantryCrane() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative bg-[var(--dark-blue)] overflow-hidden md:flex h-[550px] sm:h-[550px] md:h-[700px] w-full">
      {/* Left Panel */}
      <div
        ref={ref_WhatWeDo}
        className={`bg-[var(--dark-blue)] h-2/3 items-center md:h-full text-[var(--txt-bright)] flex justify-center px-10 md:px-20 w-full md:w-[60%] relative z-10 
                                                  transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "translate-x-0 scale-100" : "md:-translate-x-[30%] scale-110"}`}
      >
        <div className={`mt-10 text-left `}>
          <h2 className="text-[clamp(1.5rem,2vw,3rem)] md:text-[clamp(1.5rem,4vw,3rem)] font-extrabold mb-4 md:mb-8 leading-tight text-[var(--light-blue)]">
            Gantry Crane
          </h2>
          <p className="text-[clamp(0.5rem,2vw,1rem)] leading-relaxed">
            Lightweight crane. Reduce time and labour.
            <br />
            <br />
            Say goodbye to heavy machinery bottlenecks. Daylun’s lightweight
            Gantry Crane offers a modular, mobile lifting solution that
            streamlines setup and teardown on any job site. Built from durable,
            corrosion-resistant materials, it’s ideal for moving heavy loads
            quickly and safely - indoors or out. Whether you're working in
            construction, warehousing, or fabrication, our crane is designed to
            reduce manual labor and improve overall site efficiency.
            <br />
            <br />
            <a href="./Investors">
              <button className="bg-[var(--light-blue)] text-[var(--txt-bright)] font-bold px-8 py-3 rounded-md scale-[70%] sm:scale-[75%] md:scale-[80%] lg:scale-100 hover:text-[var(--txt-faint-grey)] hover:bg-[var(--hover-med-blue)] transition">
                MAKE IT REALITY
              </button>
            </a>
          </p>
        </div>
      </div>
      {/* Right Panel */}
      <div
        ref={ref_WhatWeDo}
        className={`flex bg-[var(--light-blue)] h-1/3 md:h-full w-full md:w-[40%] items-center justify-center
                                                transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "translate-x-0 scale-80" : "md:-translate-x-[30%] scale-[170%]"}`}
      >
        <div
          className={`relative w-full 
                         h-[80%] md:h-[10%] lg:h-[15%] xl:h-[20%] object-fill md:translate-x-[10%]`}
        >
          <Image
            src="/gantrycraneicon.png"
            alt="gantry crane"
            fill
            className="object-contain duration-100 hover:scale-[110%]"
          />
        </div>
      </div>

      {/* Notch Thingy */}
      <div
        ref={ref_WhatWeDo}
        className={`absolute md:left-[50%] lg:left-[55%] xl:left-[60%] top-1/2  md:w-1/3 transition-all ease-in-out duration-[1500ms] ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[40%] scale-110"}`}
      >
        <div className=" -translate-y-1/2 w-36 h-36 scale-0 md:scale-[80%] lg:scale-100 bg-[var(--dark-blue)] z-20" />
      </div>
    </section>
  );
}
