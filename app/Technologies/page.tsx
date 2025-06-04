"use client"

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
        <>
            <Header />
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
        </>
    )
}