import { JSX } from "react";

export type TopBarItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: TopBarItem[];
};

export type MenuItemWithSubMenuProps = {
  item: TopBarItem;
  toggleOpen: () => void;
};
