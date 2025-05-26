
import Image from "next/image";
import {useIsVisible} from "../../../JS_Scripts/Visible"
import { useRef } from "react";

export default function Kitchen() {
    
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mt-6 mb-4 font-bold">The <span className="text-[#0474BC]">Kitchen</span></h1>
                    
        <p className="mb-4 lg:mb-[50px]">Some of the highlights of the kitchen include: </p>
        <div className="flex-col">
            <div className="md:flex w-full md:mb-20">
                
                <ul className="flex-col text-xs md:text-sm lg:text-lg space-y-4 ml-10 mr-10">
                    <li>- Quality fixtures and hardware</li>
                    <li>- Sufficient storage with a hidden pantry</li>
                    <li>- Energy efficient IoT-enabled appliances</li>
                    <li>- Energy efficient layered lighting</li>
                    <li>- High-end durable flooring</li>
                    <li>- Strong and stylish counters</li>
                    <li>- Attractive, easy-care Backsplash</li>
                </ul>
                <div className="h-[125px] sm:h-[200px] md:h-[250px] w-100 md:w-[50%] flex items-center justify-center">
                    <div ref={ref_WhatWeDo} className={`absolute w-[60%] scale-50 duration-100 h-[80%] object-fill
                                                        transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[100px]"}`}>
                        <Image
                        src="/241-waterloo-kitchen-1.jpg"
                        alt="Kitchen"
                        fill
                        className="object-contain"
                        
                        />
                    </div>
                </div>
            </div>
            
            <div className="md:flex w-full ">
                <div className="h-[150px] sm:h-[300px] lg:h-[400px] w-full flex items-center justify-center">
                    <div ref={ref_WhatWeDo} className={`absolute w-[75%] scale-50 duration-100 h-full object-fill
                                                        transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[100px]"}`}>
                        <Image
                            src="/241-waterloo-kitchen-2.jpg"
                            alt="Kitchen"
                            fill
                            className="object-contain"
                        
                        />
                    </div>
                </div>

            </div>
        
        </div>
    </>
  )
}