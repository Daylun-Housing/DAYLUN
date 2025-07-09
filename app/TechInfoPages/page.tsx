import SnapLayout from "../SnapLayout";

import Footer from "../components/Footer";

export default function Page() {
    return (
        <SnapLayout>
            <>
                <section className="snap-start relative bg-[#04012A] overflow-hidden flex h-full w-full">
                </section>
                <section className="snap-start relative bg-[#0474BC] overflow-hidden flex h-full w-full">
                </section>
                <section className="snap-start relative bg-[#04012A] overflow-hidden flex h-full w-full">
                </section>
                <section className="snap-start relative bg-[#0474BC] overflow-hidden flex h-full w-full">
                </section>
                <Footer />
            </>
        </SnapLayout>
    );
}