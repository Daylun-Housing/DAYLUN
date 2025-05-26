import Image from 'next/image';

import {useIsVisible} from "../JS_Scripts/Visible"
import { useRef } from "react";

export default function Items() {
  
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

    return (
        <section ref={ref_WhatWeDo}  className={`flex transition-all duration-[1200ms] ease-in-out ${is_visible_WWD ? "opacity-100" : "opacity-25"}`}>
            <div className="w-1/3">
                <div className="overflow-hidden w-4/5 relative">
                    <a href= "https://daylun.myshopify.com/products/bamboo-osb-board">
                        <div className="md:hover:scale-110 duration-100 ">
                            <div className="z-20 transition-all font-bold text-2xl absolute h-full w-full bg-black/20 flex items-center text-center justify-center opacity-0 hover:opacity-100">
                                View in Store
                            </div>
                        
                            <div className = "bg-[#04012A] w-full h-[400px] items-center justify-center text-center">
                                <div  className = "relative w-full h-3/5 lg:h-4/5 items-center flex justify-center">
                                    <Image src="/Bamboo_Basic.webp" alt="Bamboo Basic" fill className = "object-contain"/>
                                </div>
                                <div className="m-4 text-sm md:text-xl">
                                    Classic Bamboo OSB
                                </div>
                            </div>
                        </div>
                    </a>
                        
                </div>
            </div>            
            
            <div className="w-1/3">
                <div className="overflow-hidden w-4/5 relative">
                    <a href= "https://daylun.myshopify.com/products/waterproofed-bamboo-barrier-tech">
                        <div className="md:hover:scale-110 duration-100 ">
                            <div className="z-20 transition-all font-bold text-2xl absolute h-full w-full bg-black/20 flex items-center justify-center text-center opacity-0 hover:opacity-100">
                                View in Store
                            </div>
                        
                            <div className = "bg-[#04012A] w-full h-[400px] items-center justify-center text-center">
                                <div  className = "relative w-full h-3/5 lg:h-4/5 items-center flex justify-center">
                                    <Image src="/Waterproofed.webp" alt="Waterproofed Bamboo" fill className = "object-contain"/>
                                </div>
                                <div className="m-4 h-2/5 lg:h-1/5 text-sm md:text-xl">
                                    Bamboo OSB with Waterproofing
                                </div>
                            </div>
                        </div>
                    </a>
                        
                </div>
            </div>

            <div className="w-1/3">
                <div className="overflow-hidden w-4/5 relative">
                    <a href= "https://daylun.myshopify.com/products/spec-sheet">
                        <div className="md:hover:scale-110 duration-100 ">
                            <div className="z-20 transition-all font-bold text-2xl absolute h-full w-full bg-black/20 flex items-center justify-center text-center opacity-0 hover:opacity-100">
                                View in Store
                            </div>
                        
                            <div className = "bg-[#04012A] w-full h-[400px] md:h-[400px] items-center justify-center text-center">
                                <div  className = "relative w-full h-3/5 xl:h-4/5 items-center flex justify-center">
                                    <Image src="/Bamboo.png" alt="Bamboo" fill className = "object-contain"/>
                                </div>
                                <div className="m-4 h-2/5 lg:h-1/5 text-sm md:text-xl">
                                    Bamboo OSB with Waterproofing and Insulation
                                </div>
                            </div>
                        </div>
                    </a>
                        
                </div>
            </div>  
        </ section>
    )
}