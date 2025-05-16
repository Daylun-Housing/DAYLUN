import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function GantryCrane() {
    
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative flex flex-col md:flex-row h-screen w-full">
      {/* Left Panel */}
      <div className="bg-[#04012A] text-white flex flex-col justify-center px-10 md:px-20 w-1/2 relative z-10">
        <div ref={ref_WhatWeDo} className={`max-w-xl mt-16 text-left
                                            transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "opacity-100 scale-100" : "opacity-25 scale-50"}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
          Gantry Crane
          </h2>
          <br />
          <p className="text-lg md:text-xl leading-relaxed">
          lightweight crane, reduce time and labour.
          <br />
          <br />

          Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect 
          nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely 
          queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power 
          pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki 
          excepteur Basset hound. Zürich sleepy perfect consectetur.

          <br />
          <br />

          <a href="./Investors">
            <span className="hover:text-[#0474BC] font-bold">MAKE IT REALITY</span>
          </a>
          </p>
        </div>

        
      </div> 
      {/* Right Panel */}
      <div className="bg-[#04012A] w-1/2 items-center flex justify-center">
        <div ref={ref_WhatWeDo} className= {`absolute scale-50 hover:scale-75 duration-100 w-[500px] h-[200px] object-fill
                                            transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "opacity-100 scale-50" : "opacity-25 scale-[10%]"}`}>
          <Image
            src="/DAYLUN_LOGO_blue-2b.svg"
            alt="DAYLUN LOGO"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}