"use client";

import Image from "next/image";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import Hero from "./Components/hero";
import OurMission from "./Components/OurMission";
import OurStory from "./Components/OurStory";
import OurLeadership from "./Components/OurLeadership";
import TeamHeader from "./Components/TeamHeading";
import OurTeam from "./Components/OurTeam";
import TeamCards from "./Components/TeamCards";

import OurValues from "./Components/OurValues";
import OurApproach from "./Components/OurApproach";
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
      {/* <OurLeadership/> */}
      {/* <TeamHeader /> */}
      <TeamCards />
      <OurValues />
      <Video />
      <Footer />
    </>
  );
}
