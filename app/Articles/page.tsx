"use client";

import Image from "next/image";
import StdLayout from "../Common/StdLayout";
import Hero from "./components/hero";
import Featured from "./components/Featured";
import Showcase from "./components/Showcase";
import Footer from "../Common/Footer";

/**
 * ARTICLE PAGE 
 * @returns {JSX.Element}
 * Amalgamation of the Article Page.
 */
export default function ArticlePage() {
  return (
    <StdLayout>

      <Hero />
      <Featured />
      <Showcase />
      <Footer />
    </StdLayout>
  );
}
