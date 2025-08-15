"use client";

import StdLayout from "../Common/StdLayout";
import Footer from "../Common/Footer";
import HeroSection from "./Components/HeroSection";
import PastReports from "./Components/PastReports";
import LookingToInvest from "./Components/LookingToInvest";
import OurProcesses from "./Components/OurProcesses";

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
      <LookingToInvest />
      {/*<OurProcesses />*/}
      <Footer />
    </StdLayout>
  );
}
