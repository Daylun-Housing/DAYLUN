"use client";

import HeroSection from "./Components/HeroSection";
import StdLayout from "../Common/StdLayout";
import Catalogue from "./Components/Catalogue";
import Footer from "../Common/Footer";

/**
 * INVESTORS
 * 
 * @returns {JSX.Element}
 * Amalgamation of sections for Investor page
 */
export default function Investors() {
  return (
    <StdLayout>
      <HeroSection />
      <Catalogue />
      <Footer />
    </StdLayout>
  );
}
