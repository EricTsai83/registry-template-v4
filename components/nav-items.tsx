"use client";

import { NAV_ITEMS, styleUtils } from "@/config/styles";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavItems() {
  const pathname = usePathname();

  // 生成動態連結
  const getDynamicLink = (href: string): string => {
    const componentStyle = styleUtils.getStyleFromPath(pathname);
    if (!componentStyle) {
      // 如果無法確定組件風格類型，回退到預設路徑
      return styleUtils.getStylePath(styleUtils.getDefaultStyle(), href);
    }
    return styleUtils.getStylePath(componentStyle, href);
  };

  return (
    <nav className="flex flex-col items-start gap-2 px-2 text-sm md:flex-row md:items-center md:gap-2 lg:gap-6 xl:gap-14">
      {NAV_ITEMS.map(({ label, href, isStatic }) => (
        <Link
          key={label}
          href={isStatic ? href : getDynamicLink(href)}
          className="hover:bg-primary/5 rounded-md px-2 py-1 text-lg font-medium transition-colors md:text-sm"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
