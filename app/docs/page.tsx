import { LiquidGlassCard } from "@/components/liquid-glass-card";
import { QuantumLight } from "@/components/quantum-light";
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
  Copy,
  Layers,
  Network,
  Sparkles,
  Star,
  Wand2,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  const styles: DesignStyle[] = [
    {
      id: "basic",
      name: "Glass Basic",
      description:
        "採用 Glassmorphism 設計語言的智能基礎組件系統。透過模糊玻璃效果與漸層背景，創造層次豐富的視覺體驗和直覺化的用戶介面。",
      href: "/docs/basic",
      icon: <Brain className="h-6 w-6" />,
      badge: "玻璃風格",
      badgeVariant: "secondary",
      features: [
        { name: "模糊玻璃表單", description: "透明漸層背景" },
        { name: "懸浮按鈕", description: "玻璃材質效果" },
        { name: "毛玻璃卡片", description: "多層次背景" },
        { name: "流體佈局", description: "動態模糊效果" },
      ],
      aiFeatures: ["智能透明度", "自適應模糊", "動態玻璃效果"],
      preview: <GlassmorphismPreview variant={1} />,
      stats: {
        components: 28,
        templates: 10,
        aiEnhanced: true,
      },
    },
    {
      id: "mplus",
      name: "M+ Crystal",
      description:
        "結合水晶般透明質感的新世代通訊組件庫。運用多層次玻璃效果與光線折射原理，打造如夢似幻的沉浸式用戶體驗界面。",
      href: "/docs/mplus",
      icon: <Network className="h-6 w-6" />,
      badge: "水晶風格",
      badgeVariant: "default",
      features: [
        { name: "水晶聊天泡泡", description: "光線折射效果" },
        { name: "透明認證", description: "玻璃化登入" },
        { name: "漂浮側欄", description: "多層次模糊" },
        { name: "發光標題", description: "霓虹玻璃質感" },
      ],
      aiFeatures: ["光線追蹤", "材質渲染", "動態反射", "智能透明"],
      preview: <GlassmorphismPreview variant={2} />,
      stats: {
        components: 42,
        templates: 15,
        aiEnhanced: true,
      },
    },
  ];

  const glassStats = [
    {
      icon: <Zap className="h-8 w-8" />,
      value: "60+",
      label: "玻璃組件",
    },
    {
      icon: <Star className="h-8 w-8" />,
      value: "100%",
      label: "透明度控制",
    },
    {
      icon: <Layers className="h-8 w-8" />,
      value: "∞",
      label: "層次效果",
    },
  ];

  return (
    <>
      <QuantumLight />
      <header>
        <h1>設計風格介紹</h1>
      </header>
      <RainbowGlassButton>
        Browse Templates
        <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
      </RainbowGlassButton>

      <div className="flex flex-1 flex-col gap-8 px-8">
        {/* Glass Hero Section */}
        <LiquidGlassCard>
          <div className="mb-6 flex items-center gap-3">
            <div className="bg-muted rounded-xl border p-2">
              <Wand2 className="text-primary h-6 w-6" />
            </div>
            <Badge variant="outline">
              <Sparkles className="mr-1 h-3 w-3" />
              Glassmorphism 設計系統
            </Badge>
          </div>

          <h1 className="text-foreground mb-6 text-4xl font-bold">
            體驗玻璃質感設計
          </h1>
          <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed">
            探索結合模糊玻璃效果與現代設計美學的下一代組件系統。
            每個元素都採用透明度控制與背景模糊技術，創造出夢幻般的視覺層次。
          </p>
        </LiquidGlassCard>

        {/* Glass Stats */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {glassStats.map((stat, index) => (
            <LiquidGlassCard key={index}>
              <div className="bg-primary/10 mb-4 inline-flex rounded-2xl p-3">
                <div className="text-primary">{stat.icon}</div>
              </div>
              <div className="text-foreground mb-1 text-3xl font-bold">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </LiquidGlassCard>
          ))}
        </div>

        <Separator />

        {/* Glass Style Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {styles.map((style, index) => (
            <LiquidGlassCard key={style.id}>
              <div className="mb-6 flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <LiquidGlassCard>
                    <div className="text-primary">{style.icon}</div>
                  </LiquidGlassCard>
                  <div>
                    <h3 className="text-foreground mb-2 text-2xl font-bold">
                      {style.name}
                    </h3>
                    <Badge variant={style.badgeVariant}>{style.badge}</Badge>
                  </div>
                </div>
              </div>

              {/* Glass Preview */}
              <LiquidGlassCard>{style.preview}</LiquidGlassCard>

              <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                {style.description}
              </p>

              <div className="space-y-6">
                {/* Component Stats */}
                <LiquidGlassCard>
                  <div className="text-center">
                    <div className="text-foreground text-xl font-bold">
                      {style.stats.components}
                    </div>
                    <div className="text-muted-foreground text-xs">組件</div>
                  </div>
                  <div className="text-center">
                    <div className="text-foreground text-xl font-bold">
                      {style.stats.templates}
                    </div>
                    <div className="text-muted-foreground text-xs">模板</div>
                  </div>
                  <div className="text-center">
                    <div className="text-primary text-xl font-bold">AI</div>
                    <div className="text-muted-foreground text-xs">增強</div>
                  </div>
                </LiquidGlassCard>

                {/* AI Features */}
                <div>
                  <h4 className="text-primary mb-3 flex items-center gap-2 text-sm font-semibold">
                    <Bot className="h-4 w-4" />
                    玻璃 AI 特效
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {style.aiFeatures.map((feature, idx) => (
                      <Badge
                        key={feature}
                        variant="outline"
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* CTA Button */}
                <Link href={style.href}>
                  <Button className="group/btn w-full" size="lg">
                    <span className="flex items-center justify-center gap-3">
                      <Brain className="h-4 w-4" />
                      探索玻璃組件
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </Button>
                </Link>
              </div>
            </LiquidGlassCard>
          ))}
        </div>

        {/* Bottom Glass CTA */}
        <LiquidGlassCard>
          <div className="mb-4">
            <LiquidGlassCard>
              <Wand2 className="text-primary h-8 w-8" />
            </LiquidGlassCard>
          </div>
          <h3 className="text-foreground mb-2 text-2xl font-bold">
            需要客製化玻璃效果？
          </h3>
          <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
            我們的設計團隊專精於 Glassmorphism
            風格，可以為您打造獨特的透明玻璃介面，
            結合最新的模糊效果技術與您的品牌視覺。
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button variant="outline">
              <Bot className="mr-2 h-4 w-4" />
              玻璃設計諮詢
            </Button>
            <Button>
              <Sparkles className="mr-2 h-4 w-4" />
              開始體驗
            </Button>
          </div>
        </LiquidGlassCard>
      </div>
    </>
  );
}

