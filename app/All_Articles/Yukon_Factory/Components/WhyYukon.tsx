
import Image from "next/image";
import {useIsVisible} from "../../../JS_Scripts/Visible"
import { useRef } from "react";

export default function Yukon() {
    
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <>
        <h1 className="text-6xl text-center mt-6 mb-20 font-bold">Why <span className="text-[#0474BC]">Yukon</span></h1>

        <div className="flex-col">
          <div className="md:flex w-full mb-20">
              
              <p className="flex-col text-lg space-y-4 ml-10 mr-10 w-1/2">
                The rising demand for more housing in Yukon provides a large market to whom we can immediately begin selling
                houses and construction materials to. Moreover, Yukon is rich in natural resources, which allows us to source materials
                from the province directly. Moreover, Yukon's climate will allow us to refine our homes to be maximally efficient; we 
                can test our homes there to maximize the insulation and energy efficiency of our homes. 
              </p>
              <div className="h-[250px] w-[50%] flex items-center justify-center">
                  <div ref={ref_WhatWeDo} className={`absolute w-1/3 scale-50 duration-100 h-[80%] object-fill
                                                      transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[250px]"}`}>
                      <Image
                        src="/robot-arm.jpg"
                        alt="robot arm"
                        fill
                      
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