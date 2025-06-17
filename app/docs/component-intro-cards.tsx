"use client";

import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink, Laptop, LucideIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const iconMap: Record<string, LucideIcon> = {
  user: User,
  laptop: Laptop,
};

type Tenant = {
  name: string;
  iconName: keyof typeof iconMap;
  description: string;
  contributor: string;
  href: string;
};

const tenants: Tenant[] = [
  {
    name: "Basic UI",
    iconName: "user",
    description: "提供基礎的 UI 元件，最大化你的開發彈性。",
    contributor: "EricTsai",
    href: "/docs/basic",
  },
  {
    name: "M+ Messenger",
    iconName: "laptop",
    description: "提供企業級的聊天功能的各種UI元件。",
    contributor: "EricTsai",
    href: "/docs/mplus",
  },
];

export function ComponentIntroCards() {
  return (
    <div className="relative mx-auto max-w-4xl px-6">
      <div className="flex flex-col gap-8">
        <Header />
        <PoweredBy />
        <TenantGrid tenants={tenants} />
        <TextHoverEffectBackground />
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-20"
    >
      <h1 className="text-foreground text-center text-5xl font-bold">
        TWM AI 元件庫
      </h1>
    </motion.div>
  );
}

function PoweredBy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mt-8 flex items-center justify-center gap-3"
    >
      <span className="text-muted-foreground">Powered by</span>
      <div className="flex items-center gap-2 rounded-lg border px-3 py-[5px] backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/50">
        <Image
          src="/twm-ball-color.svg"
          alt="台灣大哥大"
          width={20}
          height={20}
        />
        <span className="font-semibold">台灣大哥大</span>
      </div>
    </motion.div>
  );
}

function TextHoverEffectBackground() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="hidden dark:block"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-8 flex flex-col items-center justify-center gap-3 md:flex-row"
      >
        <TextHoverEffect
          text="Front-end COE"
          width="100%"
          height="100px"
          fontSize="text-8xl"
          className="w-full"
        />
      </motion.div>
    </motion.div>
  );
}

function Card({ tenant, index }: { tenant: Tenant; index: number }) {
  const IconComponent = iconMap[tenant.iconName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link href={tenant.href} className="block">
        <div
          className={cn(
            "relative rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300",
            "dark:border-gray-700/50 dark:bg-gray-800/30 dark:hover:border-gray-600 dark:hover:bg-gray-700/40",
          )}
        >
          <div className="absolute top-6 right-6">
            <div
              className={cn(
                "rounded-lg p-2 transition-colors",
                "dark:bg-gray-700/50 dark:group-hover:bg-gray-600/70",
              )}
            >
              <ExternalLink
                className={cn(
                  "h-5 w-5 transition-colors",
                  "dark:text-gray-500 dark:group-hover:text-gray-400",
                )}
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="mb-2 flex items-center text-2xl font-bold">
              <IconComponent className="mr-2 h-6 w-6 flex-shrink-0" />
              <span>{tenant.name}</span>
            </div>
            <p className="">{tenant.description}</p>
          </div>

          <div className="mt-6">
            <div className="mb-1 text-xs">貢獻者</div>
            <div className="font-mono text-sm">{tenant.contributor}</div>
          </div>

          <div
            className={cn(
              "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
              // Dark mode: 原本的藍紫綠漸變
              "dark:bg-gradient-to-r dark:from-blue-500/10 dark:via-purple-500/10 dark:to-green-500/10",
              // Light mode: 暖色調漸變
              "bg-gradient-to-r from-emerald-200/25 via-cyan-200/25 to-blue-200/25",
            )}
          />
        </div>
      </Link>
    </motion.div>
  );
}

function TenantGrid({ tenants }: { tenants: Tenant[] }) {
  return (
    <div className="z-10 grid gap-6 md:grid-cols-2">
      {tenants.map((tenant, index) => (
        <Card key={tenant.name} tenant={tenant} index={index} />
      ))}
    </div>
  );
}

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="text-center"
    >
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <a
          href="https://www.taiwanmobile.com/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:cursor-pointer hover:text-gray-400"
        >
          Taiwan Mobile
        </a>{" "}
        Co., Ltd. All rights reserved.
      </p>
    </motion.div>
  );
}
