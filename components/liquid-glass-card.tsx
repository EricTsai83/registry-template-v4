import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface LiquidGlassCardProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  glassColor?: "blue" | "purple" | "default";
}

export function LiquidGlassCard({
  children,
  className = "",
  size = "md",
  glassColor = "default",
}: LiquidGlassCardProps) {
  const sizeClasses = {
    sm: "max-w-sm p-4",
    md: "max-w-md p-6",
    lg: "max-w-lg p-8",
  };

  const glassColorClasses = {
    default: {
      bg: "bg-white/2 hover:bg-white/3",
      border: "border-white/5",
      glow1: "from-blue-400/5 to-purple-400/5",
      glow2: "from-pink-400/3 to-cyan-400/3",
    },
    blue: {
      bg: "bg-blue-500/5 hover:bg-blue-500/8",
      border: "border-blue-500/10",
      glow1: "from-blue-400/10 to-cyan-400/8",
      glow2: "from-blue-300/5 to-indigo-400/5",
    },
    purple: {
      bg: "bg-purple-500/5 hover:bg-purple-500/8",
      border: "border-purple-500/10",
      glow1: "from-purple-400/10 to-pink-400/8",
      glow2: "from-purple-300/5 to-fuchsia-400/5",
    },
  };

  const colorConfig = glassColorClasses[glassColor];

  return (
    <div className="mx-auto w-full">
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl shadow-sm shadow-black/5 backdrop-blur-[2px] transition-all duration-300 ease-out before:absolute before:inset-0 before:-z-10 before:rounded-3xl before:bg-gradient-to-br before:from-white/5 before:to-transparent before:p-[1px] hover:shadow-md",
          sizeClasses[size],
          colorConfig.bg,
          colorConfig.border,
          className,
        )}
      >
        <div className="relative z-10 space-y-6">{children}</div>

        {/* 裝飾性光暈效果 */}
        <div
          className={cn(
            "absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br opacity-20 blur-xl",
            colorConfig.glow1,
          )}
        />
        <div
          className={cn(
            "absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-gradient-to-tr opacity-15 blur-2xl",
            colorConfig.glow2,
          )}
        />
      </div>
    </div>
  );
}
