import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useIsVisible } from "../../JS_Scripts/Visible";
import { useRef, useState } from "react";
import Link from 'next/link';

/**
 * VEGETABLE GLUE
 * 
 * @returns {JSX.Element}
 * Outputs the Vegetable Glue section, a slide in from the left with text and image on the right 
 */
export default function VegetableGlue() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);
  const router = useRouter();
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  /**
   * INFO PAGES
   * @param section 
   * Route to TechInfoPage
   */
  const gotoInfoPages = (section: string) => {
    router.push(`/TechInfoPages?section=${section}`);
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
          <h2 className="text-[clamp(1.5rem,2vw,3rem)] md:text-[clamp(1.5rem,4vw,3rem)] font-extrabold md:mb-8 leading-tight text-[var(--light-blue)]">
            Vegetable Glue
          </h2>
          <br />
          <p className="text-[clamp(0.5rem,2vw,1rem)] leading-relaxed">
            Daylun's Vegetable Glue emerged from the need for an eco-friendly
            alternative to conventional adhesives. Originating from experiences
            in shoe factories and a commitment to sustainability, we aimed to
            address the environmental and health concerns associated with
            traditional glues. Through extensive research and development, our
            technology arm, 50ul Tech, formulated a two-part organic glue that
            not only rivals epoxy adhesives in strength and versatility, but
            also offers a safer and greener solution for various applications.
            By creating a glue that is both effective and environmentally
            friendly, we aim to contribute to a more sustainable future while
            meeting the demands of modern construction needs.
          </p>
          <br />
          <a href="https://daylun.myshopify.com/products/vegetable-glue">
            <button className="bg-[var(--light-blue)] text-[var(--txt-bright)] font-bold px-8 py-3 rounded-md scale-[60%] sm:scale-[70%] md:scale-[80%] lg:scale-100 hover:text-[var(--txt-faint-grey)] hover:bg-[var(--hover-med-blue)] transition">
              PURCHASE NOW
            </button>
          </a>
          <br />
          <br />
          {/* DO NOT DELETE: RE-ENABLE ONCE SHOPIFY GETS TAKEN DOWN */}
          {/*<button onClick={() => goToTechnologyPages('vegetable_glue')} className="bg-[#0474BC] text-white font-bold px-8 py-3 rounded-md scale-[60%] sm:scale-[70%] md:scale-[80%] lg:scale-100 hover:text-[#d4d5d6] hover:bg-[#015185] transition">
            PURCHASE NOW
          </button>*/}
          <button onClick={() => gotoInfoPages('vegetable_glue')} className="bg-[var(--light-blue)] text-[var(--txt-bright)] font-bold px-8 py-3 rounded-md scale-[60%] sm:scale-[70%] md:scale-[80%] lg:scale-100 hover:text-[var(--txt-faint-grey)] hover:bg-[var(--hover-med-blue)] transition">
            MORE INFO
          </button>
          <br />
          <br />
          <button onClick={() => setIsPdfModalOpen(true)} className="bg-[var(--light-blue)] text-[var(--txt-bright)] font-bold px-8 py-3 rounded-md scale-[60%] sm:scale-[70%] md:scale-[80%] lg:scale-100 hover:text-[var(--txt-faint-grey)] hover:bg-[var(--hover-med-blue)] transition">
            VIEW SLIDE DECK
          </button>

        </div>
      </div>
      {/* Right Panel */}
      <div
        ref={ref_WhatWeDo}
        className={`flex bg-[var(--light-blue)] h-1/3 md:h-full w-full md:w-[40%] items-center justify-center
                                        transition-all duration-[1500ms] ease-in-out ${is_visible_WWD ? "translate-x-0 scale-100" : "md:-translate-x-[15%] scale-[150%]"}`}
      >
        <div className={`relative w-full 
                         h-full md:h-[60%] object-fill`}
        >
          <Image
            src="/VegetableGlue.png"
            alt="Vegetable Glue"
            fill
            className="object-contain duration-100 hover:scale-[110%] "
          />
        </div>
      </div>

      {/* Notch Thingy */}
      <div
        ref={ref_WhatWeDo}
        className={`absolute z-20 md:left-[50%] lg:left-[55%] xl:left-[60%] top-1/2 w-1/3 transition-all ease-in-out duration-[1500ms] ${is_visible_WWD ? "translate-x-0 scale-100" : "-translate-x-[40%] scale-110"}`}
      >
        <div className=" -translate-y-1/2 w-36 h-36 scale-0 md:scale-[60%] xl:scale-100 bg-[var(--dark-blue)] z-20" />
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
              src="/Daylun's vegetable glue.pdf"
              className="w-full h-full"
              title="Vegetable Glue Slide Deck"
            />
          </div>
        </div>
      )}
    </section>
  );
}
