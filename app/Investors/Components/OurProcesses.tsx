import Image from "next/image";

export default function OurProcesses() {
  return (
    <section className="relative flex flex-col md:flex-row h-screen w-full">
      {/* Left Panel */}
      <div className="bg-[#04012A] text-white flex flex-col justify-center px-10 md:px-20 md:w-1/3 relative z-10">
        <div className="max-w-md mt-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
            Our Processes
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
          See our process on how to build a home. 
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="relative md:w-2/3 h-96 md:h-auto">
        <Image
          src="/241-waterloo.jpg"
          alt="Modern house"
          fill
          className="object-cover"
        />
      </div>

      {/* Notch Thingy */}
      <div className="absolute left-1/3 -translate-x-1/2 top-1/2 -translate-y-1/2 w-36 h-36 bg-[#04012A] z-20" />


    </section>
  );
}