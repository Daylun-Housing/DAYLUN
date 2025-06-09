"use client"

import Image from "next/image";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import Hero from "./components/hero";
import Featured from "./components/Featured";
import Showcase from "./components/Showcase";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
        <Header />
        <HeaderMobile />

        <Hero />
        <Featured />
        <Showcase />
        <Footer />
    </>

    
  );
}