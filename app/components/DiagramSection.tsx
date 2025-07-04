import Image from "next/image";
import LabeledImageWithLines from "./Diagram";

export default function DiagramSection() {

  return (
    <section
      className={`h-0 md:h-full bg-[#04012A] text-white overflow-hidden w-full`}
    >
      <div className="flex relative w-full justify-center">
        <h2 className="text-[clamp(1.5rem,2vw,3rem)] md:text-[clamp(1.5rem,4vw,3rem)] font-extrabold md:m-4 leading-tight">
          OUR <span className="text-[#0474BC]">PRODUCTS</span>
        </h2>
      </div>
      <div className="relative w-full md:h-[500px] z-0 flex justify-center">
        <LabeledImageWithLines />
      </div>
    </section>
  );
}
