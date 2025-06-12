import { Search, Edit, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  FlagIcon,
  Icons,
  PinIcon,
} from "@/registry/m-plus/blocks/sidebar/components/icons";

const chatData = [
  {
    id: 1,
    name: "台灣大哥大",
    message: "【台灣大新聞報】台灣大MyCharg...",
    time: "25/06/11",
    avatar: "/placeholder.svg?height=40&width=40",
    hasNotification: false,
    isFlag: true,
    isPinned: true,
  },
  {
    id: 2,
    name: "Possible Cafe 圓...",
    message: "【學府-41】蔡堯力已成功兌換",
    time: "25/06/10",
    avatar: "/placeholder.svg?height=40&width=40",
    hasNotification: false,
    isFlag: true,
    isPinned: true,
  },
  {
    id: 3,
    name: "Games 小遊戲(Ga...",
    message: "您好，我是Games，我無法回應您...",
    time: "25/05/12",
    avatar: "/placeholder.svg?height=40&width=40",
    hasNotification: false,
    isFlag: true,
    isPinned: true,
  },
  {
    id: 4,
    name: "Jack Chuang 莊...(8)",
    message: "報告~",
    time: "14:19",
    avatar: "/placeholder.svg?height=40&width=40",
    hasNotification: true,
    notificationCount: 4,
  },
  {
    id: 5,
    name: "Kent Daniel 李...(6)",
    message: "好的 感謝",
    time: "14:15",
    avatar: "/placeholder.svg?height=40&width=40",
    hasNotification: false,
  },
  {
    id: 6,
    name: "Anita Chien 簡...",
    message: "原來如此",
    time: "14:14",
    avatar: "/placeholder.svg?height=40&width=40",
    hasNotification: false,
    isFlag: true,
  },
  {
    id: 7,
    name: "CoE互動群組(30)",
    message: "@All",
    time: "12:22",
    avatar: "/placeholder.svg?height=40&width=40",
    hasNotification: true,
    isFlag: true,
    notificationCount: 7,
  },
  {
    id: 8,
    name: "Hsieh Archer 謝...",
    message: "😊",
    time: "10:39",
    avatar: "/placeholder.svg?height=40&width=40",
    hasNotification: false,
    isFlag: true,
  },
  {
    id: 9,
    name: "Shawn Yan 顏子...",
    message: "傳送貼圖",
    time: "09:50",
    avatar: "/placeholder.svg?height=40&width=40",
    hasNotification: false,
    isFlag: true,
  },
];

const user = {
  name: "Eric 蔡堯力",
  image: "/placeholder.svg?height=48&width=48",
  time: "25/06/11",
  bio: "there is no substitute for put...",
};

export default function ChatList() {
  return (
    <div className="max-w-sm mx-auto bg-white h-[600px] flex flex-col">
      <Header user={user} />
      <Navigation />
      <SearchBar />
      <div className="divide-y divide-gray-100 overflow-y-auto flex-1">
        {chatData.map((chat) => (
          <ChatItem key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  );
}

type HeaderProps = {
  user: {
    name: string;
    image: string;
    bio: string;
  };
};

function Header({ user }: HeaderProps) {
  return (
    <div className="bg-cyan-600 p-4">
      <div className="flex items-center gap-3">
        <Avatar className="w-12 h-12">
          <AvatarImage src={user.image} alt="Eric" />
          <AvatarFallback className="bg-gray-200">EC</AvatarFallback>
        </Avatar>
        <div className="flex-1 text-white">
          <h2 className="font-semibold text-lg">{user.name}</h2>
          <p className="text-sm text-blue-100 truncate">{user.bio}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-blue-600"
        >
          <Edit className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="bg-gray-100 py-3">
      <div className="flex justify-center gap-10">
        <div className="hover:bg-gray-200 cursor-pointer">
          <Icons.Friend className="w-12 h-12" />
        </div>
        <div className="relative">
          <div className="hover:bg-gray-200 cursor-pointer">
            <Icons.Chat className="w-12 h-12 text-cyan-600" />
          </div>
          <Badge className="absolute top-0 -right-1 bg-red-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
            11
          </Badge>
        </div>
        <div className="hover:bg-gray-200 cursor-pointer">
          <Icons.AddFriend className="w-12 h-12" />
        </div>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="p-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="搜尋"
          className="pl-10 pr-10 bg-white border-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
        >
          <X className="w-4 h-4 text-gray-400" />
        </Button>
      </div>
    </div>
  );
}

type ChatItemProps = {
  chat: {
    id: number;
    name: string;
    message: string;
    time: string;
    avatar: string;
    hasNotification?: boolean;
    notificationCount?: number;
    isFlag?: boolean;
    isPinned?: boolean;
  };
};

function ChatItem({ chat }: ChatItemProps) {
  return (
    <div className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer border-t">
      <div className="relative">
        <Avatar className="w-12 h-12">
          <AvatarImage
            src={chat.avatar || "/placeholder.svg"}
            alt={chat.name}
          />
          <AvatarFallback className="bg-gray-200">
            {chat.name.charAt(0)}
          </AvatarFallback>
        </Avatar>

        {chat.isPinned && (
          <div className="absolute -top-1 -left-1 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
            <PinIcon className="w-6 h-6 text-gray-500" />
          </div>
        )}

        {chat.hasNotification && chat.notificationCount && (
          <Badge className="absolute -bottom-1 -right-1 bg-red-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
            {chat.notificationCount}
          </Badge>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-medium text-gray-900 truncate flex items-center gap-1">
            {chat.isFlag && <FlagIcon className="w-4 h-4 text-gray-500" />}
            {chat.name}
          </h3>
          <span className="text-xs text-gray-500 flex-shrink-0">
            {chat.time}
          </span>
        </div>
        <p className="text-sm text-gray-600 truncate">{chat.message}</p>
      </div>
    </div>
  );
}
