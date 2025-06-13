import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function Video() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);
  
    return (
        
        <section className="bg-[#04012A] relative sm:flex w-full">
            <div ref={ref_WhatWeDo} className={`text-white py-12 md:flex items-center justify-center px-10 md:px-20 w-full relative z-10
                                                transition-all ease-in-out duration-[1800ms] ${is_visible_WWD ? "opacity-100" : "opacity-25"}`}>
                <div className="md:w-1/2 text-left ">
                
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold mb-8 leading-tight">
                        House Builder - Coming Soon
                    </h2>
                    <div className="text-xs sm:text-sm lg:text-lg gap-y-[2px]">
                        <p className="leading-relaxed mb-4">
                        We’re excited to announce that our House Builder platform is currently in development — a powerful, all-in-one tool designed to 
                        revolutionize how you plan and build your home. Our team, led by Daylun, is working hard on an innovative system that will allow 
                        you to: 
                        </p>
                        <ul className="list-disc pl-5 mb-4">
                            <li>Enter your custom house size</li>
                            <li>Instantly generate a 3D model file</li>
                            <li>Receive complete engineering drawings for permitting and construction</li>
                            <li>Get a 3D interior design model to collaborate with your architect or designer</li>
                            <li>Automatically place an order in our factory, with</li>
                            <li>Real-time pricing based on your selections and specifications</li>
                        </ul>
                        
                        Whether you’re an architect, a designer, or planning your dream home; this tool will streamline everything from concept to construction.
                            Stay tuned. The future of home building is almost here.
                        
                    </div>
                    
                    
                </div>
                <div className="md:w-1/2 h-[300px] md:h-full flex justify-center">
                    <div className="relative w-1/2 scale-75 h-full object-fill">
                        <Image
                        src="/House.gif"
                        alt="House Coming Together"
                        fill
                        className="object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}