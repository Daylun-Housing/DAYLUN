"use client";

import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import HeroSection from "./components/HeroSection";
import Yukon from "./components/Yukon";
import HeroImage from "../All_Articles/Yukon_Factory/Components/HeroImage";
import MainArticle from "../All_Articles/Yukon_Factory/Components/MainArticle";
import Footer from "../components/Footer";
import { Main } from "next/document";

export default function FactoryPage() {
  return (
    <>
      <Header />
      <HeaderMobile />
      {/*<Yukon />*/}
      <HeroImage />
      <MainArticle />
      <Footer />
    </>
  );
}
