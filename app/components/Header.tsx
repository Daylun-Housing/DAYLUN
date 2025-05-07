"use client";

import Image from "next/image";
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube, FaTiktok, FaEnvelope } from "react-icons/fa6";
import { CgSearch } from "react-icons/cg";

export default function Header() {
  return (
    // <header className="w-full flex justify-between items-center px-6 py-4 bg-white text-blue-900 border-b border-blue-200">
    <header className="sticky top-0 z-50 w-full flex justify-between items-center px-6 py-4 bg-white text-blue-900 border-b border-blue-200 shadow-sm">

    {/* Logo */}
    <div className="relative w-32 h-10">
      <Image src="/logo.svg" alt="DAYLUN logo" fill className="object-contain" />
    </div>

      {/* Center: Nav Links */}
      <nav className="hidden lg:flex gap-6 text-sm font-semibold tracking-wide">
        <a href="./About" className="hover:text-[#110C27]">ABOUT</a>
        <a href="#" className="hover:text-[#110C27]">HOUSE BUILDER</a>
        <a href="#" className="hover:text-[#110C27]">STORE</a>
        <a href="./Technologies" className="hover:text-[#110C27]">TECHNOLOGIES</a>
        <a href="#" className="hover:text-[#110C27]">INVESTORS</a>
        <a href="./ArticleTemplate" className="hover:text-[#110C27]">ARTICLES</a>
        <CgSearch className="hover:text-[#110C27]"/>
      </nav>

      {/* Right: Social Icons */}
      <div className="grid grid-cols-3 gap-4 text-[#0474BC] text-xl">
  <FaInstagram className="hover:text-[#110C27]" />
  <FaFacebookF className="hover:text-[#110C27]" />
  <FaXTwitter className="hover:text-[#110C27]" />
  <FaYoutube className="hover:text-[#110C27]" />
  <FaTiktok className="hover:text-[#110C27]" />
  <FaEnvelope className="hover:text-[#110C27]" />
</div>
    </header>
  );
}
