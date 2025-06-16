"use client";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";

export function MobileNav() {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <div className="flex w-full items-center justify-center">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="font-bold lg:inline-block">{siteConfig.name}</span>
      </Link>
    </div>
  );
}
