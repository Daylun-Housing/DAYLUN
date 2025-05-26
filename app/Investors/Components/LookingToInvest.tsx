import Image from "next/image";
import Newsletter from "../../Common/Newsletter";

import { FaEnvelope } from "react-icons/fa6";
import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function LookingToInvest() {
  
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative overflow-hidden flex h-[700px] w-full">
      {/* Left Panel with Image */}
      <div ref={ref_WhatWeDo} className={`relative w-2/3 h-full md:h-auto z-0 transition-all ease-in-out duration-1000 
                                          ${is_visible_WWD ? "translate-x-0 scale-100" : "translate-x-[5%] scale-125"}`}>
        <Image
          src="/how-we-do-it-1.jpg"
          alt="How we do it background"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Panel with Text */}
      <div ref={ref_WhatWeDo} className={`w-1/3 transition-all ease-in-out duration-1000 
                                        ${is_visible_WWD ? "translate-x-0 scale-x-100" : "translate-x-[30%] scale-x-110"}`}>
        <div className="bg-[#0474BC] text-white h-full flex flex-col justify-center px-10 md:px-20 relative z-10">
          <div className="max-w-md mt-16">
            <h2 className="text-[#110C27] text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold mb-8 leading-tight">
              LOOKING<br />TO INVEST?
            </h2>
            <p className="text-[13px] sm:text-sm md:text-md lg:text-xl leading-relaxed">
              Interested in our company? 
            </p>

            <br />
            
            <a href="https://daylun.myshopify.com/products/evan-board">
              <button className="bg-[#04012A] text-white font-bold px-8 py-3 rounded-md scale-[70%] sm:scale-[75%] md:scale-[80%] lg:scale-100 hover:text-[#a7b7cf] hover:bg-[#080354] transition">
                Contact us to learn more
              </button>

            </a>
          </div>



          
        </div>
      </div>

      {/*Notch Thingy*/}
      
      <div ref={ref_WhatWeDo} className={`absolute left-[80%] sm:left-3/4 md:left-[70%] lg:left-2/3 top-1/2 w-1/3 transition-all ease-in-out duration-1000 ${is_visible_WWD ? "-translate-x-0 scale-100" : "translate-x-[30%] scale-110"}`}>
        <div className="-translate-x-full -translate-y-1/2 w-36 h-36 scale-[50%] sm:scale-[60%] md:scale-[80%] lg:scale-100 bg-[#0474BC] -z-100" />
      </div>
    </section>
  );
}
