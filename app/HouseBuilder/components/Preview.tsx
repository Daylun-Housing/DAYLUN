import Image from "next/image";
import Model from "../../JS_Scripts/Model"

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";
import Model_Preview from "../../JS_Scripts/Model";

export default function Preview() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);
  
    return (
        
        <section className="bg-[#0474BC] relative flex-col h-[700px] w-full">
            <div ref={ref_WhatWeDo} className={`text-white flex justify-center px-10 md:px-20 w-full relative z-10
                                                transition-all ease-in-out duration-[1800ms] ${is_visible_WWD ? "opacity-100" : "opacity-25"}`}>
                <div className="w-1/2 text-left mt-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-8 leading-tight text-center">
                        Preview
                    </h2>
                    <br />
                    
                </div>
            </div>
            <div ref={ref_WhatWeDo} className={`h-[90%] w-full flex
                                             transition-all ease-in-out duration-[1800ms] ${is_visible_WWD ? "opacity-100" : "opacity-25"}`}>
                {/* Preview */}
                <div className="w-2/3 h-[500px] p-[20px]">
                    <Model_Preview />
                </div>
                <div className="w-1/3 text-white text-s md:text-lg">
                    <h2 className="text-lg md:text-xl font-bold">Specifications</h2>
                    <p className="mt-4"><span className="font-bold">Width:</span> ft</p>
                    <p className="mt-4"><span className="font-bold">Height:</span> ft</p>
                    <p className="mt-4"><span className="font-bold">Length:</span> ft</p>
                    <p className="mt-4"><span className="font-bold mr-4">Expected Price:</span>$</p>
                </div>
            </div>
        </section>
    )
}