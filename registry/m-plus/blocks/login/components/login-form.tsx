"use client";

import { Button } from "@/registry/m-plus/ui/button";
import { Input } from "@/registry/m-plus/ui/input";
import { useState } from "react";
import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { Checkbox } from "@/registry/m-plus/ui/checkbox";
import { Users } from "lucide-react";
import { CirclePlus } from "lucide-react";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/m-plus/ui/select";
import { Select } from "@/registry/m-plus/ui/select";
import { Separator } from "@/registry/m-plus/ui/separator";

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
    <div className="w-full max-w-3xl bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-cyan-600 p-4 flex justify-center items-center">
        <div className="flex items-center">
          <div className="bg-cyan-500 rounded-full p-2 mr-2 border-2 border-white">
            <Users className="h-7 w-7 text-white" />
          </div>

          <div className="flex items-center justify-center gap-1">
            <h1 className="text-white text-2xl font-semibold">messenger</h1>
            <CirclePlus className="h-5 w-5 text-white " />
          </div>
        </div>
      </div>

      {/* Welcome Text */}
      <div className="text-center p-4 border-b">
        <p className="text-gray-700">
          歡迎使用 M+ 網頁版，您可選擇以{" "}
          <span className="text-[#1289bc] font-bold">M+帳號登入</span> 或
          在M+手機版上
          <span className="text-[#1289bc] font-bold">取得一次性密碼登入</span>
        </p>
      </div>

      {/* Login Forms Container */}
      <div className="flex flex-col md:flex-row justify-between gap-4 p-4 w-full">
        {/* Left Column - Email Login */}

        <div className="flex justify-center w-full">
          <form
            onSubmit={handleEmailLogin}
            className="flex flex-col justify-between space-y-4 lg:h-[280px] w-full"
          >
            <div>
              <h2 className="text-cyan-600 font-bold">M+帳號登入</h2>
              <div className="space-y-2 mt-4">
                <Select defaultValue="email">
                  <SelectTrigger className="w-full ">
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
        <Separator className="hidden md:block h-64" orientation="vertical" />
        <div className="flex justify-center  w-full">
          <form
            onSubmit={handleOtpLogin}
            className="space-y-4 flex flex-col justify-between lg:h-[280px] w-full"
          >
            <div>
              <h2 className="text-green-600 font-bold">一次性密碼登入</h2>
              <Input
                type="text"
                placeholder="請輸入密碼"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="w-full text-center mt-4"
              />
            </div>

            <div className="space-y-2">
              <Link
                href="#"
                className="text-sm text-gray-600 hover:underline flex items-center"
              >
                一次性密碼是什麼
                <HelpCircle className="h-4 w-4 ml-1 bg-gray-500 text-white rounded-full" />
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
