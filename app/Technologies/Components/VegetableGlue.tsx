import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function VegetableGlue() {
    
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative flex flex-col md:flex-row h-screen w-full">
      {/* Left Panel */}
      <div className="bg-[#04012A] text-white flex flex-col justify-center px-10 md:px-20 w-1/2 relative z-10">
        <div ref={ref_WhatWeDo} className={`max-w-md mt-16 text-left transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "opacity-100 scale-100" : "opacity-25 scale-50"}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            Vegetable Glue
          </h2>
          <br />
          <p className="text-lg md:text-xl leading-relaxed">
          Daylun's Vegetable Glue emerged from the need for an eco-friendly alternative to conventional adhesives.
           Originating from experiences in shoe factories and a commitment to sustainability, we aimed to address 
           the environmental and health concerns associated with traditional glues. Through extensive research and 
           development, our technology arm, 50ul Tech, formulated a two-part organic glue that not only rivals epoxy 
           adhesives in strength and versatility, but also offers a safer and greener solution for various applications. 
           By creating a glue that is both effective and environmentally friendly, we aim to contribute to a more 
           sustainable future while meeting the demands of modern construction needs.
          </p>
        </div>

        
      </div> 
      {/* Right Panel */}
      <div className="bg-[#04012A] w-1/2 items-center flex justify-center">
        <div ref={ref_WhatWeDo} className={`absolute w-[500px] scale-50 hover:scale-75 duration-100 h-full object-fill
                                          transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "opacity-100 scale-50" : "opacity-25 scale-[10%]"}`}>
          <Image
            src="/VegetableGlue.png"
            alt="Modern house"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}