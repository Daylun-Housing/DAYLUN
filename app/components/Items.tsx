import Image from 'next/image';

import {useIsVisible} from "../JS_Scripts/Visible"
import { useRef } from "react";

export default function Items() {
  
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

    return (
        <section ref={ref_WhatWeDo}  className={`flex transition-all duration-[1200ms] ease-in-out ${is_visible_WWD ? "opacity-100" : "opacity-25"}`}>
            <div className="w-1/3">
                <div className="overflow-hidden w-4/5 ">
                
                    <div className = "bg-[#04012A] duration-100 hover:scale-110 h-[400px] items-center justify-center text-center">
                        
                        
                        <a href= "https://daylun.myshopify.com/products/bamboo-osb-board" className = "relative w-full h-4/5 items-center flex justify-center">
                            <Image src="/Bamboo_Basic.webp" alt="Bamboo Basic" fill className = "object-contain"/>
                        </a>
                        <div className="m-4">
                            Classic Bamboo OSB
                        </div>
                    </div>
                </div>
            </div>

            
            
            <div className="w-1/3">
                <div className="overflow-hidden w-4/5 ">
                
                    <div className = "bg-[#04012A] duration-100 hover:scale-110 h-[400px] items-center justify-center text-center">
                        
                        
                        <a href= "https://daylun.myshopify.com/products/waterproofed-bamboo-barrier-tech" className = "relative w-full h-4/5 items-center flex justify-center">
                            <Image src="/Waterproofed.webp" alt="Waterproofed Bamboo" fill className = "object-contain" />
                        </a>
                        <div className="m-4">
                            Bamboo OSB with Waterproofing
                        </div>
                    </div>
                </div>
            </div>

            
            
            <div className="w-1/3">
                <div className="overflow-hidden w-4/5 ">
                    <div className = "bg-[#04012A] duration-100 hover:scale-110 h-[400px] items-center justify-center text-center">
                        
                        
                        <a href= "https://daylun.myshopify.com/products/spec-sheet" className = "relative w-2/3 h-4/5 items-center flex justify-center">
                            <Image src="/Bamboo.png" alt="Bamboo" fill className = "object-contain translate-x-1/4" />
                        </a>
                        <div className="m-4">
                            Bamboo OSB with Waterproofing and Insulation
                        </div>
                    </div>
                </div>
            </div>
        </ section>
    )
}