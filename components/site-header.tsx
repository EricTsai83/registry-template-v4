import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeSwitcher } from "@/components/mode-switcher";
import { SidebarTrigger } from "./ui/sidebar";

export function SiteHeader() {
  return (
    <header className="border-grid bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container-wrapper">
        <div className="flex h-14 items-center justify-between gap-2 px-4 2xl:px-8">
          <SidebarTrigger />
          <MainNav />
          <MobileNav />
          <ModeSwitcher />
        </div>
      </div>
    </header>
  );
}
