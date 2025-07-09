"use client";
import StdLayout from "../components/StdLayout";
import HeroSection from "./components/HeroSection";
import Yukon from "./components/Yukon";
import HeroImage from "../All_Articles/Yukon_Factory/Components/HeroImage";
import MainArticle from "../All_Articles/Yukon_Factory/Components/MainArticle";
import Footer from "../components/Footer";
import { Main } from "next/document";

export default function FactoryPage() {
  return (
    <StdLayout>
      {/*<Yukon />*/}
      <HeroImage />
      <MainArticle />
      <Footer />
    </StdLayout>
  );
}
