import Image from "next/image";

export default function WallSystem() {
  return (
    <section className="relative bg-[#04012A] text-white py-24 px-4 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold">TECHNOLOGY</h2>
        <p className="text-[#0474BC] text-2xl md:text-3xl font-semibold mt-2">WALL SYSTEM</p>
        <p className="text-sm mt-4 text-white/70 max-w-xl mx-auto">
          We have patents for our innovations and sustainable solutions offerings
        </p>
      </div>

      {/* Wall Assembly */}
      <div className="relative flex justify-center items-end h-[700px] space-x-4">
        {/* Wall 1 */}
        <div className="relative w-[160px] h-full">
          <Image src="/wall1.svg" alt="Wall 1" fill className="object-contain" />
        </div>

        {/* Wall 2 with bottom label */}
        <div className="relative w-[160px] h-full -ml-16">
          <Image src="/wall2.svg" alt="Wall 2" fill className="object-contain" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs text-white text-center leading-tight mb-2">
            <div className="w-px h-6 bg-white mx-auto mb-1" /> {/* Line pointing up */}
            OSB SHEET<br />WITH<br />MEMBRANE AND ISOTOP
            </div>
        </div>

        {/* Wall 3 with label and line */}
        <div className="relative w-[200px] h-full -ml-16 -mr-16 z-10">
          <Image src="/wall3.svg" alt="Wall 3" fill className="object-contain" />
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs text-white text-center">
            STEEL STRUCTURE
            <div className="w-px h-10 bg-white mx-auto mt-1" />
          </div>
        </div>

        {/* Wall 4 */}
        <div className="relative w-[160px] h-full -mr-16">
          <Image src="/wall4.svg" alt="Wall 4" fill className="object-contain" />
        </div>

        {/* Wall 5 with label and line */}
        <div className="relative w-[160px] h-full">
          <Image src="/wall5.svg" alt="Wall 5" fill className="object-contain" />
          <div className="absolute -top-14 left-1/2 -translate-x-1/2 text-xs text-white text-center leading-tight">
            CLOSED SPRAY FOAM<br />ON THE OUTSIDE
            <div className="w-px h-12 bg-white mx-auto mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
