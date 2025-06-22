import Image from "next/image";
import { useIsVisible } from "../../../JS_Scripts/Visible";
import { useRef } from "react";

export default function Bathroom() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mt-6 mb-4 font-bold">
        The <span className="text-[#0474BC]">Bathroom</span>
      </h1>

      <p className="mb-4 lg:mb-[50px]">
        Some of the highlights of the bathroom include:{" "}
      </p>
      <div className="flex-col">
        <div className="md:flex w-full md:mb-20">
          <ul className="flex-col text-xs md:text-sm lg:text-lg space-y-4 ml-10 mr-10 w-full mb-5 md:w-1/3">
            <li>- GROHE's impeccable bathroom faucets</li>
            <li>
              - <b>Stylistic</b> and <b>Elegant</b> design
            </li>
            <li>- Space saving wall-hung water closet with elogated bowl</li>
            <li>- Floor Heating</li>
          </ul>
          <div className="h-[125px] sm:h-[175px] md:h-[250px] w-100 md:w-[50%] flex items-center justify-center">
            <div
              ref={ref_WhatWeDo}
              className={`absolute w-[60%] scale-50 duration-100 h-full object-fill
                                                      transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[100px]"}`}
            >
              <Image
                src="/241-waterloo-bathroom.jpg"
                alt="Bathroom"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div
          ref={ref_WhatWeDo}
          className={`md:flex w-full h-[400px] md:h-[125px] xl:h-[250px]
                                              transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[100px]"}
                                              `}
        >
          <div className="h-1/3 md:h-full md:w-1/3 m-2 flex text-center">
            <div className="relative w-full h-[90%] flex justify-center">
              <Image
                src="/241-waterloo-bathtub.jpg"
                alt="Bamboo Basic"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="h-1/3 md:h-full md:w-1/3 m-2 flex text-center">
            <div className="relative w-full h-[90%] flex justify-center">
              <Image
                src="/241-waterloo-bathtub-2.jpg"
                alt="Bamboo Basic"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="h-1/3 md:h-full md:w-1/3 m-2 flex text-center">
            <div className="relative w-full h-[90%] flex justify-center">
              <Image
                src="/241-waterloo-toilet.jpg"
                alt="Bamboo Basic"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
