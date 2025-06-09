"use client"

import Image from "next/image";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import Footer from "../components/Footer";
import HeroSection from "./Components/HeroSection";
import PastReports from "./Components/PastReports";
import LookingToInvest from "./Components/LookingToInvest";
import OurProcesses from "./Components/OurProcesses";

export default function Investors() {
  return (
    <>
      <Header />
      <HeaderMobile />
      <HeroSection />
      <PastReports />
      <LookingToInvest />
      {/*<OurProcesses />*/}
      <Footer/>
    </>
    
  );
}
