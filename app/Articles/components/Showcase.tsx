import { contentData } from "./ArticleParts/content";
import Button_Template from "./ArticleParts/buttons";

import { useIsVisible } from "../../JS_Scripts/Visible";
import { useRef } from "react";

/**
 * SHOWCASE
 * 
 * @returns {JSX.Element}
 * Maps all the button configurations in content.tsx into the button template. 
 * Buttons are shown in grid with 3 columns. 
 */
export default function Showcase() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="relative flex flex-col bg-[var(--light-blue)] w-full text-center">
      <div className="text-5xl text-[var(--txt-bright)] font-bold mt-10">
        <p>ALL ARTICLES</p>
      </div>

      <div>
        <div
          ref={ref_WhatWeDo}
          className={`relative grid grid-cols-1 md:grid-cols-3 justify-center items-center 
                                                    transition-all ease-in-out duration-[2000ms] ${is_visible_WWD ? "opacity-100" : "opacity-0"}`}
        > 
          {contentData.map((sub, idx) => (
            <Button_Template key={idx} art_button={sub} />
          ))}
        </div>
      </div>
    </section>
  );
}
