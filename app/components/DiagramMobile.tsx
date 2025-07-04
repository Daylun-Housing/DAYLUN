import Image from "next/image";

import { useIsVisible } from "../JS_Scripts/Visible";
import { useRef } from "react";


interface Label {
  id: string;
  labelLeft: number;   // % position where label floats
  labelTop: number;
  link: string;
}

const labels: Label[] = [
  {
    id: "1",
    labelLeft: 18,
    labelTop: 55,
    link: "https://daylun.myshopify.com/products/evan-board",
  },
  {
    id: "2",
    labelLeft: 18,
    labelTop: 40,
    link: "https://daylun.myshopify.com/products/waterproof-membrane-1",
  },
  {
    id: "3",
    labelLeft: 33,
    labelTop: 15,
    link: "https://daylun.myshopify.com/products/roof-trusses",
  },
  {
    id: "4",
    labelLeft: 70,
    labelTop: 10,
    link: "https://daylun.myshopify.com/products/sips-walls-structural-insulated-panels",
  },
  {
    id: "5",
    labelLeft: 65,
    labelTop: 30,
    link: "https://daylun.myshopify.com/collections/frontpage",
  },
  {
    id: "6",
    labelLeft: 72,
    labelTop: 73,
    link: "https://daylun.myshopify.com/products/vegetable-glue",
  },
];


const MobileDiagram: React.FC = () => {
  return (
    <div className="relative w-full max-w-3xl">
      <img
        src="/Home_Sketch.jpg"
        alt="Diagram labeled"
        className="w-auto h-auto"
      />

      {/* Labels */}
      {labels.map((label) => (
        <a
          key={label.id}
          href={label.link}
          className="absolute text-[#329fe6] hover:text-white bg-black bg-opacity-70 px-1 py-1 text-sm rounded"
          style={{
            top: `${label.labelTop}%`,
            left: `${label.labelLeft}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {label.id}
        </a>
      ))}
    </div>
  );
};

export default function DiagramMobile() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  return (
    <section
      className={`h-full md:h-0 bg-[#04012A] text-white overflow-hidden w-full`}
    >
      <div className="flex relative w-full justify-center">
        <h2 className="text-[clamp(1.5rem,2vw,3rem)] md:text-[clamp(1.5rem,4vw,3rem)] font-extrabold m-4 leading-tight">
          OUR <span className="text-[#0474BC]">PRODUCTS</span>
        </h2>
      </div>
      <MobileDiagram />
      <div
        ref={ref_WhatWeDo}
        className={` transition-all w-full h-[200px] md:h-0 duration-1000 flex md:flex-row text-xs md:text-md
                                            ${is_visible_WWD ? "opacity-100 scale-x-100" : "opacity-0 scale-x-110"} `}
      >
        <div className="relative w-full h-full z-20 text-[#0474BC] text-[clamp(1rem,2vw,2rem)]">
          <div className="absolute md:scale-0 px-4 flex justify-center w-full py-2">
            <li className="list-none grid grid-cols-2">
              <ul>
                <a
                  href="https://daylun.myshopify.com/products/roof-trusses"
                  className="hover:text-white"
                >
                  1. Roof Hanger
                </a>
              </ul>
              <ul>
                <a
                  href="https://daylun.myshopify.com/products/waterproof-membrane-1"
                  className="hover:text-white"
                >
                  2. Waterproof Membrane
                </a>
              </ul>
              <ul>
                <a
                  href="https://daylun.myshopify.com/products/evan-board"
                  className="hover:text-white"
                >
                  3. EVAN Board
                </a>
              </ul>
              <ul>
                <a
                  href="https://daylun.myshopify.com/collections/frontpage"
                  className="hover:text-white"
                >
                  4. Sheathing
                </a>
              </ul>
              <ul>
                <a
                  href="https://daylun.myshopify.com/products/vegetable-glue"
                  className="hover:text-white"
                >
                  5. Vegetable Glue
                </a>
              </ul>
              <ul>
                <a
                  href="https://daylun.myshopify.com/products/sips-walls-structural-insulated-panels"
                  className="hover:text-white"
                >
                  6. SIPs Panels
                </a>
              </ul>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
}
