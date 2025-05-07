// import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhatWeDo from "./components/WhatWeDo";
import Highlights from "./components/Highlights";
import HowWeDoIt from "./components/HowWeDoIt";
import WallSystem from "./components/WallSystem";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhatWeDo/>
      <Highlights />
      <HowWeDoIt/>
      <WallSystem/>
    </>

    
  );
}
