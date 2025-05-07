import Image from "next/image";

export default function HowWeDo() {
  return (
    <section className="relative flex flex-col md:flex-row h-screen w-full">
      {/* Left Panel with Image */}
      <div className="relative md:w-1/2 h-96 md:h-auto">
        <Image
          src="/how-we-do-it-1.jpg"
          alt="How we do it background"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Panel with Text */}
      <div className="bg-[#0078D7] text-white flex flex-col justify-center px-10 md:px-20 md:w-1/2 relative z-10">
        <div className="max-w-md mt-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
            HOW WE<br />DO IT
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Innovation is core to Daylun. Our focus and investments in construction build has
            resulted in developing/creating premium, passive, net zero, and technically
            advanced pre-engineered homes.
          </p>
        </div>
      </div>

      {/*Notch Thingy*/}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-36 h-36 bg-[#0078D7] z-20" />
    </section>
  );
}
