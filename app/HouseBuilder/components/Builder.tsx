'use client';
import { useState } from 'react';
import Image from "next/image";

export default function Builder() {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [length, setLength] = useState('');

  return (
    <section className="bg-[#0d1030] text-white py-16 px-6 md:px-20">
      {/* Input */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
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
      <div className="bg-[#0078C7] text-white mt-16 py-12 px-6 rounded-lg">
        <h3 className="text-3xl font-extrabold text-center mb-8">Preview</h3>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white w-full h-64 rounded-lg" />
          <div>
            <p className="mb-2">
              <strong>Specifications:</strong>
            </p>
            <p><strong>Width:</strong> {width || 'x'} ft</p>
            <p><strong>Height:</strong> {height || 'y'} ft</p>
            <p><strong>Length:</strong> {length || 'z'} ft</p>
            <p className="mt-4"><strong>Expected Price:</strong> ___ $ CAD</p>
          </div>
        </div>
      </div>
    </section>
  );
}
