"use client";

import Image from "next/image";
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube, FaTiktok, FaEnvelope } from "react-icons/fa6";
import { CgSearch } from "react-icons/cg";
import Link from 'next/link';

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
        <a href="./About" className="hover:text-blue-600">ABOUT</a>
        <a href="#" className="hover:text-blue-600">HOUSE BUILDER</a>
        <a href="#" className="hover:text-blue-600">STORE</a>
        <a href="#" className="hover:text-blue-600">TECHNOLOGIES</a>
        <a href="#" className="hover:text-blue-600">INVESTORS</a>
        <Link href="./ArticleTemplate" className="hover:text-blue-600">ARTICLES</Link>
        <CgSearch className="hover:text-blue-800"/>
      </nav>

      {/* Right: Social Icons */}
      <div className="grid grid-cols-3 gap-4 text-blue-700 text-xl">
  <FaInstagram className="hover:text-blue-500" />
  <FaFacebookF className="hover:text-blue-500" />
  <FaXTwitter className="hover:text-blue-500" />
  <FaYoutube className="hover:text-blue-500" />
  <FaTiktok className="hover:text-blue-500" />
  <FaEnvelope className="hover:text-blue-500" />
</div>
    </header>
  );
}
