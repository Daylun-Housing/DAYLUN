"use client";
import { useState } from "react";
import Image from "next/image";

import { useIsVisible } from "../../JS_Scripts/Visible";
import { useRef } from "react";
import Model_Preview from "../../JS_Scripts/Model";

/**
 * HOUSE BUILDER
 * 
 * @returns {JSX.Element}
 * Prototype. DEFUNCT
 */
export default function Builder() {
  const ref_WhatWeDo = useRef(null);
  const is_visible_WWD = useIsVisible(ref_WhatWeDo);

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [length, setLength] = useState("");

  const [selectedModel, setSelectedModel] = useState("house1");

  const models = {
    house1: { name: "Modern Home", path: "/models/house1/scene.gltf" },
    subhouse: { name: "Suburban", path: "/models/subhouse.glb" },
    donut: { name: "Experimental", path: "/models/donut.glb" },
  };

  const [email, setEmail] = useState("");

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/submit-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, width, height, length }),
    });
    const data = await res.json();
    alert(data.message || "Thank you!");
  };

  let model_location = models[selectedModel].path;

  const widthNum = parseInt(width) || 0;
  const heightNum = parseInt(height) || 0;
  const lengthNum = parseInt(length) || 0;
  let price = widthNum * heightNum * lengthNum;

  return (
    <section className="bg-[var(--light-blue)] text-[var(--txt-bright)] py-16 px-6 md:px-20">
      {/* Input */}
      <div
        ref={ref_WhatWeDo}
        className={`grid md:grid-cols-2 gap-12 items-center
                                        transition-all ease-in-out duration-[1800ms] ${is_visible_WWD ? "opacity-100" : "opacity-25"}`}
      >
        <div>
          <h2 className="text-4xl font-extrabold mb-4">House Builder</h2>
          <p className="mb-6">
            Enter the specifications for your project below and view a preview
            of your project now.
          </p>
          <form className="space-y-4">
            <div className="flex items-center space-x-2">
              <label className="font-bold w-20">Width</label>
              <input
                type="number"
                placeholder="x"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="w-32 px-3 py-1 text-[var(--txt-dark)]"
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
                className="w-32 px-3 py-1 text-[var(--txt-dark)]"
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
                className="w-32 px-3 py-1 text-[var(--txt-dark)]"
              />
              <span>ft</span>
            </div>
          </form>
        </div>

        <Image
          src="/shouses.png"
          alt="Builder Preview"
          width={1200}
          height={600}
          className="rounded-lg object-cover w-full h-128"
        />
      </div>

      {/* Preview */}
      <div
        ref={ref_WhatWeDo}
        className={`bg-[var(--dark-blue)] text-[var(--txt-bright)] mt-16 py-12 px-6 rounded-lg
                                        transition-all ease-in-out duration-[1800ms] ${is_visible_WWD ? "opacity-100" : "opacity-25"} `}
      >
        <h3 className="text-3xl font-extrabold text-center mb-8">Preview</h3>
        <div className="md:flex gap-12 items-center">
          <div className="w-full md:w-2/3 rounded-lg overflow-hidden bg-[var(--dark-blue)]">
            <div className="mb-6">
              <div className="flex justify-center space-x-2 bg-[var(--dark-blue)] p-2 rounded-t-lg">
                {Object.entries(models).map(([key, model]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedModel(key)}
                    className={`px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${
                      selectedModel === key
                        ? "bg-[var(--dark-blue)] text-[var(--txt-bright)]"
                        : "bg-[var(--txt-faint-grey)] text-[var(--light-blue)] hover:bg-[var(--faint-blue)]"
                    }`}
                  >
                    {model.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-64 md:h-[300px] lg:h-[400px] xl:h-[450px]">
              <Model_Preview loc={model_location} />
            </div>
          </div>

          <div>
            <p className="mt-2 mb-2">
              <strong>Specifications:</strong>
            </p>
            <p>
              <strong>Width:</strong> {width || "x"} ft
            </p>
            <p>
              <strong>Height:</strong> {height || "y"} ft
            </p>
            <p>
              <strong>Length:</strong> {length || "z"} ft
            </p>
            <p className="mt-4">
              <strong>Expected Price:</strong> $ {price} CAD
            </p>

            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                placeholder="Email this to me!"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-3 py-1 text-black rounded-md"
              />
              <button
                type="submit"
                className="ml-2 bg-[var(--light-blue)] text-[var(--txt-bright)] px-4 py-1 rounded-md hover:bg-[var(--diagram-txt)]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
