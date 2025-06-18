import Image from "next/image";
import AwardItems from "./AwardItems";

export default function Awards() {
  return (
    <section className="bg-[#04012A] w-full h-[500px] text-white">
      <div className="max-w-6xl h-1/5 mx-auto mb-10">
        {/* Grid with heading + steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Heading Block */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[clamp(2.2rem,5vw,5rem)] py-12 font-extrabold leading-tight">
              Featured 
              <span className="text-[#0474BC] ml-4">Awards</span>
            </h2> 
          </div>
        </div>
      </div>

      <div className="relative flex h-4/5 justify-center">

        <AwardItems />

      </div>
    </section>
  );
}
