"use client";

import { ChevronRight } from "lucide-react";
import * as React from "react";

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

// This is sample data.
const data = {
  styles: ["basic", "M+ Messenger"],
  navMain: [
    {
      title: "開始使用",
      url: "/doc",
      items: [
        {
          title: "介紹",
          url: "/doc",
        },
        {
          title: "安裝",
          url: "/doc",
        },
      ],
    },
    {
      title: "元件庫",
      url: "/doc/components",
      items: [
        {
          title: "chat-window",
          url: "/doc/mplus/components/chat-window",
          isActive: true,
        },
        {
          title: "header",
          url: "/doc/mplus/components/header",
        },
        {
          title: "login",
          url: "/doc/mplus/components/login",
        },
        {
          title: "sidebar",
          url: "/doc/mplus/components/sidebar",
        },
      ],
    },
    {
      title: "社群",
      url: "/doc/community",
      items: [
        {
          title: "貢獻指南",
          url: "/doc/community/contribution-guide",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [currentStyle, setCurrentStyle] = React.useState(data.styles[0]);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <StyleSwitcher
          styles={data.styles}
          defaultStyle={currentStyle}
          onStyleChange={setCurrentStyle}
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
                  {item.title}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
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
