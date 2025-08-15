import { JSX } from "react";

/**
 * ITEM MENUS
 * 
 * type declared for the Mobile version of the Header
 *  title:        title of the option
 *  path:         link
 *  icon:         for image to represent option (optional)
 *  submenu       does this option have a submenu (optional)
 *  subMenuItems  what are the options for the submenu (optional)
*/
export type TopBarItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: TopBarItem[];
};
