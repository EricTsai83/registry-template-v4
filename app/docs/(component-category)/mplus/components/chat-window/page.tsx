import { ContentHeader } from "@/components/content-header";
import { RegistryBlock } from "@/components/registry-block";
import { ChatWindowContent } from "@/registry/mplus/blocks/chat-window/components/chat-window-content";

export default function ChatWindowPage() {
  return (
    <div className="flex flex-col gap-4 py-6">
      {/* content header */}
      <ContentHeader>聊天視窗</ContentHeader>
      {/* content */}
      <div className="container mx-auto px-8">
        <RegistryBlock author="作者: EricTsai" blockName="chat-window">
          <div className="w-full max-w-3xl">
            <ChatWindowContent />
          </div>
        </RegistryBlock>
      </div>
    </div>
  );
}
