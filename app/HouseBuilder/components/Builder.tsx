'use client';
import { useState } from 'react';
import Image from "next/image";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";
import Model_Preview from "../../JS_Scripts/Model";

export default function Builder() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [length, setLength] = useState('');
  let price = 0;
  let model_location = "/models/house1/scene.gltf";

  if (parseInt(width) > 0 && parseInt(height) > 0 && parseInt(length) > 0) {
    price = parseInt(width) * parseInt(height) * parseInt(length);
    
    if(price > 500) {
      model_location = "/models/house2/scene.gltf";
    }
    else if(price > 100) {
      model_location = "/models/house3/scene.gltf";
    }  

  }

  return (
    <section className="bg-[#0474BC] text-white py-16 px-6 md:px-20">
      {/* Input */}
      <div ref={ref_WhatWeDo} className={`grid md:grid-cols-2 gap-12 items-center
                                        transition-all ease-in-out duration-[1800ms] ${is_visible_WWD ? "opacity-100" : "opacity-25"}`}>
        <div>
          <h2 className="text-4xl font-extrabold mb-4">House Builder</h2>
          <p className="mb-6">
            Enter the specifications for your project below and view a preview of your project now.
          </p>
          <form className="space-y-4">
            <div className="flex items-center space-x-2">
              <label className="font-bold w-20">Width</label>
              <input
                type="number"
                placeholder="x"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="w-32 px-3 py-1 text-black"
              />
              <span>ft</span>
            </div>
            <div className="flex items-center space-x-2">
              <label className="font-bold w-20">Height</label>
              <input
                type="number"
                placeholder="y"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-32 px-3 py-1 text-black"
              />
              <span>ft</span>
            </div>
            <div className="flex items-center space-x-2">
              <label className="font-bold w-20">Length</label>
              <input
                type="number"
                placeholder="z"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="w-32 px-3 py-1 text-black"
              />
              <span>ft</span>
            </div>
          </form>
        </div>

        <Image
        src="/TORUS.png"
        alt="Builder Preview"
        width={1200}
        height={600}
        className="rounded-lg object-cover w-full h-128"
      />
      </div>

      {/* Preview */}
      <div ref={ref_WhatWeDo} className={`bg-[#04012A] text-white mt-16 py-12 px-6 rounded-lg
                                        transition-all ease-in-out duration-[1800ms] ${is_visible_WWD ? "opacity-100" : "opacity-25"} `}>
        <h3 className="text-3xl font-extrabold text-center mb-8">Preview</h3>
        <div className="md:flex gap-12 items-center">
          <div className="bg-white w-full md:w-2/3 h-64 md:h-[300px] lg:h-[400px] xl:h-[450px] rounded-lg">
            <Model_Preview loc={model_location}/>
          </div>
          <div>
            <p className="mt-2 mb-2">
              <strong>Specifications:</strong>
            </p>
            <p><strong>Width:</strong> {width || 'x'} ft</p>
            <p><strong>Height:</strong> {height || 'y'} ft</p>
            <p><strong>Length:</strong> {length || 'z'} ft</p>
            <p className="mt-4"><strong>Expected Price:</strong> $ {price} CAD</p>
            <a href="mailto:info@daylun.ca">
              <button className="mt-4 bg-[#0474BC] text-white font-bold px-2 py-1 rounded-md scale-[60%] sm:scale-[70%] md:scale-[80%] lg:scale-100 hover:text-[#d4d5d6] hover:bg-[#015185] transition">
                Buy this House
              </button>

            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
