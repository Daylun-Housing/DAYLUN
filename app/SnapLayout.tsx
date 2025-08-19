
import Header from "./Common/Header";
import HeaderMobile from "./Common/HeaderMobile"

/**
 * SNAP LAYOUT
 * @param {React.ReactNode} 
 * @returns {JSX.Element}
 * Layout that allows snap scroll. 
 */
export default function SnapLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-hidden relative">

      <Header />
      <HeaderMobile />
      {/* Snap Scroll Container */}
      <div className="absolute top-16 left-0 right-0 bottom-0 h-[95vh] overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {children}
      </div>
    </div>
  );
}