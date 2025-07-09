"use client";

import StdLayout from "./components/StdLayout";
import HeroSection from "./components/HeroSection";
import DiagramSection from "./components/DiagramSection";
import DiagramMobile from "./components/DiagramMobile";
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
    <StdLayout>
      <HeroSection />
      <DiagramSection />
      <DiagramMobile />
      <WhatWeDo />
      <Highlights />
      <HowWeDoIt />
      <WallSystem />
      <HowItWorks />
      <RecentProjects />
      <LookingForMaterials />
      <Awards />
      <GetQuote />
      <Footer />
    </StdLayout>
  );
}
