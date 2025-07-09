

import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile"

export default function StdLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-y-scroll relative">
              
      <Header />
      <HeaderMobile />

      {/* Snap Scroll Container */}
      <div className="">
        {children}
      </div>
    </div>
  );
}