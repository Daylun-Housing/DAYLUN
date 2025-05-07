import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section className="relative flex flex-col md:flex-row h-screen w-full">
      {/* Left Panel */}
      <div className="bg-[#0078D7] text-white flex flex-col justify-center px-10 md:px-20 md:w-1/2 relative z-10">
        <div className="max-w-md mt-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
            WHAT WE<br />DO
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Daylun integrates stylish architectural design with structural engineering quality, 
            technology and sustainable energy efficient homes.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="relative md:w-1/2 h-96 md:h-auto">
        <Image
          src="/what-we-do.jpg"
          alt="Modern house"
          fill
          className="object-cover"
        />
      </div>

      {/* Notch Thingy */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-36 h-36 bg-[#0078D7] z-20" />


    </section>
  );
}
