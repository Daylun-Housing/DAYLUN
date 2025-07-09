"use client";

import StdLayout from "../../components/StdLayout";
import Image from "next/image";
import HeroImage from "./Components/HeroImage";
import MainArticle from "./Components/MainArticle";
import Footer from "../../components/Footer";

export default function ArticleTemplatePage() {
  return (
    <StdLayout>

      <HeroImage />

      <MainArticle />

      <Footer />
    </StdLayout>
  );
}
