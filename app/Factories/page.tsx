"use client"

import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import HeroSection from "./components/HeroSection";
import Yukon from "./components/Yukon";
import Footer from "../components/Footer";

export default function FactoryPage() {
    return (
        <>
            <Header />
            <HeaderMobile />
            <HeroSection />
            <Yukon />
            <Footer />
        </>
    )
}