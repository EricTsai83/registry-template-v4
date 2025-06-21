import { mplusNav } from "@/config/docs";
import Link from "next/link";

const mplusBlocks = mplusNav.find((nav) => nav.name === "區塊")?.items || [];

export default function MplusBlocksPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">區塊列表</h1>
        <p className="text-muted-foreground">
          您可以在這裡找到所有 M+ 在用的區塊。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mplusBlocks.map((block) => (
          <div key={block.name}>
            <Link
              href={block.href}
              className="text-foreground hover:text-primary inline-block transition-colors duration-200 hover:underline hover:underline-offset-4"
            >
              {block.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
