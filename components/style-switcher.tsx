"use client";

import { Icons } from "@/components/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Check, ChevronsUpDown } from "lucide-react";
import { useEffect, useState } from "react";

export function StyleSwitcher({
  styles,
  styleConfigs,
  defaultStyle,
  onStyleChange,
}: {
  styles: string[];
  styleConfigs: Record<string, { name: string; label: string }>;
  defaultStyle: string;
  onStyleChange?: (style: string) => void;
}) {
  const [selectedStyle, setSelectedStyle] = useState(defaultStyle);

  useEffect(() => {
    setSelectedStyle(defaultStyle);
  }, [defaultStyle]);

  const handleStyleChange = (style: string) => {
    setSelectedStyle(style);
    onStyleChange?.(style);
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <Icons.logo className="h-4 w-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium">twm/ui</span>
                <span className="">{styleConfigs[selectedStyle].name}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width)"
            align="start"
          >
            {styles.map((style) => (
              <DropdownMenuItem
                key={style}
                onSelect={() => handleStyleChange(style)}
              >
                {styleConfigs[style].name}
                {style === selectedStyle && <Check className="ml-auto" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
