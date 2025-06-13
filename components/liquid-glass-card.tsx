import { ReactNode } from "react";

export function LiquidGlassCard({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="space-y-6 rounded-2xl border bg-slate-200/1 p-6 backdrop-blur-xs">
        {children}
      </div>
    </div>
  );
}
