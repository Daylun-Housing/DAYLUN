"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaShopify,
  FaEnvelope,
} from "react-icons/fa6";
import { CgSearch } from "react-icons/cg";

/* const Header = () =>
{

 
};

export default Header; */

export default function Header() {
  return (
    // <header className="w-full flex justify-between items-center px-6 py-4 bg-white text-blue-900 border-b border-blue-200">
    <header className="hidden md:flex sticky top-0 z-50 w-full flex justify-between items-center px-6 py-4 bg-white text-blue-900 border-b border-blue-200 shadow-sm">
      {/* Logo */}
      <div className="relative w-32 h-10 scale-[40%] sm:scale-[55%] md:scale-[70%] lg:scale-[100%]">
        <a href="/">
          <Image
            src="/DAYLUN.png"
            alt="DAYLUN logo"
            fill
            className="object-contain"
          />
        </a>
      </div>

      {/* Center: Nav Links */}
      <nav className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-6 text-[7px] md:text-[10px] lg:text-sm md:font-semibold tracking-wide text-center">
        <a href="/" className="hover:text-[#110C27]">
          HOME
        </a>
        <a href="/HouseBuilder" className="hover:text-[#110C27]">
          HOUSE BUILDER
        </a>
        <a
          href="https://daylun.myshopify.com/"
          className="hover:text-[#110C27]"
        >
          STORE
        </a>
        <a href="/Technologies" className="hover:text-[#110C27]">
          TECHNOLOGIES
        </a>
        <a href="/Factories" className="hover:text-[#110C27]">
          FACTORY PROJECT
        </a>
        <a href="/Investors" className="hover:text-[#110C27]">
          INVESTORS
        </a>
        <a href="/Articles" className="hover:text-[#110C27]">
          ARTICLES
        </a>
        <a href="/About" className="hover:text-[#110C27]">
          ABOUT
        </a>
        <CgSearch className="hover:text-[#110C27]" />
      </nav>

      {/* Right: Social Icons */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 text-[#0474BC] text-[10px] md:text-md lg:text-xl">
        <a href="https://www.instagram.com/daylun_build/">
          <FaInstagram className="hover:text-[#110C27]" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100077522941552">
          <FaFacebookF className="hover:text-[#110C27]" />
        </a>
        {/*<FaXTwitter />*/}
        <a href="https://www.youtube.com/@Daylun_Build">
          <FaYoutube className="hover:text-[#110C27]" />
        </a>
        <a href="https://daylun.myshopify.com/">
          <FaShopify className="hover:text-[#110C27]" />
        </a>

        {/*<FaXTwitter className="hover:text-[#110C27]" />*/}
        <a href="mailto:info@daylun.ca">
          <FaEnvelope className="hover:text-[#110C27]" />
        </a>
        <a href="https://www.linkedin.com/company/daylun/?originalSubdomain=ca">
          <FaLinkedinIn className="hover:text-[#110C27]" />
        </a>
      </div>
    </header>
  );
}
