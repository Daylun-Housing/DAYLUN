import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function EvaBoard() {
    
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative flex overflow-hidden h-[700px] w-full">
      {/* Left Panel */}
      <div ref={ref_WhatWeDo}  className={`bg-[#04012A] flex justify-center w-[40%] relative -z-1000
                                          transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "translate-x-0 scale-100" : "translate-x-[5%] scale-[175%]"}`}>
        <div className={`absolute scale-[40%] hover:scale-[45%] sm:scale-[45%] sm:hover:scale-[50%] 
                        lg:scale-[60%] lg:hover:scale-[65%] duration-100 w-full h-full object-fill
                                            `}>
          <Image
            src="/fabric_foam.webp"
            alt="EVA Board"
            className="object-contain -translate-x-[20%] "
            fill
          />
        </div>

        
      </div> 
      {/* Right Panel */}
      <div ref={ref_WhatWeDo} className={`z-20 bg-[#0474BC] w-[60%] items-center flex justify-center 
                                            transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "translate-x-0 scale-100" : "translate-x-[30%] scale-110"}`}>
        <div className={`max-w-xl mt-16 text-left text-white px-5`}>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-extrabold md:mb-8 leading-tight text-[#04012A]">
              EVAN Board
            </h2>
            <br />
            <p className="text-xs sm:text-s md:text-md lg:text-xl leading-relaxed">
              Interior Drywall replacement Daylun developed this product as an alternative to drywall or gypsum, 
              addressing the challenges of their heaviness and messiness. Our EVA board is 80% lighter, more manageable, 
              and boasts tensile strength, a feature lacking in traditional drywall. Daylun’s EVA walls are built from a 
              highly versatile polyolefin low smoke and halogen-free flame-retardant material. Created from ethyl vinyl 
              acetate (EVA) – the same innovative material found in running shoes – this material is lightweight, boasts 
              low density, superior sound insulation, and age-defying properties.
              
              <br />
              <br />
              
              <a href="https://daylun.myshopify.com/products/evan-board">
                <button className="bg-[#04012A] text-white font-bold px-8 py-3 rounded-md scale-[70%] sm:scale-[75%] md:scale-[80%] lg:scale-100 hover:text-[#a7b7cf] hover:bg-[#080354] transition">
                  PURCHASE NOW
                </button>

              </a>
            </p>
          </div>
        </div>

      {/* Notch Thingy */}
      <div ref={ref_WhatWeDo} className={`absolute left-[50%] sm:left-[45%] md:left-[43%] lg:left-[40%] top-1/2  md:w-1/3 transition-all ease-in-out duration-[1500ms] ${is_visible_WWD ? "translate-x-0 scale-100" : "translate-x-[55%] scale-110"}`}>
        <div className=" -translate-y-1/2 -translate-x-full w-36 h-36 scale-[50%] sm:scale-[60%] md:scale-[80%] lg:scale-100 bg-[#0474BC] z-2" />
      </div>
    </section>
  );
}