"use client";

import StdLayout from "../components/StdLayout";
import HeroSection from "./components/HeroSection";
import Builder from "./components/Builder";
import Soon from "./components/ComingSoon";
import Footer from "../components/Footer";

export default function HouseBuilder() {
  return (
    <StdLayout>
      <HeroSection />

      {/* Current Deployment */}
      <Soon />

      {/* Current Development */}

      {/* <Video />
      <Builder /> */}

      <Footer />
    </StdLayout>
  );
}
