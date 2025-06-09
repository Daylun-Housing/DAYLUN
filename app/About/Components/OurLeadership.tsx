import Image from "next/image";

import {FaLinkedinIn} from "react-icons/fa6"
import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function OurLeadership() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative overflow-hidden flex h-[700px] w-full">
      {/* Left Panel */}
      <div ref={ref_WhatWeDo} className={`w-2/3 transition-all ease-in-out duration-1000 
                                        ${is_visible_WWD ? "translate-x-0 scale-x-100" : "-translate-x-[30%] scale-x-110"}`}>
        <div className="bg-[#04012A] text-white flex flex-col justify-center px-5 md:px-20 relative z-10 h-full w-full">
          <div className="max-w-xl mt-2 md:mt-8 text-left">
            <h2 className="text-[clamp(1.5rem,2vw,3rem)] md:text-[clamp(1.5rem,4vw,3rem)] font-extrabold mb-4 leading-tight">
              Our CEO
            </h2>
            <h3 className="text-[clamp(0.5rem,2vw,1.5rem)] md:text-[clamp(0.5rem,2vw,1.5rem)]] leading-relaxed ">Arthur Zankowicz
            </h3>
            
            <a href="https://www.linkedin.com/in/arthur-z-a494a517b/">
                <FaLinkedinIn className="mt-2 text-[clamp(1rem,2vw,2rem)] md:text-[clamp(1rem,2vw,2rem)]] text-[#0474BC] hover:text-[#045c94]"/>
              </a>
            
            <br />
            <p className="text-[clamp(0.5rem,2vw,1.5rem)] md:text-[clamp(0.5rem,2vw,1.5rem)]] leading-relaxed w-full">
            Our CEO, Arthur. is a sustainable design entrepreneur with over 25 years experience in innovating environmentally friendly
            and creative design solutions for the sport, fashion, film, and building industries. 

            <br /><br />

            Arthur’s entrepreneurial career started in Toronto, Canada, with the 1989 launch of a company in the sporting 
            goods sector called Pain. Arthur ran 
            the business until 1994. Between 1996 and 2002, Arthur directed 300 commercials 
            internationally, including for brands like IKEA Germany, Sony, and Subaru Japan. 

            In 2002, Arthur launched another sporting goods company, Moreno. The innovations of Moreno are now established standards in
             the sporting goods market and manufacturing.

            After selling Moreno in April 2009, Arthur relocated to China, where he spent 
            10 years researching and developing new products while working with some of the sharpest minds in 
            the industry.

            <br /><br />

            In May 2016, he launched 50 Unlimited Co. Technologies, or 50ul, to develop and license inventions for more-eco
            friendly sportswear. The company’s creations include micro egg technology and a vegetable-based glue.
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div ref={ref_WhatWeDo} className={`relative w-1/3 h-full md:h-auto items-center
                                          duration-1000 ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[10%] scale-[200%]"}`}>
        <div>
            <Image
              src="/about-the-designer-Arthur-Zankowicz.jpg"
              alt="CEO - Arthur Zankowicz"
              fill
              className="object-cover"
            />
          </div>
      </div>
    </section>
  );
}