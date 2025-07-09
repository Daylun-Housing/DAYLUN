
import Header from "./components/Header";
import HeaderMobile from "./components/HeaderMobile"

export default function SnapLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-hidden relative">

      <Header />
      <HeaderMobile />
      {/* Snap Scroll Container */}
      <div className="absolute top-16 left-0 right-0 bottom-0 pt-16 h-[calc(100vh-4rem)] overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {children}
      </div>
    </div>
  );
}