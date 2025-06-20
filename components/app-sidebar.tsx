"use client";

// import { SearchForm } from "@/components/search-form";
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
import { styleConfigs } from "@/config/docs";
import { styleUtils, type ComponentStyle } from "@/config/styles";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { NavItems } from "./nav-items";

const styles = Object.keys(styleConfigs);

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const router = useRouter();

  const [currentStyle, setCurrentStyle] = useState<ComponentStyle>(
    styleUtils.getStyleFromPath(pathname) || styleUtils.getDefaultStyle(),
  );
  const [navMain, setNavMain] = useState(styleConfigs[currentStyle].sidebarNav);

  useEffect(() => {
    const newStyle =
      styleUtils.getStyleFromPath(pathname) || styleUtils.getDefaultStyle();
    setCurrentStyle(newStyle);
    setNavMain(styleConfigs[newStyle].sidebarNav);
  }, [pathname]);

  const handleStyleChange = (newStyle: string) => {
    const styleKey = newStyle as ComponentStyle;
    setCurrentStyle(styleKey);
    setNavMain(styleConfigs[styleKey].sidebarNav);

    const targetUrl = styleUtils.getStylePath(styleKey, "");

    // 如果當前路徑與目標路徑不同，則進行導航
    if (pathname !== targetUrl) {
      router.push(targetUrl);
    }
  };

  // 檢查項目是否為當前活動狀態
  const isItemActive = (itemUrl?: string) => {
    if (!pathname || !itemUrl) return false;

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
          styles={styles}
          styleConfigs={styleConfigs}
          defaultStyle={currentStyle}
          onStyleChange={handleStyleChange}
        />
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <div className="md:hidden">
          <NavItems />
        </div>

        {/* We create a collapsible SidebarGroup for each parent. */}
        {navMain.map((item) => (
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
                    {item.items.map((subItem) => (
                      <SidebarMenuItem key={subItem.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={isItemActive(subItem.href)}
                        >
                          {subItem.external ? (
                            <a
                              href={subItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex w-full items-center justify-between"
                            >
                              <span>{subItem.title}</span>
                              <ExternalLink className="ml-2 h-3 w-3 flex-shrink-0" />
                            </a>
                          ) : (
                            <Link href={subItem.href || ""}>
                              {subItem.title}
                            </Link>
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
