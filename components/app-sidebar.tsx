"use client";

import { SearchForm } from "@/components/search-form";
import { StyleSwitcher } from "@/components/style-switcher";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = {
  title: string;
  url: string;
  isExternal?: boolean;
};

type NavGroup = {
  title: string;
  url: string;
  items: NavItem[];
};

const data: {
  styles: string[];
  navMain: NavGroup[];
} = {
  styles: ["basic", "M+ Messenger"],
  navMain: [
    {
      title: "開始使用",
      url: "/docs",
      items: [
        {
          title: "介紹",
          url: "/docs/mplus",
        },
      ],
    },
    {
      title: "元件庫",
      url: "/docs/components",
      items: [
        {
          title: "chat-window",
          url: "/docs/mplus/components/chat-window",
        },
        {
          title: "header",
          url: "/docs/mplus/components/header",
        },
        {
          title: "login",
          url: "/docs/mplus/components/login",
        },
        {
          title: "sidebar",
          url: "/docs/mplus/components/sidebar",
        },
      ],
    },
    {
      title: "社群",
      url: "/docs/community",
      items: [
        {
          title: "安裝",
          url: "https://ui.shadcn.com/docs/installation",
          isExternal: true,
        },
        {
          title: "貢獻指南",
          url: "/community/contribution-guide",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const router = useRouter();

  // 根據 URL 自動設置 currentStyle
  const getCurrentStyleFromPath = () => {
    if (pathname?.includes("/docs/mplus")) {
      return "M+ Messenger";
    } else if (pathname?.includes("/docs/basic")) {
      return "basic";
    }
    // 預設值
    return data.styles[0];
  };

  const [currentStyle, setCurrentStyle] = useState(getCurrentStyleFromPath);

  // 當路徑改變時更新 currentStyle
  useEffect(() => {
    const newStyle = getCurrentStyleFromPath();
    setCurrentStyle(newStyle);
  }, [pathname]);

  // 處理樣式變更並導航到對應的 URL
  const handleStyleChange = (newStyle: string) => {
    setCurrentStyle(newStyle);

    // 根據新樣式決定要導航到哪個 URL
    let targetUrl = "/docs";

    if (newStyle === "M+ Messenger") {
      targetUrl = "/docs/mplus";
    } else if (newStyle === "basic") {
      targetUrl = "/docs/basic";
    }

    // 如果當前路徑與目標路徑不同，則進行導航
    if (pathname !== targetUrl) {
      router.push(targetUrl);
    }
  };

  // 檢查項目是否為當前活動狀態
  const isItemActive = (itemUrl: string) => {
    if (!pathname) return false;

    // 精確匹配
    if (pathname === itemUrl) return true;

    // 對於子路徑，檢查是否以該 URL 開頭，但排除其他項目的子路徑
    if (itemUrl !== "/docs" && pathname.startsWith(itemUrl)) {
      // 檢查是否為該項目的直接子頁面，而不是其他項目的子頁面
      const remainingPath = pathname.slice(itemUrl.length);
      // 如果剩餘路徑以 / 開頭且不包含其他 /，則為直接子頁面
      if (
        remainingPath.startsWith("/") &&
        !remainingPath.slice(1).includes("/")
      ) {
        return true;
      }
      // 或者如果沒有剩餘路徑，則為精確匹配
      if (remainingPath === "") {
        return true;
      }
    }

    return false;
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <StyleSwitcher
          styles={data.styles}
          defaultStyle={currentStyle}
          onStyleChange={handleStyleChange}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
              >
                <CollapsibleTrigger>
                  {item.title}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={isItemActive(item.url)}
                        >
                          {item.isExternal ? (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex w-full items-center justify-between"
                            >
                              <span>{item.title}</span>
                              <ExternalLink className="ml-2 h-3 w-3 flex-shrink-0" />
                            </a>
                          ) : (
                            <Link href={item.url}>{item.title}</Link>
                          )}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
