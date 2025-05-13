import Image from "next/image";
import AwardItems from "./AwardItems";

import {useIsVisible} from "../JS_Scripts/Visible"
import { useRef } from "react";

export default function Awards() {
  return (
    <section className="bg-[#04012A] w-screen h-screen text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto mb-10">
        {/* Grid with heading + steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Heading Block */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Featured 
              <span className="text-[#0474BC] ml-4">Awards</span>
            </h2> 
          </div>
        </div>
      </div>

      <AwardItems />
    </section>
  );
}
