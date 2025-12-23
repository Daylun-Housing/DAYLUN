import Image from "next/image";
import Items from "./Items";

/**
 * LOOKING FOR MATERIALS?
 * @returns {JSX.Element}
 * 
 * Section showing all the products available
 */
export default function LookingForMaterials() {
  return (
    <section className="bg-[var(--light-blue)] text-[var(--txt-bright)] py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-10">
        {/* Grid with heading + steps */}
        <div className="flex-col grid-cols-1 md:grid-cols-3 gap-8">
          {/* Heading Block */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[clamp(2.2rem,5vw,5rem)] font-extrabold leading-tight">
              Featured
              <span className="text-[var(--dark-blue)] ml-4">Products</span>
            </h2>
          </div>

          <div className="lg:translate-x-2/3 lg:-translate-y-[25px]">
            <h3>
              Visit our
              <a
                href="/Inventory"
                className="m-1 hover:text-[var(--dark-blue)] font-bold"
              >
                inventory
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
