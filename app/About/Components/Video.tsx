import Image from "next/image";

import { useIsVisible } from "../../JS_Scripts/Visible";
import { useRef } from "react";

/**
 * COLLABORATE WITH US
 * @returns {JSX.Element}
 * This is the our video section. Just has a video
 */
export default function Video() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative flex h-[600px] w-full">
      {/* Left Panel */}
      <div
        className={`bg-[var(--dark-blue)] items-center text-[var(--txt-bright)] w-full flex flex-col justify-center px-10 md:px-20 relative z-10`}
      >
        <div
          ref={ref_WhatWeDo}
          className={`max-w-3xl mt-16 text-center transition-all ease-in-out duration-1000 ${is_visible_WWD ? "opacity-100" : "opacity-25"}`}
        >
          <h2 className="text-[clamp(1.5rem,2vw,3rem)] md:text-[clamp(1.5rem,4vw,3rem)] font-extrabold mb-8 leading-tight">
            <span className="text-[var(--light-blue)]">Collaborate</span> with us
          </h2>
          
          <div className="w-[3/4] h-1/2">
            <iframe
                className="w-full aspect-video self-stretch md:min-h-96"
                src="https://www.youtube.com/embed/mXXeTQYeNyQ?si=w_kA5AjNMHsq"
                title="Product Overview Video"
                aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}