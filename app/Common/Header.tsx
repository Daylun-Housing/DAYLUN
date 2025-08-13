"use client";

import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaShopify, FaEnvelope } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import dynamic from "next/dynamic";


{/*
  # HEADER
  #
  # Main Header for the Website, has 3 sections, left with the company logo, center with main navigation
  # and search bar, and right with social icons. 
*/}

export default function Header() {

  const GoogleSearchNoSSR = dynamic(() => import("./HeaderParts/GoogleSearch"), { ssr: false });

  return (
    <header className="hidden md:flex sticky top-0 z-50 w-full justify-between items-center px-6 py-4 bg-[var(--header-bg)] text-[var(--medium-blue)] border-b border-[var(--medium-blue)] shadow-sm">
      {/* Logo */}
      <div className="relative w-32 h-10 scale-[40%] sm:scale-[55%] md:scale-[70%] lg:scale-[100%]">
        <a href="/">
          <Image src="/DAYLUN.png" alt="DAYLUN logo" fill className="object-contain" />
        </a>
      </div>

      {/* Center: Nav Links */}
      <nav className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-6 text-[7px] md:text-[10px] lg:text-sm md:font-semibold tracking-wide text-center flex items-center">

      {/* ABOUT dropdown */}
      <div className="relative group">
        <button
          className="inline-flex items-center gap-1 hover:text-[var(--medium-blue)] focus:outline-none"
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
            rounded-md border border-[var(--medium-blue)] bg-[var(--header-bg)] shadow-lg z-50 text-left
          "
          role="menu"
        >
          <ul className="py-2 text-[11px] lg:text-sm ">
            <li>
              <a href="/About" className="block px-4 py-2 hover:bg-[var(--faint-blue)] hover:text-[var(--dark-blue)]" role="menuitem">
                About Daylun
              </a>
            </li>
            <li>
              <a href="/Technologies" className="block px-4 py-2 hover:bg-[var(--faint-blue)] hover:text-[var(--dark-blue)]" role="menuitem">
                Technologies
              </a>
            </li>
            <li>
              <a href="https://bimalun.com/" className="block px-4 py-2 hover:bg-[var(--faint-blue)] hover:text-[var(--dark-blue)]" role="menuitem">
                Factory Project
              </a>
            </li>
            <li>
              <a href="/Articles" className="block px-4 py-2 hover:bg-[var(--faint-blue)] hover:text-[var(--dark-blue)]" role="menuitem">
                Articles
              </a>
            </li>
            <li>
              <a href="/Investors" className="block px-4 py-2 hover:bg-[var(--faint-blue)] hover:text-[var(--dark-blue)]" role="menuitem">
                Investors
              </a>
            </li>
          </ul>
        </div>
      </div>
        <a href="/HouseBuilder" className="hover:text-[var(--dark-blue)]">HOUSE BUILDER</a>
        <a href="https://daylun.myshopify.com/" className="hover:text-[var(--dark-blue)]">STORE</a>
        <a href="/Careers" className="hover:text-[var(--dark-blue)]">CAREERS</a>

        {/*<form action="" className="relative"> 
          <input type="search" name="search" id="search" 
              className="relative z-10 bg-transparent w-6 h-6 peer rounded-full cursor-pointer border border-blue-900 outline-none 
                      focus:w-36 focus:border-[#110C27] focus:cursor-text focus:pl-7 text-transparent focus:text-blue-900"> 
          </input> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
              className="size-6 absolute inset-y-0 my-auto h-4 w-6 border-r peer-focus:border-[#110C27]"> 
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /> 
          </svg> 
        </form>*/}
        <GoogleSearchNoSSR />

      </nav>

      {/* Right: Social Icons */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 text-[var(--light-blue)] text-[10px] md:text-md lg:text-xl">
        <a href="https://www.instagram.com/daylun_build/"><FaInstagram className="hover:text-[var(--dark-blue)]" /></a>
        <a href="https://www.facebook.com/profile.php?id=100077522941552"><FaFacebookF className="hover:text-[var(--dark-blue)]" /></a>
        <a href="https://www.youtube.com/@Daylun_Build"><FaYoutube className="hover:text-[var(--dark-blue)]" /></a>
        <a href="https://daylun.myshopify.com/"><FaShopify className="hover:text-[var(--dark-blue)]" /></a>
        <a href="mailto:info@daylun.ca"><FaEnvelope className="hover:text-[var(--dark-blue)]" /></a>
        <a href="https://www.linkedin.com/company/daylun/?originalSubdomain=ca"><FaLinkedinIn className="hover:text-[var(--dark-blue)]" /></a>
      </div>
    </header>
  );
}