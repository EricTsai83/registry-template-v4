import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Eye,
  MessageSquare,
  Palette,
  PanelsLeftBottom,
  Smartphone,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

const designPhilosophy = [
  {
    icon: PanelsLeftBottom,
    title: "極簡主義",
    description: "打造直觀簡潔的介面設計，去除不必要的視覺干擾",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    icon: Users,
    title: "使用者導向",
    description: "以使用者需求為核心，優先考慮體驗與易用性",
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
  },
  {
    icon: Zap,
    title: "效率至上",
    description: "快速響應、流暢動畫，提供高效的互動體驗",
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
  },
];

const designPrinciples = [
  {
    icon: Eye,
    title: "一致性",
    description: "維持視覺與互動的一致性，降低學習成本，提升體驗流暢度。",
    accent: "border-l-blue-500",
  },
  {
    icon: Users,
    title: "可存取性",
    description: "遵循 WCAG 標準，確保所有使用者都能輕鬆使用介面。",
    accent: "border-l-emerald-500",
  },
  {
    icon: MessageSquare,
    title: "回饋機制",
    description: "每個使用者動作都有清晰的視覺回饋，明確系統狀態。",
    accent: "border-l-amber-500",
  },
  {
    icon: Smartphone,
    title: "適應性",
    description: "適應不同裝置與螢幕尺寸，提供一致優質的體驗。",
    accent: "border-l-purple-500",
  },
];

const colorPalette = {
  primary: [
    { name: "Cyan 600", color: "bg-cyan-600", hex: "#0891b2" },
    { name: "Neutral 800", color: "bg-neutral-800", hex: "#262626" },
  ],
  secondary: [
    { name: "Cyan 500", color: "bg-cyan-500", hex: "#06b6d4" },
    { name: "Cyan 700", color: "bg-cyan-700", hex: "#0e7490" },
    { name: "Orange 100", color: "bg-orange-100", hex: "#fed7aa" },
    { name: "Green 600", color: "bg-green-600", hex: "#16a34a" },
    { name: "Red 500", color: "bg-red-500", hex: "#ef4444" },
  ],
};

export default function MplusIntroductionPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-8">
      {/* 主要標題區域 */}
      <header className="space-y-6 text-center">
        <div className="space-y-4">
          <Badge variant="outline" className="mb-4">
            設計系統
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            M+ Messenger
          </h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg sm:text-xl">
            簡潔現代的設計系統，專注於提升使用者體驗與互動品質
          </p>
        </div>
      </header>

      {/* 設計理念 */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">設計理念</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            三大核心理念構建現代通訊體驗
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {designPhilosophy.map((item, index) => (
            <Card
              key={item.title}
              className="group from-background to-muted/50 border-0 bg-gradient-to-br shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={cn(
                    "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110",
                    item.bgColor,
                  )}
                >
                  <item.icon
                    className={cn("h-8 w-8", item.color)}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 視覺風格 */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">視覺風格</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            精心設計的色彩系統與視覺語言
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* 色彩哲學 */}
          <Card className="overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3">
                <Palette className="h-5 w-5 text-cyan-600" />
                色彩哲學
              </CardTitle>
              <CardDescription>
                以藍黑色調為主軸，營造專業可信賴的通訊氛圍
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 主色調 */}
              <div>
                <h4 className="mb-3 font-medium">主色調</h4>
                <div className="space-y-3">
                  {colorPalette.primary.map((color) => (
                    <div key={color.name} className="flex items-center gap-3">
                      <div
                        className={cn(
                          "h-10 w-10 rounded-lg border shadow-sm",
                          color.color,
                        )}
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{color.name}</p>
                        <p className="text-muted-foreground text-xs">
                          {color.hex}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 輔助色調 */}
              <div>
                <h4 className="mb-3 font-medium">輔助色調</h4>
                <div className="grid grid-cols-5 gap-2">
                  {colorPalette.secondary.map((color) => (
                    <div key={color.name} className="text-center">
                      <div
                        className={cn(
                          "h-8 w-8 rounded-md border shadow-sm",
                          color.color,
                        )}
                        title={color.name}
                      />
                      <p className="text-muted-foreground mt-1 text-xs">
                        {color.name.split(" ")[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 字體與間距 */}
          <Card className="overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3">
                <Target className="h-5 w-5 text-emerald-600" />
                排版系統
              </CardTitle>
              <CardDescription>清晰的層次結構與舒適的閱讀體驗</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">標題層次</h4>
                  <h5 className="text-muted-foreground text-xl font-semibold">
                    副標題設計
                  </h5>
                  <p className="text-base">
                    內文字體展示，注重可讀性與視覺舒適度。
                  </p>
                  <p className="text-muted-foreground text-sm">輔助說明文字</p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h5 className="mb-2 font-medium">間距原則</h5>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• 一致的垂直節奏</li>
                    <li>• 適當的行高比例</li>
                    <li>• 清晰的內容分組</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 設計原則 */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">設計原則</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            四大核心原則確保設計品質與一致性
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {designPrinciples.map((principle, index) => (
            <Card
              key={principle.title}
              className={cn(
                "group overflow-hidden border-l-4 transition-all duration-300 hover:shadow-md",
                principle.accent,
              )}
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3">
                  <principle.icon
                    className="text-foreground/70 h-5 w-5"
                    strokeWidth={1.5}
                  />
                  {principle.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 呼籲行動 */}
      <section className="rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 p-8 text-center dark:from-cyan-950/20 dark:to-blue-950/20">
        <div className="mx-auto max-w-2xl space-y-6">
          <h2 className="text-2xl font-bold sm:text-3xl">開始探索 M+ 組件</h2>
          <p className="text-muted-foreground">
            了解設計理念後，來看看這些概念如何體現在實際組件中
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/docs/mplus/components">查看組件展示</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href="/docs/mplus/components">設計指南</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
