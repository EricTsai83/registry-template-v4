import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://magical-possible-pangolin.ngrok-free.app";

/**
 * Format number to show in k format (e.g., 1557 => 1.6k)
 */
export function formatCompactNumber(num: number): string {
  if (num < 1000) {
    return num.toString();
  }
  return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
}

export function isDeepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;

  if (typeof a !== typeof b) return false;

  if (a === null || b === null) return a === b;

  if (typeof a === "object" && typeof b === "object") {
    // Array 判斷
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (!isDeepEqual(a[i], b[i])) return false;
      }
      return true;
    }
    // 一個是 array 一個不是
    if (Array.isArray(a) !== Array.isArray(b)) return false;

    // Object 判斷
    const aKeys = Object.keys(a as object);
    const bKeys = Object.keys(b as object);
    if (aKeys.length !== bKeys.length) return false;
    for (const key of aKeys) {
      if (!bKeys.includes(key)) return false;
      // @ts-ignore
      if (!isDeepEqual((a as any)[key], (b as any)[key])) return false;
    }
    return true;
  }

  // 其他型別（function, symbol, undefined, etc.）
  return false;
}
