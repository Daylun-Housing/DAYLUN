import Image from "next/image";
import { useRouter } from 'next/navigation';

import { useIsVisible } from "../../JS_Scripts/Visible";
import { useRef } from "react";

export default function Featured() {
  const router = useRouter();

  const gotoarticle = (section: string) => {
    router.push(`/ArticlePages?section=${section}`);
  };

  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="overflow-hidden relative md:flex h-[550px] md:h-[700px] w-full">
      {/* Left Panel */}
      <div
        ref={ref_WhatWeDo}
        className={`w-full md:w-1/3 transition-all ease-in-out duration-1000 
                                      ${is_visible_WWD ? "translate-x-0 scale-x-100" : "md:-translate-x-[30%] scale-x-[110%]"}`}
      >
        <div className="bg-[#04012A] text-white flex flex-col justify-center px-10 md:px-20 h-full relative z-10">
          <div className="max-w-md py-4 md:mt-16">
            <h2 className="text-[#0474BC] text-xl sm:text-2xl lg:text-4xl xl:text-6xl font-extrabold mb-4 leading-tight">
              FEATURED ARTICLE
            </h2>
            <h3 className="text-lg sm:text-2xl xl:text-4xl mb-8 font-normal leading-tight">
              Flagship House
            </h3>
            <p className="text-xs lg:text-lg leading-relaxed">
              241 Waterloo is an innovative sustainable, net-zero, modular home
              build incorporating the most revolutionary green building
              materials and technologies.
              <br />
              <br />
              241 Waterloo is the pinnacle of residential design for homeowners
              that prioritize value, luxury, and minimal environmental impact .
              . .
              <br />
              <br />
            </p>
            <p onClick={() => gotoarticle('Waterloo_241')} className="text-xs lg:text-lg cursor-pointer hover:text-[#0474BC]">
              Continue Reading
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div
        ref={ref_WhatWeDo}
        className={`relative w-full md:w-2/3 h-full md:h-auto z-0 transition-all ease-in-out 
                                          duration-1000 ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[5%] scale-[120%]"}`}
      >
        <Image
          src="/241-waterloo.jpg"
          alt="Modern house"
          fill
          className="object-contain md:object-cover object-top absolute md:p-0 "
        />
      </div>

      {/* Notch Thingy */}

      <div
        ref={ref_WhatWeDo}
        className={`absolute left-[25%] md:left-[30%] lg:left-1/3 top-1/2 w-1/3 transition-all ease-in-out duration-1000 ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[30%] scale-110"}`}
      >
        <div className=" -translate-y-1/2 w-36 h-36 scale-0 sm:scale-[60%] md:scale-[80%] lg:scale-100 bg-[#04012A] -z-100" />
      </div>
    </section>
  );
}
