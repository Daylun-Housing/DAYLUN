"use client";

import StdLayout from "../Common/StdLayout";
import Footer from "../Common/Footer";
import Items from "../components/Items";

/**
 * INVENTORY
 * @returns {JSX.Element}
 * Inventory landing page that showcases available products.
 */
export default function Inventory() {
  return (
    <StdLayout>
      <section className="bg-[var(--light-blue)] text-[var(--txt-bright)] py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight">
            Inventory
          </h1>
          <p className="mt-4 text-[clamp(1rem,2vw,1.25rem)]">
            Explore the latest Daylun materials. Select any item to view specs and
            product information.
          </p>
        </div>
      </section>
      <div className="bg-[var(--dark-blue)] py-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Items />
        </div>
      </div>
      <Footer />
    </StdLayout>
  );
}
