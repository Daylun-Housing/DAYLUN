import Image from "next/image";

export default function TeamHeader() {
  
  return (
    <section className="relative flex h-[25vh] w-full">
      {/* Left Panel */}
      <div className={`bg-[#0366a6] items-center text-white flex flex-col justify-center px-10 md:px-20 w-full relative z-10`}>
        <div className={`max-w-3xl mt-16 text-center `}>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-extrabold mb-8 leading-tight">
            Our Team
          </h2>
        </div>
      </div>


    </section>
  );
}