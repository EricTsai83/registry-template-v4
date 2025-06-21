import { MainNavItem, SidebarNav } from "@/types/nav";

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNav[];
  chartsNav: SidebarNav[];
}

// 新增樣式配置介面
export interface StyleConfig {
  name: string;
  label: string;
  sidebarNav: SidebarNav[];
}

// 共用的社群導航項目
const getStartedNav: SidebarNav[] = [
  {
    name: "開始使用",
    items: [
      {
        name: "介紹",
        href: "/docs/mplus",
        items: [],
      },
      {
        name: "安裝",
        href: "https://ui.shadcn.com/docs/installation",
        external: true,
        items: [],
      },
    ],
  },
];

// 生成導航配置的工廠函數
const createSidebarNav = (styleSpecificNav: SidebarNav[]): SidebarNav[] => {
  return [...getStartedNav, ...styleSpecificNav];
};

// 各樣式特定的導航配置
export const basicNav: SidebarNav[] = [
  {
    name: "開始使用",
    items: [],
  },
  {
    name: "元件",
    items: [],
  },
  {
    name: "區塊",
    items: [],
  },
  {
    name: "頁面",
    items: [],
  },
];

export const mplusNav: SidebarNav[] = [
  {
    name: "開始使用",
    items: [],
  },
  {
    name: "元件",
    items: [],
  },
  {
    name: "區塊",
    items: [
      {
        name: "聊天視窗",
        href: "/docs/mplus/blocks/chat-window",
        items: [],
      },
      {
        name: "頁首",
        href: "/docs/mplus/blocks/header",
        items: [],
      },
      {
        name: "登入",
        href: "/docs/mplus/blocks/login",
        items: [],
      },
      {
        name: "側邊欄",
        href: "/docs/mplus/blocks/sidebar",
        items: [],
      },
    ],
  },
  {
    name: "頁面",
    items: [],
  },
];

// 統一的樣式配置管理
export const styleConfigs: Record<string, StyleConfig> = {
  basic: {
    name: "基本",
    label: "basic",
    sidebarNav: createSidebarNav(basicNav),
  },
  mplus: {
    name: "M+ Messenger",
    label: "mplus",
    sidebarNav: createSidebarNav(mplusNav),
  },
};
