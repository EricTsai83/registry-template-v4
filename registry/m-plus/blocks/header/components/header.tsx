"use client";

import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [settings, setSettings] = useState({
    notification: false,
    notificationSound: false,
    mentionNotification: false,
    mentionSound: false,
    stickerPreview: false,
    stickerSound: false,
    uploadPreview: false,
    originalImage: false,
  });

  const handleSettingChange = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <header className="w-full bg-neutral-800 text-white flex items-center px-6 h-12">
      {/* Logo 與標題 */}
      <div className="flex items-center mr-8">
        <Image
          src="/mplus-logo.webp" // 請將 logo 圖片放在 public 資料夾下
          alt="M+ Messenger"
          width={32}
          height={32}
          className="mr-2"
        />
        <span className="font-medium text-base text-nowrap">M+ Messenger</span>
      </div>
      {/* 功能按鈕區 */}
      <div className="flex-1 flex items-center gap-4">
        <Button
          variant="ghost"
          className="text-white hover:bg-transparent hover:underline hover:underline-offset-2 hover:text-white cursor-pointer"
        >
          開始聊天
        </Button>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="text-white hover:bg-transparent hover:underline hover:underline-offset-4 hover:text-white flex items-center gap-1 cursor-pointer"
            >
              設定
              <ChevronDown className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-4">
            <div className="grid gap-3">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleSettingChange("notification")}
              >
                <span>關閉通知</span>
                <Checkbox checked={settings.notification} />
              </div>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleSettingChange("notificationSound")}
              >
                <span>關閉通知音效</span>
                <Checkbox checked={settings.notificationSound} />
              </div>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleSettingChange("mentionNotification")}
              >
                <span>關閉標註通知</span>
                <Checkbox checked={settings.mentionNotification} />
              </div>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleSettingChange("mentionSound")}
              >
                <span>關閉標註音效</span>
                <Checkbox checked={settings.mentionSound} />
              </div>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleSettingChange("stickerPreview")}
              >
                <span>關閉圖貼預覽</span>
                <Checkbox checked={settings.stickerPreview} />
              </div>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleSettingChange("stickerSound")}
              >
                <span>關閉圖貼音效</span>
                <Checkbox checked={settings.stickerSound} />
              </div>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleSettingChange("uploadPreview")}
              >
                <span>關閉上傳預覽</span>
                <Checkbox checked={settings.uploadPreview} />
              </div>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleSettingChange("originalImage")}
              >
                <span>關閉原始圖片</span>
                <Checkbox checked={settings.originalImage} />
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Button
          variant="ghost"
          className="text-white hover:bg-transparent hover:underline hover:underline-offset-4 hover:text-white cursor-pointer"
        >
          意見反映
        </Button>
        <Button
          variant="ghost"
          className="text-white hover:bg-transparent hover:underline hover:underline-offset-4 hover:text-white cursor-pointer"
        >
          常見問題Q&A
        </Button>
        <Button
          variant="ghost"
          className="text-white hover:bg-transparent hover:underline hover:underline-offset-4 hover:text-white cursor-pointer"
        >
          登出
        </Button>
      </div>
    </header>
  );
}
