import Image from "next/image";

export default function EvaBoard() {
  return (
    <section className="relative flex flex-col md:flex-row h-screen w-full">
      {/* Left Panel */}
      <div className="bg-[#0474BC] flex flex-col justify-center px-10 md:px-20 w-1/2 relative z-10">
        <div className=" absolute scale-50 hover:scale-75 duration-100 w-full h-full object-fill">
          <Image
            src="/fabric_foam.webp"
            alt="EVA Board"
            className="object-cover"
            fill
          />
        </div>

        
      </div> 
      {/* Right Panel */}
      <div className="bg-[#0474BC] w-1/2 items-center flex justify-center">
        <div className="max-w-xl mt-16 text-left text-white ">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Eva Board
            </h2>
            <br />
            <p className="text-lg md:text-xl leading-relaxed">
            Interior Drywall replacement Daylun developed this product as an alternative to drywall or gypsum, 
            addressing the challenges of their heaviness and messiness. Our EVA board is 80% lighter, more manageable, 
            and boasts tensile strength, a feature lacking in traditional drywall. Daylun’s EVA walls are built from a 
            highly versatile polyolefin low smoke and halogen-free flame-retardant material. Created from ethyl vinyl 
            acetate (EVA) – the same innovative material found in running shoes – this material is lightweight, boasts 
            low density, superior sound insulation, and age-defying properties.
            </p>
          </div>
        </div>
    </section>
  );
}