interface StyleFeature {
  name: string;
  description: string;
}

interface DesignStyle {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  badge: string;
  badgeVariant: "default" | "secondary" | "destructive" | "outline";
  features: StyleFeature[];
  aiFeatures: string[];
  preview: React.ReactNode;
  stats: {
    components: number;
    templates: number;
    aiEnhanced: boolean;
  };
}

// Glassmorphism Preview Component
const GlassmorphismPreview: React.FC<{
  className?: string;
  variant?: 1 | 2;
}> = ({ className = "", variant = 1 }) => {
  if (variant === 1) {
    return (
      <div className={cn("space-y-3 p-4", className)}>
        <LiquidGlassCard>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium">Referral Code</h3>
              <div className="mt-1 flex items-center gap-2">
                <code className="bg-muted/50 rounded px-2 py-1 text-xs">
                  7D45564JK355
                </code>
                <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                  <Copy className="h-3 w-3" />
                </Button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground text-xs">Users</p>
              <p className="text-lg font-semibold">4</p>
            </div>
          </div>
        </LiquidGlassCard>
        <LiquidGlassCard>
          <p className="text-muted-foreground text-xs">Rewards</p>
          <p className="text-sm">
            <span className="text-primary font-medium">20%</span> Fees +{" "}
            <span className="text-primary font-medium">10%</span> Points
          </p>
        </LiquidGlassCard>
      </div>
    );
  }

  return (
    <div className={cn("space-y-2 p-4", className)}>
      <LiquidGlassCard>
        <div className="flex items-center gap-2">
          <div className="bg-primary/20 flex h-8 w-8 items-center justify-center rounded-full">
            <Network className="text-primary h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-medium">Crystal Chat</p>
            <p className="text-muted-foreground text-xs">Online</p>
          </div>
        </div>
      </LiquidGlassCard>
      <LiquidGlassCard>
        <div className="flex items-center gap-2">
          <div className="bg-primary h-2 w-2 rounded-full"></div>
          <p className="text-xs">Message with glass effect</p>
        </div>
      </LiquidGlassCard>
      <LiquidGlassCard>
        <div className="from-primary/50 h-1 rounded bg-gradient-to-r to-transparent"></div>
      </LiquidGlassCard>
    </div>
  );
};
