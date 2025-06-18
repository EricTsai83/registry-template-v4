import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FlagIcon,
  Icons,
  PinIcon,
} from "@/registry/mplus/blocks/sidebar/components/icons";
import { Edit, Search, X } from "lucide-react";

const chatData = [
  {
    id: 1,
    name: "台灣大哥大",
    message: "【台灣大新聞報】台灣大MyCharg...",
    time: "25/06/11",
    avatar: "/head2.webp",
    hasNotification: false,
    isFlag: true,
    isPinned: true,
  },
  {
    id: 2,
    name: "Possible Cafe 圓...",
    message: "【學府-41】蔡堯力已成功兌換",
    time: "25/06/10",
    avatar: "/head2.webp",
    hasNotification: false,
    isFlag: true,
    isPinned: true,
  },
  {
    id: 3,
    name: "Games 小遊戲(Ga...",
    message: "您好，我是Games，我無法回應您...",
    time: "25/05/12",
    avatar: "/head2.webp",
    hasNotification: false,
    isFlag: true,
    isPinned: true,
  },
  {
    id: 4,
    name: "Jack Chuang 莊...(8)",
    message: "報告~",
    time: "14:19",
    avatar: "/head2.webp",
    hasNotification: true,
    notificationCount: 4,
  },
  {
    id: 5,
    name: "Kent Daniel 李...(6)",
    message: "好的 感謝",
    time: "14:15",
    avatar: "/head2.webp",
    hasNotification: false,
  },
  {
    id: 6,
    name: "Anita Chien 簡...",
    message: "原來如此",
    time: "14:14",
    avatar: "/head2.webp",
    hasNotification: false,
    isFlag: true,
  },
  {
    id: 7,
    name: "CoE互動群組(30)",
    message: "@All",
    time: "12:22",
    avatar: "/head2.webp",
    hasNotification: true,
    isFlag: true,
    notificationCount: 7,
  },
  {
    id: 8,
    name: "Hsieh Archer 謝...",
    message: "😊",
    time: "10:39",
    avatar: "/head2.webp",
    hasNotification: false,
    isFlag: true,
  },
  {
    id: 9,
    name: "Shawn Yan 顏子...",
    message: "傳送貼圖",
    time: "09:50",
    avatar: "/head2.webp",
    hasNotification: false,
    isFlag: true,
  },
];

const user = {
  name: "Eric 蔡堯力",
  image: "/head.webp",
  time: "25/06/11",
  bio: "there is no substitute for put...",
};

export default function ChatList() {
  return (
    <div className="mx-auto flex h-[600px] max-w-sm flex-col bg-white">
      <Header user={user} />
      <Navigation />
      <SearchBar />
      <div className="flex-1 divide-y divide-gray-100 overflow-y-auto">
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
        <Avatar className="h-12 w-12">
          <AvatarImage src={user.image} alt="Eric" />
          <AvatarFallback className="bg-gray-200">EC</AvatarFallback>
        </Avatar>
        <div className="flex-1 text-white">
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="truncate text-sm text-blue-100">{user.bio}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-blue-600"
        >
          <Edit className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="bg-gray-100 py-3">
      <div className="flex justify-center gap-10">
        <div className="cursor-pointer hover:bg-gray-200">
          <Icons.Friend className="h-12 w-12" />
        </div>
        <div className="relative">
          <div className="cursor-pointer hover:bg-gray-200">
            <Icons.Chat className="h-12 w-12 text-cyan-600" />
          </div>
          <Badge className="absolute top-0 -right-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 text-xs text-white">
            11
          </Badge>
        </div>
        <div className="cursor-pointer hover:bg-gray-200">
          <Icons.AddFriend className="h-12 w-12" />
        </div>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="p-4">
      <div className="relative">
        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
        <Input
          placeholder="搜尋"
          className="border-0 bg-white pr-10 pl-10 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-1/2 right-1 h-8 w-8 -translate-y-1/2 transform"
        >
          <X className="h-4 w-4 text-gray-400" />
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
    <div className="flex cursor-pointer items-center gap-3 border-t p-4 hover:bg-gray-50">
      <div className="relative">
        <Avatar className="h-12 w-12">
          <AvatarImage
            src={chat.avatar || "/placeholder.svg"}
            alt={chat.name}
          />
          <AvatarFallback className="bg-gray-200">
            {chat.name.charAt(0)}
          </AvatarFallback>
        </Avatar>

        {chat.isPinned && (
          <div className="absolute -top-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100">
            <PinIcon className="h-6 w-6 text-gray-500" />
          </div>
        )}

        {chat.hasNotification && chat.notificationCount && (
          <Badge className="absolute -right-1 -bottom-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {chat.notificationCount}
          </Badge>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="flex items-center gap-1 truncate font-medium text-gray-900">
            {chat.isFlag && <FlagIcon className="h-4 w-4 text-gray-500" />}
            {chat.name}
          </h3>
          <span className="flex-shrink-0 text-xs text-gray-500">
            {chat.time}
          </span>
        </div>
        <p className="truncate text-sm text-gray-600">{chat.message}</p>
      </div>
    </div>
  );
}
