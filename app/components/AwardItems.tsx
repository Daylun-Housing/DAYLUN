import Image from 'next/image';

import {useIsVisible} from "../JS_Scripts/Visible"
import { useRef } from "react";

export default function AwardItems() {
  
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

    return (
        <section  ref={ref_WhatWeDo} className={`flex transition-all duration-[1200ms] ease-in-out ${is_visible_WWD ? "opacity-100" : "opacity-25"}`}>
            <div className="w-1/2">
                <div className="overflow-hidden w-4/5 ">
                
                    <div className = "duration-100 hover:scale-110 h-[500px] items-center justify-center text-center">
                        
                        
                        <a href= "https://techfest.london/2025/en/page/best-use-of-new-materials-in-a-project-2024" className = "relative w-full h-4/5 items-center flex justify-center">
                            <Image src="/19-Tech-Winner.png" alt="2024 Tech Winner" fill className = "object-contain"/>
                        </a>
                    </div>
                </div>
            </div>

            
            
            <div className="w-1/2">
                <div className="overflow-hidden w-4/5 ">
                
                    <div className = "duration-100 hover:scale-110 h-[500px] items-center justify-center text-center">
                        
                        
                        <a href= "https://techfest.london/2025/en/page/best-use-of-technology-design-efficiency-2024" className = "relative w-full h-4/5 items-center flex justify-center">
                            <Image src="/19-Tech-Final.png" alt="2024 Tech Finalist" fill className = "object-contain" />
                        </a>
                    </div>
                </div>
            </div>
        </ section>
    )
}