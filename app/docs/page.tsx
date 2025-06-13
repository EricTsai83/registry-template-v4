import { ContentHeader } from "@/components/content-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Palette, Zap } from "lucide-react";

export default function Page() {
  const styles = [
    {
      id: "mplus",
      name: "M+ 風格",
      description:
        "專為 M+ Messenger 設計的組件風格，具有現代化的介面和專業的設計語言。",
      href: "/docs/mplus",
      icon: <Palette className="h-6 w-6" />,
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      badge: "推薦",
      features: ["聊天視窗", "登入表單", "側邊欄", "標題列"],
    },
    {
      id: "basic",
      name: "基礎風格",
      description: "簡潔的基礎組件風格，適合快速原型開發和簡單的應用場景。",
      href: "/docs/basic",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-gradient-to-br from-gray-500 to-gray-600",
      badge: "簡潔",
      features: ["表單組件", "按鈕組件", "卡片組件", "佈局組件"],
    },
  ];

  return (
    <>
      <ContentHeader title="選擇設計風格" />
      <div className="flex flex-1 flex-col gap-6 px-8">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground">
            選擇您想要使用的設計風格，每種風格都包含不同的組件設計和使用場景。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {styles.map((style) => (
            <Link key={style.id} href={style.href} className="group block">
              <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02] border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-lg text-white ${style.color}`}
                      >
                        {style.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{style.name}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {style.badge}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="mt-3 text-base leading-relaxed">
                    {style.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-muted-foreground">
                      包含組件：
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {style.features.map((feature) => (
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

                  <div className="mt-6 flex items-center text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                    查看組件
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 p-6 bg-muted/50 rounded-lg">
          <h3 className="font-semibold mb-2">💡 選擇建議</h3>
          <p className="text-sm text-muted-foreground">
            如果您正在開發 M+ 相關應用，建議選擇 <strong>M+ 風格</strong>；
            如果您需要快速原型或簡單應用，可以選擇 <strong>基礎風格</strong>。
          </p>
        </div>
      </div>
    </>
  );
}
