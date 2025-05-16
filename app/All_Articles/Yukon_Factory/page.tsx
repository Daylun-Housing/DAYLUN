"use client"

import Image from "next/image";
import Header from "../../components/Header";
import HeroImage from "./Components/HeroImage";
import MainArticle from "./Components/MainArticle";
import Footer from "../../components/Footer";

export default function ArticleTemplatePage() {
    return (
      <>
        
        <Header />

        <HeroImage />
        
        <MainArticle />

        <Footer />
         
      </>
    );
  }