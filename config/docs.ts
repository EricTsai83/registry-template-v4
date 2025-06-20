import { MainNavItem, SidebarNavItem } from "@/types/nav";

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
  chartsNav: SidebarNavItem[];
}

// 新增樣式配置介面
export interface StyleConfig {
  name: string;
  label: string;
  sidebarNav: SidebarNavItem[];
}

// 統一的樣式配置管理
export const styleConfigs: Record<string, StyleConfig> = {
  basic: {
    name: "basic",
    label: "Basic",
    sidebarNav: [
      {
        title: "Getting Started",
        items: [
          {
            title: "Introduction",
            href: "/docs",
            items: [],
          },
          {
            title: "Installation",
            href: "/docs/installation",
            items: [],
          },
          {
            title: "components.json",
            href: "/docs/components-json",
            items: [],
          },
        ],
      },
      {
        title: "Installation",
        items: [
          {
            title: "Next.js",
            href: "/docs/installation/next",
            items: [],
          },
          {
            title: "Vite",
            href: "/docs/installation/vite",
            items: [],
          },
        ],
      },
      {
        title: "Components",
        items: [
          {
            title: "Accordion",
            href: "/docs/components/accordion",
            items: [],
          },
          {
            title: "Alert",
            href: "/docs/components/alert",
            items: [],
          },
          {
            title: "Alert Dialog",
            href: "/docs/components/alert-dialog",
            items: [],
          },
        ],
      },
      {
        title: "Registry",
        label: "New",
        items: [
          {
            title: "Introduction",
            href: "/docs/registry",
            items: [],
          },
          {
            title: "Getting Started",
            href: "/docs/registry/getting-started",
            items: [],
          },
          {
            title: "Examples",
            href: "/docs/registry/examples",
            items: [],
          },
          {
            title: "Open in v0",
            href: "/docs/registry/open-in-v0",
            items: [],
          },
          {
            title: "FAQ",
            href: "/docs/registry/faq",
            items: [],
          },
          {
            title: "registry.json",
            href: "/docs/registry/registry-json",
            items: [],
          },
          {
            title: "registry-item.json",
            href: "/docs/registry/registry-item-json",
            items: [],
          },
        ],
      },
    ],
  },
  mplus: {
    name: "mplus",
    label: "M+ Messenger",
    sidebarNav: [
      {
        title: "開始使用",
        items: [
          {
            title: "介紹",
            href: "/docs/mplus",
            items: [],
          },
        ],
      },
      {
        title: "元件庫",
        items: [
          {
            title: "chat-window",
            href: "/docs/mplus/components/chat-window",
            items: [],
          },
          {
            title: "header",
            href: "/docs/mplus/components/header",
            items: [],
          },
          {
            title: "login",
            href: "/docs/mplus/components/login",
            items: [],
          },
          {
            title: "sidebar",
            href: "/docs/mplus/components/sidebar",
            items: [],
          },
        ],
      },
      {
        title: "社群",
        items: [
          {
            title: "安裝",
            href: "https://ui.shadcn.com/docs/installation",
            external: true,
            items: [],
          },
          {
            title: "貢獻指南",
            href: "/community/contribution-guide",
            items: [],
          },
        ],
      },
    ],
  },
};
