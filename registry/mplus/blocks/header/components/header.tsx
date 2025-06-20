"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
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
    <header className="flex h-12 w-full min-w-3xl items-center bg-neutral-800 px-6 text-white">
      {/* Logo 與標題 */}
      <div className="mr-8 flex flex-shrink-0 items-center">
        <Image
          src="/mplus-logo.webp"
          alt="M+ Messenger"
          width={32}
          height={32}
          className="mr-2"
        />
        <span className="text-base font-medium whitespace-nowrap">
          M+ Messenger
        </span>
      </div>
      {/* 功能按鈕區 */}
      <div className="flex flex-1 items-center gap-2 overflow-x-auto">
        <Button
          variant="ghost"
          className="flex-shrink-0 cursor-pointer text-white hover:bg-transparent hover:text-white hover:underline hover:underline-offset-2"
        >
          開始聊天
        </Button>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="flex flex-shrink-0 cursor-pointer items-center gap-1 text-white hover:bg-transparent hover:text-white hover:underline hover:underline-offset-4"
            >
              設定
              <ChevronDown className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-4">
            <div className="grid gap-3">
              <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() => handleSettingChange("notification")}
              >
                <span>關閉通知</span>
                <Checkbox checked={settings.notification} />
              </div>
              <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() => handleSettingChange("notificationSound")}
              >
                <span>關閉通知音效</span>
                <Checkbox checked={settings.notificationSound} />
              </div>
              <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() => handleSettingChange("mentionNotification")}
              >
                <span>關閉標註通知</span>
                <Checkbox checked={settings.mentionNotification} />
              </div>
              <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() => handleSettingChange("mentionSound")}
              >
                <span>關閉標註音效</span>
                <Checkbox checked={settings.mentionSound} />
              </div>
              <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() => handleSettingChange("stickerPreview")}
              >
                <span>關閉圖貼預覽</span>
                <Checkbox checked={settings.stickerPreview} />
              </div>
              <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() => handleSettingChange("stickerSound")}
              >
                <span>關閉圖貼音效</span>
                <Checkbox checked={settings.stickerSound} />
              </div>
              <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() => handleSettingChange("uploadPreview")}
              >
                <span>關閉上傳預覽</span>
                <Checkbox checked={settings.uploadPreview} />
              </div>
              <div
                className="flex cursor-pointer items-center justify-between"
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
          className="flex-shrink-0 cursor-pointer text-white hover:bg-transparent hover:text-white hover:underline hover:underline-offset-4"
        >
          意見反映
        </Button>
        <Button
          variant="ghost"
          className="flex-shrink-0 cursor-pointer text-white hover:bg-transparent hover:text-white hover:underline hover:underline-offset-4"
        >
          常見問題Q&A
        </Button>
        <Button
          variant="ghost"
          className="flex-shrink-0 cursor-pointer text-white hover:bg-transparent hover:text-white hover:underline hover:underline-offset-4"
        >
          登出
        </Button>
      </div>
    </header>
  );
}
