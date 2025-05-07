import Image from "next/image";

export default function LookingToInvest() {
  return (
    <section className="relative flex flex-col md:flex-row h-screen w-full">
      {/* Left Panel with Image */}
      <div className="relative md:w-2/3 h-96 md:h-auto">
        <Image
          src="/how-we-do-it-1.jpg"
          alt="How we do it background"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Panel with Text */}
      <div className="bg-[#0474BC] text-white flex flex-col justify-center px-10 md:px-20 md:w-1/3 relative z-10">
        <div className="max-w-md mt-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
            LOOKING<br />TO INVEST?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Interesting in our company? Contact us and we can figure something out.
          </p>
        </div>
      </div>

      {/*Notch Thingy*/}
      <div className="absolute left-2/3 -translate-x-1/2 top-1/2 -translate-y-1/2 w-36 h-36 bg-[#0474BC] z-20" />
    </section>
  );
}
