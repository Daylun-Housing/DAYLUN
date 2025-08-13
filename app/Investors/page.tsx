"use client";

import StdLayout from "../components/StdLayout";
import Footer from "../Common/Footer";
import HeroSection from "./Components/HeroSection";
import PastReports from "./Components/PastReports";
import LookingToInvest from "./Components/LookingToInvest";
import OurProcesses from "./Components/OurProcesses";

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
