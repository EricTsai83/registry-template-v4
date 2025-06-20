import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-background relative flex h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden">
      {/* 主要內容 */}
      <div className="relative space-y-6 text-center">
        <div className="relative">
          <h1 className="animate-float text-primary/10 text-[12rem] font-bold tracking-tighter">
            404
          </h1>
          <h1 className="text-primary/80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-bold tracking-tighter">
            404
          </h1>
        </div>
        <h2 className="text-muted-foreground text-2xl font-medium">
          <span className="text-lg">找不到您請求的頁面</span>
        </h2>
        <Link href="/">
          <Button
            variant="outline"
            className="hover:shadow-primary/20 relative overflow-hidden rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="relative z-10">返回首頁</span>
            <div className="bg-primary/10 absolute inset-0 -z-0 translate-y-full transition-transform duration-300 hover:translate-y-0" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
