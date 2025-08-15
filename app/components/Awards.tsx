import Image from "next/image";
import AwardItems from "./AwardItems";

/**
 * AWARD Section 
 * @returns {JSX.Element}
 * Section that shows Awards
 */
export default function Awards() {
  return (
    <section className="bg-[var(--dark-blue)] w-full h-[500px] text-[var(--txt-bright)]">
      {/* Heading */}
      <div className="max-w-6xl h-1/5 mx-auto mb-10 flex flex-col justify-center">
        <h2 className="text-[clamp(2.2rem,5vw,5rem)] py-12 font-extrabold leading-tight">
          Featured
          <span className="text-[var(--light-blue)] ml-4">Awards</span>
        </h2>
      </div>

      {/* Award Items */}
      <div className="relative flex h-4/5 justify-center">
        <AwardItems />
      </div>
    </section>
  );
}
