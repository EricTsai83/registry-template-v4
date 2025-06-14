import { LiquidGlassCard } from "@/components/liquid-glass-card";
import RainbowGlassButton from "@/components/rainbow-glass-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Bot,
  Brain,
  ChevronRight,
  Code2,
  Copy,
  Layers,
  MessageCircle,
  Network,
  Palette,
  Sparkles,
  Wand2,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  const componentLibraries: ComponentLibrary[] = [
    {
      id: "basic",
      name: "Basic UI",
      tagline: "簡潔優雅的基礎組件系統",
      description:
        "專為現代 Web 應用設計的輕量級組件庫。提供完整的基礎 UI 組件，採用簡潔的設計語言和一致的視覺風格，讓開發者能快速構建美觀且功能完整的用戶界面。",
      href: "/docs/basic",
      icon: <Brain className="h-8 w-8" />,
      primaryColor: "blue",
      badge: "基礎組件",
      badgeVariant: "secondary",
      features: [
        { name: "表單組件", description: "輸入框、選擇器、按鈕等" },
        { name: "佈局系統", description: "網格、容器、間距控制" },
        { name: "導航組件", description: "選單、麵包屑、分頁" },
        { name: "反饋組件", description: "通知、載入、進度條" },
      ],
      preview: <BasicUIPreview />,
    },
    {
      id: "mplus",
      name: "M+ Messenger",
      tagline: "專為通訊應用打造的組件庫",
      description:
        "專門為即時通訊和社交應用設計的高級組件庫。包含聊天界面、用戶管理、媒體分享等專業組件，採用現代化的設計風格和流暢的動畫效果，為用戶提供卓越的通訊體驗。",
      href: "/docs/mplus",
      icon: <MessageCircle className="h-8 w-8" />,
      primaryColor: "purple",
      badge: "通訊專用",
      badgeVariant: "default",
      features: [
        { name: "聊天組件", description: "訊息氣泡、輸入框、表情符號" },
        { name: "用戶界面", description: "聯絡人列表、個人資料、狀態" },
        { name: "媒體組件", description: "圖片預覽、檔案分享、語音" },
        { name: "通知系統", description: "推送通知、聲音提示、徽章" },
      ],
      preview: <MessengerUIPreview />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0">
          <div className="from-muted/30 to-background absolute inset-0 bg-gradient-to-b" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)]" />
        </div>

        <div className="relative px-8 py-24">
          <div className="mx-auto max-w-4xl">
            {/* Top Badge */}
            <div className="mb-8 flex justify-center">
              <Badge variant="outline" className="px-4 py-2">
                <Sparkles className="mr-2 h-4 w-4" />
                兩大元件庫系統
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="mb-12 text-center">
              <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
                選擇適合你的
                <br />
                <span className="text-primary">元件庫</span>
              </h1>

              <p className="text-muted-foreground mx-auto max-w-2xl text-xl leading-relaxed">
                我們提供兩套專業的元件庫：Basic UI 適合通用應用開發，M+
                Messenger 專為通訊應用設計。
                每套都經過精心設計，確保最佳的開發體驗。
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="mx-auto mb-12 grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="bg-muted/50 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                  <Code2 className="text-foreground h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">現代化設計</h3>
                <p className="text-muted-foreground text-sm">
                  採用最新設計趨勢與最佳實踐
                </p>
              </div>

              <div className="text-center">
                <div className="bg-muted/50 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                  <Zap className="text-foreground h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">高效開發</h3>
                <p className="text-muted-foreground text-sm">
                  快速構建美觀且功能完整的應用
                </p>
              </div>

              <div className="text-center">
                <div className="bg-muted/50 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                  <Palette className="text-foreground h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">客製化彈性</h3>
                <p className="text-muted-foreground text-sm">
                  靈活的主題系統與組件配置
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="px-8">
                開始探索
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>

              <Button variant="outline" size="lg" className="px-8">
                <Palette className="mr-2 h-5 w-5" />
                查看設計系統
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-12">
        <Separator className="mb-16" />

        {/* Component Libraries */}
        <div className="space-y-16">
          {componentLibraries.map((library, index) => (
            <div key={library.id} className="relative">
              <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
                {/* Content */}
                <div className="flex flex-col justify-center">
                  <LiquidGlassCard
                    className="h-full"
                    glassColor={library.primaryColor}
                  >
                    <div className="mb-6 flex items-center gap-4">
                      <div
                        className={cn(
                          "rounded-2xl p-3",
                          library.primaryColor === "blue"
                            ? "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
                            : "bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
                        )}
                      >
                        {library.icon}
                      </div>
                      <div>
                        <h2 className="text-foreground text-3xl font-bold">
                          {library.name}
                        </h2>
                        <p className="text-muted-foreground">
                          {library.tagline}
                        </p>
                      </div>
                      <Badge variant={library.badgeVariant} className="ml-auto">
                        {library.badge}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {library.description}
                    </p>

                    {/* Features Grid */}
                    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {library.features.map((feature) => (
                        <div
                          key={feature.name}
                          className="bg-background/50 rounded-lg border p-4"
                        >
                          <h4 className="text-foreground mb-1 font-semibold">
                            {feature.name}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3">
                      <Link href={library.href} className="flex-1">
                        <Button className="w-full" size="lg">
                          <Brain className="mr-2 h-4 w-4" />
                          探索 {library.name}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="outline" size="lg">
                        <Bot className="h-4 w-4" />
                      </Button>
                    </div>
                  </LiquidGlassCard>
                </div>

                {/* Preview */}
                <div className="flex items-center justify-center">
                  <LiquidGlassCard
                    className="w-full"
                    glassColor={library.primaryColor}
                  >
                    {library.preview}
                  </LiquidGlassCard>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

interface ComponentLibrary {
  id: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  primaryColor: "blue" | "purple";
  badge: string;
  badgeVariant: "default" | "secondary" | "destructive" | "outline";
  features: Array<{
    name: string;
    description: string;
  }>;
  preview: React.ReactNode;
}

// Basic UI Preview Component
const BasicUIPreview: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div className={cn("space-y-4 p-6", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Dashboard</h3>
        <Button size="sm">
          <Layers className="mr-2 h-4 w-4" />
          New
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-background rounded-lg border p-3 text-center">
          <div className="text-2xl font-bold text-blue-600">24</div>
          <div className="text-muted-foreground text-xs">Projects</div>
        </div>
        <div className="bg-background rounded-lg border p-3 text-center">
          <div className="text-2xl font-bold text-green-600">12</div>
          <div className="text-muted-foreground text-xs">Completed</div>
        </div>
        <div className="bg-background rounded-lg border p-3 text-center">
          <div className="text-2xl font-bold text-orange-600">8</div>
          <div className="text-muted-foreground text-xs">Pending</div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="bg-background flex items-center justify-between rounded-lg border p-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-950" />
            <div>
              <div className="text-sm font-medium">Website Redesign</div>
              <div className="text-muted-foreground text-xs">Due tomorrow</div>
            </div>
          </div>
          <Badge variant="secondary">In Progress</Badge>
        </div>

        <div className="bg-background flex items-center justify-between rounded-lg border p-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-950" />
            <div>
              <div className="text-sm font-medium">Mobile App</div>
              <div className="text-muted-foreground text-xs">Completed</div>
            </div>
          </div>
          <Badge variant="outline">Done</Badge>
        </div>
      </div>
    </div>
  );
};

// Messenger UI Preview Component
const MessengerUIPreview: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div className={cn("space-y-4 p-6", className)}>
      <div className="flex items-center gap-3 border-b pb-3">
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
          <div className="border-background absolute -right-1 -bottom-1 h-4 w-4 rounded-full border-2 bg-green-500" />
        </div>
        <div>
          <div className="font-semibold">Sarah Chen</div>
          <div className="text-muted-foreground text-xs">Active now</div>
        </div>
        <div className="ml-auto flex gap-2">
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
            <MessageCircle className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-start">
          <div className="bg-muted max-w-[80%] rounded-2xl p-3">
            <p className="text-sm">Hey! How's the project going? 🚀</p>
            <div className="text-muted-foreground mt-1 text-xs">2:30 PM</div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-primary text-primary-foreground max-w-[80%] rounded-2xl p-3">
            <p className="text-sm">Great! Just finished the UI components</p>
            <div className="mt-1 text-xs opacity-70">2:32 PM</div>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-muted max-w-[80%] rounded-2xl p-3">
            <div className="bg-background mb-2 rounded-lg p-2">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-blue-500" />
                <span className="text-sm">components.zip</span>
              </div>
              <div className="text-muted-foreground text-xs">2.4 MB</div>
            </div>
            <p className="text-sm">Here are the files! 📁</p>
            <div className="text-muted-foreground mt-1 text-xs">2:35 PM</div>
          </div>
        </div>
      </div>

      <div className="bg-background flex items-center gap-2 rounded-full border p-2">
        <Button size="sm" variant="ghost" className="h-8 w-8 rounded-full p-0">
          <Copy className="h-4 w-4" />
        </Button>
        <div className="text-muted-foreground flex-1 text-sm">
          Type a message...
        </div>
        <Button size="sm" className="h-8 w-8 rounded-full p-0">
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
