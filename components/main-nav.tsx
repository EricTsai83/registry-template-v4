"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/docs"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname === "/docs" ? "text-foreground" : "text-foreground/80",
          )}
        >
          Docs
        </Link>
        <Link
          href="/docs/mplus/components"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/80",
          )}
        >
          Components
        </Link>
        <Link
          href="/blocks"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/blocks")
              ? "text-foreground"
              : "text-foreground/80",
          )}
        >
          Blocks
        </Link>
        <Link
          href="/charts"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/docs/component/chart") ||
              pathname?.startsWith("/charts")
              ? "text-foreground"
              : "text-foreground/80",
          )}
        >
          Charts
        </Link>
        <Link
          href="/themes"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/themes")
              ? "text-foreground"
              : "text-foreground/80",
          )}
        >
          Themes
        </Link>
        <Link
          href="/colors"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/colors")
              ? "text-foreground"
              : "text-foreground/80",
          )}
        >
          Colors
        </Link>
      </nav>
    </div>
  );
}
