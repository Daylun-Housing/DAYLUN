"use client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhatWeDo from "./components/WhatWeDo";
import Highlights from "./components/Highlights";
import HowWeDoIt from "./components/HowWeDoIt";
import WallSystem from "./components/WallSystem";
import HowItWorks from "./components/HowItWorks";
import RecentProjects from "./components/RecentProjects";
import LookingForMaterials from "./components/LookingForMaterials";
import Awards from "./components/Awards";
import GetQuote from "./components/GetQuote";
import Footer from "./components/Footer";



export default function Home() {

  return (
    <>
      <Header />
      <HeroSection />
      <WhatWeDo/>
      <Highlights />
      <HowWeDoIt/>
      <WallSystem/>
      <HowItWorks/>
      <RecentProjects/>
      <LookingForMaterials />
      <Awards />
      <GetQuote/>
      <Footer/>
    </>
    
  );
}
