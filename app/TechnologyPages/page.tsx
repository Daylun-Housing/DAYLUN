"use client";

import Image from "next/image";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import PageBody from "./PageBody";
import Footer from "../components/Footer";

export default function TechnologyPage() {
  return (
    <>
      <Header />
      <HeaderMobile />
      <PageBody />
      <Footer />
    </>
  );
}
