import Image from "next/image";

import { useIsVisible } from "../../JS_Scripts/Visible";
import { useRef, useState } from "react";

/**
 * HERO SECTION
 * @returns {JSX.Element}
 * Basic Hero image for Tech Section.
 */
export default function HeroImage() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  return (
    <div className="relative w-full h-[700px]">
      <Image
        className="object-cover"
        src="/blurred.jpg"
        alt="Blueprint"
        fill
        unoptimized
      />
      <div
        ref={ref_WhatWeDo}
        className={`absolute inset-0 flex items-center justify-center text-center
                                    transition-all duration-1000 ease-in-out ${is_visible_WWD ? "scale-100" : "scale-50"}`}
      >
        <div className="backdrop-blur-sm bg-black/60 text-[var(--txt-bright)] px-6 py-8 rounded-xl shadow-lg max-w-3xl">
          <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight">
            Technologies
          </p>
          <p className="mt-2 text-sm md:text-lg xl:text-xl text-gray-200">
            {/* See the innovative technologies our company uses */}
          </p>
          {/* <div className="mt-6">
            <button 
              onClick={() => setIsPdfModalOpen(true)} 
              className="bg-[var(--light-blue)] text-[var(--txt-bright)] font-bold px-6 py-3 rounded-md hover:text-[var(--txt-faint-grey)] hover:bg-[var(--hover-med-blue)] transition text-sm md:text-base"
            >
              PITCH DECK
            </button>
          </div> */}
        </div>
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
    </div>
  );
}
