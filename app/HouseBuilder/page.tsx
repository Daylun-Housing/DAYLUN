"use client";

import StdLayout from "../Common/StdLayout";
import HeroSection from "./components/HeroSection";
import Builder from "./components/Builder";
import Video from "./components/ComingSoon";
import Soon from "./components/ComingSoon";
import Footer from "../Common/Footer";

/**
 * HOUSE BUILDER PAGE
 * @returns {JSX.Element}
 * 
 * Amalgamation of page parts 
 */
export default function HouseBuilder() {
  return (
    <StdLayout>
      <HeroSection />

      {/* Current Deployment */}
      <Soon />

      {/* For When the Builder is Ready */}
      {/*<Video />*/}
      {/* <Builder /> */}

      <Footer />
    </StdLayout>
  );
}
