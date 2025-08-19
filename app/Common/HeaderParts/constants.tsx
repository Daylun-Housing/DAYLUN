import { TopBarItem } from "./types";
import Image from "next/image";

/**
 * MOBILE HEADER CONSTANTS
 * See types for configuration requirements
 * Each item is a clickable item on the Mobile Bar
 */
export const TOPBAR_ITEMS: TopBarItem[] = [
  {
    title: "HOME",
    path: "/",
    icon: (
      <Image src="/logo.svg" alt="DAYLUN logo" fill width="24" height="24" />
    ),
  },
  {
    title: "ABOUT",
    path: "/About",
    icon: <p className="w-[24px] h-[24px]">ABOUT</p>,
    submenu: true,
    subMenuItems: [
      {
        title: "ABOUT DAYLUN",
        path: "/About",
        icon: <p className="w-[24px] h-[24px]">About Daylun</p>,
      },
      {
        title: "TECHNOLOGIES",
        path: "/Technologies",
        icon: <p className="w-[24px] h-[24px]">TECHNOLOGIES</p>,
      },
      {
        title: "FACTORY PROJECT",
        path: "https://bimalun.com/",
        icon: <p className="w-[24px] h-[24px]">FACTORIES</p>,
      },
      {
        title: "INVESTORS",
        path: "/Investors",
        icon: <p className="w-[24px] h-[24px]">INVESTOR</p>,
      },
      {
        title: "ARTICLES",
        path: "/Articles",
        icon: <p className="w-[24px] h-[24px]">ARTICLES</p>,
      },
    ]
  },
  {
    title: "HOUSE BUILDER",
    path: "/HouseBuilder",
    icon: <p className="w-[24px] h-[24px]">HOUSE BUILDER</p>,
  },
  {
    title: "STORE",
    path: "https://daylun.myshopify.com/",
    icon: <p className="w-[24px] h-[24px]">STORE</p>,
  },
  {
    title: "CAREERS",
    path: "/Careers",
    icon: <p className="w-[24px] h-[24px]">CAREERS</p>,
  },
  
];
