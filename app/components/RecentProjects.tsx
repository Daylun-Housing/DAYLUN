import Image from "next/image";

import {useIsVisible} from "../JS_Scripts/Visible"
import { useRef } from "react";

export default function RecentProjects() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    
    <section className="bg-[#04012A] text-white py-24 px-6 md:px-12">
      <div ref={ref_WhatWeDo} className={`max-w-4xl mx-auto text-center
                      transition-all ease-in-out duration-[1500ms] ${is_visible_WWD ? "opacity-100" : "opacity-[25%]"}`}>
        {/* Section Heading */}
        <h2 className={`text-4xl md:text-5xl font-extrabold uppercase mb-6`}>
          <span className="text-white">Featured </span>
          <br />
          <span className="text-white">Article </span>
          {/*<span className="text-[#0474BC]">Projects</span>*/}
        </h2>

        {/* Subheadings */}
        <div className={`flex flex-col md:flex-row justify-center gap-16 mb-10 font-extrabold text-2xl md:text-3xl text-[#0474BC] uppercase
                                            transition-all ease-in-out duration-1000 ${is_visible_WWD ? "opacity-100" : "opacity-[25%]"}`}>
          <div>
            <p>Toronto</p>
            <p>Townhome</p>
          </div>
        </div>

        {/* Project Image */}
        <div className={`overflow-hidden h-[400px] md:h-[600px] mb-5`}>
          <div className="relative w-full h-full mb-10 hover:scale-125 transition-all">
            <a href="./All_Articles/241_Waterloo">
              <Image
                src="/241-waterloo.jpg"
                alt="241 Waterloo House"
                fill
                className="object-contain md:object-cover rounded-lg"
                priority
              />
              <div className="transition-all font-bold text-2xl absolute h-full w-full bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100">
                  View Article
              </div>
            </a>
          </div>
          
        </div>

        {/* Text Content */}
        <div className={`text-center max-w-2xl mx-auto space-y-6`}>
          <h3 className="text-left text-2xl font-semibold uppercase">Flagship House</h3>
          <div className="text-left text-[#0474BC] text-lg">
            <p>241 Waterloo Avenue | Toronto, Ontario | Canada</p>
          </div>
          <div className="text-left">
            <p>
              241 Waterloo is an innovative sustainable, net-zero, modular home build incorporating
              the most revolutionary green building materials and technologies.
            </p>
            <p>
              241 Waterloo is the <strong>pinnacle of residential design for homeowners</strong> that prioritize
              value, luxury, and minimal environmental impact.
            </p>
            <p>
              For <strong>builders and developers, Waterloo symbolizes the height of what’s possible</strong> through the
              pioneering advancements of Daylun and its product sponsors. The house will be platinum Leeds certified.
            </p>
          <p className="mt-4">
            <a href="./All_Articles/241_Waterloo" className="text-[#0474BC] hover:text-[#0d3370]">
              Read More
            </a>
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}
