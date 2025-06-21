import { Icons } from "@/components/icons";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem {
  name: string;
  items: SidebarNavItem[];
  href: string; // href 現在為必填
  label?: string;
  external?: boolean;
}

export interface SidebarNav {
  name: string;
  items: SidebarNavItem[];
  href?: string; // href 現在為必填
  label?: string;
  external?: boolean;
}
