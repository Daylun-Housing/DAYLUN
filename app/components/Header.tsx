"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaShopify, FaEnvelope } from "react-icons/fa6";
import { CgSearch } from "react-icons/cg";
import { FiChevronDown } from "react-icons/fi";

export default function Header() {
  return (
    <header className="hidden md:flex sticky top-0 z-50 w-full justify-between items-center px-6 py-4 bg-white text-blue-900 border-b border-blue-200 shadow-sm">
      {/* Logo */}
      <div className="relative w-32 h-10 scale-[40%] sm:scale-[55%] md:scale-[70%] lg:scale-[100%]">
        <a href="/">
          <Image src="/DAYLUN.png" alt="DAYLUN logo" fill className="object-contain" />
        </a>
      </div>

      {/* Center: Nav Links */}
      <nav className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-6 text-[7px] md:text-[10px] lg:text-sm md:font-semibold tracking-wide text-center">

      {/* ABOUT dropdown */}
      <div className="relative group">
        <button
          className="inline-flex items-center gap-1 hover:text-[#110C27] focus:outline-none"
          aria-haspopup="true"
          aria-expanded="false"
        >
          ABOUT <FiChevronDown className="inline-block" />
        </button>

        {/* Hover bridge to prevent flicker */}
        <span className="absolute left-0 right-0 top-full h-2"></span>

        {/* Dropdown menu */}
        <div
          className="
            absolute top-full left-1/2 -translate-x-1/2
            hidden group-hover:block
            translate-y-0 group-hover:translate-y-1
            transition-transform duration-150
            min-w-[220px]
            rounded-md border border-blue-200 bg-white shadow-lg z-50 text-left
          "
          role="menu"
        >
          <ul className="py-2 text-[11px] lg:text-sm">
            <li>
              <a href="/About" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#110C27]" role="menuitem">
                About Daylun
              </a>
            </li>
            <li>
              <a href="/Technologies" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#110C27]" role="menuitem">
                Technologies
              </a>
            </li>
            <li>
              <a href="https://bimalun.vercel.app/" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#110C27]" role="menuitem">
                Factory Project
              </a>
            </li>
            <li>
              <a href="/Articles" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#110C27]" role="menuitem">
                Articles
              </a>
            </li>
            <li>
              <a href="/Investors" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#110C27]" role="menuitem">
                Investors
              </a>
            </li>
          </ul>
        </div>
      </div>
        <a href="/HouseBuilder" className="hover:text-[#110C27]">HOUSE BUILDER</a>
        <a href="https://daylun.myshopify.com/" className="hover:text-[#110C27]">STORE</a>
        <a href="/Careers" className="hover:text-[#110C27]">CAREERS</a>
      </nav>

      {/* Right: Social Icons */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 text-[#0474BC] text-[10px] md:text-md lg:text-xl">
        <a href="https://www.instagram.com/daylun_build/"><FaInstagram className="hover:text-[#110C27]" /></a>
        <a href="https://www.facebook.com/profile.php?id=100077522941552"><FaFacebookF className="hover:text-[#110C27]" /></a>
        <a href="https://www.youtube.com/@Daylun_Build"><FaYoutube className="hover:text-[#110C27]" /></a>
        <a href="https://daylun.myshopify.com/"><FaShopify className="hover:text-[#110C27]" /></a>
        <a href="mailto:info@daylun.ca"><FaEnvelope className="hover:text-[#110C27]" /></a>
        <a href="https://www.linkedin.com/company/daylun/?originalSubdomain=ca"><FaLinkedinIn className="hover:text-[#110C27]" /></a>
      </div>
    </header>
  );
}