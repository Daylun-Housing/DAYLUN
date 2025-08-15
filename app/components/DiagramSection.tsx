import Image from "next/image";
import LabeledImageWithLines from "./Diagram";

/**
 * DIAGRAM SECTION
 * @returns {JSX.Element}
 * Section to Handle the Diagram
 * Handles Higher Screens, 
 * Outputs a section with a Header and the Diagram from LabeledImageWithLines
 */
export default function DiagramSection() {

  return (
    <section
      className={`h-0 md:h-full bg-[--dark-blue] text-[var(--txt-bright)] overflow-hidden w-full`}
    >
      <div className="flex relative w-full justify-center">
        <h2 className="text-[clamp(1.5rem,2vw,3rem)] md:text-[clamp(1.5rem,4vw,3rem)] font-extrabold md:m-4 leading-tight">
          OUR <span className="text-[var(--light-blue)]">PRODUCTS</span>
        </h2>
      </div>
      <div className="relative w-full md:h-[500px] z-0 flex justify-center">
        <LabeledImageWithLines />
      </div>
    </section>
  );
}
