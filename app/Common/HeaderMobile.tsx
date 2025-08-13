"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";

import { TOPBAR_ITEMS } from "./HeaderParts/constants";
import { TopBarItem } from "./HeaderParts/types";
import { Icon } from "@iconify/react";
import { motion, useCycle } from "framer-motion";

{/*
  # MENU TYPE
  #
  # Type configuration for the menu
*/}

type MenuItemWithSubMenuProps = {
  item: TopBarItem;
  toggleOpen: () => void;
};

{/*
  # MOBILE HEADER  
  #
  # Mobile Header that is shown when the menu is closed. Shows only the button and the company icon. 
  # Hidden on larger screens
*/}
export default function MobileHeader() {
  return (
    <header
      className={cn(
        `md:hidden bg-white sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="relative w-32 h-10">
          <a href="/">
            <Image
              src="/DAYLUN.png"
              alt="DAYLUN logo"
              fill
              className="object-contain"
            />
          </a>
        </div>
      </div>

      <HeaderMenu />
    </header>
  );
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

{/*
  # Header Menu  
  #
  # The actual menu and the toggle button.
  # Menu items are only shown when the Menu is toggled open. 
  # Items are mapped from the imported configuration
*/}
const HeaderMenu = () => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={"false"}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      className={`fixed inset-0 z-50 w-full md:hidden ${
        isOpen ? "" : "pointer-events-none"
      }`}
      ref={containerRef}
    >
      {isOpen && (
        <div className="inset-0 right-4 w-full">
          <motion.div
            className="absolute inset-0 right-4 w-full bg-white"
            
          />
          <motion.ul
            variants={variants}
            className={`absolute grid w-full gap-3 px-10 py-16 max-h-screen overflow-y-auto`}
          >
            {TOPBAR_ITEMS.map((item, idx) => {
              const isLastItem = idx === TOPBAR_ITEMS.length - 1; // Check if it's the last item

              return (
                <div key={idx}>
                  {item.submenu ? (
                    <MenuItemWithSubMenu item={item} toggleOpen={toggleOpen} />
                  ) : (
                    <MenuItem>
                      <Link
                        href={item.path}
                        onClick={() => toggleOpen()}
                        className={`flex w-full text-2xl text-blue-900 hover:text-[#110C27] ${
                          item.path === pathname ? "font-extrabold" : ""
                        }`}
                      >
                        {item.title}
                      </Link>
                    </MenuItem>
                  )}

                  {!isLastItem && (
                    <MenuItem className="my-3 h-px w-full bg-gray-300" />
                  )}
                </div>
              );
            })}
          </motion.ul>
        </div>
      )}
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
};

{/*
  # TOGGLE BUTTON 
  #
  # The button that shows the menu. When the menu is opened, transforms into a x. 
  # Otherwise, shows as three lines. 
*/}
const MenuToggle = ({ toggle }: { toggle: any }) => (
  <button
    onClick={toggle}
    className="pointer-events-auto absolute right-4 top-[14px] z-30"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

{/*
  # PATH LINE
  #
  # Path line that is used in MenuToggle to draw symbols. 
*/}
const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

{/*
  # MENU ITEM
  #
  # These are the clickable options. 
  # className - tailwind modifiers
  # children  - child nodes, e.g. links, text, etc.
*/}
const MenuItem = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <motion.li variants={MenuItemVariants} className={className}>
      {children}
    </motion.li>
  );
};

{/*
  # SUBMENU ITEM
  #
  # Menu options that can be toggled open and close, e.g. submenus.
  # For itself, shows as a MenuItem with a special option to open. 
  # When SubMenu is open, maps over submenu items and shows them. 
*/}
const MenuItemWithSubMenu: React.FC<MenuItemWithSubMenuProps> = ({
  item,
  toggleOpen,
}) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <MenuItem>
        <button
          className="flex w-full text-2xl"
          onClick={() => setSubMenuOpen(!subMenuOpen)}
        >
          <div className="flex flex-row justify-between w-full items-center">
            <span
              className={`${pathname?.includes(item.path) ? "font-bold" : ""}`}
            >
              {item.title}
            </span>
            <div className={`${subMenuOpen && "rotate-180"}`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </div>
        </button>
      </MenuItem>
      <div className="mt-2 ml-2 flex flex-col space-y-2">
        {subMenuOpen && (
          <>
            {item.subMenuItems?.map((subItem, subIdx) => {
              return (
                <MenuItem key={subIdx}>
                  <Link
                    href={subItem.path}
                    onClick={() => toggleOpen()}
                    className={` ${
                      subItem.path === pathname ? "font-bold" : ""
                    }`}
                  >
                    {subItem.title}
                  </Link>
                </MenuItem>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

{/*
  # MENU ITEM VARIANTS
  #
  # Visual information for opening and closing menus. 
*/}
const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};

{/*
  # VARIANTS
  #
  # Visual information for opening and closing menus. 
*/}
const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};


{/*
  # DIMENSIONS
  #
  # function to modify the height of the Menus
*/}
const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return dimensions.current;
};
