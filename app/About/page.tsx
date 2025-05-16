"use client";

import Image from "next/image";
import Header from "../components/Header";
import Hero from "./Components/hero";
import OurMission from "./Components/OurMission";
import OurStory from "./Components/OurStory";
import OurLeadership from "./Components/OurLeadership";
import OurValues from "./Components/OurValues";
import OurApproach from "./Components/OurApproach";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />


      {/* Logo-on-background */}
      <Hero />
      <OurMission/>
      <OurStory/>
      <OurLeadership/>
      <OurValues/>

      <Footer />
    </>

    
  );
}