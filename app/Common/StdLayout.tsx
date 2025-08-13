

import Header from "./Header";
import HeaderMobile from "./HeaderMobile"


{/*
  # STANDARD LAYOUT
  #
  # Standard wrapper for webpages, this is for all webpages that use standard scroll 
*/}

export default function StdLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-y-scroll relative bg-[var(--dark-blue)]">
              
      <Header />
      <HeaderMobile />

      {/* Snap Scroll Container */}
      <div className="">
        {children}
      </div>
    </div>
  );
}