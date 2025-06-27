import Image from "next/image";
import Newsletter from "../../../Common/Newsletter";

export default function Follow() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-center mt-6 mb-5 md:mb-20 font-bold">
        <span className="text-[#0474BC]">Interested?</span>
      </h1>

      <div className="flex-col">
        <div className="w-full mb-20">
          <p className="flex-col text-sm md:text-md lg:text-xl space-y-4 m-5 w-full">
            Follow our newsletter.
          </p>
          
          <div className="">
            <Newsletter />
          </div>
        </div>
      </div>
    </>
  );
}
