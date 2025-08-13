"use client";

import StdLayout from "../Common/StdLayout";
import Hero from "./Components/hero";
import OurMission from "./Components/OurMission";
import OurStory from "./Components/OurStory";
import LeaderCard from "./Components/LeadershipTeam";
import TeamCards from "./Components/Team";
import ConsultantsCards from "./Components/Consultants";
import OurValues from "./Components/OurValues";
import Video from "./Components/Video";
import Footer from "../Common/Footer";

export default function AboutPage() {
  return (
    <StdLayout>
      {/* Logo-on-background */}
      <Hero />
      <OurMission />
      <OurStory />
      <LeaderCard />
      <TeamCards />
      <ConsultantsCards />
      <OurValues />
      <Video />
      <Footer />
    </StdLayout>
  );
}
