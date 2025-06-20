import Link from "next/link";

// M Plus 組件數據
const mplusComponents = [
  {
    name: "登入",
    href: "/docs/mplus/components/login",
  },
  {
    name: "側邊欄",
    href: "/docs/mplus/components/sidebar",
  },
  {
    name: "聊天視窗",
    href: "/docs/mplus/components/chat-window",
  },
  {
    name: "頁首",
    href: "/docs/mplus/components/header",
  },
];

export default function MplusComponentsPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">元件列表</h1>
        <p className="text-muted-foreground">
          您可以在這裡找到所有 M+ 在用的元件。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mplusComponents.map((component) => (
          <div key={component.name}>
            <Link
              href={component.href}
              className="text-foreground hover:text-primary inline-block transition-colors duration-200 hover:underline hover:underline-offset-4"
            >
              {component.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
