"use client";

import Image from "next/image";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import Hero from "./Components/hero";
import OurMission from "./Components/OurMission";
import OurStory from "./Components/OurStory";
import TeamCards from "./Components/TeamCards";

import OurValues from "./Components/OurValues";
import Video from "./Components/Video";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <HeaderMobile />

      {/* Logo-on-background */}
      <Hero />
      <OurMission />
      <OurStory />
      <TeamCards />
      <OurValues />
      <Video />
      <Footer />
    </>
  );
}
