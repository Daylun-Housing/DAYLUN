import Image from "next/image";

export default function Middle() {
  return (
    <div className="md:w-1/3 py-2 justify-center items-center flex">
      <a
        href="./All_Articles/241_Waterloo"
        className="bg-[#04012A] w-2/3 h-2/3 text-center"
      >
        <div className="w-full h-full overflow-hidden scale-[80%] hover:scale-100 duration-100">
          <div className="transition-all font-bold text-white text-2xl absolute h-full w-full bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 z-20">
            View Article
          </div>
          <p className="font-bold text-[white] mt-5 mb-5 text-[clamp(1.5rem,4vw,2rem)]">
            241 WATERLOO
          </p>
          <div className="relative w-4/5 h-[200px] ">
            <Image
              src="/flagship-house.jpg"
              alt="how we do it"
              fill
              className="object-cover translate-x-[12%]"
            />
          </div>
          <p className="m-5 text-left text-white  text-[clamp(1px,4vw,1rem)] justify-center flex flex-col">
            241 Waterloo is a net-zero and modular home build incorporating the
            revolutionary materials and technologies.
            <br />
            <br />
            <button className="bg-[#0474BC] text-white font-bold px-4 py-3 rounded-md scale-[60%] sm:scale-[70%] md:scale-[80%] lg:scale-100 hover:text-[#d4d5d6] hover:bg-[#015185] transition">
              Read More
            </button>
          </p>
        </div>
      </a>
    </div>
  );
}
