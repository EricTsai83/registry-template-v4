"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CirclePlus, HelpCircle, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email login with:", { email, password, rememberMe });
    // Add your authentication logic here
  };

  const handleOtpLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("OTP login with:", { verificationCode });
    // Add your OTP verification logic here
  };

  return (
    <div className="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-md">
      {/* Header */}
      <div className="flex items-center justify-center bg-cyan-600 p-4">
        <div className="flex items-center">
          <div className="mr-2 rounded-full border-2 border-white bg-cyan-500 p-2">
            <Users className="h-7 w-7 text-white" />
          </div>

          <div className="flex items-center justify-center gap-1">
            <h1 className="text-2xl font-semibold text-white">messenger</h1>
            <CirclePlus className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>

      {/* Welcome Text */}
      <div className="border-b p-4 text-center">
        <p className="text-gray-700">
          歡迎使用 M+ 網頁版，您可選擇以{" "}
          <span className="font-bold text-[#1289bc]">M+帳號登入</span> 或
          在M+手機版上
          <span className="font-bold text-[#1289bc]">取得一次性密碼登入</span>
        </p>
      </div>

      {/* Login Forms Container */}
      <div className="flex w-full flex-col justify-between gap-4 p-4 md:flex-row">
        {/* Left Column - Email Login */}

        <div className="flex w-full justify-center">
          <form
            onSubmit={handleEmailLogin}
            className="flex w-full flex-col justify-between space-y-4 lg:h-[280px]"
          >
            <div>
              <h2 className="font-bold text-cyan-600">M+帳號登入</h2>
              <div className="mt-4 space-y-2">
                <Select defaultValue="email">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="請選擇" className="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">電子郵件</SelectItem>
                    <SelectItem value="phone">手機號碼</SelectItem>
                    <SelectItem value="mplusid">M+ ID</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="email"
                  placeholder="請輸入電子郵件"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-center"
                />
                <Input
                  type="password"
                  placeholder="請輸入密碼"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-center"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked: boolean) => setRememberMe(checked)}
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  記住我
                </label>
                <div className="flex-1 text-right">
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:underline"
                  >
                    第一次登入
                  </Link>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-700"
              >
                M+帳號密碼登入
              </Button>
            </div>
          </form>
        </div>

        <Separator className="md:hidden" />
        <Separator className="hidden h-64 md:block" orientation="vertical" />
        <div className="flex w-full justify-center">
          <form
            onSubmit={handleOtpLogin}
            className="flex w-full flex-col justify-between space-y-4 lg:h-[280px]"
          >
            <div>
              <h2 className="font-bold text-green-600">一次性密碼登入</h2>
              <Input
                type="text"
                placeholder="請輸入密碼"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="mt-4 w-full text-center"
              />
            </div>

            <div className="space-y-2">
              <Link
                href="#"
                className="flex items-center text-sm text-gray-600 hover:underline"
              >
                一次性密碼是什麼
                <HelpCircle className="ml-1 h-4 w-4 rounded-full bg-gray-500 text-white" />
              </Link>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700"
              >
                一次性密碼登入
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
