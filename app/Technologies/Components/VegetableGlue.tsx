import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function VegetableGlue() {
    
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative overflow-hidden flex h-[700px] w-full">
      {/* Left Panel */}
      <div ref={ref_WhatWeDo} className={`bg-[#04012A] text-white flex flex-col justify-center px-10 md:px-20 w-[60%] relative z-10 
                                          transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[30%] scale-110"}`}>
        <div  className={`mt-16 text-left `}>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-extrabold md:mb-8 leading-tight text-[#0474BC]">
            Vegetable Glue
          </h2>
          <br />
          <p className="text-xs sm:text-s md:text-md lg:text-xl leading-relaxed">
          Daylun's Vegetable Glue emerged from the need for an eco-friendly alternative to conventional adhesives.
           Originating from experiences in shoe factories and a commitment to sustainability, we aimed to address 
           the environmental and health concerns associated with traditional glues. Through extensive research and 
           development, our technology arm, 50ul Tech, formulated a two-part organic glue that not only rivals epoxy 
           adhesives in strength and versatility, but also offers a safer and greener solution for various applications. 
           By creating a glue that is both effective and environmentally friendly, we aim to contribute to a more 
           sustainable future while meeting the demands of modern construction needs.
          </p>
          <br />
          <a href="https://daylun.myshopify.com/products/vegetable-glue">
            <button className="bg-[#0474BC] text-white font-bold px-8 py-3 rounded-md scale-[60%] sm:scale-[70%] md:scale-[80%] lg:scale-100 hover:text-[#d4d5d6] hover:bg-[#015185] transition">
              PURCHASE NOW
            </button>

          </a>
        </div>

        
      </div> 
      {/* Right Panel */}
      <div ref={ref_WhatWeDo}  className={`bg-[#0474BC] w-[40%] items-center flex justify-center
                                        transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[5%] scale-[175%]"}`}>
        <div className={`absolute w-[500px]  scale-[35%] hover:scale-[40%] sm:scale-[50%] sm:hover:scale-[55%] 
                        md:scale-[55%] md:hover:scale-[60%] lg:scale-[60%] lg:hover:scale-[70%] xl:scale-[80%] xl:hover:scale-[90%] duration-100 h-full object-fill`}>
          <Image
            src="/VegetableGlue.png"
            alt="Vegetable Glue"
            fill
            className="object-contain translate-x-[10%]"
          />
        </div>
      </div>

      {/* Notch Thingy */}
      <div ref={ref_WhatWeDo} className={`absolute z-20 left-[50%] sm:left-50 md:left-[57%] lg:left-[60%] top-1/2 w-1/3 transition-all ease-in-out duration-[1500ms] ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[40%] scale-110"}`}>
        <div className=" -translate-y-1/2 w-36 h-36 scale-[50%] sm:scale-[60%] md:scale-[80%] lg:scale-100 bg-[#04012A] z-20" />
      </div>
    </section>
  );
}