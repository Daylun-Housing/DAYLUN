import Image from "next/image";
import Newsletter from "../../Common/Newsletter";

import { FaEnvelope } from "react-icons/fa6";
import { useIsVisible } from "../../JS_Scripts/Visible";
import { useRef, useState } from "react";

/**
 * LOOKING TO INVEST
 * 
 * @returns {JSX.Element}
 * Section asking investors to contact us and invest.
 */
export default function LookingToInvest() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden flex md:flex h-[300px] sm:h-[450px] sm:h-[550px] md:h-[700px] w-full">
      {/* Left Panel with Image */}
      <div
        ref={ref_WhatWeDo}
        className={`relative w-1/2 md:w-2/3 h-full md:h-auto z-0 transition-all ease-in-out duration-1000 
                                          ${is_visible_WWD ? "translate-x-0 scale-100" : "translate-x-[5%] scale-[140%]"}`}
      >
        <Image
          src="/how-we-do-it-1.jpg"
          alt="How we do it background"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Panel with Text */}
      <div
        ref={ref_WhatWeDo}
        className={`w-1/2 md:w-1/3 transition-all ease-in-out duration-1000 
                                        ${is_visible_WWD ? "translate-x-0 scale-x-100" : "translate-x-[30%] scale-x-110"}`}
      >
        <div className="bg-[var(--light-blue)] text-[var(--txt-bright)] h-full flex flex-col justify-center px-10 md:px-20 relative z-10">
          <div className="max-w-md md:mt-16">
            <h2 className="text-[var(--dark-blue)] text-[clamp(1.5rem,2vw,3rem)] md:text-[clamp(1.5rem,4vw,3rem)] font-extrabold mb-8 leading-tight">
              LOOKING
              <br />
              TO INVEST?
            </h2>
            <p className="text-[13px] text-[clamp(0.5rem, 1vw, 1.5rem)] md:text-[clamp(0.5rem,3vw,1.5rem)] leading-relaxed">
              Interested in our company?
            </p>

            <br />
            <button className="bg-[var(--dark-blue)] text-[var(--txt-bright)] font-bold px-2 md:px-8 py-1 sm:py-3 rounded-md text-[clamp(0.5rem,2vw,1rem)] hover:text-[var(--txt-faint-grey)] hover:bg-[var(--hover-dark-blue)] transition">
              <a href="mailto:info@daylun.ca">Contact us to learn more</a>
            </button>
            <br />
            <br />
            <button 
              onClick={() => setIsPdfModalOpen(true)} 
              className="bg-[var(--dark-blue)] text-[var(--txt-bright)] font-bold px-2 md:px-8 py-1 sm:py-3 rounded-md text-[clamp(0.5rem,2vw,1rem)] hover:text-[var(--txt-faint-grey)] hover:bg-[var(--hover-dark-blue)] transition"
            >
              PITCH DECK
            </button>
          </div>
        </div>
      </div>

      {/*Notch Thingy*/}

      <div
        ref={ref_WhatWeDo}
        className={`absolute left-[60%] md:left-[70%] lg:left-2/3 top-1/2 w-1/3 transition-all ease-in-out duration-1000 ${is_visible_WWD ? "-translate-x-0 scale-100" : "translate-x-[50%] scale-110"}`}
      >
        <div className="-translate-x-full -translate-y-1/2 w-36 h-36 scale-[50%] sm:scale-[60%] md:scale-[80%] lg:scale-100 bg-[var(--light-blue)] -z-100" />
      </div>

      {/* PDF Modal */}
      {isPdfModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={() => setIsPdfModalOpen(false)}
        >
          <div 
            className="relative w-full h-full max-w-7xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsPdfModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-[var(--light-blue)] text-[var(--txt-bright)] hover:bg-[var(--hover-med-blue)] rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl transition"
              aria-label="Close PDF viewer"
            >
              ×
            </button>
            
            {/* PDF Viewer */}
            <iframe
              src="/DaylunConstruction&Materials.pdf"
              className="w-full h-full"
              title="Daylun Pitch Deck"
            />
          </div>
        </div>
      )}
    </section>
  );
}
