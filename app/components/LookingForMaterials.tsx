import Image from "next/image";
import Items from "./Items";

export default function LookingForMaterials() {
  return (
    <section className="bg-[#0474BC] text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto mb-10">
        {/* Grid with heading + steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Heading Block */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Featured 
              <span className="text-[#04012A] ml-4">Products</span>
            </h2> 
          </div>

          <div className="translate-x-2/3 translate-y-[25px]">
            <h3>
              Visit our 
                <a href="https://daylun.myshopify.com/" className="m-1 hover:text-[#110C27] font-bold">
                  store 
                </a>
               to view our catalogue.
            </h3>
          </div>
        </div>
      </div>

      <Items />
    </section>
  );
}
