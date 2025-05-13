"use client"

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "./Components/HeroSection";
import PastReports from "./Components/PastReports";
import LookingToInvest from "./Components/LookingToInvest";
import OurProcesses from "./Components/OurProcesses";

export default function Investors() {
  return (
    <>
      <Header />
      <HeroSection />
      <PastReports />
      <LookingToInvest />
      {/*<OurProcesses />*/}
      <Footer/>
    </>
    
  );
}
