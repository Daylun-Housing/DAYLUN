
import Header from "./Common/Header";
import HeaderMobile from "./Common/HeaderMobile"

{/*
  # SNAP LAYOUT
  #
  # Layout for sections where the user can snap between sections.
  # Used for TechInfoPages
*/}

export default function SnapLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-hidden relative">

      <Header />
      <HeaderMobile />
      {/* Snap Scroll Container */}
      <div className="absolute top-16 left-0 right-0 bottom-0 h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {children}
      </div>
    </div>
  );
}