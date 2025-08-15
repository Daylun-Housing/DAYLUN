import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useIsVisible } from "../../JS_Scripts/Visible";
import { useRef } from "react";

/**
 * BAMBOO
 * 
 * @returns {JSX.Element}
 * Outputs the bamboo section, a slide in from the left with text and image on the right
 */
export default function Bamboo() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);
  const router = useRouter();

  /**
   * TECHNOLOGY PAGES
   * @param {string} 
   * 
   * route to TechnologyPage with section equal to give section. 
   */
  const goToTechnologyPages = (section: string) => {
    router.push(`/TechnologyPages?section=${section}`);
  };

  return (
    <section className="relative bg-[var(--dark-blue)] overflow-hidden md:flex h-[550px] sm:h-[550px] md:h-[700px] w-full">
      {/* Left Panel */}
      <div
        ref={ref_WhatWeDo}
        className={`bg-[var(--dark-blue)] h-2/3 items-center md:h-full text-[var(--txt-bright)] flex justify-center px-10 md:px-20 w-full md:w-[60%] relative z-10 
                                              transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "md:translate-x-0 scale-100" : "md:-translate-x-[30%] scale-110"}`}
      >
        <div className={`mt-10 text-left `}>
          <h2 className="text-[clamp(1.5rem,2vw,3rem)] md:text-[clamp(1.5rem,4vw,3rem)] font-extrabold mb-4 md:mb-8 leading-tight text-[var(--light-blue)]">
            Bamboo OSB
          </h2>
          <p className="text-[clamp(0.5rem,2vw,1rem)] leading-relaxed">
            Bamboo, when dried, is as strong and versatile as wood.
            <br />
            <br />
            Daylun Bamboo Oriented Strand Board (OSB) stands out from
            traditional OSB solutions with its exceptional, blend of enduring
            strength, moisture resistance and robust nail-holding capabilities.
            Enhanced by the polyurethane bond of sub floor adhesive, the OSB
            assembly ensure a panel-to-joist connection so formidable that
            squeaks are virtually non-existent. Moreover, Daylun achieve
            sustainability excellence leveraging bamboo as a building material,
            which is not only durable but also 100% sustainable.
            <br />
            <br />
            <a href="https://daylun.myshopify.com/products/spec-sheet">
              <button className="bg-[var(--light-blue)] text-[var(--txt-bright)] font-bold px-8 py-3 rounded-md scale-[70%] sm:scale-[75%] md:scale-[80%] lg:scale-100 hover:text-[var(--txt-faint-grey)] hover:bg-[var(--hover-med-blue)] transition">
                PURCHASE NOW
              </button>
            </a>
            <br />
            <br />
            <button onClick={() => goToTechnologyPages('bamboo_osb')} className="bg-[var(--light-blue)] text-[var(--txt-bright)] font-bold px-8 py-3 rounded-md scale-[60%] sm:scale-[70%] md:scale-[80%] lg:scale-100 hover:text-[var(--txt-faint-grey)] hover:bg-[var(--hover-med-blue)] transition">
              READ MORE
            </button>
          </p>
        </div>
      </div>
      {/* Right Panel */}
      <div
        ref={ref_WhatWeDo}
        className={`flex bg-[var(--light-blue)] h-1/3 md:h-full w-full md:w-[40%] items-center justify-center
                                            transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[5%] scale-[175%]"}`}
      >
        <div
          className={`relative w-full 
                         h-[80%] md:h-[70%] object-fill`}
        >
          <Image
            src="/Bamboo.png"
            alt="Bamboo Breakdown"
            fill
            className="object-contain duration-100 hover:scale-[110%]"
          />
        </div>
      </div>

      {/* Notch Thingy */}
      <div
        ref={ref_WhatWeDo}
        className={`absolute md:left-[50%] lg:left-[55%] xl:left-[60%] top-1/2  md:w-1/3 transition-all ease-in-out duration-[1500ms] ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[40%] scale-110"}`}
      >
        <div className=" -translate-y-1/2 w-36 h-36 scale-0 md:scale-[80%] lg:scale-100 bg-[var(--dark-blue)] z-20" />
      </div>
    </section>
  );
}
