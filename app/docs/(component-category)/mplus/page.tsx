import Link from "next/link";

// M Plus 組件數據
const mplusComponents = [
  {
    name: "login",
    title: "Login",
    description: "A login block.",
    href: "/docs/(component)/mplus/login",
  },
  {
    name: "sidebar",
    title: "Sidebar",
    description: "A sidebar component.",
    href: "/docs/(component)/mplus/sidebar",
  },
  {
    name: "chat-window",
    title: "Chat Window",
    description: "A chat window component.",
    href: "/docs/(component)/mplus/chat-window",
  },
  {
    name: "header",
    title: "Header",
    description: "A header component for M Plus applications.",
    href: "/docs/(component)/mplus/header",
  },
];

export default function MplusComponentsPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">M Plus 組件</h1>
        <p className="text-muted-foreground">
          選擇一個 M Plus 組件來查看詳細信息和使用範例
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mplusComponents.map((component) => (
          <Link
            key={component.name}
            href={component.href}
            className="hover:underline hover:underline-offset-4"
          >
            {component.title}
          </Link>
        ))}
      </div>

      <div className="bg-muted/50 mt-12 rounded-lg p-6">
        <h2 className="mb-3 text-xl font-semibold">如何使用</h2>
        <div className="text-muted-foreground space-y-2 text-sm">
          <p>• 點擊任何組件卡片來查看詳細信息和程式碼範例</p>
          <p>• 每個組件都包含完整的實作和使用說明</p>
          <p>• 依賴組件列表顯示了需要安裝的相關 UI 組件</p>
        </div>
      </div>
    </>
  );
}
