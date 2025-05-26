import Image from 'next/image';

import {useIsVisible} from "../JS_Scripts/Visible"
import { useRef } from "react";

export default function AwardItems() {
  
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

    return (
        <section ref={ref_WhatWeDo} className={`flex w-full h-4/5
                                                transition-all duration-[1200ms] ease-in-out ${is_visible_WWD ? "opacity-100" : "opacity-25"}`}>
            <div className="flex w-1/2 justify-center">
                <div className="overflow-hidden w-[40%] justify-center">
                
                    <a href= "https://techfest.london/2025/en/page/best-use-of-new-materials-in-a-project-2024" className = "relative w-full h-[300px] overflow-hidden items-center justify-center text-center">
                        
                        
                        <div className="flex duration-100 hover:scale-110 overflow-hidden w-full h-full justify-center [&>*:last-child]:hover:brightness-50">
                            
                            <div className="transition-all font-bold text-white text-2xl absolute h-full w-full flex items-center justify-center opacity-0 hover:opacity-100 z-20">
                                View More
                            </div>
                            
                            <div className = "duration-100 relative items-center w-full h-full flex justify-center">
                                <Image src="/19-Tech-Winner.png" alt="2024 Tech Winner" fill className = "object-contain"/>
                            </div>

                        </div>
                    </a>
                </div>
            </div>
            <div className="flex w-1/2 justify-center">
                <div className="overflow-hidden w-[40%] justify-center">
                
                    <a href= "https://techfest.london/2025/en/page/best-use-of-technology-design-efficiency-2024" className = "relative w-full h-[400px] overflow-hidden items-center justify-center text-center">
                        
                        
                        <div className="flex duration-100 hover:scale-110 w-full h-full justify-center [&>*:last-child]:hover:brightness-50">
                            
                            <div className="transition-all font-bold text-white text-2xl absolute h-full w-full flex items-center justify-center opacity-0 hover:opacity-100 z-20">
                                View More
                            </div>
                            
                            <div className = "duration-100 relative items-center w-full h-full flex justify-center">
                                <Image src="/19-Tech-Final.png" alt="2024 Tech Finalist" fill className = "object-contain"/>
                            </div>

                        </div>
                    </a>
                </div>
            </div>

            
        </ section>
    )
}