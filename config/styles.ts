// 支援的組件風格類型
export const COMPONENT_STYLES = ["mplus", "basic"] as const;
export type ComponentStyle = (typeof COMPONENT_STYLES)[number];

// 風格配置介面
export interface StyleConfig {
  name: ComponentStyle;
  label: string;
  description?: string;
  defaultPath?: string;
  iconName?: "user" | "laptop";
  contributor?: string;
}

// 統一的風格配置
export const styleConfigs: Record<ComponentStyle, StyleConfig> = {
  basic: {
    name: "basic",
    label: "Basic UI",
    description: "提供基礎的 UI 元件，最大化你的開發彈性。",
    defaultPath: "/docs/basic",
    iconName: "user",
    contributor: "EricTsai",
  },
  mplus: {
    name: "mplus",
    label: "M+ Messenger",
    description: "提供企業級的聊天功能的各種UI元件。",
    defaultPath: "/docs/mplus",
    iconName: "laptop",
    contributor: "EricTsai",
  },
};

// 風格工具函數
export const styleUtils = {
  // 從路徑中提取風格類型
  getStyleFromPath: (pathname: string): ComponentStyle | null => {
    for (const styleType of COMPONENT_STYLES) {
      if (pathname.startsWith(`/docs/${styleType}`)) {
        return styleType;
      }
    }
    return null;
  },

  // 生成風格特定的路徑
  getStylePath: (style: ComponentStyle, subPath: string): string => {
    return `/docs/${style}/${subPath}`;
  },

  // 獲取預設風格
  getDefaultStyle: (): ComponentStyle => "basic",

  // 驗證風格類型
  isValidStyle: (style: string): style is ComponentStyle => {
    return COMPONENT_STYLES.includes(style as ComponentStyle);
  },

  // 獲取所有風格配置
  getAllStyles: (): StyleConfig[] => {
    return Object.values(styleConfigs);
  },

  // 根據風格獲取配置
  getStyleConfig: (style: ComponentStyle): StyleConfig => {
    return styleConfigs[style];
  },
};

// 導航項目配置
export const NAV_ITEMS = [
  { label: "元件風格", href: "/docs", isStatic: true },
  { label: "元件", href: "components", isStatic: false },
  { label: "區塊", href: "blocks", isStatic: false },
  { label: "頁面", href: "pages", isStatic: false },
  { label: "主題", href: "themes", isStatic: false },
] as const;

// 導出類型
export type NavItem = (typeof NAV_ITEMS)[number];
