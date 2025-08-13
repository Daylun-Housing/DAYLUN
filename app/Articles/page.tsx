"use client";

import Image from "next/image";
import StdLayout from "../Common/StdLayout";
import Hero from "./components/hero";
import Featured from "./components/Featured";
import Showcase from "./components/Showcase";
import Footer from "../Common/Footer";

export default function AboutPage() {
  return (
    <StdLayout>

      <Hero />
      <Featured />
      <Showcase />
      <Footer />
    </StdLayout>
  );
}
