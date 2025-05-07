import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      <Image
        src="/background.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="relative w-[500px] h-[180px] md:w-[640px] md:h-[220px]">
          <Image
            src="/logo-alt.svg"
            alt="Daylun Logo Alt"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
