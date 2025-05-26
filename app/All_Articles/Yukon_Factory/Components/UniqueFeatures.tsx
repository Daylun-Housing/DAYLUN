
import Image from "next/image";
import {useIsVisible} from "../../../JS_Scripts/Visible"
import { useRef } from "react";

export default function UniqueFeatures() {
    
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <>
        <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-center mt-6 mb-5 md:mb-20 font-bold">Unique <span className="text-[#0474BC]">Features</span></h1>

        <div className="flex-col">
          <div className="md:flex w-full mb-20">
              
              <p className="flex-col text-sm md:text-md lg:text-xl space-y-4 ml-10 mr-10 md:w-1/2">
                By combining our automated technology and our strategic processes, our Yukon Factory will be highly efficient 
                and require limited human labour. This will helps us reduce costs, thereby maintaining high profit margins
                while also ensuring that our product remains affordable. 

              </p>
              <div className="h-[250px] w-100 md:w-[50%] flex items-center justify-center">
                  <div ref={ref_WhatWeDo} className={`absolute w-[60%] scale-50 duration-100 h-[80%] object-fill
                                                      transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[250px]"}`}>
                      <Image
                        src="/robot-arm.jpg"
                        alt="robot arm"
                        fill
                        className="object-contain"
                      />
                  </div>
              </div>
              <p>

              </p>
          </div>
        
        </div>
    </>
  )
}