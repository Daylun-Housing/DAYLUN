import { JSX } from "react";

{/*
  # ITEM MENUS
  #
  # type declared for the Mobile version of the Header
  # title         - title of the option
  # path          - link
  # icon          - optional: for image to represent option
  # submenu       - optional: does this option have a submenu
  # subMenuItems  - optional: what are the options for the submenu
*/}

export type TopBarItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: TopBarItem[];
};
