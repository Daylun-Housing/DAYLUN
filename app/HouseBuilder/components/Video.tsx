import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function Video() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);
  
    return (
        
        <section className="bg-[#04012A] relative flex h-[700px] w-full">
            <div ref={ref_WhatWeDo} className={`text-white flex items-center justify-center px-10 md:px-20 w-full relative z-10
                                                transition-all ease-in-out duration-[1800ms] ${is_visible_WWD ? "opacity-100" : "opacity-25"}`}>
                <div className="w-1/2 text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-8 leading-tight">
                        House Builder
                    </h2>
                    <br />
                    <p className="text-s md:text-xl leading-relaxed">
                    Daylun's House Builder tool allows you to input your specifications and we will give you the full plan as well 
                    as cost of your proposed house. This plan will include the exact number of screws and materials required, and
                    you can also download the RIVET file as well.
                    </p>

                    <form className="z-50 rounded px-8 pt-6 pb-8 mt-4 max-w-1/2">
                        <div className="flex h-5 sm:h-8 md:h-14 mb-2 items-center">
                            <input
                                className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 h-[100%] mr-1 text-black transition ease-out delay-75 focus-within:border-2 focus-within:border-blue-600 pr-0.5 border border-blue-600 rounded caret-blue-700 outline-none px-4 disabled:border-slate-400"
                                type="number"
                                placeholder="width"
                            />
                            <p className="justify-center text-center text-s">cm</p>
                        </div>
                        <div className="flex h-5 sm:h-8 md:h-14 mb-2 items-center">
                            <input
                                className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 h-[100%] mr-1 text-black transition ease-out delay-75 focus-within:border-2 focus-within:border-blue-600 pr-0.5 border border-blue-600 rounded caret-blue-700 outline-none px-4 disabled:border-slate-400"
                                type="number"
                                placeholder="height"
                            />
                            <p className="justify-center text-center text-s">cm</p>
                        </div>
                        <div className="flex h-5 sm:h-8 md:h-14 mb-2 items-center">
                            <input
                                className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 h-[100%] mr-1 text-black transition ease-out delay-75 focus-within:border-2 focus-within:border-blue-600 pr-0.5 border border-blue-600 rounded caret-blue-700 outline-none px-4 disabled:border-slate-400"
                                type="number"
                                placeholder="length"
                            />
                            <p className="justify-center text-center text-s">cm</p>
                        </div>
                    </form>
                    
                </div>
                <div className="w-1/2 h-full">
                    <div className="absolute w-1/2 scale-75 h-full object-fill">
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