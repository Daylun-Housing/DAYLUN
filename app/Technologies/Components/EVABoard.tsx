import Image from "next/image";

import { useIsVisible } from "../../JS_Scripts/Visible";
import { useRef } from "react";

export default function EvaBoard() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative bg-[#0474BC] flex-col md:flex-row flex overflow-hidden h-[550px] sm:h-[550px] md:h-[700px] w-full">
      {/* Left Panel */}
      <div
        ref={ref_WhatWeDo}
        className={`bg-[#0474BC] md:bg-[#04012A] order-2 md:order-1 flex justify-center items-center h-1/3 md:h-full w-full md:w-[40%] relative -z-1000 md:h-full
                                          transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "translate-x-0 scale-100" : "md:translate-x-[5%] scale-[175%]"}`}
      >
        <div
          className={`flex relative w-full md:w-[80%] 
                         h-full md:h-[50%] object-fill md:-translate-x-[10%]
                                            `}
        >
          <Image
            src="/fabric_foam.webp"
            alt="EVA Board"
            className="object-contain duration-100 hover:scale-[110%]"
            fill
          />
        </div>
      </div>
      {/* Right Panel */}
      <div
        ref={ref_WhatWeDo}
        className={`z-20 order-1 md:order-2 bg-[#04012A] md:bg-[#0474BC] h-2/3 md:h-full w-full md:w-[60%] items-center flex justify-center 
                                            transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "translate-x-0 scale-100" : "md:translate-x-[30%] scale-110"}`}
      >
        <div className={`max-w-xl mt-16 text-left text-white px-5`}>
          <h2 className="text-[clamp(1.5rem,2vw,3rem)] md:text-[clamp(1.5rem,4vw,3rem)] font-extrabold md:mb-8 leading-tight text-[#0474BC] md:text-[#04012A]">
            EVAN Board
          </h2>
          <br />
          <p className="text-[clamp(0.5rem,2vw,1rem)] leading-relaxed">
            Interior Drywall replacement Daylun developed this product as an
            alternative to drywall or gypsum, addressing the challenges of their
            heaviness and messiness. Our EVA board is 80% lighter, more
            manageable, and boasts tensile strength, a feature lacking in
            traditional drywall. Daylun’s EVA walls are built from a highly
            versatile polyolefin low smoke and halogen-free flame-retardant
            material. Created from ethyl vinyl acetate (EVA) – the same
            innovative material found in running shoes – this material is
            lightweight, boasts low density, superior sound insulation, and
            age-defying properties.
            <br />
            <br />
            <a href="https://daylun.myshopify.com/products/evan-board">
              <button className="bg-[#0474BC] hover:bg-[#015185] md:bg-[#04012A] text-white font-bold px-8 py-3 rounded-md scale-[70%] sm:scale-[75%] md:scale-[80%] lg:scale-100 hover:text-[#a7b7cf] md:hover:bg-[#080354] transition">
                PURCHASE NOW
              </button>
            </a>
          </p>
        </div>
      </div>

      {/* Notch Thingy */}
      <div
        ref={ref_WhatWeDo}
        className={`absolute z-20 md:left-[48%] lg:left-[45%] xl:left-[40%] top-1/2 md:w-1/3 transition-all ease-in-out duration-[1500ms] ${is_visible_WWD ? "translate-x-0 scale-100" : "translate-x-[55%] scale-110"}`}
      >
        <div className=" -translate-y-1/2 -translate-x-full w-36 h-36 scale-0 md:scale-[60%] xl:scale-100 bg-[#0474BC] z-100" />
      </div>
    </section>
  );
}
