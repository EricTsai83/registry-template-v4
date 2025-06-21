import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ExternalLink,
  Eye,
  MessageSquare,
  PanelsLeftBottom,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function MplusIntroductionPage() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <DesignPhilosophiesSection />
      <VisualStyleSection />
      <DesignPrinciplesSection />
      <CallToActionSection />
    </div>
  );
}

// 型別定義
interface DesignPrinciple {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}

interface DesignPhilosophy {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  color: string;
}

interface ColorPalette {
  name: string;
  description: string;
  colors: Array<{
    class: string;
    title: string;
  }>;
}

// 常數配置
const DESIGN_PHILOSOPHIES: DesignPhilosophy[] = [
  {
    icon: PanelsLeftBottom,
    title: "極簡主義",
    description: "打造直觀介面",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Users,
    title: "使用者導向",
    description: "使用者體驗優先的開發模式",
    color: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Zap,
    title: "效率至上",
    description: "快速響應、流暢動畫",
    color: "text-amber-600 dark:text-amber-400",
  },
];

const DESIGN_PRINCIPLES: DesignPrinciple[] = [
  {
    icon: Eye,
    title: "一致性",
    description: "維持視覺與互動的一致性，降低學習成本，提升體驗流暢度。",
  },
  {
    icon: Users,
    title: "可存取性",
    description: "遵循 WCAG 標準，確保所有使用者都能輕鬆使用介面。",
  },
  {
    icon: MessageSquare,
    title: "回饋機制",
    description: "每個使用者動作都有清晰的視覺回饋，明確系統狀態。",
  },
  {
    icon: Smartphone,
    title: "適應性",
    description: "適應不同裝置與螢幕尺寸，提供一致優質的體驗。",
  },
];

const COLOR_PALETTES: ColorPalette[] = [
  {
    name: "主色調",
    description: "沉穩的藍黑色系，傳達專業可信賴的通訊體驗",
    colors: [
      { class: "bg-cyan-600", title: "Cyan 600" },
      { class: "bg-neutral-800", title: "Neutral 800" },
    ],
  },
  {
    name: "輔助色調",
    description: "精確調和的色彩層次，確保最佳使用體驗",
    colors: [
      { class: "bg-cyan-500", title: "Cyan 500" },
      { class: "bg-cyan-700", title: "Cyan 700" },
      { class: "bg-orange-100", title: "Orange 100" },
      { class: "bg-green-600", title: "Green 600" },
      { class: "bg-red-500", title: "Red 500" },
    ],
  },
];

function HeroSection() {
  return (
    <div className="space-y-6 text-center">
      <div className="mb-4 flex items-center justify-center gap-2">
        <h1 className="flex items-center gap-2 text-4xl font-bold tracking-tight">
          M+ Messenger
          <Link
            href="https://web.mplusapp.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="前往 M+ Messenger 網頁版 (新分頁開啟)"
            className="ml-1"
          >
            <ExternalLink className="hover:text-muted-foreground h-4 w-4" />
          </Link>
        </h1>
      </div>
      <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed">
        M+ 是一套簡潔現代的設計系統，專注於提升使用者體驗。
      </p>
    </div>
  );
}

function DesignPhilosophyCard({
  philosophy,
}: {
  philosophy: DesignPhilosophy;
}) {
  const IconComponent = philosophy.icon;

  return (
    <div className="group space-y-4 text-center">
      <div className="bg-card mx-auto flex h-20 w-20 items-center justify-center rounded-xl border transition-all duration-200 group-hover:scale-105">
        <IconComponent
          className={`h-10 w-10 ${philosophy.color}`}
          strokeWidth={1.5}
        />
      </div>
      <h3 className="text-xl font-semibold">{philosophy.title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {philosophy.description}
      </p>
    </div>
  );
}

function DesignPhilosophiesSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-center text-3xl font-semibold tracking-tight">
        設計理念
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {DESIGN_PHILOSOPHIES.map((philosophy) => (
          <DesignPhilosophyCard
            key={philosophy.title}
            philosophy={philosophy}
          />
        ))}
      </div>
    </div>
  );
}

function ColorSwatch({ color }: { color: { class: string; title: string } }) {
  return (
    <div
      className={`h-8 w-8 rounded border ${color.class}`}
      title={color.title}
    />
  );
}

function ColorPaletteSection({ palette }: { palette: ColorPalette }) {
  return (
    <div>
      <h4 className="mb-2 font-medium">{palette.name}</h4>
      <p className="text-muted-foreground mb-3 text-sm">
        {palette.description}
      </p>
      <div className="flex gap-2">
        {palette.colors.map((color) => (
          <ColorSwatch key={color.title} color={color} />
        ))}
      </div>
    </div>
  );
}

function VisualStyleSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-center text-3xl font-semibold tracking-tight">
        視覺風格
      </h2>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-gradient-to-r from-cyan-600 to-neutral-200" />
            色彩哲學
          </CardTitle>
          <CardDescription>
            精心設計的色彩系統，以藍黑色調為主，支援明暗主題切換。
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {COLOR_PALETTES.map((palette) => (
              <ColorPaletteSection key={palette.name} palette={palette} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function DesignPrincipleCard({ principle }: { principle: DesignPrinciple }) {
  const IconComponent = principle.icon;

  return (
    <Card className="overflow-hidden border-l-2 border-l-cyan-600 transition-all duration-300">
      <CardHeader className="relative">
        <CardTitle className="flex items-center gap-3 text-xl">
          <IconComponent className="h-5 w-5" />
          {principle.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <p className="text-muted-foreground leading-relaxed">
          {principle.description}
        </p>
      </CardContent>
    </Card>
  );
}

function DesignPrinciplesSection() {
  return (
    <section className="space-y-12">
      <div className="space-y-4 text-center">
        <h2 className="text-center text-3xl font-semibold tracking-tight">
          設計原則
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          四大核心原則確保設計品質與一致性
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {DESIGN_PRINCIPLES.map((principle) => (
          <DesignPrincipleCard key={principle.title} principle={principle} />
        ))}
      </div>
    </section>
  );
}

function CallToActionSection() {
  return (
    <div className="space-y-6 border-t py-8 text-center">
      <h2 className="text-2xl font-semibold">開始探索 M+ 組件</h2>
      <p className="text-muted-foreground mx-auto max-w-2xl">
        了解設計理念後，來看看這些概念如何體現在實際組件中
      </p>
      <Button asChild size="lg">
        <Link href="/docs/mplus/components">查看元件</Link>
      </Button>
    </div>
  );
}
