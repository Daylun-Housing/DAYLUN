
import Image from "next/image";
import {useIsVisible} from "../../../JS_Scripts/Visible"
import { useRef } from "react";

export default function Bedroom() {
    
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mt-6 mb-4 font-bold">The <span className="text-[#0474BC]">Bedroom</span></h1>
                    
        <p className="mb-[50px]">Some of the highlights of the bedroom include: </p>
        <div className="flex-col">
          <div className="md:flex w-full mb:mb-20">
              
              <ul className="flex-col text-xs md:text-sm lg:text-lg space-y-4 ml-10 mr-10 md:w-1/3">
                  <li>- Large windows for a cozy sitting area</li>
                  <li>- Fusion of designs to create a comfortable vibe</li>
                  <li>- Hydro Fireplace</li>
                  <li>- Walk-in Closet</li>
                  <li>- Built-in Vanity</li>
                  <li>- Walk Out Deck With Curtain Wall Windows</li>
              </ul>
              <div className="h-[125px] sm:h-[200px] md:h-[250px] w-100 md:w-[50%] flex items-center justify-center">
                  <div ref={ref_WhatWeDo} className={`absolute w-[60%] scale-50 duration-100 h-full object-fill
                                                      transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[100px]"}`}>
                      <Image
                        src="/241-waterloo-master-bedroom-closet.jpg"
                        alt="Bathroom"
                        fill
                        className="object-contain"
                      
                      />
                  </div>
              </div>
          </div>
          
          <div ref={ref_WhatWeDo} className={`flex flex-col md:flex-row w-full md:mt-10 mb-10 h-[300px] md:h-[250px] items-center md:justify-center
                                              transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[100px]"}
                                              `}>
              
              <div className = "h-1/2 md:h-full w-1/2 m-2 flex text-center justify-center">     
                <div className = "relative w-full h-[90%] flex justify-center">
                    <Image src="/241-waterloo-master-bedroom-bed.jpg" alt="Bamboo Basic" fill className = "object-contain"/>
                </div>
              </div>
              <div className = "h-1/2 md:h-full w-1/2 m-2 flex text-center justify-center">     
                <div className = "relative w-full h-[90%] flex justify-center">
                    <Image src="/241-waterloo-master-bedroom-fireplace.jpg" alt="Bamboo Basic" fill className = "object-contain"/>
                </div>
              </div>
              
              
          </div>
        
        </div>
    </>
  )
}