import Image from "next/image";
import { useRouter } from 'next/navigation';

import { useIsVisible } from "../JS_Scripts/Visible";
import { useRef } from "react";

/**
 * RECENT PROJECTS
 * 
 * @returns {JSX.Element}
 * Section showing the featured article - 241 Waterloo 
 */
export default function RecentProjects() {
  const router = useRouter();

  /**
    * gotoarticle
    * @param section 
    * 
    * route to the ArticlePage with key = section
    */
  const gotoarticle = (section: string) => {
    router.push(`/ArticlePages?section=${section}`);
  };

  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section className="bg-[var(--dark-blue)] text-[var(--txt-bright)] py-24 px-6 md:px-12">
      <div
        ref={ref_WhatWeDo}
        className={`max-w-4xl mx-auto text-center
                      transition-all ease-in-out duration-[1500ms] ${is_visible_WWD ? "opacity-100" : "opacity-[25%]"}`}
      >
        {/* Section Heading */}
        <h2 className={`text-4xl md:text-5xl font-extrabold uppercase mb-6`}>
          <span className="text-[var(--txt-bright)]">Featured </span>
          <br />
          <span className="text-[var(--txt-bright)]">Article </span>
          {/*<span className="text-[#0474BC]">Projects</span>*/}
        </h2>

        {/* Subheadings */}
        <div
          className={`flex flex-col md:flex-row justify-center gap-16 mb-10 font-extrabold text-2xl md:text-3xl text-[var(--light-blue)] uppercase
                                            transition-all ease-in-out duration-1000 ${is_visible_WWD ? "opacity-100" : "opacity-[25%]"}`}
        >
          <div>
            <p>Toronto</p>
            <p>Townhome</p>
          </div>
        </div>

        {/* Project Image */}
        <div className={`overflow-hidden h-[400px] md:h-[600px] mb-5`}>
          <div className="relative w-full h-full mb-10 hover:scale-125 transition-all">
            <div onClick={() => gotoarticle('Waterloo_241')} className="cursor-pointer">
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
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className={`text-center max-w-2xl mx-auto space-y-6`}>
          <h3 className="text-left text-2xl font-semibold uppercase">
            Flagship House
          </h3>
          <div className="text-left text-[var(--light-blue)] text-lg">
            <p>241 Waterloo Avenue | Toronto, Ontario | Canada</p>
          </div>
          <div className="text-left">
            <p>
              241 Waterloo is an innovative sustainable, net-zero, modular home
              build incorporating the most revolutionary green building
              materials and technologies. 241 Waterloo is the <strong> pinnacle of residential 
              design for homeowners</strong> that prioritize value, luxury, and minimal environmental 
              impact. For <strong> builders and developers, Waterloo symbolizes the height of
              what’s possible </strong> through the pioneering advancements of Daylun and its product
              sponsors. The house will be platinum Leeds certified.
            </p>
            <p onClick={() => gotoarticle('Waterloo_241')} className="mt-4 text-[var(--light-blue)] hover:text-[var(--medium-blue)] cursor-pointer">
                Read More
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
