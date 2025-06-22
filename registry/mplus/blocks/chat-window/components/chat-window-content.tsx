import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { MplusMeetIcon } from "@/registry/mplus/blocks/chat-window/components/icons";
import { Calendar, Paperclip, Smile, Users, Video, X } from "lucide-react";

const messages = [
  {
    id: 1,
    avatar: "https://i.imgur.com/your-avatar1.png",
    name: "Hsieh Archer 金城武 (Archer 阿秋)",
    time: "2025/06/09 11:41",
    isSelf: false,
    content: (
      <>
        台灣大哥大基金會以「用科技擁抱愛」為核心，培育AI人才、賦能地方創生，並推動綠能倡議與藍碳計畫。
        <br />
        亦為生物多樣性做出貢獻，整合可運用之企業資源發揮最大效益。
      </>
    ),
  },
  {
    id: 2,
    type: "date-separator",
    content: "星期三 2025/06/11",
  },
  {
    id: 3,
    type: "info",
    content: "yuyanhong 離開此聊天室",
  },
  {
    id: 4,
    type: "date-separator",
    content: "星期四 2025/06/12",
  },
  {
    id: 5,
    avatar: "https://i.imgur.com/your-avatar1.png",
    name: "Hsieh Archer 金城武 (Archer 阿秋)",
    time: "16:00",
    isSelf: false,
    content: (
      <>
        <a
          href="https://meet.mplusapp.com/b/archer-is-the-best"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://meet.mplusapp.com/b/archer-is-the-best
        </a>{" "}
        開會囉
      </>
    ),
  },
  {
    id: 6,
    avatar: "https://i.imgur.com/your-avatar2.png",
    name: "我自己",
    time: "17:45",
    isSelf: true,
    content: "好的，我現在要進去會議室了！",
  },
  {
    id: 7,
    avatar: "https://i.imgur.com/your-avatar1.png",
    name: "Hsieh Archer 金城武 (Archer 阿秋)",
    time: "17:50",
    isSelf: false,
    content: (
      <>
        台灣大哥大參與數位發展部「數位青年 T
        大使推動計畫」，也投入豐沛資源推行「科技大神培育計畫」、「攻城精英就業保證班」進行跨域人才招募
        <br />
        <br />
        提供專業培訓和具競爭力薪酬福利，以全球IT人才首選雇主企業為目標，打造幸福職場，培育新世代「高學力」科技人才，提升台灣大企業競爭力。
      </>
    ),
  },
  {
    id: 8,
    avatar: "https://i.imgur.com/your-avatar2.png",
    name: "我自己",
    time: "17:52",
    isSelf: true,
    content: "這個計畫聽起來很棒！有機會想要了解更多細節。",
  },
];

export function ChatWindowContent() {
  return (
    <Card className="flex h-[80vh] flex-col gap-0 rounded-lg p-0 shadow-lg">
      {/* Header */}
      <div className="flex items-center rounded-t-lg bg-cyan-600 px-4 py-3 text-white">
        <div className="flex-1"></div>
        <h1 className="text-lg font-semibold">敏捷開發技術課(12)</h1>
        <div className="flex flex-1 items-center justify-end gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-cyan-500/50 hover:text-white"
          >
            <Calendar className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-cyan-500/50 hover:text-white"
          >
            <Users className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-cyan-500/50 hover:text-white"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-4">
        {messages.map((msg) => {
          // Date separator
          if (msg.type === "date-separator") {
            return (
              <div key={msg.id} className="flex items-center justify-center">
                <Badge
                  variant="secondary"
                  className="bg-gray-200 px-3 py-1 text-gray-600"
                >
                  {msg.content}
                </Badge>
              </div>
            );
          }

          // Info message (user left)
          if (msg.type === "info") {
            return (
              <div key={msg.id} className="text-center">
                <span className="text-muted-foreground text-sm">
                  {msg.content}
                </span>
              </div>
            );
          }

          // Regular message
          const isOwnMessage = msg.isSelf;

          return (
            <div
              key={msg.id}
              className={cn(
                "flex items-start gap-3",
                isOwnMessage ? "flex-row-reverse justify-start" : "",
              )}
            >
              {!isOwnMessage && (
                <Avatar className="h-10 w-10">
                  <AvatarImage src={msg.avatar} alt="avatar" />
                  <AvatarFallback className="bg-gray-200 text-gray-600">
                    {msg.name ? msg.name.charAt(0) : "U"}
                  </AvatarFallback>
                </Avatar>
              )}

              <div
                className={cn("flex max-w-5/6 flex-col space-y-1", {
                  "items-start": isOwnMessage,
                })}
              >
                {msg.name && !isOwnMessage && (
                  <p className="text-muted-foreground text-sm font-medium">
                    {msg.name}
                  </p>
                )}
                <Card
                  className={cn(
                    "p-3 shadow-sm",
                    isOwnMessage
                      ? "border-orange-200 bg-orange-100"
                      : "border-sky-200 bg-sky-100",
                  )}
                >
                  <div
                    className={cn(
                      "text-left text-sm leading-relaxed",
                      isOwnMessage ? "text-orange-800" : "text-gray-800",
                    )}
                  >
                    {msg.content}
                  </div>
                </Card>
                <p
                  className={cn(
                    "text-muted-foreground text-xs",
                    isOwnMessage ? "text-left" : "text-right",
                  )}
                >
                  {msg.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <Separator className="mx-0" />

      <div className="rounded-b-lg bg-white p-3">
        <div className="mb-2 flex items-center justify-start gap-6">
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="text-xs text-gray-500 hover:cursor-pointer"
            >
              <Paperclip className="h-5 w-5" />
              傳送檔案
            </Button>
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="text-xs text-gray-500 hover:cursor-pointer"
            >
              <Video className="h-5 w-5" />
              視訊
            </Button>
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="text-xs text-gray-500 hover:cursor-pointer"
            >
              <Smile className="h-5 w-5" />
              酷圖+
            </Button>
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="text-xs text-gray-500 hover:cursor-pointer"
            >
              <MplusMeetIcon className="h-5 w-5 text-blue-700" />
              Meet 視訊
            </Button>
          </div>
        </div>

        <div className="relative flex flex-col">
          <Textarea
            className="h-36 resize-none overflow-y-auto rounded border px-3 py-2 pr-20 text-sm focus-visible:border-gray-300 focus-visible:ring-0"
            style={{ minHeight: 40 }}
          />
          <div className="absolute right-2 bottom-1 flex items-center gap-1">
            <span className="ml-1 text-xs text-gray-400">
              輸入文字時可使用shift + enter 換行
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
