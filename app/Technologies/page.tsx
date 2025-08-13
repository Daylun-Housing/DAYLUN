"use client";

import StdLayout from "../components/StdLayout";
import Footer from "../Common/Footer";
import HeroImage from "./Components/HeroImage";
import VegetableGlue from "./Components/VegetableGlue";
import EvaBoard from "./Components/EVABoard";
import PanelSystem from "./Components/8x8PanelSystem";
import Bamboo from "./Components/Bamboo";
import FutureTech from "./Components/NewTech";
import GantryCrane from "./Components/GantryCrane";
import Generator from "./Components/ElectricGenerator";
import GotAnIdea from "./Components/GotAnIdea";

export default function TechnologyPage() {
  return (
    <StdLayout>
      <HeroImage />
      <VegetableGlue />
      <EvaBoard />
      <Bamboo />
      <PanelSystem />
      <FutureTech />
      <GantryCrane />
      <Generator />
      <GotAnIdea />
      <Footer />
    </StdLayout>
  );
}
