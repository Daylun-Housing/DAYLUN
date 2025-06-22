"use client";

import Image from "next/image";
import Header from "../../components/Header";
import HeaderMobile from "../../components/HeaderMobile";
import HeroImage from "./Components/HeroImage";
import MainArticle from "./Components/MainArticle";
import Footer from "../../components/Footer";

export default function ArticleTemplatePage() {
  return (
    <>
      <Header />
      <HeaderMobile />

      <HeroImage />

      <MainArticle />

      <Footer />
    </>
  );
}
