import Image from "next/image";

export default function HeroSection() {
  
  return (
    <section className="relative h-[100vh] md:h-screen w-full overflow-hidden">
      <div>
        <Image
          src="/Apartment.png"
          alt="Background"
          fill
          className="delay-15000 object-cover animate-fade-image"
          priority
        />
        <Image
          src="/241-waterloo.jpg"
          alt="Background"
          fill
          className="delay-10000 object-cover animate-fade-image"
          priority
        />
        <Image
          src="/what-we-do.jpg"
          alt="Background"
          fill
          className="delay-5000 object-cover animate-fade-image"
          priority
        />
        <Image
          src="/background.jpg"
          alt="Background"
          fill
          className="object-cover animate-fade-image"
          priority
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="relative w-2/3 h-full md:w-[640px] md:h-[220px]">
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
