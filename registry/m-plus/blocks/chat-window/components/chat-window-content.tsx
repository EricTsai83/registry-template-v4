import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Calendar, Users, X, Paperclip, Video, Smile } from "lucide-react";
import { MplusMeetIcon } from "@/registry/m-plus/blocks/chat-window/components/icons";
import { Textarea } from "@/components/ui/textarea";

const messages = [
  {
    id: 1,
    avatar: "https://i.imgur.com/your-avatar1.png",
    name: "Hsieh Archer 金城武 (Archer 阿秋)",
    time: "2025/06/09 11:41",
    content: (
      <>
        我劃掉的就是不能
        <br />
        訂閱方法用上面網頁登入後訂閱即可
        <br />
        Max高級 標準都可以折抵
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
    time: "2025/06/12 16:00",
    content: (
      <>
        <a
          href="https://meet.mplusapp.com/b/archer-is-the-best"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://meet.mplusapp.com/b/archer-is-the-best
        </a>
        開會囉
      </>
    ),
  },
  {
    id: 6,
    avatar: "https://i.imgur.com/your-avatar1.png",
    name: "Hsieh Archer 金城武 (Archer 阿秋)",
    time: "17:50",
    content: (
      <>
        品牌電商營業登記在學府7F(座位區塊在7F進來的左手邊
        ChiaWen副處辦公室附近)，因配合食藥署上架的需求，明天會至辦公地點拍照
        <br />
        <br />
        品牌電商的同仁大約會在明日上午10點上來拍照(3~5位)，因無法確認明天同仁居家的狀況，我請IST的同仁就現場的狀況協調EST同仁短暫配合
        <br />
        <br />
        明天應該居家居多，辦公室的空位也比較多，再請佈達同仁稍為配合，謝謝
        <br />
        <br />
        *如有問題請再聯繫我或IST 窗口: Stephen Huang 黃承澤(StephenHuang)
      </>
    ),
  },
];

export function ChatWindowContent() {
  return (
    <Card className="flex flex-col h-screen rounded-lg shadow-lg p-0 gap-0">
      {/* Header */}
      <div className="flex items-center bg-sky-600 text-white px-4 py-3 rounded-t-lg">
        <div className="flex-1"></div>
        <h1 className="text-lg font-semibold">敏捷開發技術課(12)</h1>
        <div className="flex-1 flex items-center justify-end gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-sky-700 hover:text-white"
          >
            <Calendar className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-sky-700 hover:text-white"
          >
            <Users className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-sky-700 hover:text-white"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((msg) => {
          // Date separator
          if (msg.type === "date-separator") {
            return (
              <div key={msg.id} className="flex items-center justify-center">
                <Badge
                  variant="secondary"
                  className="bg-gray-200 text-gray-600 px-3 py-1"
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
                <span className="text-sm text-muted-foreground">
                  {msg.content}
                </span>
              </div>
            );
          }

          // Regular message
          return (
            <div key={msg.id} className="flex items-start gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={msg.avatar} alt="avatar" />
                <AvatarFallback className="bg-gray-200 text-gray-600">
                  {msg.name ? msg.name.charAt(0) : "U"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                {msg.name && (
                  <p className="text-sm text-muted-foreground font-medium">
                    {msg.name}
                  </p>
                )}
                <Card className="bg-sky-100 border-sky-200 p-3 max-w-lg shadow-sm">
                  <div className="text-gray-800 text-sm leading-relaxed">
                    {msg.content}
                  </div>
                </Card>
                <p className="text-xs text-muted-foreground">{msg.time}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Separator className="mx-0" />

      <div className="p-3 bg-white rounded-b-lg">
        <div className="flex items-center justify-start gap-6 mb-2">
          <div className="flex  items-center">
            <Button variant="ghost" size="icon" className="text-gray-600">
              <Paperclip className="h-5 w-5" />
            </Button>
            <span className="text-xs text-gray-500 mt-1">傳送檔案</span>
          </div>
          <div className="flex  items-center">
            <Button variant="ghost" size="icon" className="text-gray-600">
              <Video className="h-5 w-5" />
            </Button>
            <span className="text-xs text-gray-500 mt-1">視訊</span>
          </div>
          <div className="flex  items-center">
            <Button variant="ghost" size="icon" className="text-gray-600">
              <Smile className="h-5 w-5" />
            </Button>
            <span className="text-xs text-gray-500 mt-1">酷圖+</span>
          </div>
          <div className="flex  items-center">
            <Button variant="ghost" size="icon" className="text-blue-700">
              <MplusMeetIcon className="h-5 w-5" />
            </Button>
            <span className="text-xs text-gray-500 mt-1">Meet 視訊</span>
          </div>
        </div>

        <div className="relative flex flex-col">
          <Textarea
            className="pr-20 border rounded px-3 py-2 text-sm h-36 overflow-y-auto resize-none focus-visible:ring-0 focus-visible:border-gray-300"
            style={{ minHeight: 40 }}
          />
          <div className="absolute bottom-1 right-2 flex items-center gap-1">
            <span className="text-xs text-gray-400 ml-1">
              輸入文字時可使用shift + enter 換行
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
